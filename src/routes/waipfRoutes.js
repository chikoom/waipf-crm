// Receive app from index and pass it to our route function
const routes = (app) => {

    app.route('/subscription')

    .get((req,res) => 
    res.send("GET request seccessful"))

    .post((req,res) => 
    res.send("POST request seccessful"));



    app.route('/subscription/:subscriptionID')

    .put((req,res) => 
    res.send("PUT request seccessful"))

    .delete((req,res) => 
    res.send("DELETE request seccessful"));
}

// Exporting our routes to be used in other places
export default routes;