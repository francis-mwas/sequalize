'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Tours', [
      {
        tourName: 'Wild beast migration',
        destination: 'Maasai mara',
        tourType: 'Game park',
        tourLevel: 'Medium',
      },
      {
        tourName: 'Bird watching',
        destination: 'Kakamega forest',
        tourType: 'Forest hike',
        tourLevel: 'Difficult',
      },
      {
        tourName: 'Wildlife photography',
        destination: 'Nairobi national park',
        tourType: 'National park',
        tourLevel: 'Easy',
      },
      {
        tourName: 'Elaphants watching',
        destination: 'Amboseli national park',
        tourType: 'National park',
        tourLevel: 'Easy',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tours', null, {});
  },
};
