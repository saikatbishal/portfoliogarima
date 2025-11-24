import React from "react";
import AnimatedWrapper from "./AnimatedWrapper";

const ListBlock = ({ items }) => {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <AnimatedWrapper key={idx} delay={idx * 0.1}>
          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200">
            {/* Custom Check Icon/Bullet */}
            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
               <div className="w-2 h-2 bg-green-400 rounded-full shadow-glow" />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
          </div>
        </AnimatedWrapper>
      ))}
    </div>
  );
};

export default ListBlock;