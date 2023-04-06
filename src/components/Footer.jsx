import { StyledFooter } from "./styles/Footer.styled"

export default function Footer() {
    return (
        <StyledFooter>
            <li>
                <a href='https://facebook.com'>
                    <img src="./imgs/icon-facebook.svg" alt="Facebook" />
                </a>
            </li>
            <li>
                <a href='https://pinterest.com'>
                    <img src="./imgs/icon-pinterest.svg" alt="Pinteret" />
                </a>
            </li>
            <li>
                <a href='https://instagram.com'>
                    <img src="./imgs/icon-instagram.svg" alt="Instagram" />
                </a>
            </li>
        </StyledFooter>
    )
}