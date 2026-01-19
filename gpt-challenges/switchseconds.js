const changeForSeconds = (time) => {
  const [hours, minutes, seconds] = time.split(":");
  return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
};

console.log(changeForSeconds("01:00:00"));

const secondsToTime = (seconds) => {
  const format = (value) => String(value).padStart(2, "0");

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const second = Math.floor(seconds % 60);
  return `${format(hours)}:${format(minutes)}:${format(second)}`;
};

console.log(secondsToTime(7212));


console.log( 3600 % 3600)