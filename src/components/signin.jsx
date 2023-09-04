import React from 'react';

class SignIn
 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          password: ''
        }
    }

    onPasswordChange = (event) => {
      this.setState({password: event.target.value})
    }

    onSubmit = (event) => {
      event.preventDefault();
      fetch('https://ferienhaus-poel-api-bdba29522c7d.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        password: this.state.password
      })})
      .then(response => response.json())
      .then(status => {if (status) {
        this.props.changeSignIn(true)
      }})
    }

    render() {
      return (
        <section className='bg-gray-100 w-screen h-96 bg-teal-900'>
          <div className="h-full w-full grid place-items-center pt-[5em]">
            <form>
                <label className="mr-6" htmlFor="password">Passwort:</label>
                <input className="text-dark" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
            </form>
            <button class="hover:bg-white text-teal-200 font-semibold hover:text-teal-700 py-2 px-4 border border-teal-200 hover:border-transparent rounded"
            onClick={this.onSubmit}>
              Einloggen
            </button>
          </div>
          </section>
        )
    }

}

export default SignIn;