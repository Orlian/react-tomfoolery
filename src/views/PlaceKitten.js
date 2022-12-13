
const PlaceKitten = (kittenOrPuppy = true) => {
    return (
        <>
            <div className="page-wrapper">
                <div className="place-kitten-wrapper">
                   { kittenOrPuppy ?
                    <img src="https://placekitten.com/400/400" alt="cat"/> :
                    <img src="https://place-puppy.com/400x400" alt="dog"/>
                   }
                </div>
            </div>
        </>
    )
}

export default PlaceKitten;
