

//get total income among all the values 
export const getTotal = (list) => {
    return list.reduce((accumulator, currVal) => (accumulator + currVal), 0);
}

//function to get the tax bracket
export const getBracket = (amt) => {
    if (amt < 91250) {
        return {
            totalTaxAmmount: 0, output: "0",
        }
    }
    const brackArr = [
        { amount: 226000, pcr: 0.18, amnt: 0, rebate: 16425 },
        { amount: 353100, pcr: 0.26, amnt: 40680, rebate: 16425 },
        { amount: 488700, pcr: 0.31, amnt: 73726, rebate: 16425 },
        { amount: 641400, pcr: 0.36, amnt: 115762, rebate: 16425 },
        { amount: 817600, pcr: 0.39, amnt: 170734, rebate: 16425 },
        { amount: 1731600, pcr: 0.41, amnt: 239452, rebate: 16425 },
        { amount: Infinity, pcr: 0.45, amnt: 614192, rebate: 16425 }];

    let counter = 0;
    while (brackArr[counter].amount <= amt) {
        counter++;
    }
    let totalTaxAmmount = (amt * brackArr[counter].pcr) + brackArr[counter].amnt - brackArr[counter].rebate;
    
    let output = brackArr[counter].amnt + "+" + brackArr[counter].pcr * 100 + "%";
    if (counter === 0) {
        output = brackArr[counter].pcr * 100 + "%";
    }
    return {
        totalTaxAmmount: totalTaxAmmount, output: output,
    }
}

//Function to calculate the new total after the tax amount has been calculated
export const getNewTotal = (a, b) => {
    return a - b;
}

//calculate the totall amount on a certain month scale, developers can change the code to be 11 months for example. 
export const calcMonths = (total, months) => {
    return total * months;
}

export const getSavePct = (value, pct) => {
    return value * pct;
}

export const checkPerson = (household, name) => {
    let exists = false;

    for (let i = 0; i < household.length; i++) {
        if (household[i].name === name) {
            exists = true;
            break;
        }
    }
    return !exists;
}

export const getMemberDetails = (household, name) => {
    return household.find(m => {
        return m.name == name
    });
}