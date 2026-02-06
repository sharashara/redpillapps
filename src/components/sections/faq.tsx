"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of AI solutions do you build?",
    answer:
      "We build AI agents, workflow automations, conversational AI (chatbots and voice assistants), custom data pipelines with RAG, and full-stack AI-powered applications. We work with OpenAI, Anthropic, and open-source models depending on your use case.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects go from discovery to production in 4-8 weeks. Simple automations can ship in 1-2 weeks. Complex multi-agent systems or custom applications typically take 6-12 weeks. We focus on shipping working software fast and iterating.",
  },
  {
    question: "Do you work with startups or enterprises?",
    answer:
      "Both. We're a boutique studio, which means we give every client dedicated attention regardless of size. Our sweet spot is companies that want high-impact AI solutions without the overhead of a large consulting firm.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "We start with a free discovery call to understand your operations and identify the highest-ROI automation opportunity. From there, we propose an architecture, agree on scope, and start building. You get regular demos and direct access to the team throughout.",
  },
  {
    question: "What's your tech stack?",
    answer:
      "We use Python and TypeScript as our primary languages, with Next.js, FastAPI, LangChain, and various cloud services (AWS, GCP, Vercel). For automation, we work with n8n, Make, and custom pipelines. We pick the right tool for the job — no vendor lock-in.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every project is scoped individually based on complexity and timeline. We offer both project-based pricing and monthly retainers. Book a call and we'll give you a transparent estimate after understanding your needs.",
  },
];

export function FAQSection() {
  return (
    <section className="relative py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#00ff41]/60 mb-4">
              <span className="text-[#00ff41]">{">"}</span> man redpillapps
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Frequently <span className="gradient-text-matrix">Asked</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="font-mono text-sm text-zinc-200 hover:text-[#00ff41] transition-colors hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-500 text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
