"use client";

import React, { useEffect, useMemo, useState } from "react";
import { CalendarDays, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// __define-ocg__ single component implementation

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const now = new Date().getTime();
  const diff = Math.max(0, target.getTime() - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function LimitedTimeOffer({
  kicker = "Join Our Webinar",
  heading = "Limited-Time",
  highlight = "Offer!",
  description = "Get 'The Guide' now and enjoy a special one-month free access to our upcoming AI-scoring platform with over 5000 test questions. Act fast – this offer expires in [Countdown Timer]",
  ctaText = "Visit Now",
  onCtaClick,
  targetDate, // ISO string (e.g., "2025-12-31T23:59:59Z")
}: {
  kicker?: string;
  heading?: string;
  highlight?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  targetDate?: string;
}) {
  const defaultTarget = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 24);
    return d;
  }, []);

  const target = useMemo(
    () => (targetDate ? new Date(targetDate) : defaultTarget),
    [targetDate, defaultTarget]
  );
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section
      className={cn(
        "w-full border shadow-sm ",
        "bg-gradient-to-r from-[#f6d3b1]  via-[#f2edc8] to-[#dfe9f5]"
      )}
      role="region"
      aria-label="Limited time webinar offer"
    >
      <div className="px-4 py-15 text-center md:px-8">
        {/* Top kicker */}
        <p className="mb-2 text-[20px] font-bold text-[#2F3440]">{kicker}</p>

        {/* Heading */}
        <h1 className="text-pretty text-3xl font-bold leading-tight text-foreground md:text-4xl">
          {heading} <span className="text-sky-600">{highlight}</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-6 text-muted-foreground md:text-base">
          {description}
        </p>

        {/* Countdown */}
        <div className="mx-auto mt-6 max-w-md">
          <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-4 bg-white shadow-md rounded-lg overflow-hidden">
            <TimeCell value={timeLeft.days} label="Days" />
            <TimeCell
              value={timeLeft.hours}
              label="Hour"
              className="hidden sm:flex"
            />
            <TimeCell
              value={timeLeft.minutes}
              label="Minute"
              className="hidden sm:flex"
            />
            <TimeCell value={timeLeft.seconds} label="Second" />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onCtaClick}
            className={cn(
              "flex items-center gap-2 font-bold rounded-sm px-6 py-3",
              "bg-[#4F46E5] text-white  shadow-md"
            )}
          >
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            {ctaText}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

function TimeCell({
  value,
  label,
  className,
}: {
  value: number;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1 p-4",
        className
      )}
      aria-label={label}
    >
      <div className="text-3xl font-semibold text-sky-500 md:text-4xl">
        {String(value).padStart(2, "0")}
      </div>

      <div className="text-xs text-muted-foreground md:text-sm">{label}</div>
    </div>
  );
}
