const located = document.querySelector('.located')
const date = document.querySelector('.date')
const time = document.querySelector('.time')
const degree = document.querySelector('.degree span')
const condition = document.querySelector('.condition')
const vision = document.querySelector('.vision')
const windy = document.querySelector('.windy')
const humidity = document.querySelector('.humidity')
const search = document.querySelector('.search')
const timeCurrent = new Date().toLocaleString('vi')
time.innerText = timeCurrent
async function getdata(){
    let searchCity = search.value.trim()
    let getAPI = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=b8b45f094ff8b772843ec83a8efb22de`
    let data = await fetch(getAPI).then(res => res.json())
    console.log(data)
        located.innerText = data.name + ',' + data.sys.country
        degree.innerText = Math.floor(data.main.temp - 273.15)
        condition.innerText = data.weather[0].main
        vision.innerText = data.visibility + ' (m)'
        windy.innerText = data.wind.speed + ' (m/s)'
        humidity.innerText = data.main.humidity + ' (%)'
}
   

search.addEventListener('keypress', e => {
    if(e.code === 'Enter'){
        getdata()
        search.value = ''
        
        
    }
})
if(Number(timeCurrent.slice(0, 2))>18 || Number(timeCurrent.slice(0, 2))< 5){
    document.querySelector('.appScreen').parentElement.classList.add('dark')
}else
{
    document.querySelector('.appScreen').classList.remove('dark')
}