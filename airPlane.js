'use strict';
/*Write an Airplane object that initializes name.
Give airplanes the ability to .takeOff() and .land():
If a plane takes off, its isFlying property is set to true.
If a plane lands, its isFlying property is set to false.*/

const AirPlanObj = {
  takeOf() {
    this.isFlying = true;
  },
  lands() {
    this.isFlying = false;
  },
};

const aeroflot = {
  plane: 'Boeing',
  isFlying: false,
  __proto__: AirPlanObj,
};

const airFrance = {
  plane: 'GreenPeace',
  __proto__: AirPlanObj,
  isFlying: false,
};

aeroflot.lands();
console.log(aeroflot.isFlying);
airFrance.takeOf();
console.log(airFrance.isFlying);
