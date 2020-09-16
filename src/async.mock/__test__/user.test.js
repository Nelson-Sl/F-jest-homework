import axios from "axios";
import { register } from "../user";
import { verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    axios.post.mockResolvedValueOnce({
      data: {
        name: "Nelson",
      },
    });
    const result = register("fake username", "fake password");
    await expect(result).resolves.toEqual({ name: "Nelson" });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyPassword("fake password").mockImplementation(() => false);
    const result = register("fake username", "fake password");
    await expect(result).rejects.toThrow("wrong username or password");
  });
});
