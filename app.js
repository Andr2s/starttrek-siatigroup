const calculateOperatingInjectorStream = require('./functions/calculateOperatingInjectorStream');
const calculateMaximunSpeedPercentage = require('./functions/calculateMaximumSpeedPercentage');

let getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max + 1));
};

const numberOfInjectors = 3;
const injectorDamagePercentagesP1 = [0, 0, 0];
const injectorDamagePercentagesP2 = [0, 0, 0];
const injectorDamagePercentagesP3 = [0, 0, 0];
const injectorDamagePercentagesP4 = [20, 10, 0];
const injectorDamagePercentagesP5 = [0, 0, 100];
const injectorDamagePercentagesP6 = [0, 0, 0];
const injectorDamagePercentagesP7 = [0, 0, 30];
const injectorDamagePercentagesP8 = [20, 50, 40];

const speedOfLightPercentageP1 = 100;
const speedOfLightPercentageP2 = 90;
const speedOfLightPercentageP3 = 30;
const speedOfLightPercentageP4 = 100;
const speedOfLightPercentageP5 = 80;
const speedOfLightPercentageP6 = 150;
const speedOfLightPercentageP7 = 140;
const speedOfLightPercentageP8 = 170;


console.log('Número de inyectores:', numberOfInjectors);

/*PRUEBA #1*/

injectorDamagePercentagesP1.forEach((randomInjectorDamagePercentage, index) => {
    console.log(index + 1, 'Daño del inyector:', randomInjectorDamagePercentage + '%');
});
console.log('Velocidad requerida del porcentaje de luz', speedOfLightPercentageP1 + '%');

// Showing results
console.log('Velocidad máxima del porcentaje de luz:', calculateMaximunSpeedPercentage(injectorDamagePercentagesP1) + '%');
console.log('Result:', calculateOperatingInjectorStream(injectorDamagePercentagesP1, speedOfLightPercentageP1));



/*PRUEBA #2*/
injectorDamagePercentagesP2.forEach((randomInjectorDamagePercentage, index) => {
    console.log(index + 1, 'Daño del inyector:', randomInjectorDamagePercentage + '%');
});
console.log('Velocidad requerida del porcentaje de luz', speedOfLightPercentageP2 + '%');

// Showing results
console.log('Velocidad máxima del porcentaje de luz:', calculateMaximunSpeedPercentage(injectorDamagePercentagesP2) + '%');
console.log('Result:', calculateOperatingInjectorStream(injectorDamagePercentagesP2, speedOfLightPercentageP2));

/*PRUEBA #3*/
injectorDamagePercentagesP3.forEach((randomInjectorDamagePercentage, index) => {
    console.log(index + 1, 'Daño del inyector:', randomInjectorDamagePercentage + '%');
});
console.log('Velocidad requerida del porcentaje de luz', speedOfLightPercentageP3 + '%');

// Showing results
console.log('Velocidad máxima del porcentaje de luz:', calculateMaximunSpeedPercentage(injectorDamagePercentagesP3) + '%');
console.log('Result:', calculateOperatingInjectorStream(injectorDamagePercentagesP3, speedOfLightPercentageP3));

/*PRUEBA #4*/
injectorDamagePercentagesP4.forEach((randomInjectorDamagePercentage, index) => {
    console.log(index + 1, 'Daño del inyector:', randomInjectorDamagePercentage + '%');
});
console.log('Velocidad requerida del porcentaje de luz', speedOfLightPercentageP4 + '%');

// Showing results
console.log('Velocidad máxima del porcentaje de luz:', calculateMaximunSpeedPercentage(injectorDamagePercentagesP4) + '%');
console.log('Result:', calculateOperatingInjectorStream(injectorDamagePercentagesP4, speedOfLightPercentageP4));

/*PRUEBA #5*/
injectorDamagePercentagesP5.forEach((randomInjectorDamagePercentage, index) => {
    console.log(index + 1, 'Daño del inyector:', randomInjectorDamagePercentage + '%');
});
console.log('Velocidad requerida del porcentaje de luz', speedOfLightPercentageP5 + '%');

// Showing results
console.log('Velocidad máxima del porcentaje de luz:', calculateMaximunSpeedPercentage(injectorDamagePercentagesP5) + '%');
console.log('Result:', calculateOperatingInjectorStream(injectorDamagePercentagesP5, speedOfLightPercentageP5));

/*PRUEBA #6*/
injectorDamagePercentagesP6.forEach((randomInjectorDamagePercentage, index) => {
    console.log(index + 1, 'Daño del inyector:', randomInjectorDamagePercentage + '%');
});
console.log('Velocidad requerida del porcentaje de luz', speedOfLightPercentageP6 + '%');

// Showing results
console.log('Velocidad máxima del porcentaje de luz:', calculateMaximunSpeedPercentage(injectorDamagePercentagesP6) + '%');
console.log('Result:', calculateOperatingInjectorStream(injectorDamagePercentagesP6, speedOfLightPercentageP6));


/*PRUEBA #7*/
injectorDamagePercentagesP7.forEach((randomInjectorDamagePercentage, index) => {
    console.log(index + 1, 'Daño del inyector:', randomInjectorDamagePercentage + '%');
});
console.log('Velocidad requerida del porcentaje de luz', speedOfLightPercentageP7 + '%');

// Showing results
console.log('Velocidad máxima del porcentaje de luz:', calculateMaximunSpeedPercentage(injectorDamagePercentagesP7) + '%');

/*PRUEBA #8*/
injectorDamagePercentagesP8.forEach((randomInjectorDamagePercentage, index) => {
    console.log(index + 1, 'Daño del inyector:', randomInjectorDamagePercentage + '%');
});
console.log('Velocidad requerida del porcentaje de luz', speedOfLightPercentageP8 + '%');

// Showing results
console.log('Velocidad máxima del porcentaje de luz:', calculateMaximunSpeedPercentage(injectorDamagePercentagesP8) + '%');
console.log('Result:', calculateOperatingInjectorStream(injectorDamagePercentagesP8, speedOfLightPercentageP8));