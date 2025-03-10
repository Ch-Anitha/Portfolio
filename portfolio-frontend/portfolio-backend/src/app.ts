import express, { Request, Response } from 'express';
import cors from 'cors';
import errorMiddleware from './middleware/errorHandler';
import formRoutes from './routes/formRoutes';

const app = express();

// CORS configuration
app.use(
    cors({
        origin: [
            'https://anithach.com',
            'https://anithach.com',
            'https://www.anithach.com',
            'http://localhost:3000',
        ], // Allow only your frontend domain
        credentials: true, // Allow credentials if needed
    })
);

// Middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

// Routes
app.use('/api/form', formRoutes);

// Error handling middleware
app.use(errorMiddleware);

export default app;
