import Landing from "comp/Landing";
import Navbarr from "comp/Navbar";
import Counter from "comp/CountUpp";
import SectionOne from "comp/SectionOne";
import SectionTwo from "comp/SectionTow";
import SectionThree from "comp/SectionThree";
import SectionFour from "comp/SectionFour";
import SliderCarousel from "comp/Slider";

export default function Home() {
  return (
    <>
      <Navbarr />
      <Landing/>
      <Counter/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SliderCarousel/>
    </>
  );
}
