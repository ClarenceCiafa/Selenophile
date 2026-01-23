"use client";

import { ArrowLeft } from "lucide-react";

interface CookiePolicyProps {
  onNavigate: (id: string) => void;
}

export function CookiePolicy({ onNavigate }: CookiePolicyProps) {
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
            Informativa sui Cookie
          </h1>
          <p className="mt-4 text-gray-400">Ultimo aggiornamento: Luglio 2024</p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Cosa sono i Cookie?
            </h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dagli
              utenti inviano ai loro terminali, dove vengono memorizzati per
              essere poi ritrasmessi agli stessi siti alla successiva visita.
              Questo sito si impegna a ridurre al minimo l&apos;uso di cookie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Cookie Utilizzati da Questo Sito
            </h2>
            <p className="mb-4">
              Selenophile.space è un sito vetrina e un progetto personale. La
              nostra politica è quella di non utilizzare cookie per tracciare
              l&apos;attività degli utenti o per memorizzare informazioni
              personali.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-400">
              <li>
                <strong>Nessun Cookie Tecnico o di Profilazione Proprio:</strong>{" "}
                Non impostiamo direttamente alcun cookie sul tuo browser. Non ci
                sono aree di login, preferenze da salvare o funzionalità che
                richiedano l&apos;uso di cookie tecnici o di profilazione da
                parte nostra.
              </li>
              <li>
                <strong>Cookie di Terze Parti:</strong> Anche se noi non li
                impostiamo, alcuni servizi esterni che utilizziamo potrebbero
                farlo. Attualmente, l&apos;unico servizio rilevante è{" "}
                <strong>Google Fonts</strong>, utilizzato per caricare i font
                del sito. È possibile che Google utilizzi cookie per ottimizzare
                la distribuzione dei font. Per maggiori informazioni, si
                consiglia di consultare la policy di Google.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Come Gestire i Cookie
            </h2>
            <p>
              Puoi gestire le preferenze relative ai cookie direttamente
              all&apos;interno del tuo browser per impedire, ad esempio, che
              terze parti possano installarne. Tramite le preferenze del browser
              è inoltre possibile eliminare i cookie installati in passato. È
              importante notare che disabilitando tutti i cookie, il
              funzionamento di molti siti potrebbe essere compromesso.
            </p>
            <p className="mt-2">
              Puoi trovare informazioni su come gestire i cookie nel tuo browser
              ai seguenti indirizzi:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
