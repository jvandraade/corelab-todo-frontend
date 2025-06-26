import { cn } from "@/lib/utils";

const COLORS = ["blue", "green", "red", "yellow", "purple"];

export function TagSelector({
  selected,
  onSelect,
}: {
  selected?: string;
  onSelect: (color: string) => void;
}) {
  return (
    <div className="flex gap-2">
      {COLORS.map((color) => (
        <button
          key={color}
          onClick={() => onSelect(color)}
          className={cn(
            "w-6 h-6 rounded-full border-2",
            selected === color ? "ring-2 ring-black" : "",
            `bg-${color}-500`
          )}
          title={color}
        />
      ))}
    </div>
  );
}
