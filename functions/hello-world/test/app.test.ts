import { lambdaHandler } from "./../app";

describe("handler", () => {
  it("should return expected response", async () => {
    // @ts-ignore next-line
    const actual = await lambdaHandler();
    const expected = {
      body: '{"payload":{"message":"hello world"}}',
      headers: {
        "Content-Type": "application/json",
      },
      statusCode: 200,
    };

    expect(actual).toEqual(expected);
  });
});
