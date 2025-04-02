"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function CallToAction() {
  
  const [copied, setCopied] = useState(false);
  const email = "amanamabasiakpan@gmail.com";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000); 
  };


  return (
    <section className="pb-10 pt-30 md:py-15" id="contact">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-5xl font-semibold lg:text-6xl">
            Hire me for your next project
          </h2>
          <p className="mt-4 text-lg">
            I build fast, clean, and reliable web solutions. If you need a
            developer who delivers, let’s work together.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {/* <Button asChild size="lg" className="px-20 text-lg">
              <Link href="mailto:amanamabasiakpan@gmail.com">
                <span>Email</span>
              </Link>
            </Button> */}

            <Button
                onClick={copyEmailToClipboard}
                size="lg"
                className="px-20 text-lg sm:min-w-[300px] sm:w-auto w-full transition"
              >
                {copied ? "Email Copied!" : "Copy Email"}
            </Button>

            <Button asChild size="lg" variant="outline" className="px-20 text-lg w-full sm:w-auto">
              <Link href={`mailto:${email}`}>
                <span>Send Email</span>
              </Link>
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}
