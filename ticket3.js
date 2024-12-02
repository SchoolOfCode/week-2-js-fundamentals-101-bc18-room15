//MVP3
//Write a function `convertGBPToCurrency` 
// which takes in both a currency code (`"EUR"` or `"USD"`) and an amount of £ to convert. 
//It should, based on which code has been entered, use one of your previously written functions to return the correct conversion. 
//If an unknown code is entered, it should return `null`.

function convertGBPToCurrency (currencyCode,amountOfGBP) {
  if (currencyCode==="EUR") {
    return amountOfGBP * 1.21;
  } else if (currencyCode==="USD") {
    return amountOfGBP * 1.27;
  } else {
    return null;
  }
}