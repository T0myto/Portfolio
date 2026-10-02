"use client";

import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SectionTitle({ title, subtitle, children }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50">
        {title}
      </h2>
      <div className="mx-auto mt-5 mb-5 h-1 w-12 rounded-full bg-blue-500" />
      {subtitle && (
        <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
