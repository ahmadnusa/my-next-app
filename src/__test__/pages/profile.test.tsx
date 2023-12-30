import Profile from "@/pages/profile";
import { render, screen } from "@testing-library/react";

describe("Profile page", () => {
  it("should render without crashing", () => {
    const page = render(<Profile />);
    expect(page).toMatchSnapshot();
  });
});
