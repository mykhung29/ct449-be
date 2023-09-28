const ApiError = require("../api-error")
const ContactService = require("../services/contact.service.js")
const MongoDB = require("../untils/mongodb.untils")



//Create and save a new Contact
module.exports.create = async (req, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(400, "Name can't be empty"))
    }
    try {
        const contactService = new ContactService(MongoDB.client)
        const document = await contactService.create(req.body)
        // console.log(document);
        return res.send(document)
    }
    catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        )
    }
}




module.exports.create = (req, res) => {
    res.send({ message: 'Create handler'})
}

module.exports.findAll = (req, res) => {
    res.send({ message: 'find all handler'})
}

module.exports.findOne = (req, res) => {
    res.send({ message: 'find One handler'})
}

module.exports.update = (req, res) => {
    res.send({ message: 'update handler'})
}

module.exports.delete = (req, res) => {
    res.send({ message: 'delete handler'})
}

module.exports.deleteAll = (req, res) => {
    res.send({ message: 'deleteAll handler'})
}

module.exports.findAllFavorite = (req, res) => {
    res.send({ message: 'findAllFavorite handler'})
}