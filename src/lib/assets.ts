import assetsRaw from "@/data/site-assets.json";

export type SiteAsset = {
  id: string;
  title: string;
  usage: string[];
  project: string;
  kind: string;
  status: string;
  path: string;
  alt: string;
  prompt: string;
  sourceUrl?: string;
};

export const siteAssets = assetsRaw as SiteAsset[];

export function getAsset(id: string) {
  const asset = siteAssets.find((item) => item.id === id);

  if (!asset) {
    throw new Error(`Missing site asset: ${id}`);
  }

  return asset;
}

export function getOptionalAsset(id: string) {
  return siteAssets.find((item) => item.id === id);
}
