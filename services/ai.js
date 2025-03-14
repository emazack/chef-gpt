
export async function getRecipeFromMistral(ingredientsArr) {
    try {
        const response = await fetch('/api/get-recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ingredients: ingredientsArr }),
        });
        const data = await response.json();
        return data.recipe;
    } catch (err) {
        console.error(err.message);
    }
}
