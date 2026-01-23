// Static data to replace Gemini API - No paid API needed!

export interface MoonNewsItem {
  headline: string;
  summary: string;
  source: string;
  url: string;
}

// 50+ Moon curiosities in Italian - rotates randomly
export const moonCuriosities: string[] = [
  "La Luna si allontana dalla Terra di circa 3,8 cm ogni anno a causa delle forze mareali.",
  "Le impronte degli astronauti sulla Luna possono durare milioni di anni, poiché non c'è vento né acqua che le eroda.",
  "La Luna ha un odore! Gli astronauti dell'Apollo descrissero la polvere lunare come simile a polvere da sparo bruciata.",
  "Un giorno sulla Luna (da alba ad alba) dura circa 29,5 giorni terrestri.",
  "La Luna è l'unico corpo celeste oltre la Terra dove l'uomo ha camminato.",
  "La temperatura sulla Luna varia da -173°C di notte a +127°C di giorno.",
  "La gravità lunare è circa 1/6 di quella terrestre: un salto di 1 metro sulla Terra equivarrebbe a 6 metri sulla Luna.",
  "La Luna non ha atmosfera, quindi il cielo appare sempre nero, anche di giorno.",
  "Il lato nascosto della Luna non è mai completamente buio: riceve la stessa quantità di luce solare del lato visibile.",
  "La Luna influenza le maree terrestri, ma anche la Terra 'tira' la Luna, rallentandone la rotazione.",
  "Senza la Luna, l'asse terrestre oscillerebbe caoticamente, rendendo impossibile la vita come la conosciamo.",
  "La Luna stabilizza l'inclinazione dell'asse terrestre a circa 23,5 gradi, permettendo le stagioni.",
  "I crateri lunari prendono il nome da scienziati, filosofi e esploratori famosi.",
  "Il Mare della Tranquillità, dove atterrò l'Apollo 11, non contiene acqua: è una pianura di basalto.",
  "La polvere lunare (regolite) è estremamente abrasiva e danneggiò le tute spaziali degli astronauti.",
  "Sulla Luna sono stati lasciati circa 96 sacchi di rifiuti umani dalle missioni Apollo.",
  "Il primo oggetto artificiale a raggiungere la Luna fu la sonda sovietica Luna 2 nel 1959.",
  "La bandiera americana piantata sulla Luna è probabilmente sbiancata dalle radiazioni solari.",
  "La Luna ha 'moonquakes' (terremoti lunari) causati dalle forze mareali della Terra.",
  "Il cratere più grande sulla Luna, il bacino Polo Sud-Aitken, è profondo 8 km e largo 2.500 km.",
  "La Luna si è formata circa 4,5 miliardi di anni fa, probabilmente da una collisione tra la Terra e un oggetto delle dimensioni di Marte.",
  "Gli astronauti dell'Apollo hanno portato sulla Terra 382 kg di rocce lunari.",
  "La Luna riflette solo il 12% della luce solare che riceve, eppure illumina le nostre notti.",
  "Il termine 'lunatic' deriva dall'antica credenza che la Luna piena causasse follia.",
  "La Luna ha acqua! Ghiaccio è stato trovato nei crateri permanentemente in ombra ai poli.",
  "Un anno lunare (12 mesi sinodici) dura circa 354 giorni, 11 giorni meno dell'anno solare.",
  "La Luna è in rotazione sincrona: mostra sempre la stessa faccia alla Terra.",
  "Il primo uomo a camminare sulla Luna, Neil Armstrong, aveva solo 20 secondi di carburante rimasto all'atterraggio.",
  "La Luna ha un nucleo di ferro piccolo, solo circa il 2% della sua massa totale.",
  "Le eclissi solari totali esistono solo perché la Luna e il Sole appaiono della stessa dimensione nel cielo terrestre: una coincidenza cosmica!",
  "La Luna è il quinto satellite naturale più grande del Sistema Solare.",
  "Buzz Aldrin celebrò la comunione sulla Luna, il primo rito religioso nello spazio.",
  "La faccia nascosta della Luna ha più crateri perché è meno protetta dalla Terra.",
  "La Luna piena è 6 volte più luminosa di una Luna a metà fase, non il doppio.",
  "I lupi non ululano alla Luna: è un mito. Ululano per comunicare tra loro.",
  "La sonda cinese Chang'e 4 è stata la prima ad atterrare sul lato nascosto della Luna nel 2019.",
  "La Luna ha montagne più alte del Monte Bianco: il Mons Huygens è alto 5.500 metri.",
  "Durante l'Apollo 13, la Luna fu usata come 'fionda gravitazionale' per riportare l'equipaggio sulla Terra.",
  "La Luna non ha campo magnetico globale, ma alcune rocce conservano magnetismo residuo.",
  "Tre specchi retroriflettori lasciati dalle missioni Apollo permettono di misurare la distanza Terra-Luna con precisione millimetrica.",
  "La Luna piena più vicina alla Terra (superluna) può apparire fino al 14% più grande.",
  "Il mese di febbraio può non avere Luna piena: quando accade, si chiama 'mese nero'.",
  "La parola 'mese' deriva da 'Luna' in molte lingue (month in inglese, Monat in tedesco).",
  "La Luna orbita la Terra a circa 3.683 km/h, completando un'orbita in 27,3 giorni.",
  "L'effetto Yarkovsky fa sì che la Luna si allontani più velocemente di quanto previsto.",
  "Alcune missioni future pianificano di estrarre elio-3 dalla Luna per la fusione nucleare.",
  "La Luna non ha suono: nel vuoto le onde sonore non si propagano.",
  "L'ultima persona a camminare sulla Luna fu Eugene Cernan nel dicembre 1972.",
  "La NASA sta pianificando il programma Artemis per riportare gli umani sulla Luna entro il 2025.",
  "Un pezzo di roccia lunare fu regalato al Papa Paolo VI dopo la missione Apollo 11.",
];

// Curated static news with real links - replaces Gemini's Google Search
export const moonNews: MoonNewsItem[] = [
  {
    headline: "Artemis II: la NASA prepara il ritorno degli astronauti in orbita lunare",
    summary: "La missione Artemis II porterà quattro astronauti attorno alla Luna, il primo volo con equipaggio dal 1972.",
    source: "NASA",
    url: "https://www.nasa.gov/artemis-ii/"
  },
  {
    headline: "Scoperte nuove riserve di ghiaccio nei crateri polari lunari",
    summary: "Dati del Lunar Reconnaissance Orbiter confermano depositi di acqua ghiacciata nei crateri permanentemente in ombra.",
    source: "NASA Science",
    url: "https://science.nasa.gov/moon/"
  },
  {
    headline: "Gateway: la stazione spaziale lunare prende forma",
    summary: "La collaborazione internazionale per costruire la prima stazione orbitale lunare procede con i moduli in fase di assemblaggio.",
    source: "ESA",
    url: "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/Gateway"
  },
  {
    headline: "Chang'e 6 riporta campioni dal lato nascosto della Luna",
    summary: "La missione cinese ha completato con successo il primo prelievo di rocce dalla faccia nascosta del nostro satellite.",
    source: "Space.com",
    url: "https://www.space.com/china-chang-e-6-moon-mission"
  },
  {
    headline: "VIPER: il rover cercatore d'acqua sulla Luna",
    summary: "Il rover Volatiles Investigating Polar Exploration Rover della NASA esplorerà il polo sud lunare alla ricerca di risorse.",
    source: "NASA",
    url: "https://www.nasa.gov/viper/"
  },
  {
    headline: "Starship HLS: il lander lunare di SpaceX per Artemis III",
    summary: "SpaceX continua i test di Starship, il veicolo scelto per riportare gli astronauti sulla superficie lunare.",
    source: "SpaceX",
    url: "https://www.spacex.com/vehicles/starship/"
  },
];

// Lunar calculation utilities - pure math, no API needed
export interface MoonData {
  age: number;
  illumination: number;
  phaseName: string;
  distance: number;
}

export interface MoonEvent {
  date: Date;
  type: 'new' | 'first_quarter' | 'full' | 'last_quarter';
  name: string;
}

// Reference New Moon: January 11, 2024 11:57 UTC
const KNOWN_NEW_MOON = new Date('2024-01-11T11:57:00Z');
const SYNODIC_MONTH = 29.53058867;

export function getMoonData(date: Date): MoonData {
  const diffTime = date.getTime() - KNOWN_NEW_MOON.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  
  let currentMoonAge = diffDays % SYNODIC_MONTH;
  if (currentMoonAge < 0) {
    currentMoonAge += SYNODIC_MONTH;
  }

  const phaseRatio = currentMoonAge / SYNODIC_MONTH;
  const illumination = Math.round((1 - Math.cos(phaseRatio * 2 * Math.PI)) / 2 * 100);

  const distanceVariation = Math.cos(phaseRatio * 2 * Math.PI) * 20000;
  const distance = Math.round(384400 + distanceVariation);

  return {
    age: parseFloat(currentMoonAge.toFixed(1)),
    illumination,
    phaseName: getPhaseName(currentMoonAge),
    distance
  };
}

function getPhaseName(age: number): string {
  if (age < 1) return 'Luna Nuova';
  if (age < 7) return 'Luna Crescente';
  if (age < 8) return 'Primo Quarto';
  if (age < 14) return 'Gibbosa Crescente';
  if (age < 16) return 'Luna Piena';
  if (age < 22) return 'Gibbosa Calante';
  if (age < 23) return 'Ultimo Quarto';
  return 'Luna Calante';
}

export function getPhasesForMonth(year: number, month: number): MoonEvent[] {
  const events: MoonEvent[] = [];
  
  const targetDate = new Date(year, month, 1);
  const diffTime = targetDate.getTime() - KNOWN_NEW_MOON.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  
  const lunationNumber = Math.floor(diffDays / SYNODIC_MONTH);

  for (let i = -1; i <= 2; i++) {
    const n = lunationNumber + i;
    
    const newMoonTime = KNOWN_NEW_MOON.getTime() + (n * SYNODIC_MONTH * 24 * 60 * 60 * 1000);
    
    addEventIfInMonth(events, newMoonTime, 'new', 'Luna Nuova', year, month);
    addEventIfInMonth(events, newMoonTime + (SYNODIC_MONTH * 0.25 * 24 * 60 * 60 * 1000), 'first_quarter', 'Primo Quarto', year, month);
    addEventIfInMonth(events, newMoonTime + (SYNODIC_MONTH * 0.5 * 24 * 60 * 60 * 1000), 'full', 'Luna Piena', year, month);
    addEventIfInMonth(events, newMoonTime + (SYNODIC_MONTH * 0.75 * 24 * 60 * 60 * 1000), 'last_quarter', 'Ultimo Quarto', year, month);
  }

  return events.sort((a, b) => a.date.getTime() - b.date.getTime());
}

function addEventIfInMonth(
  list: MoonEvent[], 
  time: number, 
  type: MoonEvent['type'], 
  name: string, 
  year: number, 
  month: number
) {
  const date = new Date(time);
  if (date.getFullYear() === year && date.getMonth() === month) {
    list.push({ date, type, name });
  }
}

// Get a random curiosity
export function getRandomCuriosity(): string {
  const index = Math.floor(Math.random() * moonCuriosities.length);
  return moonCuriosities[index];
}
