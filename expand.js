/*The following code snippet will check if any post is loaded
  every 100 ms and once it detects any posts loaded,
  it will trigger the click event of the first post's comment link
  and stop checking.
*/

(function () {
  const intervalId = setInterval(function () {
    const el = document.querySelector(".engagement__comments a");
    if (el) {
      el.click();
      clearInterval(intervalId);
    }
  }, 100);
})();
