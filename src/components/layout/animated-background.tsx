interface AnimatedBackgroundProps {
  children: React.ReactNode;
}

export const AnimatedBackground = ({ children }: AnimatedBackgroundProps) => {
  return (
    <div className="min-h-screen w-full relative bg-background">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 60% at 50% 0%, 
              rgba(120, 180, 255, 0.25), 
              transparent 70%
            ), 
            var(--background)
          `,
        }}
      />
      {children}
    </div>
  );
};
