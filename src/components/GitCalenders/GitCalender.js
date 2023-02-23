import React from "react";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import GitHubCalendar from "react-github-calendar";
import HideComponent from "../ExtraComponent/HideComponent";

const GitCalender = () => {
  return (
    <div className="shadow-xl border-white">
      <Section>
        <SectionTitle>Github Calender</SectionTitle>
        <HideComponent />
        <div className=" border-8 border-white">
          <GitHubCalendar username="arfat-xyz" />
        </div>
      </Section>
    </div>
  );
};

export default GitCalender;
