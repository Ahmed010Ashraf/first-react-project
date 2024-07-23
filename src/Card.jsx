export default function Card(props) {
  return (
    <div
      style={{
        backgroundColor: "#f5f1f1",
        color: "black",
        borderRadius: "10px",
        padding: "10px",
        position: "relative",
      }}
    >
      <p>name : {props.name}</p>
      <p>price : {props.price}</p>
      <p>catigory : {props.catigory}</p>
      <p>count : {props.count}</p>
      <p
        className="sale"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          padding: "10px",
          backgroundColor: props.sale ? "red" : "green",
          color: "white",
          borderRadius: "10px",
          margin: "10px 10px 0 0",
          cursor: "pointer",
        }}
      >
        {props.sale ? "saled" : "not saled"}
      </p>
      <button
        style={{
          width: "100%",
          padding: "10px 15px",
          border: "1px solid red",
          borderRadius: "10px",
          fontSize: "20px",
          cursor: "pointer",
        }}

        onClick={()=>props.del(props.id)}
      >
        delete
      </button>
      <button
        style={{
          width: "100%",
          padding: "10px 15px",
          border: "1px solid red",
          borderRadius: "10px",
          fontSize: "20px",
          cursor: "pointer",
        }}

        onClick={()=>props.update(props.id)}
      >
        update
      </button>
    </div>
  );
}
