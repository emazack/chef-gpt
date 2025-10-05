import { HfInference } from '@huggingface/inference';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of 
ingredients that a user has and suggests a recipe they 
could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe.
The recipe can include additional ingredients they didn't mention, 
but try not to include too many extra ingredients. 
Format your response in markdown to make it easier 
to render to a web page. Do not give the possibility to reply to the user.
`;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { ingredients } = req.body;
    const ingredientsString = ingredients.join(", ");
    const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

    try {
        const response = await hf.chatCompletion({
            // model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            model: "distilbert/distilgpt2",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        });
        res.status(200).json({ recipe: response.choices[0].message.content });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Failed to fetch recipe' });
    }
}
