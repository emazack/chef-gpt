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
3. Set up environment variables:
    - Copy `.env.example` to `.env`:
        ```sh
        cp .env.example .env
        ```
    - Fill in your Hugging Face access token in `.env`.

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

- `App.jsx`: Main application component.
- `components/`: Contains React components like `Header`, `IngredientsList`, `Loader`, `Main`, and `Recipe`.
- `services/ai.js`: Contains the logic for interacting with the Hugging Face API.
- `index.jsx`: Entry point for the React application.
- `index.css`: Global styles for the application.
- `vite.config.js`: Configuration for Vite.
- `eslint.config.js`: Configuration for ESLint.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

Thank you for checking out Chef GPT! We hope you find it useful and fun to use. Happy cooking!