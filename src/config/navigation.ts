export interface NavigationLink {
  href: `#${string}`;
  label: string;
}

export const siteNavigation = [
  { href: "#work", label: "Chronicle" },
  { href: "#about", label: "Profile" },
  { href: "#contact", label: "Inquiry" },
  { href: "#all-works", label: "Complete index" },
] as const satisfies readonly NavigationLink[];
