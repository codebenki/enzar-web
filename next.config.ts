import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  /* config options here */
  experimental: {},
};

export default withNextIntl(nextConfig);
