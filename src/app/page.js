import Header from "./templates/Header";
import SupportCategory from "./components/SupportCategory";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <h1 className="text-center">Apple Support</h1>
      <SupportCategory></SupportCategory>
    </div>
  );
}
