export function convertDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return remainingMinutes + " м";
  } else if (remainingMinutes === 0) {
    return hours + " ч";
  } else {
    return hours + " ч " + remainingMinutes + " м";
  }
}
