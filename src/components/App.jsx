import React from 'react';
import '../index.css';

import Userinput from './Userinput'

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      chatContent: [],
      value: '',
      disabled: false,
      botMemory: [
        'Bonjour, comment allez-vous ?',
        'Oui',
        'Je ne sais pas ...',
        'Que la force soit avec toi.',
        'Je dois m\'en aller maintenant !',
        'Comment tu sais tout ça ?',
        'Tu es vraiment trop fort !',
        'Bof ...',
        'je ne vois pas l\'intérêt de cette conversation !',
        'La vie c\'est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber.',
        'Les choses que l\'on possède finissent par nous posséder',
        'C’est à une demi-heure d’ici. J’y suis dans dix minutes.',
        'La différence entre toi et moi, c’est que moi j’ai la classe',
        'Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée… Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu : et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie… je ne suis qu’amour ! Et finalement, quand beaucoup de gens aujourd’hui me disent « Mais comment fais-tu pour avoir cette humanité ? », et bien je leur réponds très simplement, je leur dis que c’est ce goût de l’amour ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique, mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi…'
      ]
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const chatContent = this.state.chatContent.concat(this.state.value)
    
    this.setState({ value: '', chatContent, disabled: !this.state.disabled })

    this.scrollEvent()

    setTimeout(() => {
      this.handleBot()
    }, 500);
  }

  scrollEvent = () => {
    const chatContainer = document.querySelector('.chat-container')
    chatContainer.scroll({ top: chatContainer.scrollHeight, behavior: 'smooth' });

    document.querySelector('.user-input').focus()
  }



  handleBot = () => {

    const chatContent = this.state.chatContent.length < 2 ? this.state.chatContent.concat(this.state.botMemory[0]) : this.state.chatContent.concat(this.state.botMemory[Math.floor(Math.random() * (this.state.botMemory.length - 1)) + 1])

    this.setState({ chatContent, disabled: !this.state.disabled })
    this.scrollEvent()
  }

  render () {
    return <div>
      <div className='chat-container'>
        {this.state.chatContent.map((chatContent, index) => 
          <div key={index} className="message-wrapper">
            <p className={index%2 === 0 ? 'user-messages' : 'bot-messages' } >{chatContent}</p>
          </div>
        )}
      </div>
      
      <Userinput disabled={this.state.disabled} value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
      
    </div>
  }
}

export default App;