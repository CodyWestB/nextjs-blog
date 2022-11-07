// TODO: Example of API Routes {base_url}/api/hello

export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
}