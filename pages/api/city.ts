import {NextApiRequest, NextApiResponse} from 'next';

export default function getAllLocations(req: NextApiRequest, res: NextApiResponse) {
    
    res.json([{city:'london'}, {city:'paris'}]);
}