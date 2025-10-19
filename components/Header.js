import { AiOutlineProduct } from "react-icons/ai";

export default function Header() {
  return (
    <div className="m-auto">
      <div className="flex items-center justify-center gap-2 h-[124px]">
        <AiOutlineProduct fontSize="40px" />
        <p className="text-4xl font-bold text-center mb-0">Product</p>
      </div>
    </div>
  );
}
