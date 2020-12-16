const showBtn = () => {
  document.getElementById("get-help").classList.remove("hidden");
};

const setShowBtn = () => {
  // checking if the id exists on the element makes it possible to choose on which page it's goiing to be loaded
  const getHelp = document.getElementById("get-help");
  if (getHelp) {
    window.setTimeout(showBtn, 5000);
  }
};

export { setShowBtn };
