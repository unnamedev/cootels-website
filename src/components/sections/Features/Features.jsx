import styled from "styled-components"
import data from "./data"
import {Button, Container, Title} from "../../utils/Utils"
import {Fragment} from "react"

/**
 * @description 👋🏻 Features
 * @returns {JSX.Element}
 * @constructor
 */
const Features = () =>
    <Container>
        <h2 className="visually-hidden">{data.title}</h2>
        <List>
            {data.list.map((i, idx) =>
                <li key={idx}>
                    <img src={i.img} alt={i.title}/>
                    <div className="content">
                        <Title type="h2">{i.title}</Title>
                        <p>{i.text.map((t, tid) => <Fragment key={tid}>{t}</Fragment>)}</p>
                        {i.btn && <Button as="a" href={i.btn.href}>{i.btn.label}</Button>}
                    </div>
                </li>
            )}
        </List>
    </Container>

/*  💅 Styled Components */
const List = styled.ul`
  display: grid;

  li,
  .content {
    display: grid;
    justify-items: flex-start;
    gap: 14px;

    @media (min-width: 992px) {
      gap: 24px;
    }
  }

  li {
    padding-top: 40px;
    padding-bottom: 40px;

    @media (min-width: 576px) {
      display: flex;
      align-items: center;
      gap: 40px;

      &:nth-child(2) {
        flex-direction: row-reverse;
      }
    }

    @media (min-width: 992px) {
      padding-top: 80px;
      padding-bottom: 80px;
      gap: 126px;
    }
  }

  img {
    width: 100%;

    @media (min-width: 576px) {
      width: 30%;
    }

    @media (min-width: 992px) {
      width: auto;
    }
  }
`

// Exporting the component `Features` as the default export.
export default Features