import { Activity, Mail, Zap } from 'lucide-react'
import Image from 'next/image'

export default function LogisticsProject() {
    return (
        <section className="py-15 md:py-32 ">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2 px-6">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-2xl font-semibold lg:text-3xl">Logistics Tracking App</h2>
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
                        <Image src="assets/github.svg" className="size-6 dark:invert" alt="github" width={120} height={92} />
                        </a>
                        <a href="#">
                        <Image src="assets/link.svg" className="size-6 dark:invert" alt="link" width={120} height={92} />
                        </a>
                        </div>
                    </div>
                    <div className=" order-first border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-linear-to-b aspect-76/45 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/assets/tahsimlogistics.webp" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1200} height={920} />
                            <Image src="/assets/tahsimlogistics.webp" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1200} height={920} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
