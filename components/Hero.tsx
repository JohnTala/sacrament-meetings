import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 text-center">
      <Image
        src="/meeting-hero.jpg"
        alt="Members gathered for a sacrament meeting"
        width={1200}
        height={600}
        className="mx-auto rounded-lg shadow-md"
      />

      <h1 className="mt-6 text-4xl font-bold text-blue-700">
        Welcome to Sacrament Meetings
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        View weekly agendas, speakers, hymns, and announcements.
      </p>
    </section>
  );
}