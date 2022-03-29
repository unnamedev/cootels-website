import styled from "styled-components"
import {Button, Container, SectionWrapper, Title} from "../../utils/Utils"
import data from "./data"
import {Fragment, useState} from "react"
import {Accordion} from "../../index"

/**
 * @description 🍉 Support
 * @returns {JSX.Element}
 * @constructor
 */
const Support = () => {
    const [expanded, setExpanded] = useState(0)

    return <Wrapper>
        <Container>
            <LeftSide>
                <p className="sup">{data.supText}</p>
                <Title as="h2" type="h2">{data.title}</Title>
                <p className="text">{data.text}</p>
                <div className="btn-group">
                    {data.btnGroup.map((i, idx) =>
                        <Fragment key={idx}>
                            {i.type ? <Button as="a" href={i.href}>{i.label}</Button> : <a href={i.href}>{i.label}</a>}
                        </Fragment>
                    )}
                </div>
            </LeftSide>
            <RightSide>
                {data.list.map((i, idx) =>
                    <Accordion key={idx} {...i} id={idx} expanded={expanded} setExpanded={setExpanded}/>
                )}
            </RightSide>
        </Container>
    </Wrapper>
}

/*  💅 Styled Components */
const Wrapper = styled(SectionWrapper)`
  ${Container} {
    gap: 30px;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: minmax(300px, 407px) minmax(400px, 588px);
      justify-content: space-between;
    }
  }
`
const LeftSide = styled.div`
  .sup {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 12px;
    color: #424F7B;
  }

  ${Title} {
    margin-bottom: 14px;
    @media (min-width: 992px) {
      margin-bottom: 24px;
    }
  }

  .text {
    margin-bottom: 22px;

    @media (min-width: 992px) {
      margin-bottom: 32px;
    }
  }

  .btn-group {
    display: flex;
    align-items: center;
    gap: 24px;

    a:not([class]), a[class=""]{
      color: #0E1734;
    }
  }
`
const RightSide = styled.div`
  width: 100%;
  display: grid;
  gap: 14px;

  @media (min-width: 992px) {
    gap: 24px;
  }
`

// Exporting the component as the default export.
export default Support
