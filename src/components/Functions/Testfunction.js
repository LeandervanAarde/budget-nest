//Function to calculate a users total savings
export const savings = (input, save) => {
    return input * save;
};

//get total income among all the values 
export const getTotal = (list) => {
    return list.reduce((accumulator, currVal) => (accumulator + currVal), 0);
}

//function to get the tax bracket
export const getBracket = (amt) => {
    console.log(amt);
    if (amt === 0) {
        return {
            totalTaxAmmount: 0, output: 0,
        }
    }
    const brackArr = [
    {amount: 226000, pcr: 0.18, amnt: 0},
    { amount: 353100, pcr: 0.26, amnt: 40680 },
    { amount: 488700, pcr: 0.31, amnt: 73726 },
    { amount: 641400, pcr: 0.36, amnt: 115762 },
    { amount: 817600, pcr: 0.39, amnt: 170734 },
    { amount: 1731600, pcr: 0.41, amnt: 239452 },
    { amount: Infinity, pcr: 0.45, amnt: 614192 }];

    let counter = 0;
    while (brackArr[counter].amount <= amt) {
        counter++;
    }
    let totalTaxAmmount = (amt * brackArr[counter].pcr) + brackArr[counter].amnt;
    let output = brackArr[counter].amnt + "+" + brackArr[counter].pcr * 100 + "%";
    if (counter === 0) {
        output = brackArr[counter].pcr * 100 + "%";
        console.log(totalTaxAmmount)
    }
    return {
        totalTaxAmmount: totalTaxAmmount, output: output,
    }
}