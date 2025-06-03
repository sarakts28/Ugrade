// App.tsx
import { Outlet } from "react-router-dom";
import { Header } from "../CommonComponents";

const PublicLayout = () => {
  return (
    <div className="flex flex-col">
      {/* Fixed Header */}
      <header className="bg-white py-2">
        <Header />
      </header>

      {/* Scrollable Content Area */}
      <main className="flex-grow pb-20">
        {" "}
        {/* pt-16 = header height, pb-20 = footer height */}
        <Outlet /> {/* This is where your routes will render */}
      </main>
    </div>
  );
};

export default PublicLayout;
