export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-50 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <span className="font-bold text-xl">Relax & Create</span>
          <span className="ml-2 text-sm">© 2024 Mikael Söderberg</span>
        </div>
        <p className="text-sm text-emerald-200 mb-4">
          Contact: <a href="mailto:Wonderwallart@gmx.net" className="underline">Wonderwallart@gmx.net</a>
        </p>
        <p className="text-xs text-emerald-300 mb-2">
          Premium adult coloring books for stress relief and mindfulness
        </p>
        <a href="#privacy-policy" className="text-xs text-emerald-200 underline">Privacy Policy</a>
      </div>
    </footer>
  )
} 