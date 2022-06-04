const sharedDiv = document.querySelector(".sharedDiv");

const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=28.538&lon=-81.379&units=imperial&exclude=minutely,hourly&appid=517dcf5775e231ee14a4ac01faf8814c";
const templeUrl =
  "https://tauriel1202.github.io/wdd230/hotel/json/temples.json";

//Temples
document.querySelector("#t").addEventListener("click", () => {
  fetch(templeUrl)
    .then((response) => response.json(), (sharedDiv.innerHTML = "Thinking..."))
    .then((JSObject) => {
      sharedDiv.innerHTML = "";
      
      const div = document.createElement('div');

      for (let i = 0; i < 3; i++) {
        let temples = document.createElement("div");
        temples.classList.add('temples');

        let name = JSObject.temples[i].name;
        let templeImg = JSObject.temples[i].img;
        let address = JSObject.temples[i].address;
        
        const h2 = document.createElement("h2");
        const img = document.createElement("img");
        const p = document.createElement("p");

        h2.textContent = name;
        p.textContent = address;

        img.src = templeImg;
        img.alt = name;
        img.width = 100;
        img.height = 100;

        temples.append(h2, img, p);
        div.append(temples);
      }
      sharedDiv.append(div);
    });
});

//Weather
document.querySelector("#w").addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json(), (sharedDiv.innerHTML = "Loading..."))
    .then((JSObject) => {
      sharedDiv.innerHTML = "";

      
      for (let i = 0; i < 3; i++) {
        let forecast = document.createElement("div");
        forecast.classList.add('forecast');

        let weather = JSObject.daily[i].weather[0].main;
        let temp = ~~JSObject.daily[i].temp.day;
        let hum = ~~JSObject.daily[i].humidity;
        let wind = ~~JSObject.daily[i].wind_speed;

        const h2 = document.createElement("h2");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const tP = document.createElement("p");
        const hP = document.createElement("p");
        const sP = document.createElement("p");

        img.src = `./imgs/${weather}.jpg`;
        img.alt = weather;
        img.width = 100;
        img.height = 100;

        h2.textContent = date(i);
        h3.textContent = weather;
        tP.textContent = `${temp} °F`;
        hP.textContent = `Humidity: ${hum}`;
        sP.textContent = `Wind Speed: ${wind}`;

        forecast.append(h2, img, h3, tP, hP, sP);
        sharedDiv.append(forecast);
      }
    });
});
function date(i) {
  let print = ``;
  let currentDate = new Date();
  let month = currentDate.getMonth();
  let date = currentDate.getDate() + i;
  let year = currentDate.getFullYear();
  let newDate = newMonth(month, date, year);
  let thisMonth = currentMonth(newDate[0]);

  print = `${thisMonth} ${newDate[1]}, ${year}`;
  return print;
}
function currentMonth(month) {
  if (month == 0) {
    return "Jan.";
  }
  if (month == 1) {
    return "Feb.";
  }
  if (month == 2) {
    return "Mar.";
  }
  if (month == 3) {
    return "Apr.";
  }
  if (month == 4) {
    return "May";
  }
  if (month == 5) {
    return "Jun.";
  }
  if (month == 6) {
    return "Jul.";
  }
  if (month == 7) {
    return "Aug.";
  }
  if (month == 8) {
    return "Sept.";
  }
  if (month == 9) {
    return "Oct.";
  }
  if (month == 10) {
    return "Nov.";
  }
  if (month == 11) {
    return "Dec.";
  }
}
function newMonth(month, date, year) {
  if (
    month == 0 ||
    month == 2 ||
    month == 4 ||
    month == 6 ||
    month == 7 ||
    month == 9
  ) {
    if (date > 31) {
      month += 1;
      date -= 31;
    }
  } else if (month == 3 || month == 5 || month == 8 || month == 10) {
    if (date > 30) {
      month += 1;
      date -= 30;
    }
  } else if (month == 1) {
    if (year % 4 === 0 && date > 29) {
      month += 1;
      date -= 29;
    }
    if (date > 28) {
      month += 1;
      date -= 28;
    }
  }
  return [month, date];
}
