import { Zap } from 'lucide-react'
import Image from 'next/image'

export default function MovieScanner() {
    return (
        <section className="py-15 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2 px-6">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-2xl font-semibold lg:text-3xl">TMDB Movie Scanner</h2>
                            <p className="mt-6">A sleek React.js movie discovery platform powered by Appwrite for a dynamic Trending Movies Algorithm, TMDB API for real-time movie data, and styled with Tailwind CSS.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Zap className="size-5" />
                                React.js, Appwrite, TMDB API, Tailwind CSS
                            </li>
                        </ul>
                        <div className='flex pt-5 gap-5'>
                        <a href="https://github.com/amanamabasiakpan/tmdb-movie-scanner" target="_blank">

                        <Image src="assets/github.svg" className="size-6 dark:invert" alt="github" width={120} height={92} />
                        
                        </a>
                        <a href="https://tmdb-movie-scanner.vercel.app/" target="_blank">
                        <Image src="assets/link.svg" className="size-6 dark:invert" alt="link" width={120} height={92} />
                        </a>
                        </div>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3 order-first md:order-last">
                        <div className="bg-linear-to-b aspect-76/45 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/assets/movie-scanner.webp" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1200} height={920} />
                            <Image src="/assets/movie-scanner.webp" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1200} height={920} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
