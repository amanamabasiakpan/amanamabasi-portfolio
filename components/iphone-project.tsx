import { Activity, Mail, Zap } from 'lucide-react'
import Image from 'next/image'

export default function IphoneProject() {
    return (
        <section className="py-15 md:py-32 ">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2 px-6">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-2xl font-semibold lg:text-3xl">Apple iPhone 15 Pro</h2>
                            <p className="mt-6">A React.js & TailwindCSS replica of Apple’s iPhone 15 Pro website, featuring stunning GSAP animations and interactive 3D models powered by Three.js.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Zap className="size-5" />
                                React.js, Vite, Tailwind CSS, Three.js, React Three Fiber, React Drei, GSAP (Greensock)
                            </li>
                        </ul>
                        <div className='flex pt-5 gap-5'>
                        <a href="https://github.com/amanamabasiakpan/apple-iphone">
                        <Image src="assets/github.svg" className="size-6 dark:invert" alt="github" width={120} height={92} />
                        </a>
                        <a href="https://apple-iphone-roan-one.vercel.app/">
                        <Image src="assets/link.svg" className="size-6 dark:invert" alt="link" width={120} height={92} />
                        </a>
                        </div>
                    </div>
                    <div className=" order-first border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-76/45 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/assets/iphone-project.webp" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1200} height={920} />
                            <Image src="/assets/iphone-project.webp" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1200} height={920} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
