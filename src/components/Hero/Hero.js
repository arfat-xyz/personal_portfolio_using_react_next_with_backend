import React from "react";
import { fetchHomePageDetails } from "../../constants/fetchHomePageDetails";

import {
  HideDiv,
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import HideComponent from "../ExtraComponent/HideComponent";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => {
  const heroDetails = fetchHomePageDetails("Hero");
  return (
    <Section row nodepadding>
      <LeftSection>
        <SectionTitle main center>
          Arfatur Rahman <br />
          MERN developer
        </SectionTitle>
        <HideComponent />
        <SectionText>{heroDetails?.text}</SectionText>
        <Button
          onClick={() =>
            window.open(
              `https://drive.google.com/file/d/1lPcZHPzI1h-xvLkFrqK-A6W2cq1qF2lr/view?usp=sharing`,
              "_blank"
            )
          }
        >
          Download CV
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
