import React from 'react';
import '../index.css';

class Userinput extends React.Component {

  render () {
    return <form className='userinput-form' onSubmit={this.props.onSubmit}>
      <input disabled={this.props.disabled ? 'disabled' : ''} autoFocus className='user-input' type="text" value={this.props.value} onChange={this.props.onChange} placeholder='Entrez votre texte ici'/>
      <input className='user-submit' value='Envoyer' type='submit'/>
  </form>
  }
}

export default Userinput;