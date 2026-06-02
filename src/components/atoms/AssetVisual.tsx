import Image from "next/image";
import { getAsset } from "@/lib/assets";
import { withBasePath } from "@/lib/site-paths";
import { SpriteVisual } from "@/components/atoms/SpriteVisual";

type AssetVisualProps = {
  assetId: string;
  className?: string;
  fallbackCrop?: "portrait" | "systems" | "chrome" | "covers" | "headers";
  priority?: boolean;
};

export function AssetVisual({ assetId, className = "", fallbackCrop = "systems", priority = false }: AssetVisualProps) {
  const asset = getAsset(assetId);

  if (!asset.path) {
    return <SpriteVisual className={className} crop={fallbackCrop} label={asset.title} />;
  }

  return (
    <div className={`relative overflow-hidden border border-ink bg-ink dark:border-paper ${className}`}>
      <Image alt={asset.alt} className="object-cover" fill priority={priority} sizes="(min-width: 1024px) 50vw, 100vw" src={withBasePath(asset.path)} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 border border-paper/40 bg-ink/72 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper backdrop-blur">
        {asset.title}
      </div>
    </div>
  );
}
