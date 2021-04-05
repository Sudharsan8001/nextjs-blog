import {NextApiRequest, NextApiResponse} from 'next';

export default function getLocationById(req: NextApiRequest, res: NextApiResponse) {
    res.json({byId:req.query.id, message:'getLocationById'});
}