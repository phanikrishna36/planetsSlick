// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

const PlantetsSlider = props => {
  const {planetsList} = props

  return (
    <div data-testid="planets" className="slider-container">
      <h1 className="head">PLANETS</h1>
      <Slider {...planetsList}>
        {planetsList.map(i => (
          <PlanetItem key={i.id} itemDetails={i} />
        ))}
      </Slider>
    </div>
  )
}

export default PlantetsSlider
