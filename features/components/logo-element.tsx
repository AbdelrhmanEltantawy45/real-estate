import { House } from "lucide-react";

type Props = {
  className?: string;
  houseIconClassName?: string;
};

export default function LogoElement({ className, houseIconClassName }: Props) {
  return (
    <div className="flex items-center gap-2 px-6 py-6 font-fraunces text-2xl font-semibold sm:px-10 lg:px-17 lg:py-8">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-md p-2 ${className ?? ""}`}
      >
        <House size={20} className={houseIconClassName} />
      </div>
      <span className="font-fraunces text-xl font-semibold">Maskan</span>
    </div>
  );
}