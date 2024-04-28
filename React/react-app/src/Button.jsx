function printHello(event){
    console.log("Hello!");
    console.log(event)
}
function printBye(){
    console.log("Bye!");
}
function dblClick(){
    console.log("Double Click Me!");
}


export default function Button(){
    return (
      <div>
        <button onClick={printHello}>Click Me!</button>
        <p onMouseOver={printBye}>
          lorem MPUplacement #Madhyanchalprofessionaluniversity
          #privateuniversity #MPU #PGOI #bestprivateuniversityinbhopal #Bhopal
          #bhopal_the_city_of_lakes
        </p>
        <button onDoubleClick={dblClick}>double click me!</button>
      </div>
    );
}