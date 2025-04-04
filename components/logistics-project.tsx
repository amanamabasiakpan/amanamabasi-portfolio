import { Zap } from 'lucide-react'
import Image from 'next/image'

export default function LogisticsProject() {
    return (
        <section className="py-10 md:py-10">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2 px-6">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-2xl font-semibold lg:text-3xl">Logistics Tracking App</h2>
                            <p className="mt-6">A PHP (Laravel) & WordPress-powered system for real-time shipment tracking, role-based access, and automated updates. Secure, scalable, and user-friendly.

</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Zap className="size-5" />
                                PHP (Laravel), WordPress, MySQL, Bootstrap.
                            </li>
                        </ul>
                        <div className='flex pt-5 gap-5'>
                        <a href="#">
                        <Image src="assets/github.svg" className="size-6 dark:invert" alt="github" width={120} height={92} />
                        </a>
                        <a href="http://app.tahsimlogistics.com/" target="_blank">
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
