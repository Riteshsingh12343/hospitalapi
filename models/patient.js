const mongooose = require('mongoose');

const patientSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    
    unique: true,
  }

},
  {
    timestamps: true,
  }

);

const Patient = mongooose.model('Patient', patientSchema);
module.exports = Patient;