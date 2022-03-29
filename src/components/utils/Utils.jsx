import styled from "styled-components"

export const SectionWrapper = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-width: 992px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`

export const Button = styled.button`
  background-color: var(--base-color-2);
  border-radius: 4px;
  padding: 14px 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  transition: background-color 0.3s;

  &:hover, 
  &:focus {
    background-color: #144392;
  }
`

export const Container = styled.div`
  max-width: 1220px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Title = styled.h2`
  font-weight: 600;
  ${({type}) => type === "h2" && "font-size: 26px;"}
  ${({type}) => type === "h1" && "font-size: 28px;"}
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-bottom: 14px;

  @media (min-width: 992px) {
    margin-bottom: 24px;
    ${({type}) => type === "h2" && `
      font-size: 36px;
      line-height: 54px;
    `}
    ${({type}) => type === "h1" && `
      font-size: 48px;
      line-height: 72px;
    `}
  }
`