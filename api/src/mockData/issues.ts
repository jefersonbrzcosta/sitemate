interface DataType {
    id: number;
    title: string;
    description: string;
}

export const data: DataType[] = [
  {
    id: 1,
    title: "Bug in Login Page",
    description:
      "Users are unable to log in. The login button is unresponsive.",
  },
  {
    id: 2,
    title: "Feature Request: Dark Mode",
    description:
      "Add a dark mode option for users who prefer a darker color scheme.",
  },
  {
    id: 3,
    title: "Error in Profile Page",
    description:
      "Users are seeing 404 error when trying to access their profiles.",
  },
  {
    id: 4,
    title: "Enhancement: Mobile Responsiveness",
    description:
      "Improve the website's layout and functionality for mobile users.",
  },
  {
    id: 5,
    title: "Security Vulnerability: XSS Attack",
    description:
      "Fix a potential cross-site scripting (XSS) vulnerability in the comment section.",
  },
];