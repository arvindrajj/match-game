import './index.css'

const ListItem = props => {
  const {imagesList, onClickMatchedImage} = props
  const {thumbnailUrl, id} = imagesList
  const isMatch = () => {
    onClickMatchedImage(id)
  }

  return (
    <li className="image-list">
      <button type="button" className="image-button" onClick={isMatch}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ListItem
