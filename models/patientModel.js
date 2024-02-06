// models/patientModel.js
const { pool } = require('../db');

class PatientModel {
  async getAllPatients() {
    const [rows] = await pool.query('SELECT * FROM Patients');
    return rows;
  }

  async addPatient({ name, age, sex, contact, date, time, doctor }) {
    await pool.query(
      'INSERT INTO Patients (Name, Age, Sex, Contact, date, time, doctor) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, age, sex, contact, date, time, doctor]
    );
  }

  async deletePatient(patientId) {
    await pool.query('DELETE FROM Patients WHERE PatientId = ?', [patientId]);
  }

  async updatePatient(patientId, { name, age, sex, contact, date, time, doctor }) {
    await pool.query(
      'UPDATE Patients SET Name = ?, Age = ?, Sex = ?, Contact = ?, date = ?, time = ?, doctor = ? WHERE PatientId = ?',
      [name, age, sex, contact, date, time, doctor, patientId]
    );
  }
}

module.exports = new PatientModel();
