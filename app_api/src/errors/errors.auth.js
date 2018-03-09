module.exports = {
    errorDataBaseConnection: (res) => {
        res.status(400).json({errors: { global: "Error from database connection." } })
    },
    errorIncorrectEmail: (res) => {
        res.status(400).json({errors: { global: "Incorrect email." } })
    },
    errorIncorrectPassword: (res) => {
        res.status(400).json({errors: { global: "Message from server: Incorrect password." } })
    },
    errorEmailIsRegistered: (res) => {
        res.status(400).json({errors: { global: "Message from server: The email is already registered." } })
    },
    errorEncriptingPassword: (res) => {
        res.status(400).json({errors: { global: "Message from server: Error encrypting password." } })
    },   
    errorSavingUser: (res) => {
        res.status(400).json({errors: { global: "Message from server: Error saving new user." } })
    }   
}