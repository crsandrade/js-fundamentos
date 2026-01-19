const parkSystem = {
  maxCapacity: 100,
  freeSpaces: [],
  parkedVehicles: [],
};

const vehicle = {
  placa: " ",
  modelo: " ",
  timeEntrance: null,
  space: null,
};

const startPark = (maxCapacity) => {
  for (i = 1; i <= maxCapacity; i++) {
    parkSystem.freeSpaces.push(i);
  }
};

const parkVehicle = (vehicle) => {
  if (parkSystem.parkedVehicles.some((v) => v.placa === vehicle.placa)) {
    return `O seu veículo ${vehicle.placa} está registrado como estacionado em nosso sistema. Por favor, contate o administrador para novas informações.`;
  }

  if (parkSystem.freeSpaces.length < 1) {
    return "Estamos lotados, por favor, retorne em outro momento.";
  }

  const space = parkSystem.freeSpaces.shift();
  vehicle.space = space;
  vehicle.timeEntrance = new Date();
  parkSystem.parkedVehicles.push(vehicle);
  parkSystem.freeSpaces = parkSystem.freeSpaces.filter(
    (v) => v.placa !== vehicle.placa,
  );

  return `Seu carro ${vehicle.placa} foi estacionado na vaga ${vehicle.space}`;
};

const leaveVehicle = (placa) => {
  const index = parkSystem.parkedVehicles.findIndex((v) => v.placa === placa);

  if (index === -1) {
    return `Veículo ${vehicle.placa} não encontrado.`;
  }
  const vehicle = parkSystem.parkedVehicles[index];
  const space = vehicle.space;

  parkSystem.freeSpaces.push(space);
  parkSystem.parkedVehicles = parkSystem.parkedVehicles.filter(
    (v) => v.placa !== placa,
  );
  parkSystem.freeSpaces.sort((a, b) => a - b);

  vehicle.space = null;
  vehicle.timeEntrance = null;
};

const systemConsult = () => {
  return {
    maxCapacity: parkSystem.maxCapacity,
    OcuppiedSpaces: parkSystem.parkedVehicles,
    freeSpaces: parkSystem.freeSpaces.join(" | "),
  };
};

startPark(parkSystem.maxCapacity);

console.log(parkVehicle({ placa: "ABC-1234", modelo: "Onix" }));
console.log(parkVehicle({ placa: "DEF-5678", modelo: "Civic" }));
console.log(parkVehicle({ placa: "GHI-9876", modelo: "Corolla" }));
console.log(leaveVehicle("ABC-1234"));

console.log("---------------------------------");

console.log(systemConsult());
