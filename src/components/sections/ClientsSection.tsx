"use client";
import { useTranslations } from "next-intl";
import { FloatIn } from "../FloatIn";
import { cn } from "@/lib/utils";
import { Building, Building2, Computer, Laptop } from "lucide-react";

type ClientsItem = {
  id: string;
  name: string;
  category: string;
};
type ClientBlock = {
  title: string;
  subtitle: string;
  list: ClientsItem[];
};

const enterprise = {
  1: <Building size={20} color="darkred" />,
  2: <Building2 size={20} color="red" />,
};
const digital = {
  1: <Computer size={20} color="red" />,
  2: <Laptop size={20} color="darkred" />,
};

export default function ClientsSection() {
  const t = useTranslations();
  const data = t.raw("Clients.clients1.list") as ClientsItem[];
  const enzarClients = data.map((item, index) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    icon: index % 2 === 0 ? enterprise[1] : enterprise[2],
  }));
  const digitalData = t.raw("Clients.clients2.list") as ClientsItem[];
  const digitalClients = digitalData.map((item, index) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    icon: index % 2 === 0 ? digital[1] : digital[2],
  }));

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-20">
          <FloatIn direction="none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-xs font-medium uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              {t("Clients.description.0")}
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-4">
              {t("Clients.description.0")}
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6">
              {t("Clients.description.1")}
            </p>
          </FloatIn>
        </div>

        {/* Category 1: Enzar Clients */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">
              {t("Clients.description.2")}
            </h3>
            <p className="text-neutral-500 text-sm">
              {t("Clients.description.3")}
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
              {t("Clients.description.4")}
            </h3>
            <p className="text-neutral-500 text-sm">
              {t("Clients.description.5")}
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
              {t("Clients.description.6")}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SectorStat
                icon="🏛️"
                title={t("Clients.sectors.0.title")}
                subtitle={t("Clients.sectors.0.subtitle")}
              />
              <SectorStat
                icon="🔐"
                title={t("Clients.sectors.1.title")}
                subtitle={t("Clients.sectors.1.subtitle")}
              />
              <SectorStat
                icon="🏢"
                title={t("Clients.sectors.2.title")}
                subtitle={t("Clients.sectors.2.subtitle")}
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
