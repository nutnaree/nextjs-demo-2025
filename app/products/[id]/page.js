"use client";

const formatStars = (n = 0) => {
  const clamped = Math.max(0, Math.min(5, Number(n) || 0));
  return "★".repeat(clamped) + "☆".repeat(5 - clamped);
};

export default function ProductDetail() {
  return (
    <div className="flex flex-column h-auto justify-center gap-4 m-auto p-[1rem] max-w-[600px]">
      <p className="text-2xl font-bold text-center">Details</p>

      <div className="flex flex-column w-full gap-2 items-center"></div>
    </div>
  );
}
