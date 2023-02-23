import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";

import { projects } from "../../constants/constants";
import { Section } from "../../styles/GlobalComponents";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  ListTitle,
  ProjectTitle,
} from "../../components/Technologies/TechnologiesStyles";
import {
  ExternalLinks,
  UtilityList,
} from "../../components/Projects/ProjectsStyles";
import { client, urlFor } from "../../constants/sanityClient";
import Carousel from "../../components/Projects/ProjectSlider";
const projectDetails = () => {
  const [singleProject, setSingleProject] = useState({});
  const router = useRouter();
  const id = router?.query?.projectId;

  const getSingleProject = async () => {
    const pets = await client
      .fetch(`*[_type == "project" || _id == '${id}'][0]`)
      .then((res) => setSingleProject(res));
  };
  useEffect(() => {
    getSingleProject();
  }, [id]);
  // console.log(project_de);
  return (
    <>
      <Header />
      <Section>
        <div className="project_details">
          {/* <div className="img_div">
            {singleProject?._id &&
              singleProject?.images.map((img) => (
                <div>
                  <img
                    // src={img}
                    src={urlFor(img.image).width(400).height(400).url()}
                    alt={img.alt}
                  />
                </div>
              ))}
          </div> */}

          {/* practice  */}
          <div>
            {singleProject?._id && <Carousel images={singleProject.images} />}
          </div>
          <div className="project_desc">
            <ProjectTitle title={`arfat rahman ${singleProject?.title}`}>
              {singleProject?.title}
            </ProjectTitle>
            <ListTitle>Top features</ListTitle>
            <ul className="project_desc_ul">
              {singleProject?._id &&
                singleProject?.details_desc.map((desc) => (
                  <li style={{ marginTop: "15px", fontSize: "24px" }}>
                    <AiOutlineArrowRight style={{ marginRight: "10px" }} />
                    {desc}
                  </li>
                ))}
            </ul>
          </div>
          <div className="project_links">
            <UtilityList>
              <ExternalLinks href={singleProject?.source}>
                {singleProject?.server ? "Client" : "Code"}
              </ExternalLinks>
              {singleProject?.server && (
                <ExternalLinks href={singleProject?.server}>
                  Server
                </ExternalLinks>
              )}
              <ExternalLinks href={singleProject?.visit}>
                Live site
              </ExternalLinks>
            </UtilityList>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};
/* export const getServerSideProps = async (context) => {
  console.log(context.query);
  const { projectId } = context.query;
  if (!projectId) {
    projectId = null;
  }
  return { props: { projectId: projectId } };
}; */
export default projectDetails;
