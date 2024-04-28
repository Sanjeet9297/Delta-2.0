import { useState } from "react";
import { genTicket, sum} from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n = 3, winCondition}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

let buyTicket = () =>{
    setTicket(genTicket(n));
}

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket}/>
      <Button action={buyTicket}/>
      {/* <button onClick={buyTicket}>Buy New Ticket</button> */}
      <h3>{isWinning && "Congratulation, you won!"}</h3>
    </div>
  );
}
