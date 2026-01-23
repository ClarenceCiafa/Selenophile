import { NextResponse } from "next/server";

export interface MoonNewsItem {
  headline: string;
  summary: string;
  source: string;
  url: string;
  pubDate: string;
}

// RSS Feed URLs with rss2json.com (free, no API key needed)
const RSS_FEEDS = [
  {
    url: "https://blogs.nasa.gov/artemis/feed/",
    source: "NASA Artemis Blog",
  },
  {
    url: "https://www.nasa.gov/rss/dyn/breaking_news.rss",
    source: "NASA Breaking News",
  },
  {
    url: "https://www.space.com/feeds/all",
    source: "Space.com",
  },
];

// Keywords to filter moon-related news
const MOON_KEYWORDS = [
  "moon",
  "lunar",
  "artemis",
  "luna",
  "apollo",
  "crater",
  "eclips",
  "astronaut",
  "gateway",
  "orion",
];

async function fetchRSSFeed(
  feedUrl: string,
  sourceName: string
): Promise<MoonNewsItem[]> {
  const RSS2JSON_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

  try {
    const response = await fetch(RSS2JSON_URL, {
      next: { revalidate: 14400 }, // Cache for 4 hours
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${sourceName}: ${response.status}`);
      return [];
    }

    const data = await response.json();

    if (data.status !== "ok" || !data.items) {
      console.error(`RSS parse error for ${sourceName}`);
      return [];
    }

    // Map items to our interface
    const mappedItems: MoonNewsItem[] = data.items
      .slice(0, 10)
      .map((item: { title?: string; description?: string; link?: string; pubDate?: string }) => {
        // Clean HTML from description
        const summaryHtml = item.description || "";
        let summary = summaryHtml.replace(/<[^>]*>?/gm, "");

        // Get first sentence or max 180 chars
        const firstSentence = summary.split(". ")[0];
        if (firstSentence.length < 180) {
          summary = firstSentence + ".";
        } else {
          summary = summary.substring(0, 180) + "...";
        }

        return {
          headline: item.title || "Notizia Spaziale",
          summary: summary.trim(),
          source: sourceName,
          url: item.link || "#",
          pubDate: item.pubDate || new Date().toISOString(),
        };
      });

    return mappedItems;
  } catch (error) {
    console.error(`Error fetching ${sourceName}:`, error);
    return [];
  }
}

export async function GET() {
  try {
    // Fetch all feeds in parallel
    const allNewsPromises = RSS_FEEDS.map((feed) =>
      fetchRSSFeed(feed.url, feed.source)
    );

    const allNewsArrays = await Promise.all(allNewsPromises);
    let allNews = allNewsArrays.flat();

    // Filter for moon-related content (case insensitive)
    const moonNews = allNews.filter((item) => {
      const contentLower = `${item.headline} ${item.summary}`.toLowerCase();
      return MOON_KEYWORDS.some((keyword) => contentLower.includes(keyword));
    });

    // Use moon-filtered news if available, otherwise use all space news
    const newsToUse = moonNews.length >= 3 ? moonNews : allNews;

    // Sort by date (newest first)
    newsToUse.sort(
      (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );

    // Return top 8 news items
    const topNews = newsToUse.slice(0, 8);

    // If no news found, return fallback
    if (topNews.length === 0) {
      return NextResponse.json({
        news: getFallbackNews(),
        source: "fallback",
        lastUpdated: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      news: topNews,
      source: "live",
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json({
      news: getFallbackNews(),
      source: "fallback",
      error: "Failed to fetch live news",
      lastUpdated: new Date().toISOString(),
    });
  }
}

function getFallbackNews(): MoonNewsItem[] {
  const today = new Date();
  const yesterday = new Date(Date.now() - 86400000);
  const twoDaysAgo = new Date(Date.now() - 172800000);

  return [
    {
      headline: "Errore di Connessione al Feed",
      summary:
        "Impossibile recuperare le notizie in tempo reale. Vengono mostrati dati di fallback.",
      source: "Sistema",
      url: "#",
      pubDate: today.toISOString(),
    },
    {
      headline: "La NASA si prepara per il prossimo lancio di Artemis",
      summary:
        "I preparativi continuano per la prossima fase del programma che riportera l'umanita sulla Luna.",
      source: "NASA",
      url: "https://www.nasa.gov/specials/artemis/",
      pubDate: yesterday.toISOString(),
    },
    {
      headline: "Nuovi strumenti scientifici selezionati per la superficie lunare",
      summary:
        "L'agenzia ha annunciato una nuova serie di esperimenti che verranno inviati sulla Luna con i futuri lander commerciali.",
      source: "Science News",
      url: "https://science.nasa.gov/moon/",
      pubDate: twoDaysAgo.toISOString(),
    },
  ];
}
