class Button extends React.Component {
    constructor(props) {
      super(props)
      this.state = {x:30}
      this.onClick = this.onClick.bind(this)
    }
    onClick() {
      console.log('Hello', this.state.x) // this is undefined unless we bind it...
    }
    render() {
      return (
        <React.Fragment>
          <button onClick={this.onClick}>OK</button>
        </React.Fragment>
      )
    }
}
