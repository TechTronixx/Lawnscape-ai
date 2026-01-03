/* 
  Shell: Main layout wrapper.
*/

export const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background selection:bg-primary selection:text-white">
      {/* Navigation is lifted to App.tsx for state control */}
      <main className="flex-1 w-full flex flex-col relative z-10">
        {children}
      </main>
    </div>
  );
};
