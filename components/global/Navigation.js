import Link from "next/link"

export default function Navigation() {
  return (
    <nav class="bg-teal-400 py-6">
      <div class="max-w-7xl flex mx-auto items-center justify-between">
        <Link href='/'><span class="font-semibold text-xl tracking-tight">Background Remover</span></Link>
        <Link href="https://github.com/matt-pilcher/ai-background-removal-app"><span className="text-white">Source Code</span></Link>
      </div>
    </nav>
  )
}