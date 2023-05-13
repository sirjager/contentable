import Card from "@/components/ui/Card";
import AddColumn from "./AddColumn";

const TableBuilder = () => {
  return (
    <div className="flex gap-x-4 gap-y-4 p-4 flex-col-reverse md:flex-row">
      <Card className="p-4 flex-grow">main</Card>
      <Card className="p-4 w-full md:w-4/12 xl:w-3/12 space-y-4">
        <p className="text-xl font-medium text-color-primary-light dark:text-color-primary-dark">
          Add New Column
        </p>
        <AddColumn />
      </Card>
    </div>
  );
};
export default TableBuilder;
