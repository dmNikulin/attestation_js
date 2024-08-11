const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const objNew = {};


if (en.length === ru.length) {
    for (let i = 0; i < en.length; i++) {
        objNew[en[i]] = ru[i];

    }
} else alert('Массивы не равны!');
console.log(objNew);