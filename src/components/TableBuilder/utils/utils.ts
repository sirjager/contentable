export const SQL_DATATYPES = {
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

type DataTypeGroup = keyof typeof SQL_DATATYPES;
export function getDataTypeGroup(datatype: string): DataTypeGroup | string {
  for (const group of Object.keys(SQL_DATATYPES) as DataTypeGroup[]) {
    if (SQL_DATATYPES[group].some((dt) => dt.name.toLowerCase() === datatype.toLowerCase())) {
      return group;
    }
  }
  return "";
}
