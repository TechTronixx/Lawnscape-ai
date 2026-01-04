import { useState } from "react";
import { motion } from "framer-motion";
import { UploadZone } from "../components/ui/UploadZone";
import { PromptInput } from "../components/ui/PromptInput";
import { ComparisonSlider } from "../components/ui/ComparisonSlider";
import { ArrowLeft, AlertCircle } from "lucide-react";

// Mock Result
const MOCK_RESULT_URL =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000&auto=format&fit=crop";

type Step = "upload" | "prompt" | "generating" | "result";

export const Generator = () => {
  const [step, setStep] = useState<Step>("upload");
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = (file: File) => {
    const url = URL.createObjectURL(file);
    setOriginalImage(url);
    setStep("prompt");
    setError(null);
  };

  const handleGenerate = async () => {
    setStep("generating");
    setError(null);

    // MOCK GENERATION LOGIC
    setTimeout(() => {
      setStep("result");
    }, 4500); // 4.5s for the sketch animation
  };

  const handleReset = () => {
    setStep("upload");
    setOriginalImage(null);
    setPrompt("");
    setError(null);
  };

  return (
    <div className="min-h-screen w-full bg-[#F4F4F0] pt-24 pb-12 px-6">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-8rem)]">
        {/* LEFT COLUMN: VISUALIZER */}
        <div className="lg:col-span-8 flex flex-col gap-6 h-full">
          {/* Navigation: Return to Upload */}
          {step !== "upload" && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleReset}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest hover:text-primary/60 transition-colors w-fit"
            >
              <ArrowLeft className="w-3 h-3" />
              Return to Upload
            </motion.button>
          )}

          {/* Main Canvas */}
          <div className="flex-1 bg-white border border-black/5 rounded-3xl shadow-sm overflow-hidden relative group">
            {step === "upload" ? (
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="max-w-xl w-full">
                  <UploadZone onImageSelected={handleImageSelect} />
                </div>
              </div>
            ) : (
              <div className="w-full h-full relative">
                {/* Original Image (for prompt step) */}
                {(step === "prompt" || step === "generating") && (
                  <img
                    src={originalImage!}
                    alt="Original Context"
                    className={`w-full h-full object-cover transition-all duration-[3s] ${
                      step === "generating"
                        ? "filter grayscale blur-sm scale-110"
                        : ""
                    }`}
                  />
                )}

                {/* Loading Overlay: Sketching Effect */}
                {step === "generating" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F4F4F0]/90 z-20 backdrop-blur-md">
                    <div className="w-32 h-32 border border-primary/20 rounded-full flex items-center justify-center mb-6 relative">
                      <div className="absolute inset-0 border-t border-primary rounded-full animate-spin duration-[3s]" />
                      <span className="font-display italic text-3xl text-primary">
                        Ai
                      </span>
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-display text-primary animate-pulse">
                        Drafting Geometry...
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        Analyzing terrain & elements...
                      </p>
                    </div>
                  </div>
                )}

                {/* Result View */}
                {step === "result" && (
                  <div className="absolute inset-0 animate-fade-in">
                    <ComparisonSlider
                      beforeImage={originalImage!}
                      afterImage={MOCK_RESULT_URL}
                    />
                    <div className="absolute bottom-6 right-6 flex gap-4 z-20">
                      <button
                        onClick={() => alert("Curated to Gallery")}
                        className="bg-white/90 backdrop-blur text-primary px-6 py-3 rounded-full font-display italic shadow-lg hover:bg-white transition-colors"
                      >
                        Curate to Gallery
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: CONTROLS */}
        <div className="lg:col-span-4 flex flex-col h-full gap-6">
          {/* Info Panel: Context & Actions */}
          <div className="bg-white p-8 rounded-3xl border border-black/5 flex-1 flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-black/10 px-2 py-1 rounded-full">
                Stage
              </span>
              <div className="text-4xl font-display font-medium text-primary mt-4">
                {step === "upload" && "01 Source Import"}
                {step === "prompt" && "02 Vision Prompt"}
                {step === "generating" && "03 Synthesis"}
                {step === "result" && "04 Presentation"}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-zinc-500 font-light leading-relaxed">
                {step === "upload" &&
                  "Upload a clear photo of the existing site to begin the analysis. Compatible with JPG, PNG, and WEBP."}
                {step === "prompt" &&
                  "Describe the architectural atmosphere and landscape elements you wish to integrate. Be precise."}
                {step === "generating" &&
                  "Our engine is evaluating terrain topology and generating photorealistic hardscape proposals."}
                {step === "result" &&
                  "Review the generated proposal. Drag the slider to compare with the original condition."}
              </p>

              {step === "prompt" && (
                <>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-display font-medium text-primary">
                        Landscape Style
                      </label>
                      <p className="text-xs text-muted-foreground mb-3">
                        Select landscape style for your space
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Modern Minimalist",
                          "Tuscan",
                          "Japanese Zen",
                          "English Cottage",
                          "Tropical",
                        ].map((style) => (
                          <button
                            key={style}
                            onClick={() =>
                              setPrompt((prev) =>
                                prev
                                  ? `${prev}, ${style} style`
                                  : `${style} style`
                              )
                            }
                            className="px-4 py-2 rounded-full border border-primary/20 text-xs font-mono uppercase hover:bg-primary hover:text-white transition-all focus:bg-primary focus:text-white"
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>
                    <PromptInput
                      value={prompt}
                      onChange={setPrompt}
                      onGenerate={handleGenerate}
                      isGenerating={false}
                    />
                  </div>
                </>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl text-xs font-mono border border-red-100 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
