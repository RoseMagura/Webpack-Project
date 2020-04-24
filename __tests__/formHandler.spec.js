function formSubmit() {
  const url = document.getElementById("input");
  return "submitted";
}

formSubmit();

test("this function should provide output when form is submitted", () => {
  expect(formSubmit()).toBe("submitted");
});
