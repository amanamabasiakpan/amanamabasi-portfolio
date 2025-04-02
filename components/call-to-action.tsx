import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="pb-10 pt-30 md:py-15">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Need a developer for your next product or team?
          </h2>
          <p className="mt-4">I build fast, clean, and reliable web solutions. If you need a developer who delivers, let’s work together.</p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="px-20 text-lg">
              <Link href="mailto:amanamabasiakpan@gmail.com">
                <span>Email</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="px-20 text-lg">
              <Link href="tel:+2349077016503">
                <span>Call</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
