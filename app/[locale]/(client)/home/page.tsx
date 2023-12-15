import Aboutus from "../component/Aboutus";
import Packages from "../component/Packages";
import Contact from "../component/Contact";
import Homebanner from "../component/Homebanner";

export const metadata = {
  title : 'Home Page'
}
export default function Homepage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <div>
        <Homebanner /> 
        <Aboutus />
        <Packages />
        <Contact />
      </div>
    </>
  );
}
