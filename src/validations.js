
function isRequired(val) {
    return val.length === 0
        ? '*Cannot be blank'
        : val.length < 6
            ? "*Must full name"
            : val.split('').some(char => Number(char)) ? "*Number ?" : ""
};

function isEmail(val) {
    // "@" index
    const ai = val.indexOf('@'); 
    const gdi = val.split('')
                   .reduce((acc, curr, indx) => curr === "." ? indx : acc , 0 );
    return val.length > 0 && ( ai > -1 && gdi > ai ) ? "" : '*Must be an email';
};

function isPhone(val) {

    // function PhoneNumber(string) {
    //     const numAr = [];  
    //     for (let i = 0; i <= 7; i= i+3) {
    //         numAr.push(string.split('').slice(i, i + 3).join(''));
    //     }
    //     return `${numAr.join(' ')}${string.slice(-1)}`;
    // };
   
    return isNaN(val)
        ? "*Incorrect Number"
        : val.length === 10 ? "" : "*Incorrect Phone number"
};



export {isRequired, isEmail, isPhone}