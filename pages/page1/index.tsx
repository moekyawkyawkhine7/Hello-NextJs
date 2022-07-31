// Styled-Css => which mean css in js
// Not recommended this style of coding
import React from 'react'

const Heading = ({
  heading
}) => {
  return (
    <div>
      <h1>
        {heading}
      </h1>
      {/* styled css scope is current component. */}
      <style jsx>
        {`
            h1{
              color: red;
              padding: 0 0 0 30px;
            }

            .font-style{
               font-style: italic
            }
        `}
      </style>
    </div>
  )
}

const Page1 = () => {
  return (
    <div>
      <Heading heading={"Nice to meet you!"} />
      <h1>Here</h1>
      <style jsx>
        {`
          h1{
            padding: 0 0 0 30px;
          }
        `}
      </style>
      {/* If you want to effect all component, you can use global attribute. */}
      {/* But this global scope is in current file. This scope doesn't effect outside of this file. */}
      <style jsx global>
        {`
          h1{
            font-weight: 700px;
            font-size: 50px;
          }
        `}
      </style>
    </div>
  )
}

export default Page1