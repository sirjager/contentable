"use client";

import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { useState } from "react";

import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { BsTextareaT } from "react-icons/bs";
import { HiOutlineCalendarDays, HiOutlineDocument } from "react-icons/hi2";
import { MdNumbers } from "react-icons/md";
import { RxSwitch } from "react-icons/rx";
import { VscJson } from "react-icons/vsc";

interface columnData {
  name?: string;
  type?: string;
  length?: number;
  group?: string;
  scale?: number;
  primary?: boolean;
  unique?: boolean;
  required?: boolean;
  precision?: number;
  default?: string;
  autoGenerateUUID?: boolean;
  autoIncrementNumberBy?: number;
}

const AddColumn = () => {
  const [values, setValues] = useState<columnData>({});

  return (
    <>
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
          <SelectTrigger className="w-40 md:w-full">
            <SelectValue placeholder="data type" />
          </SelectTrigger>

          <SelectContent>
            {Object.entries(sqlDatatypes).map(([group, datatypes]) => (
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
    </>
  );
};
export default AddColumn;

const sqlDatatypes = {
  numbers: [
    { name: "integer" },
    { name: "smallint" },
    { name: "bigint" },
    { name: "decimal" },
    { name: "numeric" },
    { name: "float" },
    { name: "real" },
    { name: "double" },
  ],
  strings: [
    //
    { name: "char" },
    { name: "varchar" },
    { name: "text" },
  ],
  datetime: [
    //
    { name: "date" },
    { name: "time" },
    { name: "timestamp" },
  ],
  boolean: [
    //
    { name: "boolean" },
    { name: "tinyint(1)" },
  ],
  json: [{ name: "json" }],
  others: [{ name: "uuid" }],
};

type DataTypeGroup = keyof typeof sqlDatatypes;
function getDataTypeGroup(datatype: string): DataTypeGroup | string {
  for (const group of Object.keys(sqlDatatypes) as DataTypeGroup[]) {
    if (sqlDatatypes[group].some((dt) => dt.name.toLowerCase() === datatype.toLowerCase())) {
      return group;
    }
  }
  return "";
}
