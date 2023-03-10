const express = require('express');
const router = express.Router();

const {
    getOneCharacter,
    getAllCharacters, createMcuCharacter, updateMcuCharacter, deleteMcuCharacter
} = require("../controllers/mcuController");

router.post('/createMcuCharacter', createMcuCharacter);

router.get('/getOneCharacter/:name', getOneCharacter)

router.get('/allCharacters', getAllCharacters);

router.put('/updateMcuCharacter', updateMcuCharacter);

router.delete('/deleteMcuCharacter/:name', deleteMcuCharacter);

module.exports = router;