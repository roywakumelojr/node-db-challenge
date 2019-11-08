const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
  db
    .select('*')
    .from('project')
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to get a listed of available projects from the database' });
    });
});

router.get('/:id', (req, res) => {
  db
    .select('*')
    .from('project')
    .where('id', '=', req.params.id)
    .first()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to get the requested project from the database' });
    });
});

router.post('/', (req, res) => {
  db
    .insert(req.body, 'id')
    .into('project')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to insert the request project information' });
    });
});

router.put('/:id', (req, res) => {
  const changes = req.body;
  db('project')
    .where({ id: req.params.id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to update the requested project' });
    });
});

router.delete('/:id', (req, res) => {
  db('project')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to delete the requested project' });
    });
});

module.exports = router;
