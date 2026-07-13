export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">
          Springfield 2nd Ward
        </h1>

        <p className="text-sm md:text-base">
          {today}
        </p>
      </div>
    </header>
  );
}