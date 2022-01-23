export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h1 className="my-2 text-3xl font-extrabold text-yellow-600 sm:text-4xl lg:text-5xl">
        Impressum
      </h1>
      <h2 className="text-lg leading-6 font-semibold text-gray-800 uppercase tracking-wider mt-4">
        Angaben gemäß § 5 TMG
      </h2>
      <p>
        Max Mustermann <br />
        Hauptstraße 1 <br />
        12345 Berlin
      </p>
      <h2 className="text-lg leading-6 font-semibold text-gray-800 uppercase tracking-wider mt-4">
        Kontakt
      </h2>
      <p>Telefon: +49 123 456 78 90 E-Mail: info@maxmustermann.de</p>
      <h2>Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RSTV</h2>
      <p>Max Mustermann, Hauptstraße 1, 12345 Berlin</p>
    </div>
  );
}
