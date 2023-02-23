import React, { useEffect, useState } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Link from "next/link";
import { client, urlFor } from "../../constants/sanityClient";
import HideComponent from "../ExtraComponent/HideComponent";

const Projects = () => {
  const [allProject, setAllProject] = useState([]);
  const getAllProjects = async () => {
    const pets = await client
      .fetch(`*[_type == "project"]`)
      .then((res) => setAllProject(res));
  };
  useEffect(() => {
    getAllProjects();
  }, []);
  // console.log(allProject);
  return (
    <Section nopadding id="project">
      <SectionDivider />
      <HideComponent />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {allProject !== [] &&
          allProject.map((project) => (
            <BlogCard key={project.id}>
              <Img
                // src={project.images[0].image}
                src={urlFor(project.images[0].image).width(900).url()}
              />
              <TitleContent>
                <HeaderThree title={`arfat rahman ${project.title}`}>
                  {project.title}
                </HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{project.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks
                  href={project.source}
                  title="arfat rahman project code"
                >
                  Code
                </ExternalLinks>
                <ExternalLinks
                  href={project.visit}
                  title="arfat rahman project source"
                >
                  Source
                </ExternalLinks>
                <ExternalLinks title="arfat rahman project details">
                  <Link clssName="arfat" href={`/project/${project._id}`}>
                    Details
                  </Link>
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;
