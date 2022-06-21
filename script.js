const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let day = new Date();
let today = day.getDay() -1;

function getWeekDay() {
    let bodyEl = '';
    week.forEach(function(item, index){
        let el = item;
        if (today === index){
            el = `<b>${el}</b>`;
        } 
        if(index === 5 || index === 6) {
            el = `<i>${el}</i>`;
        } 
        el = `${el}<br>`;
        bodyEl += el;
    })
    return bodyEl;
}

document.write(getWeekDay());
