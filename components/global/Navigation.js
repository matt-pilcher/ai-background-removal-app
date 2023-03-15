import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-teal-400 py-6">
      <div className="max-w-7xl flex mx-auto items-center justify-between px-6">
        <Link href='/'><span class="font-semibold text-xl tracking-tight">Background Remover</span></Link>
        <Link href="https://github.com/matt-pilcher/ai-background-removal-app"><span className="text-white">Source Code</span></Link>
      </div>
    </nav>
  )
}