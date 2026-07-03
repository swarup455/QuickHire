import React from 'react'
import StatsCard from '@/components/landing/StatsCard'
import { BriefcaseBusiness, Building2, Search, Users } from "lucide-react";
import { Button } from '@/components/ui/button';
import CompanyCarousel from '@/components/landing/CompanyCarousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { faqs } from "@/data/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: 10000,
    suffix: "+",
    description: "Active jobs from verified companies.",
  },
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    description: "Trusted companies hiring top talent.",
  },
  {
    icon: Users,
    value: 25000,
    suffix: "+",
    description: "Professionals have started their careers with QuickHire.",
  },
];

const LandingPage = () => {
  return (
    <div className='min-h-screen px-4'>
      <main className='w-full max-w-6xl mx-auto flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
        <section className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-400">
            <img className='h-5 rounded-full object-cover' src="/logo.svg" alt="logo" />
            Find your next opportunity
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Find Your{" "}
            <span className="bg-linear-to-r from-indigo-600 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xs sm:leading-7 text-zinc-400 sm:text-lg">
            Explore thousands of verified job opportunities from top companies,
            connect with recruiters, and apply effortlessly. Whether you're a
            fresher or an experienced professional, QuickHire helps you land the
            right role faster.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-11 text-white rounded-xl bg-indigo-600 px-8 hover:bg-indigo-500"
            >
              Get Started
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-xl border-zinc-700 bg-zinc-900/50 px-8 hover:bg-zinc-800"
            >
              Browse Jobs
            </Button>
          </div>
        </section>
        <CompanyCarousel />

        <section className="py-10 sm:py-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Job Seekers */}
          <Card className="group border-zinc-800 bg-zinc-900/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 px-5 py-8">
            <CardHeader>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <Search className="h-7 w-7" />
              </div>

              <CardTitle className="text-2xl">
                For Job Seekers
              </CardTitle>

              <CardDescription className="text-zinc-400">
                Discover internships and full-time opportunities that match your skills
                and career goals.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li>✓ AI-powered job recommendations</li>
                <li>✓ One-click applications</li>
                <li>✓ Company insights & salary details</li>
                <li>✓ Application tracking dashboard</li>
              </ul>

              <Button size='lg' className="h-11 mt-6 w-full">
                Find Jobs
              </Button>
            </CardContent>
          </Card>

          {/* Employers */}
          <Card className="group border-zinc-800 bg-zinc-900/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10 px-5 py-8">
            <CardHeader>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Building2 className="h-7 w-7" />
              </div>

              <CardTitle className="text-2xl">
                For Employers
              </CardTitle>

              <CardDescription className="text-zinc-400">
                Hire qualified candidates faster with powerful recruitment tools and AI
                matching.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li>✓ Post jobs in minutes</li>
                <li>✓ AI candidate matching</li>
                <li>✓ Manage applicants effortlessly</li>
                <li>✓ Analytics & hiring insights</li>
              </ul>

              <Button size='lg' className="h-11 mt-6 w-full bg-emerald-600 hover:bg-emerald-700">
                Post a Job
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="py-10 sm:py-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <StatsCard
              key={stat.value}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              description={stat.description}
            />
          ))}
        </section>

        {/* Accordion */}
        <section className="py-10 sm:py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-zinc-400">
              Everything you need to know about using our platform.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl px-6"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base hover:no-underline">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-zinc-400 leading-7">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </div>
  )
}

export default LandingPage