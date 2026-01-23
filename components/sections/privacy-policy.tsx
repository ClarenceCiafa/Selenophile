"use client";

import { ArrowLeft } from "lucide-react";

interface PrivacyPolicyProps {
  onNavigate: (id: string) => void;
}

export function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  return (
    <article className="min-h-screen py-24 md:py-32 px-6 bg-[#050505] text-gray-300 font-light leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => onNavigate("home")}
          className="mb-12 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Torna alla Home</span>
        </button>

        <header className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Informativa sulla Privacy
          </h1>
          <p className="mt-4 text-gray-400">Ultimo aggiornamento: Luglio 2024</p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Introduzione
            </h2>
            <p>
              Benvenuti su Selenophile. La tua privacy è importante. Questa
              informativa spiega quali dati vengono trattati, anche se, in
              breve: questo sito è un progetto personale e non raccoglie né
              memorizza attivamente i tuoi dati personali.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Titolare del Trattamento
            </h2>
            <p>
              La titolare del progetto e del trattamento dei dati è Francesca,
              la creatrice di questo sito. Per qualsiasi domanda, è possibile
              mettersi in contatto tramite il link a Instagram presente nel
              footer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Dati Raccolti
            </h2>
            <div className="space-y-4">
              <p>
                <strong>Nessun Dato Personale Diretto:</strong> Questo sito web
                non richiede registrazione, non ha sezioni commenti, non
                utilizza moduli di contatto e non raccoglie direttamente
                informazioni personali identificabili come nome, cognome,
                indirizzo email o indirizzo IP.
              </p>
              <p>
                <strong>Dati di Navigazione Anonimi:</strong> I sistemi
                informatici e le procedure software preposte al funzionamento di
                questo sito web acquisiscono, nel corso del loro normale
                esercizio, alcuni dati la cui trasmissione è implicita
                nell&apos;uso dei protocolli di comunicazione di Internet. Si
                tratta di informazioni che non sono raccolte per essere
                associate a interessati identificati, ma che per loro stessa
                natura potrebbero, attraverso elaborazioni ed associazioni con
                dati detenuti da terzi, permettere di identificare gli utenti
                (es. statistiche anonime sulle visite). Questi dati vengono
                utilizzati al solo fine di ricavare informazioni statistiche
                anonime sull&apos;uso del sito e per controllarne il corretto
                funzionamento.
              </p>
              <p>
                <strong>Servizi di Terze Parti:</strong> Il sito utilizza
                servizi esterni per migliorare l&apos;esperienza utente:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-400">
                <li>
                  <strong>Google Fonts:</strong> Per la visualizzazione dei
                  caratteri tipografici. Google potrebbe raccogliere dati
                  secondo la propria{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    informativa sulla privacy
                  </a>
                  .
                </li>
                <li>
                  <strong>Feed RSS (via proxy):</strong> La sezione &quot;Moon
                  Hub&quot; recupera notizie da un feed RSS della NASA tramite
                  un servizio di conversione pubblico (rss2json). Non abbiamo
                  controllo sulla politica di privacy di tale servizio.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Diritti dell&apos;Interessato
            </h2>
            <p>
              Poiché questo sito non raccoglie né detiene dati personali degli
              utenti, i diritti di accesso, rettifica, cancellazione o
              portabilità dei dati, come previsti dal GDPR, non sono
              direttamente applicabili. Per qualsiasi questione relativa ai dati
              gestiti da servizi di terze parti, si prega di fare riferimento
              alle loro rispettive informative sulla privacy.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
