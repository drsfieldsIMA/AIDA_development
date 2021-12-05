import assetArr from '../assetArr'

export default function handler(req, res) {
    res.status(200).json( assetArr)
}