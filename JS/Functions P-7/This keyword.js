const student =
{
    name: "Sanjeet",
    age: 23,
    eng:95,
    math: 93,
    phy: 97,
    getAvg()
    {
        console.log(this);
       let avg = (this.math + this.eng + this.phy)/3;
       console.log(`${this.name} got avg marks = ${avg}`);

    }
}



function getAvg(){
    console.log(this);
}