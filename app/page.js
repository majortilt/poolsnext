import SimpleComponent from "./SimpleComponent";

const HomePage = () => {
  return(
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold"> GTM Testing </h1>
      <SimpleComponent />
    </div>
  );
};

export default HomePage;

