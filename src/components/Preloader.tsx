import React, { useEffect, useState } from "react";
import "../styles/preloader.css";

interface PreloaderProps {
  onLoadingComplete: () => void;
  loadingTexts?: string[]; // Customizable loading texts
  typingSpeed?: number; // Typing speed in milliseconds
  fadeOutDelay?: number; // Delay before fade-out in milliseconds
}

const defaultLoadingTexts = [
  "Initializing terminal...",
  "Loading system components...",
  "Establishing connection...",
  "Welcome to the system",
];

const Preloader = ({
  onLoadingComplete,
  loadingTexts = defaultLoadingTexts,
  typingSpeed = 50,
  fadeOutDelay = 4000,
}: PreloaderProps) => {
  const [text, setText] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

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
    }, typingSpeed);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete();
      }, 1000);
    }, fadeOutDelay);

    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
    };
  }, [onLoadingComplete, loadingTexts, typingSpeed, fadeOutDelay]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background/95 text-foreground backdrop-blur-sm transition-all duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      aria-live="polite"
    >
      <div className="terminal-window p-4 sm:p-6 md:p-8 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[50%] max-w-2xl bg-card rounded-lg border border-border shadow-xl backdrop-blur-md transition-transform duration-500 hover:scale-[1.02]">
        <div className="terminal-header flex items-center justify-between border-b border-border pb-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium text-primary/80">system.exe</span>
            <div className="hidden sm:flex items-center gap-2 text-xs text-primary/60">
              <span>|</span>
              <span>root@system</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 transition-transform hover:scale-110"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 transition-transform hover:scale-110"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 transition-transform hover:scale-110"></div>
          </div>
        </div>
        <div className="p-2 sm:p-4 bg-background/40 rounded-md backdrop-blur-sm">
          {text.map((line, index) => (
            <div
              key={index}
              className="font-mono text-sm sm:text-base text-primary/90 break-words mb-2 last:mb-0 transition-opacity duration-300"
              style={{
                opacity: fadeOut ? 0 : 1,
                transform: `translateY(${index * 2}px)`,
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <span className="text-primary/60 mr-2">$</span>
              {line}
              {index === text.length - 1 && (
                <span className="inline-block w-2 h-4 ml-1 bg-primary/80 animate-pulse">_</span>
              )}
            </div>
          ))}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 border-2 sm:border-3 border-primary/20 rounded-full"></div>
              <div className="absolute inset-0 border-2 sm:border-3 border-primary rounded-full animate-spin border-t-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grain opacity-5 pointer-events-none mix-blend-multiply"></div>
    </div>
  );
};

export default Preloader;