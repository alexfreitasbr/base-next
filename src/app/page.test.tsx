import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home Page", () => {
  it("deve renderizar o título principal", () => {
    render(<Home />);
    const heading = screen.getByText(/To get started, edit the page.tsx file/i);
    expect(heading).toBeInTheDocument();
  });

  it("deve renderizar o logo do Next.js", () => {
    render(<Home />);
    const logo = screen.getByAltText(/Next.js logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("deve conter o link para templates com a URL correta", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /Templates/i });
    expect(link).toHaveAttribute("href", expect.stringContaining("vercel.com/templates"));
  });

  it("deve renderizar o link de Documentação", () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: /Documentation/i });
    expect(link).toHaveAttribute("href", expect.stringContaining("nextjs.org/docs"));
  });
});
