function handleFormSubmit(event){
    event.preventDefault();
    console.log("form Was Submitted");
}

export default function Form(){
  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder="Write Something" />
      <button>Submit</button>
    </form>
  );
}