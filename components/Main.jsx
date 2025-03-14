import React from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../services/ai.js"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["pasta", "tomato", "garlic", "olive oil"])
    const [isLoading, setIsLoading] = React.useState(false)
    const [recipe, setRecipe] = React.useState("")
    
    async function getRecipe() {
        setIsLoading(true)
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        setIsLoading(false)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} isLoading={isLoading} />}
            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}