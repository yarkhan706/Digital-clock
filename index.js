function updateDay() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    months: "long",
    day: "numeric",
  };

  const date = now.toLocaleDateString(undefined,options);

  document.querySelector(".date").textContent = date;
}

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const time = `${formatTime(hours)}:${formatTime(min)}:${formatTime(sec)}`;

  document.querySelector(".time").textContent = time;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

updateDay();
setInterval(updateTime, 1000);
