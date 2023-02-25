
import { render, screen ,fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";


describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="hello">
        <h3>My </h3>
        <p>some content</p>

      </Accordion>
    );
  });
 

  test("should show the title all time ", () => {
    expect ( screen.getByText("hello")).toBeDefined();
  })

  test("should not show the content by default", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  })

  test("should show the content when the button is clicked", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeTruthy();
    
  })

  test("should hide the content when the button is clicked twice", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeNull();
  })

});


