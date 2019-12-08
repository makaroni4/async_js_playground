module.exports = (delay) => {
  const now = new Date().getSeconds();

  while (true) {
    if (new Date().getSeconds() - now >= 2) {
      break;
    }
  }
}
