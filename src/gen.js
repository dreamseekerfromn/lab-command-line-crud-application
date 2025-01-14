const { faker } = require("@faker-js/faker");
const { nanoid } = require("nanoid");

/**
 * createObj()
 * -----------------------------
 * generate new data w/ faker
 * 
 * @returns {object} - return new object w/ fake values.
 */
function createObj(){
    const jsonObj = {
        id: nanoid(5),
        name: faker.person.fullName(),
        amount: faker.number.float({min: 1, max: 1000000, precision: 0.01}),
        donation: faker.number.float({min: 1, max: 1000000, precision: 0.01}),
    }

    return jsonObj;
}

/**
 * createArrF()
 * -----------------------
 * create new data in array form
 * 
 * @param {number} num - number of data, you want to create 
 * @returns {object[]} - data w/ array form
 */
function createArrF(num){
    const arr = [];
    for(let index = 0; index < num; index++){
        arr.push(createObj());
    }
    return arr;
}

module.exports = {
    createArrF,
    createObj,
}