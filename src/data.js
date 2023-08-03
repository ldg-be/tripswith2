import {FaBook, FaInstagram, FaYoutube, FaFacebook, FaPlane } from 'react-icons/fa';
import React from 'react';

export const url="https://eu-de.functions.appdomain.cloud/api/v1/web/ba16a567-bf8b-4e08-8345-2742a032caf3/travelswith2/get-travels"

export const travels = [
  // add year 
  {
    year: 2021,
    label: 'Germany 2021',
    icon: <FaPlane />,
    url: 'germany21',
    intro:`As a very first trip together, we went by car just across the Belgian border to the Mosel region in Germany`,
    page: [
      {title:"Bridge",text: "During this hike towards this foot bridge across a valley of the Geierlay", image:"https://lh3.googleusercontent.com/pw/AIL4fc-yIcrAkcN4AgeMEipKccY5Y6xIqk1hQO5_BPGdTbLmwXH-JO5pr6-r8t4qRF9sb4ic3sWmF4pfDTX6eCH-Vw1IFRNaL7-M3T8qWOghiRFNveZyiv0AstmbUQXcOe9dTmeHIc86ATaR5tc50EcqEXuKhw=w666-h889-s-no?authuser=0"},
      {title:"Castle",text: "Having a hike to a castle called Burg Elz ", image:"https://lh3.googleusercontent.com/pw/AIL4fc-mmD0DMkiLLtXKMmYoDjB_3B010xxjQHmTNVhlMzPMWiMGZH8zM5IWwyV0AfaYjBMOZW-E9UiTfOWjunM4Yw9dsbJOBqagk3XUHQ71q0InUdYjeuxQeoOlshH_o4WK5Nz-UTs-W9eXa96cHoW1vIBBmg=w1185-h889-s-no?authuser=0"},
      {title:"Waterfall",text: "And of course our travel could not end without visiting some waterfalls. These ones were FREEZING!!", image:"https://lh3.googleusercontent.com/pw/AIL4fc_vly2U9up84X1YcpUf73JRIbSdvXAL_WJOzUk3A5JCx7RwySFHE2JJ5mhZ9r5aZvvbKxhnG_ryG7sVWdxspsLTZep4RkZsj065sVN4Cj55dHUPGsAI-_kDPcWkGYjq2JzPhymKLAEqSrUIHLuTNcdCE51U1a8fXeS7m_b0Qcr-DC6owQSWq14UO77wr9YJfz6-NvSdfk1MEQmeMa5jZkdgJxy3YU4Z7R-gDwo7mRndHeCBdnj2RhAk-z_KuMfmRj3OOqtahLrrc8J7l3PoIcmssPbwp03u_-UYrnDC2GqVpztglvY-cZsc02RqfK-eoW-ZidXx6quJLXQwHdzYOsuDMeP1T3ZGL8iUysYI9TshPPuHqbD94ERxZ5pPeb9tzBEbceDWZn2VNgVY263muijviyzbu0I6QU0tmbbDJa1LNFMTJrLokRhuwjmatWVUCSHG0sJVCiD_hydBRE3OKAnIHJ4azGwwq1CtiieMraIPkIvgMZNieimVx3HU6SH3HS0ZJa386X72kgS7hQm7GyO_s1VHk5TmCUy2t8sJ4T9aLgCY9MCgDBVd0zoSWft3A1QPAHZrh6U2xfv0om19oI3mj2VR4pfXI0iDDF21Sl7xg2K-MgBEoetKYpqlGwsoqJ8oI9XmPsDqEFbKq2aFLFOHlnds2ZpfyN7qepsm5gU7EKnecxaLh9AFVbZo_zuD_lh0BaOhGYwFzpSi5jFpi8UIAcUCRtKVMoaD1pdtQm5WuBu3CcRm2YahF1aqsDBgIAtRSuIhoWQ5JOmJ62hSlLqoRrEfmzVfttYyFJ9DtOJv7rPMWsaBt5_4pVngepQWz9rp8qb83x4no1fo7TRETKFdeNA1LqEUGauVsrb68txMFW5H3n-5mGRBU2pfdnsYBOHQY3gVclpQjxlFUATO93sJB_zHG2WX7n16yHGaOJp1izqBpioxpY23r9kaa2iUiw4ztN-QoqInHgH71drWjqT8I5rqqxdhfvib=w1185-h889-s-no?authuser=2"},
    ],
    number: 1,
  },
  {
    year: 2021,
    label: 'Roadtrip 2021',
    icon: <FaPlane />,
    url: 'roadtrip21',
    intro:`As a long holiday we took the car and crossed France, Monaco, Italy, Austria and Germany`,
    page: [
      {title:"Aix-les-bains",text: "blablabla", image:""},
      {title:"Crestet",text: "", image:""},
      {title:"Waterfall",text: "", image:""},
    ],
    number: 2,
  },
  {
    year: 2021,
    label: 'Valencia 2021',
    icon: <FaPlane />,
    url: 'valencia21',
    intro:`To daddies house`,
    page: [
      {title:"Aix-les-bains",text: "blablabla", image:""},
      {title:"Crestet",text: "", image:""},
      {title:"Waterfall",text: "", image:""},
    ],
    number: 3,
  },
  {
    year: 2022,
    label: 'The alps 2022',
    icon: <FaPlane />,
    url: 'alps22',
    intro:`first time skiing`,
    page: [
      {title:"Aix-les-bains",text: "blablabla", image:""},
      {title:"Crestet",text: "", image:""},
      {title:"Waterfall",text: "", image:""},
    ],
    number: 4,
  },
  {
    year: 2023,
    label: 'Malaga 2023',
    icon: <FaPlane />,
    url: 'malaga23',
    intro:``,
    page: [
      {title:"Aix-les-bains",text: "blablabla", image:""},
      {title:"Crestet",text: "", image:""},
      {title:"Waterfall",text: "", image:""},
    ],
    number: 2,
  },
  {
    year: 2023,
    label: 'Croatia 2023',
    icon: <FaPlane />,
    url: 'croatia23',
    intro:``,
    page: [
      {title:"Zadar",text: "blablabla", image:""},
      {title:"Plitvice",text: "", image:""},
      {title:"Split",text: "", image:""},
    ],
    number: 99,
  },
  {
    year: 2023,
    label: 'Portugal 2023',
    icon: <FaPlane />,
    url: 'portugal23',
    intro:`In July of 2023 we did a trip through Portugal. We tried to combine city and nature, as we like both. 
    We passed 3 days in Lisbon, enjoying the vibrant city life of 'Baixo Alto' and the beaches across the Tagus river.
    Next we went up north to Porto and to a national park called Gerês.`,
    page: [
      {title:"Lisbon", text:` We passed 3 days in Lisbon, enjoying the vibrant city life of 'Baixo Alto' and the beaches across the Tagus river. 
      The first day we arrived early in the morning. Arriving in the morning is always tiring in some way. 
      We wanted to get rid of our luggages, so we looked for a storage location with an app called Bounce.
`, image:""},
      {title:"Lisbon to Porto", text: `We always try to travel on a budget.`, image:""},
      {title:"Porto and Ponte de Lima", text: `Francesinha and Car ride`, image:""},
      {title:"Gerês", text: `We love waterfalls`, image:""},
    ],
    number: 2,
  },
]

const sublinks = [

  {
    page: 'about us',
    links: [
      { label: 'Lars', icon: <FaBook />, url: '/about' },
      { label: 'Douglas', icon: <FaBook />, url: '/about' },
      { label: 'A day in our life', icon: <FaBook />, url: '/about' },
      { label: 'socials', icon: <FaBook />, url: '/about' },
    ],
  },
  {
    page: 'our travels',
    links: travels,
  },
  {
    page: 'Contact us',
    links: [
      { label: 'instagram', icon: <FaInstagram />, url: 'https://instagram.com/trips.with2' },
      { label: 'facebook', icon: <FaFacebook />, url: '/products' },
      { label: 'Youtube', icon: <FaYoutube />, url: '/products' },
    ],
  },
];

export default sublinks;
