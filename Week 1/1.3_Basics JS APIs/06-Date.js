function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1);
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5);
  console.log("After setMonth:", currentDate);

  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15);
  console.log("New Date:", newDate);
}

dateMethods();
