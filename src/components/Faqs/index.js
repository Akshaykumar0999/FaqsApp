// Write your code here.

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <div className="ul-card-container">
        <h1 className="faqs-name">FAQs</h1>
        <ul className="ul-card">
          {faqsList.map(eachItem => (
            <FaqItem faqsDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
