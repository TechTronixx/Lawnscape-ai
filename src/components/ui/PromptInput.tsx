import { Send } from "lucide-react";
import clsx from "clsx";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const PRESETS = [
  "Minimalist Zen Garden with stone paths",
  "Modern Pool Deck with fire pit",
  "English Cottage Garden with wildflowers",
  "Desert Xeriscape with succulents",
];

export const PromptInput = ({
  value,
  onChange,
  onGenerate,
  isGenerating,
}: PromptInputProps) => {
  return (
    <div className="space-y-6">
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Describe the architectural vision (e.g., 'Modernist concrete patio with native drought-tolerant planting')..."
          className="w-full h-40 bg-white border border-black/10 rounded-xl p-6 text-lg font-light focus:outline-none focus:border-black/30 focus:ring-0 resize-none transition-all placeholder:text-muted-foreground/50"
          disabled={isGenerating}
        />
        <div className="absolute bottom-4 right-4">
          <span
            className={clsx(
              "text-xs font-mono transition-colors",
              value.length > 20 ? "text-primary" : "text-muted-foreground/30"
            )}
          >
            {value.length} / 500
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset}
            onClick={() => onChange(preset)}
            disabled={isGenerating}
            className="px-3 py-1.5 rounded-full border border-black/5 bg-black/5 text-xs text-zinc-600 hover:bg-black hover:text-white transition-all duration-300"
          >
            {preset}
          </button>
        ))}
      </div>

      <button
        onClick={onGenerate}
        disabled={!value.trim() || isGenerating}
        className={clsx(
          "w-full py-5 rounded-xl font-display italic text-lg tracking-widest flex items-center justify-center gap-3 transition-all duration-300",
          !value.trim() || isGenerating
            ? "bg-[#EAEAE5] text-zinc-400 cursor-not-allowed"
            : "bg-primary text-white hover:bg-[#3A4A38] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        )}
      >
        {isGenerating ? (
          <span className="animate-pulse">Schetching Structure...</span>
        ) : (
          <>
            Render Vision <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </button>
    </div>
  );
};
