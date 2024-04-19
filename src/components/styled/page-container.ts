import styled from "styled-components";

type PageContainerProps = {
  $marginBlock?: string;
};

export const PageContainer = styled.div<PageContainerProps>`
  margin-inline: auto;
  margin-block: ${(props) => props?.$marginBlock || "200px"};
  display: flex;
  flex-direction: column;
  gap: 180px;
  max-width: 1110px;

  @media screen and (min-width: 900px) and (max-width: 1200px) {
    padding-inline: 40px;
  }

  @media screen and (max-width: 900px) {
    padding-inline: 40px;
    gap: 95px;
    margin-block: ${(props) => props?.$marginBlock || "100px"};
  }

  @media screen and (max-width: 600px) {
    padding-inline: 24px;
    margin-block: 40px;
    gap: 120px;
  }
`;
