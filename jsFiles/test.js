const allPrices = [];

const getAllPrices = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/NwrPriceList')
      const jsonData = await response.json()
      for (let i = 0; i < jsonData.length; i++) {
        allPrices.push(jsonData[i])
      }
    }
    catch (err) {
      console.error(err.message)
    }
  };
  getAllPrices();
  
  setTimeout(function(){ 
    alert("After 5 seconds!");
    console.log("allPrices", allPrices);
  }, 2000);