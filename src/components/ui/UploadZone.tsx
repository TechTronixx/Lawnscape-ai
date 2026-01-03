import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import clsx from "clsx";

interface UploadZoneProps {
  onImageSelected: (file: File) => void;
}

export const UploadZone = ({ onImageSelected }: UploadZoneProps) => {
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onImageSelected(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className={clsx(
        "relative group cursor-pointer transition-all duration-500 ease-out",
        "h-64 md:h-80 w-full flex flex-col items-center justify-center",
        "border border-black/10 bg-white hover:border-black/30 hover:shadow-lg",
        isDragActive && "bg-black/5 scale-[0.99]"
      )}
    >
      <input {...getInputProps()} />

      <div className="space-y-4 text-center relative z-10">
        <div className="w-12 h-12 mx-auto bg-black text-white flex items-center justify-center rounded-full transition-transform group-hover:scale-110">
          <Upload className="w-5 h-5" />
        </div>

        <div>
          <p className="font-display font-medium text-lg text-primary">
            Upload Property Source
          </p>
          <p className="text-muted text-sm mt-1">
            Drag & Drop or Click to Browse
          </p>
        </div>

        <div className="pt-4">
          <span className="inline-block px-3 py-1 bg-black/5 text-[10px] uppercase tracking-widest text-muted">
            JPG / PNG / WEBP
          </span>
        </div>
      </div>
    </div>
  );
};
