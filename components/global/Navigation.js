import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-white py-6">
      <div className="max-w-7xl flex mx-auto items-center justify-between px-6">
        <Link href='/' className="block">
          <span className="sr-only">App Icon</span>
          <span className="font-semibold text-xl tracking-tight inline">
            {/* TODO: Move the svgs to an external file to reduce the noise here */}
            <svg className="inline pr-2" fill="#2DD4BF" width="50px" height="50px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <title>App Icon</title>
                <path d="M8.24,25.14,7,26.67a13.79,13.79,0,0,0,4.18,2.44l.69-1.87A12,12,0,0,1,8.24,25.14Z"></path>
                <path d="M4.19,18l-2,.41A14.09,14.09,0,0,0,3.86,23L5.59,22A12.44,12.44,0,0,1,4.19,18Z"></path>
                <path d="M11.82,4.76l-.69-1.87A13.79,13.79,0,0,0,7,5.33L8.24,6.86A12,12,0,0,1,11.82,4.76Z"></path>
                <path d="M5.59,10,3.86,9a14.37,14.37,0,0,0-1.64,4.59l2,.34A12.05,12.05,0,0,1,5.59,10Z"></path>
                <path d="M16,2V4a12,12,0,0,1,0,24v2A14,14,0,0,0,16,2Z"></path>
                <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="appIcon" width="32" height="32"></rect>
              </g>
            </svg>
            Background Remover
          </span>
        </Link>

        {/* Making the source code link styling conditionally display based on the viewport size for now */}
        <Link href="https://github.com/matt-pilcher/ai-background-removal-app">
          {/* Mobile */}
          <span className="sr-only">GitHub Icon</span>
          <svg className="w-8 h-8 flex sm:hidden" fill="#2f4f4f" viewBox="0 0 24 24" aria-hidden="true">
            <path 
              fillRule="evenodd" 
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
              clipRule="evenodd"
            />
          </svg>

          {/* Standard */}
          <span className="hidden sm:flex underline">
            Source Code
          </span>
        </Link>
      </div>
    </nav>
  )
}