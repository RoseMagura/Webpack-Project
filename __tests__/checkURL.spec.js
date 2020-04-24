//Edited isURL so that test suites will pass
function isURL(input) {
  var x = input.includes("http://") || input.includes("https://");
  if (x === false) {
    return false;
  } else {
    return true;
  }
}

describe("Checking function", () => {
  test("It should check if the input is a URL or not", () => {
    expect(isURL("https://google.com")).toBe(true);
  });
});
