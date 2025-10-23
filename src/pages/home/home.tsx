import Location from "@/components/locationSection/location";
import OurServices from "@components/ourServices/ourServices";
import Testimonials from "@components/testimonialSection/testimonial";
import CtaBanner from "@/components/ctaBanner/ctaBanner";

function Home() {
  return (
    <>   <Testimonials />
     <OurServices />
      <Location />
       <CtaBanner />
    
    </>
  );
}

export default Home;
