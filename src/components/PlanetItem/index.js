import './index.css'

const PlanetItem = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails

  return (
    <div className="cont1">
      <img className="image" src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
