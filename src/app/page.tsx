import Link from "next/link";

const HomePage = () => {
  return (
    <div className="grid h-96 place-items-center">
      <Link href="/dashboard">Go To Dashboard</Link>
    </div>
  );
};
export default HomePage;
