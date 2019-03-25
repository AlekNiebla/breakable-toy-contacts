 
const koa = require('koa');
const Router = require('koa-router');
const body_parser = require('koa-bodyparser');
const koa_body = require('koa-body');
const json = require('koa-json');
const control_contact = require('../controllers/contact_controller');
const app = new koa();

app.use(koa_body());
app.use(body_parser());
app.use(json());

const router = new Router();

router.get('/api/contact',control_contact.getAllContacts)
router.get('/api/contact/:contactId',control_contact.getContact)
router.post('/api/contact',control_contact.postContact)
router.put('/api/contact/:contactId',control_contact.updateContact)
router.delete('/api/contact/:contactId',control_contact.deleteContact)

module.exports = router;