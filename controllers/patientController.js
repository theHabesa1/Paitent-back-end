// controllers/patientController.js
const patientModel = require('../models/patientModel');

class PatientController {
  async getAllPatients(req, res) {
    try {
      const patients = await patientModel.getAllPatients();
      res.json(patients);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  async addPatient(req, res) {
    try {
      const { name, age, sex, contact, date, time, doctor } = req.body;
      await patientModel.addPatient({ name, age, sex, contact, date, time, doctor });
      res.status(201).send('Patient added successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  async deletePatient(req, res) {
    try {
      const patientId = req.params.id;
      await patientModel.deletePatient(patientId);
      res.status(200).send('Patient deleted successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  async updatePatient(req, res) {
    try {
      const patientId = req.params.id;
      const { name, age, sex, contact, date, time, doctor } = req.body;
      await patientModel.updatePatient(patientId, { name, age, sex, contact, date, time, doctor });
      res.status(200).send('Patient updated successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = new PatientController();
