/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Drugs', [
      {
        img: 'https://f.stolichki.ru/s/drugs/medium/67/67955.jpg',
        name: 'Витрум Иммунактив',
        price: 1210,
        status: 'yes',
        count: 130,
      },
      {
        img: 'https://f.stolichki.ru/s/drugs/medium/34/34748.jpg',
        name: 'ЛинАква Софт',
        price: 429,
        status: 'yes',
        count: 60,
      },
      {
        img: 'https://f.stolichki.ru/s/drugs/medium/44/44789.jpg',
        name: 'Корега',
        price: 666,
        status: 'yes',
        count: 200,
      },
      {
        img: 'https://f.stolichki.ru/s/drugs/medium/48/48525.jpg',
        name: 'Омега-3',
        price: 690,
        status: 'yes',
        count: 190,
      },
      {
        img: 'https://f.stolichki.ru/s/drugs/medium/44/44442.jpg',
        name: ' Иммуноцея',
        price: 246,
        status: 'yes',
        count: 630,
      },
      {
        img: 'https://f.stolichki.ru/s/drugs/medium/69/69331.jpg',
        name: 'Колдакт Хот Дринк',
        price: 236,
        status: 'yes',
        count: 569,
      },
      {
        img: 'https://f.stolichki.ru/s/drugs/medium/11/11910.jpg',
        name: 'Купить Др. Вистонг',
        price: 170,
        status: 'no',
        count: 0,
      },
      {
        img: 'https://f.stolichki.ru/s/drugs/medium/46/46434.jpg',
        name: 'Эссенциале форте Н',
        price: 2210,
        status: 'no',
        count: 0,
      },
      {
        img: 'https://f.stolichki.ru/s/drugs/medium/2/2587.jpg',
        name: 'Но-шпа',
        price: 132,
        status: 'no',
        count: 0,
      },
      {
        img: 'https://f.stolichki.ru/s/drugs/medium/13/13908.jpg',
        name: 'Налгезин',
        price: 356,
        status: 'no',
        count: 0,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Drugs', null, {});
  },
};
