let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let currentTime = new Date()

setInterval(()=>{
    let currentTime = new Date()

hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours()
minutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes()
seconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds()
},1000)

hours.innerHTML = currentTime.getHours()
minutes.innerHTML = currentTime.getMinutes()
seconds.innerHTML = currentTime.getSeconds()