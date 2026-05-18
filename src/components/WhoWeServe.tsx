import Image from "next/image";

const clients = [
  "Property investment and development firms",
  "Asset managers deploying capital internationally",
  "Cross-border trade and operating businesses",
  "Proprietary capital operators",
  "Organisations managing substantial transaction flow",
];

const controls = [
  "Role-based access and approval controls",
  "Transaction monitoring and reporting",
  "Structured operational workflows",
  "Secure authentication standards",
  "Infrastructure built to support large transaction volumes",
];

function DotList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-[1rem] font-medium leading-snug text-black/80">
      {items.map((item) => (
        <li key={item}>· {item}</li>
      ))}
    </ul>
  );
}

export default function WhoWeServe() {
  return (
    <section className="page-shell py-8 lg:py-12">
      <div className="mx-auto max-w-[1390px] px-6 lg:px-10">
        <div className="soft-card grid gap-10 rounded-[1.5rem] p-8 lg:grid-cols-[1fr_0.98fr] lg:p-14">
          <div className="flex flex-col justify-center">
            <h2 className="max-w-[650px] text-[1.75rem] font-bold leading-tight text-black lg:text-[2.1rem]">
              Designed for Institutional Cross-
              <br />
              Border Operators
            </h2>
            <div className="mt-10">
              <p className="text-[1rem] font-semibold text-black">
                Vaxen Global Supports
              </p>
              <DotList items={clients} />
            </div>
            <p className="mt-10 max-w-[650px] text-[1rem] font-medium leading-[1.65] text-black/80">
              Our focus is on professional operators transacting at scale across
              multiple jurisdictions.
            </p>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-[1rem] lg:min-h-[30rem]">
            <Image
              src="/assets/Pattern 11.jpg"
              alt="Institutional cross-border activity"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="soft-card mt-16 grid gap-10 rounded-[1.5rem] p-8 lg:grid-cols-[0.98fr_1fr] lg:p-14">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[1rem] lg:min-h-[30rem]">
            <Image
              src="/assets/Pattern 10.jpg"
              alt="Operational controls"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-[1.75rem] font-bold leading-tight text-black lg:text-[2.1rem]">
              Security &amp; Operational Controls
            </h2>
            <div className="mt-10">
              <p className="text-[1rem] font-semibold text-black">
                Vaxen Global Supports
              </p>
              <DotList items={controls} />
            </div>
            <p className="mt-10 text-[1rem] font-medium leading-[1.65] text-black/80">
              Operational discipline is foundational.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
