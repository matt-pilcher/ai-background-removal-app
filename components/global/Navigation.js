import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-white py-6">
      <div className="max-w-7xl flex mx-auto items-center justify-between px-6">
        <Link href='/'>
          <span className="font-semibold text-xl tracking-tight">Background Remover</span>
        </Link>
        <Link href="https://github.com/matt-pilcher/ai-background-removal-app"><span className="underline">Source Code</span></Link>
      </div>
    </nav>
  )
}