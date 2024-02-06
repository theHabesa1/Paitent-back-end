// routes/patientRoutes.js
const express = require('express');
const patientController = require('../controllers/patientController');

const router = express.Router();

router.get('/patients', patientController.getAllPatients);
router.post('/patients', patientController.addPatient);
router.delete('/patients/:id', patientController.deletePatient);
router.put('/patients/:id', patientController.updatePatient);

module.exports = router;
