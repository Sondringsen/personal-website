import TableOfContentBase from '@/components/TableOfContentBase';
import MobileNav from '@/components/MobileNav';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#f0ede8] dark:bg-[#1a1816]" />
      <div className="absolute left-8 top-0 h-32 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent md:left-16" />
      <MobileNav />
      <div className="flex">
        <div className="hidden md:flex items-center relative min-h-screen w-48 shrink-0 border-r border-accent">
          <TableOfContentBase />
        </div>
        <main className="flex-1 relative flex min-h-screen flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            <h1 className="animate-fade-in font-[family-name:var(--font-serif)] text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Sondre Rogde
            </h1>
            
            {/* Short tagline */}
            <p className="animate-fade-in-delay-1 mt-4 font-[family-name:var(--font-serif)] text-lg italic text-muted md:text-xl">
              Student
            </p>
            
            {/* Description */}
            <div className="animate-fade-in-delay-2 mt-8 space-y-4 text-base leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
              <p>
                I&apos;m a student, passionate about learning and building cool things. 
                My academic interests are in AI, machine learning, data science, and statistics.
                Whenever I get the chance, I like to run and work out. Most of all I like to spend time with my girlfriend.
              </p>
              <p>
                This webpage is a place for me to write about anything that interests me. 
                Some of it will of course be of academic nature, but I also write about anything I 
                find interesting at the moment. If you for any reason want to get in touch please
                feel free to send me an email or contact me on LinkedIn.
              </p>
            </div>
            
            {/* Links */}
            <div className="animate-fade-in-delay-3 mt-12 flex flex-wrap gap-6 text-sm font-medium">
              <a
                href="mailto:sondre.rogde@gmail.com"
                className="group flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <span className="h-px w-4 bg-current transition-all group-hover:w-6" />
                Email
              </a>
              <a
                href="https://github.com/sondringsen"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <span className="h-px w-4 bg-current transition-all group-hover:w-6" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sondre-rogde-86717a1b8/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <span className="h-px w-4 bg-current transition-all group-hover:w-6" />
                LinkedIn
              </a>
              <a
                href="https://www.strava.com/athletes/137727079"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted transition-colors hover:text-foreground"
              >
                <span className="h-px w-4 bg-current transition-all group-hover:w-6" />
                Strava
              </a>
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
