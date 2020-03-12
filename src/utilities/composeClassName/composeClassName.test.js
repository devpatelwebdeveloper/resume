import composeClassName from "./composeClassName";

describe("composeClassName function", () => {
  it("returns correct string when all inputs are non-empty string", () => {
    const input = ["Hello", "this", "is", "my", "string"];
    const output = "Hello this is my string";

    const className = composeClassName(input);

    expect(className).toEqual(output);
  });

  it("returns correct string with empty string included in input", () => {
    const input = ["Hello", "this", "is", "", "string"];
    const output = "Hello this is string";

    const className = composeClassName(input);

    expect(className).toEqual(output);
  });

  it("returns correct string with empty string as last input", () => {
    const input = ["Hello", "this", "is", "string", ""];
    const output = "Hello this is string";

    const className = composeClassName(input);

    expect(className).toEqual(output);
  });

  it("does not return error with null, undefined or number input", () => {
    const input = ["Hello", null, undefined, 4, "string"];
    const output = "Hello 4 string";

    const className = composeClassName(input);

    expect(className).toEqual(output);
  });
});
