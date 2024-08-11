const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

for (const el in numbers) {
    if (numbers[el] >= 3) {
        console.log(numbers[el]);
    }
}