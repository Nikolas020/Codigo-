'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs',[
      {
        titulo:"Nikolas",
        descripcion:"El lenguaje para creacion de backed en js",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
        {
        titulo:"Alejandro",
        descripcion:"El lenguaje para creacion de backed en js",
        createdAt:new Date(),
        updatedAt:new Date(),
        }
    ],{}) 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blogs',null,{})
  }
};
