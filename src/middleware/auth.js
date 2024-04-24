function checkLoggedIn (req, res , next) {
    let loggedIn = true;
    if(!loggedIn) {
        return res.status(401).json({
            error: 'You must logged In!!!'
        })
    }

    next()
}

module.exports = {
    checkLoggedIn
}