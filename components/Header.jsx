import chefGptIcon from '../images/chef-gpt-icon.png';

export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={chefGptIcon} alt="Icon of the Chef gpt" />
            <h1 className="title">Chef Gpt</h1>
        </header>
    )
}