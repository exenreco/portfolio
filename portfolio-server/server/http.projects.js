import chalk from 'chalk';
import express from 'express';
import  PROJECTS from './projects.collection.js';
import { body, validationResult, param } from 'express-validator';
import { warn, error, success, message } from '../chalk.config.js';

const
nextId = 3,
router = express.Router();

// Health‐check endpoint
router.get('/', (req, res) => res.json({
  count:  PROJECTS.length,
  status: 'The Projects API is running!'
}));

// GET /projects - list all projects
router.get('/list', (req, res) => res.json(PROJECTS));

// GET /projects/:id - get one project by ID
router.get('/by-id/:id',
  param('id').isInt({ gt: 0 }).withMessage('Project ID must be a positive integer'),
  (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const
      id = parseInt(req.params.id, 10),
      project = PROJECTS.find(p => p.id === id)
    ;

    if (!project) return res.status(404).json({ error: 'Project not found' });

    res.json(project);
  }
);

// GET /projects/:slug - get one project by SLUG
router.get('/by-slug/:slug', (req, res) => {

  const project = PROJECTS.find(p => p.slug === req.params.slug);

  if (!project) return res.status(404).json({ error: 'Project not found' });

  res.json(project);

});

// POST /projects - create a new project
router.post('/',
  [
    body('slug').notEmpty().withMessage('Project slug is required'),
    body('title').notEmpty().withMessage('Project title is required'),
    body('content').notEmpty().withMessage('Project content is required')
  ],
  (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({
      errors: errors.array()
    });

    const
      { slug, title, cover, gitRepo, aspectRatio, excerpt, content } = req.body,
      newProject = {
        id: nextId++,
        time: new Date(),
        aspectRatio: aspectRatio ? aspectRatio : 9/12,
        slug, title, cover, gitRepo, excerpt, content
      }
    ;

    PROJECTS.push(newProject);
    res.status(201).json(newProject);
  }
);

// PUT /projects/:id - update an existing project
router.put('/:id',
  [
    param('id').isInt({ gt: 0 }).withMessage('Project ID must be a positive integer'),
    body('slug').optional().notEmpty().withMessage('Project slug cannot be empty'),
    body('title').optional().notEmpty().withMessage('Project title cannot be empty'),
    body('content').optional().notEmpty().withMessage('Project description cannot be empty')
  ],
  (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({
      errors: errors.array()
    });

    const
      id = parseInt(req.params.id, 10),
      projectIndex = PROJECTS.findIndex(p => p.id === id)
    ;

    if (projectIndex === -1) return res.status(404).json({
      error: 'Project not found'
    });

    const updated = { ...PROJECTS[projectIndex], ...req.body };
    PROJECTS[projectIndex] = updated;
    res.json(updated);
  }
);

// DELETE /projects/:id - delete a project
router.delete('/:id',
  param('id').isInt({ gt: 0 }).withMessage('Project ID must be a positive integer'),
  (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({
      errors: errors.array()
    });

    const
      id = parseInt(req.params.id, 10),
      projectIndex = PROJECTS.findIndex(p => p.id === id)
    ;

    if (projectIndex === -1) return res.status(404).json({
      error: 'Project not found'
    });

    const removed = PROJECTS.splice(projectIndex, 1);

    res.json({ message: 'Project deleted', project: removed[0] });
  }
);

// Router-scoped error handler
router.use((err, req, res, next) => {
  console.error(error('ProjectsAPI error:', err));
  res.status(500).json({ error: 'Server error', details: err.message });
});

const projectsAPI = router;

export default projectsAPI;
