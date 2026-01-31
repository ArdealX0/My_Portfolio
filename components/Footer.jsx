export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t"
      style={{
        background: "linear-gradient(135deg, #374151 0%, #111827 50%, #000000 100%)",
        borderColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
          © {new Date().getFullYear()} Anurag Aggarwal. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
