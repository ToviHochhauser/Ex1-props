import Comp3 from "./Comp3.jsx";
function Comp2(props) {
  return (
    <>
      <div style={{ backgroundColor: "orange" ,height:"200px"}}>
     <h5 style={{paddingTop:"5px"}}>Comp2</h5>
      <Comp3 info={props.info}/>
      </div>
    </>
  );
}
export default Comp2;
