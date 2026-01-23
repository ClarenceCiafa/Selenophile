"use client";

import { ArrowLeft } from "lucide-react";

interface TermsOfServiceProps {
  onNavigate: (id: string) => void;
}

export function TermsOfService({ onNavigate }: TermsOfServiceProps) {
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
            Termini e Condizioni
          </h1>
          <p className="mt-4 text-gray-400">Ultimo aggiornamento: Luglio 2024</p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Accettazione dei Termini
            </h2>
            <p>
              Accedendo e utilizzando il sito web Selenophile, accetti di essere
              vincolato da questi Termini e Condizioni. Se non sei d&apos;accordo
              con una qualsiasi parte dei termini, non sei autorizzato a
              utilizzare questo sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Scopo del Sito e Disclaimer
            </h2>
            <p className="mb-4 text-lg text-yellow-200/80 border-l-4 border-yellow-500 pl-4">
              <strong>
                Questo sito è un progetto personale, artistico e di
                intrattenimento.
              </strong>
            </p>
            <p>
              I contenuti presentati, inclusi testi, immagini, dati orbitali e
              curiosità, sono forniti &quot;così come sono&quot;. Le
              informazioni, in particolare quelle generate da intelligenza
              artificiale (sezione &quot;Curiosità Stellari&quot;) o aggregate
              da fonti esterne (sezione &quot;Moon Hub&quot;), sono offerte
              esclusivamente a scopo di intrattenimento e non devono essere
              considerate scientificamente accurate, complete o affidabili.
            </p>
            <p className="mt-4">
              <strong>
                Non utilizzare le informazioni di questo sito per scopi
                accademici, di ricerca, di navigazione o per qualsiasi
                applicazione critica.
              </strong>{" "}
              L&apos;autore non si assume alcuna responsabilità per
              l&apos;accuratezza dei dati presentati.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Proprietà Intellettuale
            </h2>
            <p>
              Il design, il logo e i testi originali di questo sito sono di
              proprietà di Francesca. Le immagini utilizzate nella galleria sono
              fotografie personali. Altre immagini potrebbero provenire da fonti
              che ne consentono l&apos;utilizzo gratuito (es. Unsplash). Tutti i
              diritti sono riservati.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Limitazione di Responsabilità
            </h2>
            <p>
              In nessun caso Francesca, in qualità di creatrice, sarà
              responsabile per qualsiasi danno diretto, indiretto, incidentale o
              conseguenziale derivante dall&apos;uso o dall&apos;impossibilità
              di utilizzare le informazioni su questo sito. Navigando su
              Selenophile, accetti di farlo a tuo rischio e pericolo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Link a Siti Esterni
            </h2>
            <p>
              Questo sito può contenere link a siti web di terze parti (ad
              esempio, articoli di notizie della NASA). Questi link sono forniti
              solo per comodità. Non abbiamo alcun controllo sul contenuto, le
              politiche sulla privacy o le pratiche di siti di terze parti e non
              ci assumiamo alcuna responsabilità per essi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4 border-l-[3px] border-blue-500 pl-4">
              Modifiche ai Termini
            </h2>
            <p>
              Ci riserviamo il diritto di modificare questi termini in qualsiasi
              momento. È tua responsabilità controllare periodicamente questa
              pagina per eventuali cambiamenti. L&apos;uso continuato del sito
              dopo la pubblicazione delle modifiche costituirà la tua
              accettazione di tali modifiche.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
