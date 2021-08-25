const moviesMock = [
  {
    id: 'f7bd9287-9daf-4110-b83e-0bee4748a383',
    title: "William Shakespeare's A Midsummer Night's Dream",
    year: 1999,
    cover: 'http://dummyimage.com/222x214.png/5fa2dd/ffffff',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    duration: 1608,
    contentRating: 'PG-13',
    source: 'http://opera.com/dui/vel/nisl.xml',
    tags: ['Horror|Sci-Fi'],
  },
  {
    id: '35ab95c5-e2fe-4b51-be52-b09858a273cd',
    title: 'Lizzie McGuire Movie, The',
    year: 2012,
    cover: 'http://dummyimage.com/155x153.png/ff4444/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 1757,
    contentRating: 'G',
    source: 'http://naver.com/congue/risus/semper/porta/volutpat/quam/pede.png',
    tags: ['Children|Drama'],
  },
  {
    id: '5e7e1609-0fdb-4b7a-ac15-31426f810fd8',
    title: 'Little Princess, A',
    year: 2010,
    cover: 'http://dummyimage.com/213x220.png/dddddd/000000',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 1993,
    contentRating: 'PG',
    source: 'http://lycos.com/eget/elit/sodales/scelerisque/mauris.js',
    tags: ['Drama|War', 'Action|Crime|Thriller', 'Comedy|Drama'],
  },
  {
    id: '5411a409-5cc6-43f8-848f-7cb5b3a94373',
    title: 'Invictus',
    year: 2012,
    cover: 'http://dummyimage.com/116x198.png/5fa2dd/ffffff',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 1935,
    contentRating: 'PG',
    source: 'http://uol.com.br/ante.html',
    tags: [
      'Comedy|Drama|Romance',
      'Comedy|Sci-Fi',
      'Comedy|Horror',
      'Drama|Thriller',
      'Drama|Mystery|Thriller',
    ],
  },
  {
    id: '4bb5431f-5077-4420-97c1-2c635a0b14bd',
    title: 'Hunted, The',
    year: 1984,
    cover: 'http://dummyimage.com/196x213.png/dddddd/000000',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 1923,
    contentRating: 'G',
    source: 'http://e-recht24.de/dolor/sit/amet/consectetuer.xml',
    tags: ['Drama', 'Comedy|Drama', 'Documentary'],
  },
  {
    id: '46e6de86-3f41-4f3e-9f26-75a8bc13e7a0',
    title: 'Funny Farm',
    year: 2007,
    cover: 'http://dummyimage.com/161x230.png/5fa2dd/ffffff',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 1300,
    contentRating: 'PG-13',
    source: 'http://sohu.com/in/eleifend/quam/a.xml',
    tags: ['Drama', 'Comedy|Romance', 'Thriller'],
  },
  {
    id: '9118e77c-047c-4669-b979-c1a8fc59b5a0',
    title: 'Profession of Arms, The (Il mestiere delle armi)',
    year: 1996,
    cover: 'http://dummyimage.com/122x210.png/cc0000/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 1597,
    contentRating: 'PG',
    source: 'https://elegantthemes.com/dignissim/vestibulum/vestibulum.js',
    tags: [
      'Documentary|Drama',
      'Drama',
      'Comedy|Drama|Mystery|Thriller',
      'Drama',
      'Western',
    ],
  },
  {
    id: '5410b494-8fe1-4a2c-93f8-bd7dbe857467',
    title: 'Beyond the Border',
    year: 2010,
    cover: 'http://dummyimage.com/174x224.png/ff4444/ffffff',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 1579,
    contentRating: 'R-NC-17',
    source: 'http://ask.com/tortor/id/nulla/ultrices/aliquet/maecenas.png',
    tags: ['Action'],
  },
  {
    id: '8f1103c5-dcbe-41e3-ad41-afc093cfc3d7',
    title: 'Shop on Main Street, The (Obchod na korze)',
    year: 1985,
    cover: 'http://dummyimage.com/154x206.png/cc0000/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 1206,
    contentRating: 'PG-13',
    source: 'http://wordpress.com/maecenas.js',
    tags: ['Action|Drama|Western', 'Drama', 'Drama', 'Action'],
  },
  {
    id: 'eca13500-4f6a-4a6e-a91a-91b2d3e48442',
    title: 'Footloose',
    year: 2005,
    cover: 'http://dummyimage.com/112x228.png/5fa2dd/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 1745,
    contentRating: 'G',
    source: 'http://storify.com/id/luctus/nec/molestie/sed/justo.xml',
    tags: ['Comedy|Fantasy|Mystery'],
  },
];

function filterMoviesMock(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filterMoviesMock,
  MoviesServiceMock,
};
