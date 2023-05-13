import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-96 grid place-items-center">
      <Link href="/dashboard">Go To Dashboard</Link>
    </div>
  );
};
export default HomePage;
