import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const loadingTexts = [
  "Initializing terminal...",
  "Loading system modules...",
  "Establishing secure connection...",
  "Finalizing setup...",
];

const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const [text, setText] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let currentLine = 0;
    const typingInterval = setInterval(() => {
      if (currentLine < loadingTexts.length) {
        if (currentIndex <= loadingTexts[currentLine].length) {
          setText((prevText) => {
            const newText = [...prevText];
            newText[currentLine] = loadingTexts[currentLine].slice(0, currentIndex);
            return newText;
          });
          currentIndex++;
        } else {
          currentLine++;
          currentIndex = 0;
        }
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500); // Call onLoadingComplete after fade out
    }, 8000); // Increased duration to 8 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
    };
  }, [onLoadingComplete, loadingTexts]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background text-foreground transition-opacity duration-500">
      <div className="terminal-window p-8 max-w-md w-full bg-card rounded-lg border border-border shadow-lg">
        <div className="terminal-header flex items-center justify-between border-b border-border pb-2 mb-4">
          <span className="text-sm font-medium">system.exe</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="p-4">
          {text.map((line, index) => (
            <div key={index} className="font-mono text-primary">
              {line}
              {index === text.length - 1 && <span className="animate-pulse">_</span>}
            </div>
          ))}
          <div className="mt-6 flex justify-center">
            <div className="w-12 h-12 border-3 border-primary rounded-full animate-spin border-t-transparent"></div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
    </div>
  );
};

export default Preloader;