import React, { Component, Fragment } from 'react';
import '../../styles/spacing.scss';
import FormIntro from '../FormIntro/FormIntro.component';

function showState(stateObj) {
  console.log(`==================== NEW STATE BELOW ====================`);
  console.log(JSON.parse(JSON.stringify(stateObj)));
  console.log(`=========================================================`);
}

class FormExperiment extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      // button
      customButton: 'Change button text!',
      // checkbox
      wantsCoffee: true,
      wantsCake: false,
      wantsPizza: true,
      // color
      chosenColor: '#000000',
      // date
      chosenDate: '',
      chosenDateAndTime: '2018-06-12T19:30',
      // file (not controlled because read-only; see for more details: https://reactjs.org/docs/forms.html#the-file-input-tag)
      // email
      chosenEmail: '',
      // hidden (nothing to control here, unless desired through a callback of some kind)
      hiddenEntry: 'ehwifuhieuf',
      // image (nothing to control here)
      chosenMonth: '2018-04',
    }
  }

  componentDidUpdate() {
    showState(this.state)
  }

  handleChange = (event) => {
    console.dir(event.target)
    const {target: {name: eventName, type: eventType, value: eventValue}} = event;
    switch(eventType) {
      case 'checkbox':
        this.setState({
          [event.target.name]: event.target.checked
        });
        break;
      default:
        this.setState({
          [eventName]: eventValue
        });
    }
  }

  handleSubmit = (event) => {
    alert(JSON.stringify(this.state, null, 2))
    event.preventDefault();
  }

  handleButton = (event) => {
    this.setState({
      customButton: event.target.value
    })
  }

  render() { 
    return (  
      <Fragment>
      <FormIntro />
      <form onSubmit={this.handleSubmit}>
        {/* button */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button' target='_blank' rel='noopener noreferrer'>button</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>button</strong> are rendered as simple push buttons, which can be programmed to control custom functionality anywhere on a webpage as required when assigned an event handler function (typically for the click event).</p>
          <input onChange={this.handleButton} type='text' name='buttonHandler' value={this.state.customButton} style={{marginRight: 20}}/>
          <input onClick={this.handleSubmit} type='button' name='customButton' className="my-button" value={this.state.customButton} />
        {/* checkbox */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox' target='_blank' rel='noopener noreferrer'>checkbox</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>checkbox</strong> are rendered by default as boxes that are checked (ticked) when activated, like you might see in an official government paper form. The exact appearance depends upon the operating system configuration under which the browser is running. Generally this is a square but it may have rounded corners. A checkbox allows you to select single values for submission in a form (or not).</p>
          <fieldset name="checkbox-demo" style={{marginLeft: '20vw', marginRight: '20vw'}}>
            <legend>Choose some food</legend>
            <label>Coffee<input onChange={this.handleChange} type="checkbox" name="wantsCoffee" checked={this.state.wantsCoffee} /></label>
            <label>Cake<input onChange={this.handleChange} type="checkbox" name="wantsCake" checked={this.state.wantsCake} /></label>
            <label>Pizza <input onChange={this.handleChange} type='checkbox' name='wantsPizza' checked={this.state.wantsPizza} /></label>
          </fieldset>
        {/* color */}
        <h2 style={{color: this.state.chosenColor}}><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color" target="_blank" rel="noopener noreferrer">color</a> (chosen color: {this.state.chosenColor})</h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>color</strong> provide a user interface element that lets a user specify a color, either by using a visual color picker interface or by entering the color into a text field in <code>#rrggbb</code> hexadecimal format. Only simple colors (without alpha channel) are allowed though CSS colors has more formats, e.g. color names, functional notations and a hexadecimal format with an alpha channel. The element's presentation may vary substantially from one browser and/or platform to another—it might be a simple textual input that automatically validates to ensure that the color information is entered in the proper format, or a platform-standard color picker, or some kind of custom color picker window.</p>
          <label>Choose a color: <input onChange={this.handleChange} type="color" name="chosenColor" /></label>
        {/* date */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date' target='_blank' rel='noopener noreferrer'>date</a></h2>
          <p><code>&lt;input/&gt;</code> elements of <strong>type="date"</strong> create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface. The resulting value includes the year, month, and day, but <em>not</em> the time. The <code>&lt;time/&gt;</code>  and <code>&lt;datetime-local/&gt;</code>  input types support time and date+time input.</p>
          <label>Choose a date: <input onChange={this.handleChange} type='date' name='chosenDate' value={this.state.chosenDate} min="2014-07-20" max="2022-02-01"/></label><br/>
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local' target='_blank' rel='noopener noreferrer'>datetime-local</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>datetime-local</strong> create input controls that let the user easily enter both a date and a time, including the year, month, and day as well as the time in hours and minutes.</p>
          <label>Choose a date and time: <input onChange={this.handleChange} type='datetime-local' name='chosenDateAndTime' value={this.state.chosenDateAndTime} min="2018-06-07T00:00" max="2018-06-14T00:00" /></label>
        {/* email */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email' target='_blank' rel='noopener noreferrer'>email</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>email</strong> are used to let the user enter and edit an e-mail address, or, if the multiple attribute is specified, a list of e-mail addresses.</p>
          <label>Provide your email: <input onChange={this.handleChange} type='email' name='chosenEmail' value={this.state.chosenEmail}  /></label>
        {/* file: NOT CONTROLLED (read-only)*/}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file' target='_blank' rel='noopener noreferrer'>file</a></h2>
          <p><code>&lt;input/&gt;</code> elements with <strong>type="file"</strong> let the user choose one or more files from their device storage. Once chosen, the files can be uploaded to a server using form submission, or manipulated using JavaScript code and the File API.<br/><strong>NOTE:</strong> This will not be a controlled component in React, "Because its value is read-only, it is an uncontrolled component in React. It is discussed together with other uncontrolled components later in the documentation."</p>
          <label>Choose a file: <input type="file"/></label>
        {/* hidden */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden' target='_blank' rel='noopener noreferrer'>hidden</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>"hidden"</strong> let web developers include data that cannot be seen or modified by users when a form is submitted. For example, the ID of the content that is currently being ordered or edited, or a unique security token. Hidden inputs are completely invisible in the rendered page, and there is no way to make it visible in the page's content.</p>
          <label>This is a hidden control: <input type="hidden" name="hiddenEntry" value={this.state.hiddenEntry} /></label>
        {/* image */}
        <h2><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image" target="_blank" rel="noopener noreferrer">image</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>image</strong> are used to create graphical submit buttons, i.e. submit buttons that take the form of an image rather than text.</p>
          <label>Image submit button (shows state): <input onChange={this.handleChange} type='image' name='imageInput' src="https://user-images.githubusercontent.com/52146855/80801682-bfe1cb80-8b72-11ea-864e-b2271c7a45a9.jpg" height="50px" alt="Login" style={{borderRadius: 10}}/></label>
        {/* month */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month' target='_blank' rel='noopener noreferrer'>month</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>month</strong> create input fields that let the user enter a month and year allowing a month and year to be easily entered. The value is a string whose value is in the format <code>"YYYY-MM"</code>, where <code>YYYY</code> is the four-digit year and <code>MM</code> is the month number.</p>
          <label>Choose a month: <input onChange={this.handleChange} type='month' name='chosenMonth' value={this.state.chosenMonth} min="2017-04" max="2019-06" /></label>
        {/* number */}
        <h2><a href='' target='_blank' rel='noopener noreferrer'></a></h2>
      </form>
      </Fragment>
    );
  }
}
 
export default FormExperiment;