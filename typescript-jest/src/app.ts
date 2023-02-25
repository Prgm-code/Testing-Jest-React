
const cities = [ 'Santiago' , 'Temuco', 'Concepcion ', 'Antofagasta' ,' Castro' , 'Coquimbo'];

const randomString = ( ) => { 
  const city = cities[Math.floor(Math.random() * cities.length)]; 
  return city;
};

export default randomString;