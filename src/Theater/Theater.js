
    import "./Theater.css"
        const data=[
            {
                img:"https://bnbtplstorageaccount.blob.core.windows.net/theaterpics/v2platinum1.jpg",
                name:"Platinum Theatre",
                prize:" ₹2799 for 6 or less people",
                extracharges:"(Rs 400 per extra person",
                available:"3 slots available on 24-01-2024",
                people:"2 - 12 People"
            }
        ]
        export default function Theater (){
            return(
                <>
                <div className="Theater_Parent">
                    <h2 className="Theater_h2">Choose your theater at Hitec city</h2>
                    <div className="Theater_Subb_Parent">
                        <input className="Theater_Input" type="date" />
                        <div className="card_Parent">
                            <div className="card_Sub_Parent">
                                {data && data.map((item)=>{
                                    return(
                                        <div className="Card_Child">
                                            <img className="Theater_Img" src={item.img} alt="Not Found"/>
                                            <div className="Theater_Name">{item.name}</div>
                                            <div className="Theater_Prize">{item.prize}</div>
                                            <div className="Theater_ExtraPrize">{item.extracharges}</div>
                                            <div className="Theater_Available">{item.available}</div>
                                            <button className="btn5">Check Slots</button>
                                            <div className="Theater_people">{item.people}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )
        }