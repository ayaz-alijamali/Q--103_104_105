// Question ____________ 103


function getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
}

const randomValue: boolean = getRandomBoolean();
console.log(randomValue); // Outputs either true or false randomly


// Question ____________ 104


function getRandomHexColor(): string {
    const characters: string = '0123456789ABCDEF';
    let colorCode: string = '#';

    for (let i = 0; i < 6; i++) {
        colorCode += characters[Math.floor(Math.random() * characters.length)];
    }

    return colorCode;
}

const randomColor: string = getRandomHexColor();
console.log(randomColor); // Outputs a random hexadecimal color code


// Question ______________ 105



function rollDice() {
    // Generate a random number between 0 and 1, then scale it to 1-6 and add 1 to ensure we get numbers from 1 to 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

const diceResult = rollDice();
console.log(`You rolled a ${diceResult}`);
