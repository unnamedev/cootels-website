import styled from "styled-components"
import data from "./data"
import {Button, Container, SectionWrapper, Title} from "../../utils/Utils"
import {BsArrowRightShort} from "react-icons/bs"

/**
 * @description 👋🏻 Rooms
 * @returns {JSX.Element}
 * @constructor
 */
const Rooms = () =>
    <Wrapper>
        <Container>
            <Header>
                <Title type="h2">{data.title}</Title>
                <p>{data.text}</p>
                <Button as="a" href={data.btn.href}>{data.btn.label}</Button>
            </Header>
            <List>
                {data.list.map((i, idx) =>
                    <li key={idx}>
                        <img src={i.img} alt={i.title}/>
                        <h3>{i.title}</h3>
                        <p>{i.text}</p>
                        <a href={i.btn.href}>
                            {i.btn.label}
                            <BsArrowRightShort size={25}/>
                        </a>
                    </li>
                )}
            </List>
        </Container>
    </Wrapper>

/*  💅 Styled Components */
const Wrapper = styled(SectionWrapper)`
  ${Container} {
    gap: 44px;

    @media (min-width: 992px) {
      gap: 88px;
    }
  }
`
const Header = styled.div`
  max-width: 588px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin-bottom: 14px;
    @media (min-width: 992px) {
      margin-bottom: 24px;
    }
  }

  p {
    margin-bottom: 22px;
    @media (min-width: 992px) {
      margin-bottom: 32px;
    }
  }
`
const List = styled.ul`
  display: grid;
  gap: 24px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  img {
    margin-bottom: 22px;
    width: 100%;
    
    @media (min-width: 576px) {
      margin-bottom: 32px;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 16px;

    @media (min-width: 576px) {
      font-size: 24px;
      line-height: 36px;
    }
  }

  p {
    margin-bottom: 32px;
  }

  a {
    font-size: 18px;
    line-height: 27px;
    color: #424F7B;
    display: flex;
    align-items: center;
    
    svg {
      transition: all 0.3s;
    }
    
    &:hover {
      svg {
        transform: translateX(5px);
      }
    }
  }
`

// Exporting the component `Rooms` as the default export.
export default Rooms