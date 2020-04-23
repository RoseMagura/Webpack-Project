function formSubmit() {
  const url = document.getElementById("input");
  return 'submitted';
}

formSubmit();

test('this function should provide output', () =>{
  expect(formSubmit()).toBe('submitted');
});
