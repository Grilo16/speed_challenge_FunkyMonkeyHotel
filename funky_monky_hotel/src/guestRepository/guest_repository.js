const backEndRoutes = {

    getAllGuests(){
        return fetch("http://localhost:9000/guests")
        .then(res => res.json())
    },

    addGuest(guestObject){
        return fetch("http://localhost:9000/guests/add", {
            method:"POST",
            body:JSON.stringify(guestObject),
            headers:{"Content-Type": "application/json"}
        })
        .then(res => res.json())
    },

    removeGuestById(id){
        return fetch(`http://localhost:9000/guests/delete/${id}`, {
            method:"DELETE"
        })
        .then(res => res.json())
    },
    
    editGuestById(id, patchObject){
        return fetch(`http://localhost:9000/guests/update/${id}`, {
            method: "POST",
            body: JSON.stringify(patchObject),
            headers:{"Content-Type": "application/json"}
        })
        .then(res => res.json())
    }

}

export default backEndRoutes