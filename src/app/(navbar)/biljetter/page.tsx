import GameTable from "./_components/gameTable";

export default function Tickets() {
  return (
    <section className="container mx-auto my-16 md:my-20 lg:my-24">
      <h1 className="text-3xl font-bold tracking-tighter">Biljettregler</h1>
      <p className="uppercase py-4 text-black/50">(uppdaterade 2024-08-25)</p>
      <ol className="list-decimal list-inside space-y-2">
        <li>Du/Ni måste vara betalande medlem aktuell säsong och varit medlem föregående säsong.</li>
        <li>
          Ansökan öppnar normalt kl 18:00 öppningsdatumet och stänger 24 timmar senare. Ansökan före denna tid bortser vi ifrån.
        </li>
        <li>Sökande delas in i tre grupper:
          <ol className="list-disc list-inside pl-5">
            <li>Grupp 1 – Medlemmar som betalt medlemsavgiften de senaste 5 säsongerna. Även hedersmedlemmar ingår.</li>
            <li>Grupp 2 – Medlemmar som betalt medlemsavgiften de senaste 2 till 4 säsongerna och bor i Västra Götaland eller Halland.</li>
            <li>Grupp 3 – Medlemmar som betalt medlemsavgiften de senaste 2 till 4 säsongerna och bor på andra platser.</li>
          </ol>
        </li>
        <li>
          Matcherna kategoriseras i A, B och C:
          <ol className="list-disc list-inside pl-5">
            <li>Kategori A – Grupp 1 har förtur första timmen. Därefter Grupp 2 och sedan Grupp 3. Ansökningar efter första timmen placeras efter ansökningsordning.</li>
            <li>Kategori B – Grupp 1 och Grupp 2 har förtur första timmen. Därefter Grupp 3. Ansökningar efter första timmen placeras efter ansökningsordning.</li>
            <li>Kategori C – Alla sökande lottas under första timmen. Ansökningar efter första timmen placeras efter ansökningsordning.</li>
          </ol>
        </li>
        <li>Vinnare av biljetter från lotterier har förtur men måste ansöka som övriga.</li>
        <li>Varje medlem kan normalt tilldelas MAX tre biljetter per säsong. Extra tilldelning kan ges om det är få sökande.</li>
        <li>Biljetter tilldelade före 25 augusti räknas inte in i maxantalet för säsongen 2024/2025.</li>
        <li>Ansökan skickas in via formuläret på denna sidan.</li>
        <li>Man kan söka för 2 betalande medlemmar per ansökan, som båda måste uppfylla ”Biljettregler”.</li>
        <li>Varje medlem får endast finnas med på en ansökan. Vid olika gruppindelningar placeras man i sämsta gruppen.</li>
        <li>
          Ämnesraden i formuläret ska vara: 
          <strong> ”Arsenal – [motståndarlag] – [matchdatum]”</strong>.
        </li>
        <li>I formuläret anges för alla sökande nödvändiga uppgifter.
          <br />
          <ul className="list-disc list-inside space-y-2">
  <li><strong>Namn:</strong> [Ditt namn]</li>
  <li><strong>E-post:</strong> [Din e-postadress]</li>
  <li><strong>Telefonnummer:</strong> [Ditt telefonnummer]</li>
  <li><strong>Medlemsnummer Arsenal Göteborg:</strong> [Ditt medlemsnummer]</li>
  <li><strong>Adress:</strong> [Din adress]</li>
</ul>
<p>När tilldelning av biljetter är klar från Arsenal FC, så meddelas de som fått biljetter,
varpå dessa skall betala inom 2 dagar på Swish till 1232708972.
Ange vilken match och ditt namn. Biljetterna skickas efter betalning är gjord.
Är inte biljetterna betalda inom föreskriven tid, så kan de gå till nästa i kölistan.</p>
        </li>
        <li> Arsenal Göteborg är inte ansvarig för eventuella ändringar av matchdatum (tvschemat), tid eller plats.</li>
        <li>  Har man beställt en biljett, men inte kan åka. Så skall detta snarast meddelas genom mail till
tickets@arsenalgoteborg.se. Så kontrollerar vi om det finns sökande på kö som inte fått biljett.</li>
<li>  Biljettgruppen (Bosse Gullberg och Zandrah Dikanda) kan ge dispens från dessa regler i speciella fall.</li>
<li> Detta är en service för Arsenal Göteborgs medlemmar. Missbruk av systemet kan bestraffas.</li>
      </ol>
      <div>
        <h3>Sökbara Matcher</h3>
        <GameTable />
      </div>
    </section>
  );
}
