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
      wantedFoods: ['coffee', 'pizza'],
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
      // month
      chosenMonth: '2018-04',
      // number
      chosenNumber: 4,
      // password
      chosenPassword: '',
      // radio
      contactMethod: 'email',
      transportationMethod: 'buggy',
      // range
      desiredVolume: '40',
      desiredGrade: '80',
      awardsReceived: '2',
      // reset (see entry)
      // search
      searchInput: '',
      // submit (see entry)
      // tel
      chosenTelephone: '',
      // text
      chosenText: '',
      // time
      appointmentTime: '13:30',
      // url
      desiredURL: '',
      // week
      chosenWeek: '',
      // FOR SUBSEQUENT FORM-RELATED STUFF
      // select (single and multiple)
      chosenPet: '',
      chosenFruits: [],
      // textarea
      userEssay: '',
      // optgroup
      chosenDinosaur: '',
      // progress
      userProgress: '20',
      progressManipulator: '20'
    }
    this.initialState = this.state; // only for input of type "reset" (not recommended); see here: https://stackoverflow.com/a/52075420/5209533
  }

  componentDidUpdate() {
    showState(this.state)
  }

  handleChange = (event) => {
    event.stopPropagation();
    console.dir(event.target)
    const {target: {name: eventName, type: eventType, value: eventValue}} = event;
    switch(eventType) {
      case 'checkbox':
        this.setState((prevState, props) => {
          let {wantedFoods} = this.state;
          let removalIndex = wantedFoods.indexOf(eventValue);
          let newWantedFoods = wantedFoods.includes(eventValue) 
            ? wantedFoods.slice(0, removalIndex).concat(wantedFoods.slice(removalIndex + 1)) 
              : [...wantedFoods, eventValue];
          return ({
            [eventName]: !prevState[eventName],
            wantedFoods: newWantedFoods
          })
        });
        break;
      case 'select-multiple':
        this.setState({
          chosenFruits: Array.from(event.target.selectedOptions, (item) => item.value)
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

  handleProgress = (event) => {
    this.setState({
      userProgress: event.target.value
    });
  }

  handleFormReset = (event) => {
    this.setState(() => this.initialState)
  }

  render() { 
    return (  
      <Fragment>
      <FormIntro />
      <form onSubmit={this.handleSubmit} >
        {/* button */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button' target='_blank' rel='noopener noreferrer'>button</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>button</strong> are rendered as simple push buttons, which can be programmed to control custom functionality anywhere on a webpage as required when assigned an event handler function (typically for the click event).</p>
          <input onChange={this.handleButton} type='text' name='buttonHandler' value={this.state.customButton} style={{marginRight: 20}}/>
          <input onClick={this.handleSubmit} type='button' name='customButton' className="my-button" value={this.state.customButton} />
        {/* checkbox */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox' target='_blank' rel='noopener noreferrer'>checkbox</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>checkbox</strong> are rendered by default as boxes that are checked (ticked) when activated, like you might see in an official government paper form. The exact appearance depends upon the operating system configuration under which the browser is running. Generally this is a square but it may have rounded corners. A checkbox allows you to select single values for submission in a form (or not).</p>
          <fieldset name="checkbox-demo" style={{marginLeft: '20vw', marginRight: '20vw'}} >
            <legend>Choose some food</legend>
            <label>Coffee<input className='wantedFoods' onChange={this.handleChange} type="checkbox" name="wantsCoffee" value='coffee' checked={this.state.wantsCoffee} /></label>
            <label>Cake<input className='wantedFoods' onChange={this.handleChange} type="checkbox" name="wantsCake" value='cake' checked={this.state.wantsCake} /></label>
            <label>Pizza <input className='wantedFoods' onChange={this.handleChange} type='checkbox' name='wantsPizza' value='pizza' checked={this.state.wantsPizza} /></label>
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
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number' target='_blank' rel='noopener noreferrer'>number</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>number</strong> are used to let the user enter a number. They include built-in validation to reject non-numerical entries. The browser may opt to provide stepper arrows to let the user increase and decrease the value using their mouse or by simply tapping with a fingertip.</p>
          <label>Enter a number: <input onChange={this.handleChange} type='number' name='chosenNumber' value={this.state.chosenNumber} /></label>
        {/* password */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password' target='_blank' rel='noopener noreferrer'>password</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>password</strong> provide a way for the user to securely enter a password. The element is presented as a one-line plain text editor control in which the text is obscured so that it cannot be read, usually by replacing each character with a symbol such as the asterisk ("*") or a dot ("•"). This character will vary depending on the user agent and OS.</p>
          <label>Enter a password: <input onChange={this.handleChange} type='password' name='chosenPassword' value={this.state.chosenPassword} /></label>
        {/* radio */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio' target='_blank' rel='noopener noreferrer'>radio</a></h2>
          <p><code>&lt;/&gt;</code> elements of type <strong>radio</strong> are generally used in <strong>radio groups</strong>—collections of radio buttons describing a set of related options. Only one radio button in a given group can be selected at the same time. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected.</p>
          <fieldset name="radio-demo-one" style={{marginLeft: '20vw', marginRight: '20vw'}} >
            <legend>Select your preferred contact method:</legend>
            <label className='my-radio'><input onChange={this.handleChange} type='radio' name='contactMethod' value='email' checked= {this.state.contactMethod === 'email'}/>Email</label>
            <label className='my-radio'><input onChange={this.handleChange} type='radio' name='contactMethod' value='phone' checked={this.state.contactMethod === 'phone'} />Phone</label>
            <label className='my-radio'><input onChange={this.handleChange} type='radio' name='contactMethod' value='mail' checked={this.state.contactMethod === 'mail'} />Mail</label>
          </fieldset>
          <fieldset name="radio-demo-two" style={{marginLeft: '20vw', marginRight: '20vw'}} >
            <legend>Select your preferred method of transportation:</legend>
            <label className='my-radio'><input onChange={this.handleChange} type='radio' name='transportationMethod' value='car' checked= {this.state.transportationMethod === 'car'}/>Car</label>
            <label className='my-radio'><input onChange={this.handleChange} type='radio' name='transportationMethod' value='buggy' checked={this.state.transportationMethod === 'buggy'} />Buggy</label>
            <label className='my-radio'><input onChange={this.handleChange} type='radio' name='transportationMethod' value='plane' checked={this.state.transportationMethod === 'plane'} />Plane</label>
            <label className='my-radio'><input onChange={this.handleChange} type='radio' name='transportationMethod' value='walking' checked={this.state.transportationMethod === 'walking'} />Walking</label>
          </fieldset>
        {/* range */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range' target='_blank' rel='noopener noreferrer'>range</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>range</strong> let the user specify a numeric value which must be no less than a given value, and no more than another given value. The precise value, however, is not considered important. This is typically represented using a slider or dial control rather than a text entry box like the number input type. Because this kind of widget is imprecise, it shouldn't typically be used unless the control's exact value isn't important.</p>
          <label>Choose Volume ({this.state.desiredVolume}): <input onChange={this.handleChange} type='range' name='desiredVolume' value={this.state.desiredVolume} min='0' max='100' step='1' /></label><br/>
          <label>Desired grade on 10-point scale ({this.state.desiredGrade}): <input onChange={this.handleChange} type='range' name='desiredGrade' value={this.state.desiredGrade} min='0' max='100' step='10' /></label><br/>
          <label>Awards you have received ({this.state.awardsReceived}) <input onChange={this.handleChange} type='range' name='awardsReceived' value={this.state.awardsReceived} min='-5' max='10' step='1' /></label>
        {/* reset (not recommended) */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset' target='_blank' rel='noopener noreferrer'>reset</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>"reset"</strong>  are rendered as buttons, with a default click event handler that resets all of the inputs in the form to their initial values.</p>
          <input type="reset" value="Reset" onClick={this.handleFormReset} />
        {/* search */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search' target='_blank' rel='noopener noreferrer'>search</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>search</strong> are text fields designed for the user to enter search queries into. These are functionally identical to text inputs, but may be styled differently by the user agent.</p>
          <input onChange={this.handleChange} style={{marginRight: 10}} type='search' name='searchInput' value={this.state.searchInput} placeholder='Enter search query' /><button>Search</button>
        {/* submit */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit' target='_blank' rel='noopener noreferrer'>submit</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>submit</strong> are rendered as buttons. When the click event occurs (typically because the user clicked the button), the user agent attempts to submit the form to the server.</p>
          <input type="submit" value="Send Request"></input>
        {/* tel */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel' target='_blank' rel='noopener noreferrer'>tel</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>tel</strong> are used to let the user enter and edit a telephone number. Unlike <code>&lt;input type="email"/&gt;</code> and <code>&lt;input type="url"/&gt;</code> , the input value is not automatically validated to a particular format before the form can be submitted, because formats for telephone numbers vary so much around the world.</p>
          <label>Telephone: <input onChange={this.handleChange} type='tel' name='chosenTelephone' value={this.state.chosenTelephone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /> <small>Format: 123-456-7890</small></label>
        {/* text */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text' target='_blank' rel='noopener noreferrer'>text</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>text</strong> create basic single-line text fields.</p>
          <label>Name (4 to 20 characters) <input onChange={this.handleChange} type='text' name='chosenText' value={this.state.chosenText} minLength='4' maxLength='20' size='30' /></label>
        {/* time */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time' target='_blank' rel='noopener noreferrer'>time</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>time</strong> create input fields designed to let the user easily enter a time (hours and minutes, and optionally seconds). The control's user interface will vary from browser to browser. Support is good in modern browsers, with Safari being the sole major browser not yet implementing it; in Safari, and any other browsers that don't support <code>&lt;time/&gt;</code> , it degrades gracefully to <code>&lt;input type='text' /&gt;</code> .</p>
          <label>Choose appointment time: <input onChange={this.handleChange} type='time' name='appointmentTime' value={this.state.appointmentTime} min='09:00' max='19:30' step='1800' /> <small>Office hours are 9am to 7:30pm</small></label>
        {/* url */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url' target='_blank' rel='noopener noreferrer'>url</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>url</strong> are used to let the user enter and edit a URL.</p>
          <label>Enter an https:// URL: <input onChange={this.handleChange} type='url' name='desiredURL' value={this.state.desiredURL} placeholder="https://example.com" pattern="https://.*" size="30" /></label>
        {/* week */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week' target='_blank' rel='noopener noreferrer'>week</a></h2>
          <p><code>&lt;input/&gt;</code> elements of type <strong>week</strong> create input fields allowing easy entry of a year plus the ISO 8601 week number during that year (i.e., week 1 to 52 or 53).</p>
          <label>Choose a week in May or June: <input onChange={this.handleChange} type='week' name='chosenWeek' value={this.state.chosenWeek} min='2020-W18' max='2020-W26'/></label>
      </form>
        <hr/>
        {/* select */}
        <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select' target='_blank' rel='noopener noreferrer'>select</a></h2>
          <p>The HTML <strong>select</strong> element represents a control that provides a menu of options. [See <a href="https://reactjs.org/docs/forms.html#the-select-tag" target='_blank' rel='noopener noreferrer'>how React works somewhat differently.</a> ]</p>
          <h3>single select</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Choose a pet:
              <select name="chosenPet" value={this.state.chosenPet} onChange={this.handleChange} >
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <h3>select-multiple</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite La Croix flavor:
              <select multiple={true} name='chosenFruits' value={this.state.chosenFruits} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
          {/* textarea */}
          <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea' target='_blank' rel='noopener noreferrer'>textarea</a></h2>
            <p>The HTML <code>&lt;textarea/&gt;</code> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.</p>
          <form onSubmit={this.handleSubmit}>
            <label>Tell us your story in the form of an essay: <textarea rows='10' cols='55' placeholder="Start your essay here!" /></label>
          </form>
          {/* optgroup */}
          <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup' target='_blank' rel='noopener noreferrer'>optgroup</a></h2>
            <p>The HTML <strong>optgroup</strong> element creates a grouping of options within a <code>&lt;select/&gt;</code> element.</p>
            <form>
            <label>Choose a dinosaur:
            <select onChange={this.handleChange} name='chosenDinosaur' value={this.state.chosenDinosaur}>
              <optgroup label="Theropods">
                <option>Tyrannosaurus</option>
                <option>Velociraptor</option>
                <option>Deinonychus</option>
              </optgroup>
              <optgroup label="Sauropods">
                <option>Diplodocus</option>
                <option>Saltasaurus</option>
                <option>Apatosaurus</option>
              </optgroup>
            </select>
            </label>
            <input type="submit" value="Submit" />
            </form>
          {/* progress */}
          <h2><a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress' target='_blank' rel='noopener noreferrer'>progress</a></h2>
            <p>The HTML <code>&lt;progress/&gt;</code> element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.</p>
            <label>Here is your progrss: <progress name='userProgress' value={this.state.userProgress} max='100' /></label><br/>
            <label>Change progress manually to see growth: <input onChange={this.handleProgress} type='range' name='progressManipulator' value={this.state.userProgress} min='0' max='100' step='1' /></label>
      </Fragment>
    );
  }
}
 
export default FormExperiment;