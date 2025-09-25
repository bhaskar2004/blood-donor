const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');

// GET all donors
router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single donor
router.get('/:id', async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (!donor) return res.status(404).json({ message: 'Donor not found' });
    res.json(donor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new donor
router.post('/', async (req, res) => {
  const donor = new Donor({
    name: req.body.name,
    bloodGroup: req.body.bloodGroup,
    city: req.body.city,
    phone: req.body.phone,
    email: req.body.email,
    lastDonation: req.body.lastDonation,
    availability: req.body.availability,
  });

  try {
    const newDonor = await donor.save();
    res.status(201).json(newDonor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update donor
router.put('/:id', async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (!donor) return res.status(404).json({ message: 'Donor not found' });

    if (req.body.name != null) donor.name = req.body.name;
    if (req.body.bloodGroup != null) donor.bloodGroup = req.body.bloodGroup;
    if (req.body.city != null) donor.city = req.body.city;
    if (req.body.phone != null) donor.phone = req.body.phone;
    if (req.body.email != null) donor.email = req.body.email;
    if (req.body.lastDonation != null) donor.lastDonation = req.body.lastDonation;
    if (req.body.availability != null) donor.availability = req.body.availability;

    const updatedDonor = await donor.save();
    res.json(updatedDonor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE donor
router.delete('/:id', async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (!donor) return res.status(404).json({ message: 'Donor not found' });

    await donor.deleteOne();
    res.json({ message: 'Donor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
