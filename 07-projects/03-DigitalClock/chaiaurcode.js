const clock = document.getElementById('clock');
// const colck = document.querrySelector('#clock')

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);