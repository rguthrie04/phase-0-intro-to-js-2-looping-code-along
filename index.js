const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0;i <gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
            }

    return gifts;
}

wrapGifts(gifts);

const names = ["Alaina", "Rhys", "Claire"]

const event = "birthday"

function writeCards(names) {
    for (let kids=0; kids < names.length; kids++){
    console.log (`Thank you, ${names[kids]}, for the wonderful ${event} gift!`);
    }
    
    return names;
}

writeCards(["Alaina", "Rhys", "Claire"], "birthday")

for (let i=10; i>=0;i--) {
    console.log(i);
}
