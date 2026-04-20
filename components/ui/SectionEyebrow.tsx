type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionEyebrow({ children, className = "" }: Props) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-orange ${className}`}
    >
      <span className="h-px w-8 bg-brand-orange" aria-hidden="true" />
      {children}
    </p>
  );
}
