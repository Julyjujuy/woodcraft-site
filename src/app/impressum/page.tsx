export default function ImpressumPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Impressum</h1>
      <div className="mt-6 space-y-4">
        <p><strong>Studio / Betreiber:</strong> Bottega Marchi (Platzhalter)</p>
        <p><strong>Adresse:</strong> Musterstraße 1, 70173 Stuttgart</p>
        <p><strong>E-Mail:</strong> hello@example.com</p>
        <p><strong>Telefon:</strong> +49 000 000000</p>
        <p><strong>USt-IdNr.:</strong> DE123456789 (falls vorhanden)</p>
        <p className="text-sm text-neutral-600">
          Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr.
        </p>
      </div>
    </section>
  );
}
