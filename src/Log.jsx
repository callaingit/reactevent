class Log extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: (new Date()).getTime() + "/" + Math.random()
    }
  }
  render() {
    console.log(this.props.info, ':', this.state.id)
    return null // Won't render anything in the browser
  }
}
