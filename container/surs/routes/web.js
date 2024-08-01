import { Router } from 'express';
import { createBook, deleteBookById, getAllBooks, getBookById, updateBooksById } from '../app/controllers/controllers.js';


const router = Router();

router.get ('/Books', getAllBooks,);
router.get('/Books/:Id', getBookById);
router.put('/Book/:id', updateBooksById);
router.delete('/Book/:id', deleteBookById);
router.post('/Books', createBook);


export const appRouter = router;