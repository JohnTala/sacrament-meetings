import { auth } from "@/auth";
import LogoutButton from "./auth/LogoutButton";

export default async function Header() {
  const session = await auth();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold">
            Springfield 2nd Ward
          </h1>

          {session?.user && (
            <p className="text-sm text-blue-100">
              Welcome, {session.user.name}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm md:text-base">
            {today}
          </p>

          {session?.user && <LogoutButton />}
        </div>
      </div>
    </header>
  );
}