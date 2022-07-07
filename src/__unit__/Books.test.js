import Books from "../components/Books/Books";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get(
    "http://openlibrary.org/search.json",
    (req, res, ctx) => {
      return res(
        ctx.json({
          docs: [
            {
              isbn: ["0385472579"],
              publish_year: [1991],
              title: "the lord of gas rings",
              authors: ["test 1"],
            },
          ],
        })
      );
    }
  )
);

describe("renders Books", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders search form", () => {
    render(<Books />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    const serachButton = screen.getByText(/Search/);
    expect(serachButton).toBeInTheDocument();
    expect(serachButton).toBeDisabled();
  });

  it("fetch data on button click", async () => {
    render(<Books />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "the lord of rings" } });
    expect(inputElement.value).toBe("the lord of rings");
    const serachButton = screen.getByText(/Search/);
    userEvent.click(serachButton);
    await waitFor(() => screen.getByText('the lord of gas rings'));
    const bookTitle = screen.getByText(/the lord of gas rings/);
    expect(bookTitle).toBeInTheDocument();
  });
});
