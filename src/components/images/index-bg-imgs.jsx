import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className }) => (
    <StaticQuery
        query={graphql`
            query {
                desktop: file(relativePath: { eq: "index-bg.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 2500) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => {
            // Set ImageData.
            const imageData = data.desktop.childImageSharp.fluid;
            return (
                <BackgroundImage
                    Tag="section"
                    className={className}
                    fluid={imageData}
                    backgroundColor={`#040e18`}
                >
                    <div id="index-top" />
                    <div className="header-text" id="index-top-text">
                        <h1 className=" text-center p-2">Nookachamps Farms</h1>
                    </div>
                </BackgroundImage>
            );
        }}
    />
);

const IndexTop = styled(BackgroundSection)`
    width: 100%;
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover;
`;

export default IndexTop;
