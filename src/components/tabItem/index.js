import './index.css'

const TabItem = props => {
  const {tabItem, onChangeTabItem, isSelected} = props
  const {displayText, tabId} = tabItem
  const selectedClassName = isSelected ? 'selected' : ''
  const selectedBgClassName = isSelected ? 'selected-bg' : ''

  const changeTab = () => {
    onChangeTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" className="tab-button" onClick={changeTab}>
        <p className={`tab-name ${selectedClassName}`}>{displayText}</p>
        <p className={`line ${selectedBgClassName}`} />
      </button>
    </li>
  )
}

export default TabItem
