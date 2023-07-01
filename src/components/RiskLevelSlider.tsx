import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { FaFire } from "react-icons/fa";

type Props = {
  value: number;
  setValue: (value: number) => void;
};

const RiskLevelSlider = ({ value, setValue }: Props) => {
  const handleChange = (number: number[]) => {
    if (number !== undefined) {
      const [digit] = number;
      setValue(digit !== undefined ? digit / 10 : 0);
    }
  };

  return (
    <div className="mb-10 mt-2 flex w-full max-w-lg flex-col px-5">
      <div className="mb-4 flex flex-row items-center justify-center">
        <FaFire className="mr-2 h-6 w-6" />
        <Label className="">Risiko Level {value}</Label>
      </div>
      <Slider
        value={[value * 10]}
        max={100}
        step={10}
        onValueChange={handleChange}
      />
    </div>
  );
};

export default RiskLevelSlider;
