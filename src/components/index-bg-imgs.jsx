import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className }) => (
    <StaticQuery
        query={graphql`
            query {
                desktop: file(relativePath: { eq: "Trees.jpeg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
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
                    <h1 className="p-5 text-center">Nookachamps Farms</h1>
                    <h3 className="text-center p-5">
                        A family-owned, sustainable hazelnut orchard
                    </h3>
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
