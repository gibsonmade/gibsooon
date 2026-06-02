import { withBasePath } from "@/lib/site-paths";

type SpriteVisualProps = {
  label: string;
  crop: "portrait" | "systems" | "chrome" | "covers" | "headers";
  className?: string;
};

const cropStyles = {
  portrait: "bg-[length:100%_600%] bg-[position:center_0%]",
  systems: "bg-[length:100%_600%] bg-[position:center_20%]",
  chrome: "bg-[length:100%_600%] bg-[position:center_40%]",
  covers: "bg-[length:100%_600%] bg-[position:center_61%]",
  headers: "bg-[length:100%_600%] bg-[position:center_81%]"
};

export function SpriteVisual({ label, crop, className = "" }: SpriteVisualProps) {
  return (
    <div
      aria-label={label}
      className={`relative overflow-hidden border border-ink bg-no-repeat dark:border-paper ${cropStyles[crop]} ${className}`}
      role="img"
      style={{ backgroundImage: `url(${withBasePath("/assets/images/gibsooon-mood-board-sprite.jpg")})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 border border-paper/40 bg-ink/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper backdrop-blur">
        {label}
      </div>
    </div>
  );
}
