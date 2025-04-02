import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Jonathan Yombo',
        role: 'Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        quote: 'I’ve known Amanamabasi for years and watched him grow into an incredible developer. He’s not just good at what he does, he actually cares about making things work for people. If you work with him, you’re in great hands.',
    },
    {
        name: 'Yves Kalume',
        role: 'GDE - Android',
        image: 'https://randomuser.me/api/portraits/men/6.jpg',
        quote: 'Working with Amanamabasi was an absolute win. I needed a website that truly reflected my brand, and he nailed it. Super easy to work with, always open to feedback, and the final result was better than I imagined.',
    },
    {
        name: 'Roland Tubonge',
        role: 'Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/13.jpg',
        quote: 'Amanamabasi built a logistics tracking system for my business, streamlining my process and efficiency—not to mention the fast and modern interfaces. Highly recommend! ',
    },
    {
        name: 'Yucel Faruksahan',
        role: 'Tailkits Creator',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        quote: 'I was in a rush to launch my web app, and Amanamabasi delivered without cutting corners. Clean code, great design, and he even threw in some extra features that made everything run smoother. If you need a dev, this is your guy.',
    },

    {
        name: 'Khatab Wedaa',
        role: 'MerakiUI Creator',
        image: 'https://randomuser.me/api/portraits/men/10.jpg',
        quote: "Amanamabasi is that friend who always figures things out. Tech problems, business ideas, or just life advice, he’s the person you want in your corner. He sees solutions before anyone else does.",
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-title text-3xl font-semibold">What People Say About Me.</h2>
                        <p className="text-body mt-6">I build more than applications, I build trust. Here’s what people have to say.</p>
                    </div>
                    <div className="mt-8 grid gap-3 [--color-card:var(--color-muted)] sm:grid-cols-2 md:mt-12 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="space-y-3 *:border-none *:shadow-none">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
