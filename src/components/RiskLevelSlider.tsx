import {Slider} from "@/components/ui/slider";
import {useEffect, useState} from "react";
import {Label} from "@/components/ui/label";

const RiskLevelSlider = () => {
    const [value, setValue] = useState<number | undefined>(0);

    useEffect(() => {
        console.log(value);
    }, [value]);

    const handleChange = (number: number[]) => {
        if (number !== undefined) {
            const [digit] = number;
            setValue(digit !== undefined ? digit / 10 : 0);
        }
    }

    return (
        <>
            <Label className="w-full pb-5">risk level {value}</Label>
            <Slider defaultValue={[0]} max={100} step={10} onValueChange={handleChange}/>
        </>
    );
}

export default RiskLevelSlider;