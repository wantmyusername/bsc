const axios = require('axios');

const contractAddress = '';
const apiKey = '';

axios
  .get(`https://api.bscscan.com/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`)
  .then((response) => {
    const contractAbi = JSON.parse(response.data.result);
    const mintFunction = contractAbi.find((f) => f.name === 'mint' && f.type === 'function');

    if (mintFunction) {
      console.log(`La función "mint" está disponible para su uso. Contrato: ${contractAddress}`);
    } else {
      console.log('La función "mint" no está disponible para su uso');
    }
  })
  .catch((error) => {
    console.error('Error al obtener la ABI del contrato:', error);
  });
