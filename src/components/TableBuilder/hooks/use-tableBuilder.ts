"use client";

import { create } from "zustand";

export interface IColumnDef {
  name: string;
  type?: string;
  length?: number;
  group?: string;
  scale?: number;
  primary?: boolean;
  unique?: boolean;
  required?: boolean;
  precision?: number;
  default?: string;
}

interface ITableBuilder {
  columns: IColumnDef[];
  clearColumns: () => void;
  addColumn: (_: IColumnDef) => void;
  removeColumn: (_: string) => void;
  updateColumn: (old: string, _: IColumnDef) => void;
}

const useTableBuilder = create<ITableBuilder>()((set) => {
  return {
    columns: [],
    clearColumns: () => set((state) => ({ columns: [] })),
    removeColumn: (name: string) =>
      set((state) => ({ columns: state.columns.filter((c) => c.name !== name) })),
    addColumn: (column: IColumnDef) =>
      set((state) => {
        const exists = state.columns.filter((c) => c.name === column.name).length > 0;
        if (exists) return {};
        return { columns: [...state.columns, column] };
      }),

    updateColumn: (old: string, column: IColumnDef) =>
      set((state) => ({
        columns: [...state.columns.filter((c) => c.name !== old), column],
      })),
  };
});

export default useTableBuilder;
