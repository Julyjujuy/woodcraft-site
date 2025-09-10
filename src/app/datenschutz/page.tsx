export default function DatenschutzPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Datenschutzerklärung</h1>
      <div className="mt-6 space-y-4">
        <p>
          Diese Website verarbeitet personenbezogene Daten nur insoweit,
          wie es zur Bereitstellung der Inhalte und zur Bearbeitung von Anfragen erforderlich ist.
        </p>
        <p>
          <strong>Kontaktformular / E-Mail:</strong> Bei Anfragen werden die
          angegebenen Daten (Name, E-Mail, Nachricht, ggf. Artikelname) zur Bearbeitung gespeichert.
          Eine Weitergabe an Dritte findet nicht statt.
        </p>
        <p>
          <strong>Hosting & Logfiles:</strong> Der Hoster speichert ggf. technisch notwendige Logfiles.
        </p>
        <p className="text-sm text-neutral-600">
          Hinweis: Dies ist ein Platzhaltertext und muss vor Veröffentlichung
          an die tatsächlichen Prozesse angepasst werden.
        </p>
      </div>
    </section>
  );
}
