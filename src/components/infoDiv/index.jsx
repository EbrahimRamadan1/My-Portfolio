import "./index.scss";
export default function InfoDiv(props) {
  return (
    <div className="infoDev col-5">
      <p className="pForInfo">{props.name}: <span style = {{color:'white'}}>{props.value}</span></p>
    </div>
  );
}
