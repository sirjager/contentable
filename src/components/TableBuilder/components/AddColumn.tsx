"use client";

import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { useState } from "react";
import { BsTextareaT } from "react-icons/bs";
import { HiOutlineKey, HiOutlineSparkles } from "react-icons/hi";
import { HiOutlineCalendarDays, HiOutlineCheckBadge, HiOutlineDocument } from "react-icons/hi2";
import { MdNumbers } from "react-icons/md";
import { RxSwitch } from "react-icons/rx";
import { VscJson } from "react-icons/vsc";
import useTableBuilder, { IColumnDef } from "../hooks/use-tableBuilder";
import { SQL_DATATYPES, getDataTypeGroup } from "../utils/utils";

const AddColumn = () => {
  const [values, setValues] = useState<IColumnDef>({ name: "" });

  const addColumn = useTableBuilder((state) => state.addColumn);

  const handleAddColumn = () => {
    addColumn(values);
  };

  return (
    <div className="flex items-center gap-x-4 px-2">
      <div className="space-y-2">
        <label
          htmlFor="new-column-name"
          className="text-sm text-color-muted-light dark:text-color-muted-dark">
          Column name
        </label>

        <Input
          id="new-column-name"
          value={values.name}
          placeholder="column name"
          onChange={(v) => setValues({ ...values, name: v.currentTarget.value })}
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <label className="text-sm text-color-muted-light dark:text-color-muted-dark">
          Data type
        </label>

        <Select
          value={values.type}
          onValueChange={(v) => setValues({ ...values, type: v, group: getDataTypeGroup(v) })}>
          <SelectTrigger className="w-52 md:w-full">
            <SelectValue placeholder="data type" />
          </SelectTrigger>

          <SelectContent className="z-[100]">
            {Object.entries(SQL_DATATYPES).map(([group, datatypes]) => (
              <SelectGroup key={group}>
                <SelectLabel className="mb-2 flex items-center gap-x-2 border-b-1 border-border-light font-bold capitalize dark:border-border-dark">
                  {group === "numbers" && <MdNumbers />}
                  {group === "strings" && <BsTextareaT />}
                  {group === "datetime" && <HiOutlineCalendarDays />}
                  {group === "boolean" && <RxSwitch />}
                  {group === "json" && <VscJson />}
                  {group === "others" && <HiOutlineDocument />}
                  {group}
                </SelectLabel>

                {datatypes.map((dt) => (
                  <SelectItem key={dt.name} value={dt.name}>
                    <p className="px-3">{dt.name}</p>
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-y-2">
        <label className="text-sm text-color-muted-light dark:text-color-muted-dark">Primary</label>

        <Chip
          onClick={() => setValues({ ...values, primary: !values.primary })}
          className="flex items-center gap-x-2 px-3">
          <HiOutlineKey />
          Primary
        </Chip>
      </div>

      <div className="flex flex-col  gap-y-2">
        <label className="text-sm text-color-muted-light dark:text-color-muted-dark">
          Required
        </label>

        <Chip
          onClick={() => setValues({ ...values, required: !values.required })}
          className="flex items-center gap-x-2 px-3">
          <HiOutlineCheckBadge />
          Required
        </Chip>
      </div>

      <div className="flex flex-col  gap-y-2">
        <label className="text-sm text-color-muted-light dark:text-color-muted-dark">Unique</label>

        <Chip
          onClick={() => setValues({ ...values, unique: !values.unique })}
          className="flex items-center gap-x-2 px-3">
          <HiOutlineSparkles />
          Unique
        </Chip>
      </div>

      <div className="flex flex-col  gap-y-2">
        <label className="text-sm text-color-muted-light dark:text-color-muted-dark">Action</label>
        <Button
          onClick={handleAddColumn}
          className="bg-accent-light px-8 text-primary-light dark:bg-accent-dark dark:text-primary-dark">
          Add Column
        </Button>
      </div>
    </div>
  );
};
export default AddColumn;
