// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  onClickButton = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  getAnswerText = () => {
    const {faqsDetails} = this.props
    const {answerText} = faqsDetails
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="description">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqsDetails} = this.props
    const {questionText} = faqsDetails
    const {isActive} = this.state
    const imgUrls = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const alts = isActive ? 'minus' : 'plus'
    return (
      <li className="faq-container">
        <div className="btn-heading-opp-card">
          <h1 className="faq-question">{questionText}</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            <img src={imgUrls} alt={alts} />
          </button>
        </div>
        {this.getAnswerText()}
      </li>
    )
  }
}

export default FaqItem
