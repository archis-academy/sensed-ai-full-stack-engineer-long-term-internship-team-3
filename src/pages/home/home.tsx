import Location from "@/components/locationSection/location";
import OurServices from "@components/ourServices/ourServices";
import Partners from "@/components/partnerssection/partners";
import TeamMembers from "@/components/teamMember/teamMembers";
import CtaBanner from "@/components/ctaBanner/ctaBanner";

function Home() {
  return (
    <>
      <Partners />
      <OurServices />
      <Location /> <TeamMembers />
      <CtaBanner />
    </>
  );
}

export default Home;
