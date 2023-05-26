import Card from "@/components/ui/Card";
import AddColumn from "./components/AddColumn";
import ColumnsList from "./components/ColumnsList";

const TableBuilder = () => {
  return (
    <div className="h-full w-full gap-4 overflow-y-auto p-4">
      <div className="flex h-full w-full flex-col space-y-4 overflow-y-auto">
        <Card className="p-4">
          <AddColumn />
        </Card>

        <ColumnsList />
      </div>
    </div>
  );
};
export default TableBuilder;
