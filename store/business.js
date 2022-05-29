export const state = () => ({
  selectedProductSlide: 2,
  selectedBrandSlide: 0,
  productSlides: [
    {
      imageUrl: 'b2b-1',
      imageAlt: '',
      title: 'Liefer zeiten',
      description01:
        'Sie erhalten Kollektionsware innerhalb von 10 Werktagen. Personalisierte Ware ist innerhalb von 3 Wochen lieferbar. Sonderproduktionen nach Vereinbarung. ',
    },
    {
      imageUrl: 'b2b-2',
      imageAlt: '',
      title: 'Recht liches',
      description01:
        'Grundsätzlich gelten die Bestimmungen wie sie in den AGB´s auf unserer Homepage einsehbar sind. Für personalisierte Clips verweisen wir Sie im Besonderen auf den Punkt 9 in den AGB´s. ',
    },
    {
      imageUrl: 'b2b-3',
      imageAlt: '',
      title: 'Händler werden',
      description01:
        'Wählen Sie Ihren Unternehmenstyp und folgen Sie der vorgefertigten Anleitung zur Registrierung. Sie erhalten unverbindlich alle notwendigen Informationen zu allen verfügbaren Artikeln für Ihren Marktplatz, sämtliche Preise, sowie Ihre persönlichen Zugangsdaten (Login) auf unserem B2B Terminal. ',
    },
    {
      imageUrl: 'b2b-4',
      imageAlt: '',
      title: 'Staffel preise',
      description01:
        'Stückzahlbezogene Rabattstaffeln sind im Warenkorb dargestellt und beziehen sich immer auf die Gesamtanzahl der im Warenkorb befindlichen Verkaufsartikel (Set´s). ',
    },
    {
      imageUrl: 'b2b-5',
      imageAlt: '',
      title: 'Sonder produktion',
      description01:
        'Selbstverständlich richtet sich unser Angebot auch an Unternehmen, die für Ihre Kunden Clips in geschützten Eigendesigns von uns fertig produziert erhalten wollen. Weitere unverbindliche Informationen bei Anfrage.',
    },
  ],
  secondSlides: [
    {
      imageUrl: 'sec-1',
      imageAlt: '',
      title: 'einzel handel',
      description01:
        'Werden Sie exklusiver Einzelhandelspartner in Ihrer Stadt und begeistern Sie Ihre Kunden mit entsprechenden Kollektionen und personalisierten Set´s im Shop und auf ihrer Homepage. Sichern Sie sich schon jetzt unverbindlich die Exklusivität in Ihrer Stadt. Mehr unverbindliche Informatuonen nach Registrierung.',
    },
    {
      imageUrl: 'sec-2',
      imageAlt: '',
      title: 'marken unternehmen',
      description01:
        'Sie sind ein Markenunternehmen der Schmuck.- Mode. - Accessoire.- oder Automobilbranche und beabsichtigen Remichel Cash Clip´s Ihren Kunden anzubieten? Dann nutzen Sie die Möglichkeit unterschiedliche Furnituren zu ordern, in Eigenproduktion Ihr Design einzubringen, sowie CI- Konform zu verpacken. Mehr unverbindliche Informationen nach Registrierung. ',
    },
    {
      imageUrl: 'sec-3',
      imageAlt: '',
      title: 'Merchan dising',
      description01:
        'Begeistern Sie Ihre Fans sowie Club.-  und Vereinsmitglieder mit diesem vielfältig gestaltbaren Accessouire für den täglichen Bedarf. Mehr unverbindlich Informationen nach Registrierung. ',
    },
    {
      imageUrl: 'sec-4',
      imageAlt: '',
      title: 'clubs &vereine',
      description01:
        'Sie sind ein Club oder Verein und wollen ausschließlich für Ihre Mitglieder einen Remichel Cash Clip mit Ihrem Logo? Schon ab 10 identen Designs möglich! Registrieren und loslegen! ',
    },
    {
      imageUrl: 'sec-5',
      imageAlt: '',
      title: 'Werbe geschenke',
      description01:
        'Individualität und Wertigkeit sind unverzichtbare Maßstäbe um jemandem ein Geschenk zu machen. Überraschen Sie Ihre Kunden mit diesem neuen Life Style Accessouire für den täglichen Gebrauch. Schon ab 10 identen Clips erhältlich! Mehr unverbindliche Infromatonen und Preise nach Registrierung.',
    },
  ],
  brandSlides: [
    {
      imageUrl: '',
      imageAlt: '',
      title: 'Lirum epsum',
      description01:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
    },
    {
      imageUrl: '',
      imageAlt: '',
      title: 'Lirum epsum',
      description01:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
    },
    {
      imageUrl: '',
      imageAlt: '',
      title: 'Lirum epsum',
      description01:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
    },
    {
      imageUrl: '',
      imageAlt: '',
      title: 'Lirum epsum',
      description01:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
    },
    {
      imageUrl: '',
      imageAlt: '',
      title: 'Lirum epsum',
      description01:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ',
    },
  ],
})
export const getters = {
  selectedProductSlide: (state) => {
    return state.selectedProductSlide
  },
  productSlides: (state) => {
    return state.productSlides
  },
  selectedBrandSlide: (state) => {
    return state.selectedBrandSlide
  },
  brandSlides: (state) => {
    return state.brandSlides
  },
}
export const mutations = {
  nextProductSlide(state) {
    if (state.selectedProductSlide < state.productSlides.length - 1)
      state.selectedProductSlide++
  },
  prevProductSlide(state) {
    if (state.selectedProductSlide > 0) state.selectedProductSlide--
  },
  selectProductSlide(state, i) {
    state.selectedProductSlide = i
  },
  selectBrandSlide(state, i) {
    state.selectedBrandSlide = i
  },
  nextBrandSlide(state) {
    if (state.selectedBrandSlide < state.brandSlides.length - 1)
      state.selectedBrandSlide++
  },
  prevBrandSlide(state) {
    if (state.selectedBrandSlide > 0) state.selectedBrandSlide--
  },
}
