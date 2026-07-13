export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-300 bg-gray-100 py-6 shadow-inner">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm font-medium text-gray-600">
          Copyright &copy; {new Date().getFullYear()} |{" "}
          <span className="font-semibold text-blue-700">Saidi Talatala</span> |
          Sacrament Meetings | All rights reserved
        </p>
      </div>
    </footer>
  );
}