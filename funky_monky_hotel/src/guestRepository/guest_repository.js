const backEndRoutes = {

    getAllGuests(){
        return fetch("http://localhost:9000/guests")
        .then(res => res.json())
    }

}

export default backEndRoutes