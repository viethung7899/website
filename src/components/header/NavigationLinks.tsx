import { Button } from "../ui/button"

const LINKS = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects"},
  { title: "Blog", href: "#"}
]

export const NavigationLinks: React.FC<{}> = () => {
  return <nav className="hidden sm:flex items-center">
    {LINKS.map(({ title, href }) => (
      <Button asChild variant="ghost">
        <a key={href} href={href} title={title}>{title}</a>
      </Button>
    ))}
  </nav>
}