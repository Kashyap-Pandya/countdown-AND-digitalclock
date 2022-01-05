const clock = document.querySelector(".clock");
const todayDate = document.querySelector(".today");


const tick = () => {
    const now = new Date();
    const hours = now.getHours(); 
    const min = now.getMinutes();
    const sec = now.getSeconds();

    const html = `
        <span>${hours} :</span>
        <span>${min} :</span>
        <span>${sec} </span>
    `

    clock.innerHTML = html;

    // const today = now.toDateString(); 
    const today = dateFns.format(now, "dddd, Do , MMMM , YYYY");  //using datefns library to format

    const date = `
    <span> ${today}</span>
    `
    todayDate.innerHTML = date;

}

setInterval(tick, 1000);
