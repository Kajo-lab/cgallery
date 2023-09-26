import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavBar() {
  return (
    <nav>
      <div className="border-b">
        <div className="flex h-16 items-center px-4 container mx-auto">
          <div className="flex items-center gap-2 text-2xl">
            <a href="/">
              <img src="cgallery-logo.png" width="55" height="55" alt="Logo" />
            </a>
            Logo
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="2b.jpg" alt="Profile" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
}
