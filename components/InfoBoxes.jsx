import InfoBox from "/infoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Discover your ideal rental home. Save your favorite listings and
            connect directly with property owners.
          </InfoBox>
          <InfoBox
            heading="For Owners"
            backgroundColor="bg-teal-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-teal-500",
            }}
          >
            Showcase your properties to reach potential tenants for short-term
            or long-term rentals.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
