# Chef GPT

Chef GPT is a web application that suggests recipes based on the ingredients you have on hand. It leverages the Hugging Face API to generate recipe recommendations in markdown format, making it easy to render on a web page.

## Features

- **Ingredient Management**: Add and list ingredients you have.
- **Recipe Generation**: Generate recipes based on the ingredients provided.
- **Loading Indicator**: Visual feedback while the recipe is being generated.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **Hugging Face API**: For generating recipe recommendations.
- **ESLint**: For maintaining code quality.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/chef-gpt.git
    ```
2. Install dependencies:
    ```sh
    npm install
    ```

### Running the Application

- Start the development server:
    ```sh
    npm run dev
    ```
- Build the application for production:
    ```sh
    npm run build
    ```
- Preview the production build:
    ```sh
    npm run preview
    ```

### Linting

- Run ESLint to check for code quality issues:
    ```sh
    npm run lint
    ```

## Project Structure

### Key Files and Directories

- [App.jsx](http://_vscodecontentref_/0): Main application component.
- [components](http://_vscodecontentref_/1): Contains React components like [Header](http://_vscodecontentref_/2), [IngredientsList](http://_vscodecontentref_/3), [Loader](http://_vscodecontentref_/4), [Main](http://_vscodecontentref_/5), and [Recipe](http://_vscodecontentref_/6).
- [ai.js](http://_vscodecontentref_/7): Contains the logic for interacting with the serverless function.
- [get-recipe.js](http://_vscodecontentref_/8): Serverless function to handle API requests securely.
- [index.jsx](http://_vscodecontentref_/9): Entry point for the React application.
- [index.css](http://_vscodecontentref_/10): Global styles for the application.
- [vite.config.js](http://_vscodecontentref_/11): Configuration for Vite.
- [eslint.config.js](http://_vscodecontentref_/12): Configuration for ESLint.

## Environment Variables

The Hugging Face access token is managed through environment variables configured on Vercel. Ensure you set the [VITE_HF_ACCESS_TOKEN](http://_vscodecontentref_/13) variable in your Vercel project settings.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

Thank you for checking out Chef GPT! We hope you find it useful and fun to use. Happy cooking!