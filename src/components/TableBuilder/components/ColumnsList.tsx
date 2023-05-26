"use client";

import Card from "@/components/ui/Card";
import { IconButton } from "@/components/ui/IconButton";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { SelectItem } from "@radix-ui/react-select";
import { BsTextareaT } from "react-icons/bs";
import { HiOutlineCalendarDays, HiOutlineDocument, HiOutlineTrash } from "react-icons/hi2";
import { MdNumbers } from "react-icons/md";
import { RxSwitch } from "react-icons/rx";
import { TbEdit } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";
import useTableBuilder from "../hooks/use-tableBuilder";
import { SQL_DATATYPES } from "../utils/utils";

const ColumnsList = () => {
  const columns = useTableBuilder((state) => state.columns);
  const removeColumn = useTableBuilder((state) => state.removeColumn);
  const updateColumn = useTableBuilder((state) => state.updateColumn);

  return (
    <div className="flex-grow space-y-4 overflow-y-auto">
      {columns.map((c) => (
        <Card key={c.name} className="flex w-fit flex-wrap items-center gap-4 p-4">
          <IconButton onClick={() => removeColumn(c.name)} variant="rose">
            <HiOutlineTrash />
          </IconButton>

          <IconButton variant="blue">
            <TbEdit />
          </IconButton>

          <Input
            id={c.name}
            value={c.name}
            placeholder="column name"
            className="w-fit select-none"
            onChange={(v) => updateColumn(c.name, { ...c, name: v.currentTarget.value })}
          />

          <Select onValueChange={(v) => updateColumn(c.name, { ...c, type: v })}>
            <SelectTrigger className="w-52">
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
        </Card>
      ))}
    </div>
  );
};
export default ColumnsList;
