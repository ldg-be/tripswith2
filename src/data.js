import {FaBook, FaInstagram, FaYoutube, FaFacebook, FaPlane } from 'react-icons/fa';
import React from 'react';

export const travels = [
  // add year 
  {
    year: 2021,
    label: 'Germany 2021',
    icon: <FaPlane />,
    url: 'germany21',
    intro:`As a very first trip together, we went by car just across the Belgian border to the Mosel region in Germany`,
    page: [
      {title:"Bridge",text: "During this hike towards this foot bridge across a valley...", image:""},
      {title:"Castle",text: "", image:""},
      {title:"Waterfall",text: "", image:""},
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
