function forEach(items, callback) {
  items.forEach((item) => callback(item));
}

test("TODO 11", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([1, 2], mockCallback);

  // TODO 11: add assertion
  // Test Method Call
  expect(mockCallback).toHaveBeenCalled();
  expect(mockCallback).toHaveBeenCalledTimes(2);
  expect(mockCallback).toHaveBeenCalledWith(1);
  expect(mockCallback).toHaveBeenCalledWith(2);
  // Test Method Return
  expect(mockCallback).toHaveReturned();
  expect(mockCallback).toHaveReturnedTimes(2);
  expect(mockCallback).toHaveReturnedWith(43);
  expect(mockCallback).toHaveReturnedWith(44);
});

test("TODO 12", () => {
  const mockFn = jest.fn();
  mockFn
    .mockReturnValueOnce(42)
    .mockReturnValueOnce("string")
    .mockReturnValue(true); // 表示剩下的都是true

  // TODO 12: to add "expected" value
  expect(mockFn()).toBe(42);
  expect(mockFn()).toBe("string");
  expect(mockFn()).toBe(true);
  expect(mockFn()).toBe(true);
});
