const template = `
div(id='bam-content')
  h1 #{Title}
  h2 The amount is #{Amount}
  p #{Description}
  dl
    dt Category
    dd #{Category}
    dt Number
    dd #{Number}
  p Letters
    ul
      each val in Letter
        li= val
  p Specs
    ul
      each val in Specs
        li= val
`

export default template
