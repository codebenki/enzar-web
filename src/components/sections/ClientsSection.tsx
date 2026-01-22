"use client";
import { FloatIn } from "../FloatIn";
import { cn } from "@/lib/utils";

const enzarClients = [
  {
    name: "Ministry of Finance",
    category: "Government",
    icon: "🏛️",
    color: "bg-red-900/40",
  },
  {
    name: "Ministry of Foreign Affairs",
    category: "Government",
    icon: "🌐",
    color: "bg-red-900/40",
  },
  {
    name: "Saudi Royal Guard",
    category: "Security",
    icon: "🏰",
    color: "bg-red-900/40",
  },
  {
    name: "Ministry of Defense",
    category: "Security",
    icon: "🛡️",
    color: "bg-red-900/40",
  },
  {
    name: "Ministry of Interior",
    category: "Security",
    icon: "🔓",
    color: "bg-red-900/40",
  },
  {
    name: "General Intelligence Presidency",
    category: "Security",
    icon: "🕵️",
    color: "bg-red-900/40",
  },
  {
    name: "Saudi Binladin Group",
    category: "Enterprise",
    icon: "🏗️",
    color: "bg-emerald-900/40",
  },
  {
    name: "Saudi Oger",
    category: "Enterprise",
    icon: "🏢",
    color: "bg-emerald-900/40",
  },
  {
    name: "Saudi Polyolefins",
    category: "Enterprise",
    icon: "🧪",
    color: "bg-emerald-900/40",
  },
];

const digitalClients = [
  {
    name: "Cluster 2",
    category: "Digital",
    icon: "🔄",
    color: "bg-red-900/40",
  },
  { name: "DACO", category: "Digital", icon: "💼", color: "bg-red-900/40" },
  { name: "Elm", category: "Digital", icon: "🌳", color: "bg-red-900/40" },
  { name: "Arkan", category: "Digital", icon: "🏛️", color: "bg-red-900/40" },
  { name: "RG", category: "Digital", icon: "⚡", color: "bg-red-900/40" },
  {
    name: "Enzar Company",
    category: "Internal",
    icon: "🔧",
    color: "bg-red-900/40",
  },
];

export default function ClientsSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-20">
          <FloatIn direction="none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-medium uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Our Clients
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4">
              Our Clients
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
              Trusted by leading government agencies, security organizations,
              and major enterprises across Saudi Arabia for mission-critical
              digital solutions.
            </p>
          </FloatIn>
        </div>

        {/* Category 1: Enzar Clients */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">Enzar Clients</h3>
            <p className="text-neutral-500 text-sm">
              Government, Security & Enterprise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enzarClients.map((client, idx) => (
              <ClientCard key={idx} client={client} delay={idx * 0.05} />
            ))}
          </div>
        </div>

        {/* Category 2: Digital Clients */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">
              Enzar Digital Clients
            </h3>
            <p className="text-neutral-500 text-sm">
              Digital Solutions & Technology Transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {digitalClients.map((client, idx) => (
              <ClientCard key={idx} client={client} delay={idx * 0.05} />
            ))}
          </div>
        </div>

        {/* Sector Summary Footer */}
        <FloatIn direction="up">
          <div className="rounded-[40px] bg-[#0A0505] border border-white/5 p-10 md:p-12 text-center">
            <h4 className="text-white text-xl font-bold mb-8">
              Trusted by Critical Sectors
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SectorStat
                icon="🏛️"
                title="Government"
                subtitle="6+ Ministries"
              />
              <SectorStat
                icon="🔐"
                title="Security"
                subtitle="Critical Agencies"
              />
              <SectorStat
                icon="🏢"
                title="Enterprise"
                subtitle="Major Corporations"
              />
            </div>
          </div>
        </FloatIn>
      </div>
    </section>
  );
}

const ClientCard = ({ client, delay }: { client: any; delay: number }) => (
  <FloatIn direction="up" delay={delay}>
    <div
      className={cn(
        "flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-[#1E0D0D] hover:bg-[#1a1a1a] transition-all group",
      )}
    >
      <div
        className={cn(
          "h-12 w-12 rounded-xl flex items-center justify-center text-xl shadow-inner",
          client.color,
        )}
      >
        {client.icon}
      </div>
      <div>
        <p className="text-white font-bold text-sm md:text-base group-hover:text-red-500 transition-colors">
          {client.name}
        </p>
        <p className="text-neutral-500 text-xs">{client.category}</p>
      </div>
    </div>
  </FloatIn>
);

const SectorStat = ({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center space-y-2 hover:bg-white/10 transition-colors">
    <span className="text-2xl">{icon}</span>
    <p className="text-white font-bold">{title}</p>
    <p className="text-neutral-500 text-xs">{subtitle}</p>
  </div>
);
