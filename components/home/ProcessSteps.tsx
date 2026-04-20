import NumberedSteps from "@/components/ui/NumberedSteps";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const steps = [
  {
    title: "Inspection",
    copy: "We walk every vehicle through a 40-point inspection before we quote a single dollar, so you know exactly what needs attention.",
  },
  {
    title: "Diagnostic",
    copy: "Computer diagnostics scan every electronic system — engine, gearbox, ABS, airbags — then we translate the faults into plain English.",
  },
  {
    title: "Upgrade & repair",
    copy: "Repairs are carried out by certified mechanics using OEM or equivalent parts, and backed by our 12-month workmanship guarantee.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative bg-brand-darker py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px divider-orange" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow className="justify-center">How it works</SectionEyebrow>
          <h2 className="mt-5 text-balance font-display text-4xl uppercase leading-[0.95] tracking-tightest text-white sm:text-5xl">
            A clear path from <span className="text-brand-orange">problem to road</span>.
          </h2>
          <p className="mt-5 text-pretty text-white/65">
            No surprise invoices. No ambiguous fixes. Three straightforward
            steps, every single visit.
          </p>
        </div>

        <div className="mt-20">
          <NumberedSteps steps={steps} />
        </div>
      </div>
    </section>
  );
}
