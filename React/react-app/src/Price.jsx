export default function Price({OldPrice, NewPrice}){
    let Oldstyles ={
        textDecoration: "line-through",
    };
    let Newstyles ={
        fontWeight: "bold",
    }
    let styles = {
      backgroundColor: "#e0c367",
      height: "30px",
      width: "200px",
      borderBottomLeftRadius: "14px",
      borderBottomRightRadius: "14px",
    };
    return (
      <div style={styles}>
        <span style={Oldstyles}>{OldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={Newstyles}>{NewPrice}</span>
      </div>
    );
}