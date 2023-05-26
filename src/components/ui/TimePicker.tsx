import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

const TimePicker = () => {
  const [value, setValue] = useState({ hour: "", minute: "", ispm: false });

  return (
    <div className="flex items-center gap-x-2">
      <Input
        placeholder="HH"
        className="w-[50px] text-center focus:outline-none"
        maxLength={2}
        onChange={(v) => setValue({ ...value, hour: v.currentTarget.value })}
      />
      <Input
        placeholder="MM"
        className="w-[50px] text-center focus:outline-none"
        maxLength={2}
        onChange={(v) => setValue({ ...value, minute: v.currentTarget.value })}
      />

      {Number(value.hour) <= 12 && (
        <Button
          onClick={() => setValue({ ...value, ispm: !value.ispm })}
          className="px-3 uppercase"
          variant="outline">
          {value.ispm ? "pm" : "am"}
        </Button>
      )}
    </div>
  );
};
export default TimePicker;
