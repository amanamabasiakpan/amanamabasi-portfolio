import { Activity, Mail, Zap } from 'lucide-react'
import Image from 'next/image'

export default function PortfolioProject() {
    return (
        <section className="py-5 md:py-10">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-2xl font-semibold lg:text-3xl">Portfolio Website</h2>
                            <p className="mt-6">Orrupti aut temporibus assumenda atque ab, accusamus sit, molestiae veniam laboriosam pariatur.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Mail className="size-5" />
                                Email and web support
                            </li>
                            <li>
                                <Zap className="size-5" />
                                Fast response time
                            </li>
                            <li>
                                <Activity className="size-5" />
                                Menitoring and analytics
                            </li>
                        </ul>
                        <div className='flex pt-5 gap-5'>
                        <a href="#">
                        <img src="assets/github.svg" alt="" className="size-6 dark:invert"/>
                        </a>
                        <a href="#">
                        <img src="assets/link.svg" alt="" className="size-6 dark:invert"/>
                        </a>
                        </div>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-76/45 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/assets/portfolio.webp" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1200} height={920} />
                            <Image src="/assets/portfolio.webp" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1200} height={920} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
