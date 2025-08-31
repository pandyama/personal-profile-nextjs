const ReactText = () => (
  <svg
    viewBox='0 0 200 200'
    width='40'
    height='40'
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      <path id='circlePath' d='M10 50a40 40 0 1 1 80 0 40 40 0 1 1 -80 0' />
    </defs>
    <text
      fill='black'
      font-size='20'
      font-family='system-ui, sans-serif'
      letter-spacing='4'
    >
      <textPath href='#circlePath' startOffset='25%' text-anchor='middle'>
        R E A C T
      </textPath>
    </text>
  </svg>
)

export default ReactText
