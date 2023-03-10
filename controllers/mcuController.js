const Mcu = require("../models/mcuModel");

async function createMcuCharacter(req, res) {
    try {
        
        const newMcuHero = {
            name: req.body.name,
            debut: req.body.debut,
            debutYear: req.body.debutYear
        }

        await Mcu.create(newMcuHero);

        res.json(
            {
                message: "success",
                payload: newMcuHero
            }
        );

    }
    catch (error) {
        res.json(
            {
                message: "failure",
                payload: "Error in create: " + error
            }
        );
    }
}

async function getOneCharacter(req, res) {
    try {

        let result = await Mcu.find({ name: req.params.name });

        res.json(
            {
                message: "success",
                payload: result
            }
        )
    }
    catch (error) {
        console.log("Error" + error);
        res.json(
            {
                message: "failure",
                payload: `Error occured: ${error}`
            }
        );
    }
}

async function getAllCharacters(req, res) {
    try {
        let result = await Mcu.find({});

        res.json (
            {
                message: "success",
                payload: result
            }
        );
    }
    catch (error) {
        console.log("Error" + error);
        res.json(
            {
                message: "failure",
                payload: `Error occur: ${error}`
        }
        );
    }
}

async function updateMcuCharacter(req, res) {
    try {

        let updatedMcuCharacter = {
            name: req.body.name,
            debut: req.body.debut,
            debutYear: req.body.debutYear
        }

        await Mcu.updateOne(
            {name: req.body.name},
            {$set: updatedMcuCharacter},
            {upsert: true}
        )
        res.json(
            {
                message: "success",
                payload: updatedMcuCharacter
            }
        );
    }

    catch(error) {
        console.log("Error in update" + error);

        res.json(
            {
                message: "failure",
                payload: "error in update " + error
            }
        );
    }
}

async function deleteMcuCharacter(req, res) {
    try {
        
        await Mcu.deleteOne({ name: req.body.name })

        res.json(
            {
                message: "success",
                payload: req.body.name
            }
        );
    }
    catch(error) {
        console.log("Error in deletion" + error);

        res.json(
            {
                message: "failure",
                payload: "error in deletion " + error
            }
        );
    }
}

module.exports = {getOneCharacter, getAllCharacters, createMcuCharacter, updateMcuCharacter, deleteMcuCharacter};