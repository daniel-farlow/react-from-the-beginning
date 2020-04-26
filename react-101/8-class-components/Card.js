// // Card component as a function 
// function Card(props) {
//   console.log(props)
//   const { course: courseTitle, instructor: courseInstructor, image: courseImage } = props.data;

//   return (
//       <div className="col s2">
//         <div className="card hoverable small">
//           <div className="card-image">
//             <img src={courseImage} />
//           </div>
//           <div className="card-content">
//             <p>{courseTitle}</p>
//             <p>{courseInstructor}</p>
//           </div>
//           <div className="card-action">
//             <a href="#">$9.99</a>
//           </div>
//         </div>
//       </div>
//   )
// }

// Card component as a class

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { course: courseTitle, instructor: courseInstructor, image: courseImage } = this.props.data;
    
    return (
      <div className="col s2">
        <div className="card hoverable small">
          <div className="card-image">
            <img src={courseImage} />
          </div>
          <div className="card-content">
            <p>{courseTitle}</p>
            <p>{courseInstructor}</p>
          </div>
          <div className="card-action">
            <a href="#">$9.99</a>
          </div>
        </div>
      </div>
    )
  }
}