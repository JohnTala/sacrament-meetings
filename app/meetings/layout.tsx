import NavLinks from "@/components/NavLinks";

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="mb-6 text-3xl font-bold text-blue-700">
        Sacrament Meetings
      </h1>

      <div className="mb-8">
        <NavLinks />
      </div>

      {children}
    </section>
  );
}