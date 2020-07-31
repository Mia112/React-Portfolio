import styled from 'styled-components';

export const Nav = styled.nav`
	width: 100%;
	height: 55px;
	border-bottom: 2px solid #f1f1f1;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;

	.logo {
		padding: 15px 0;
		color: #16b1b5;
		cursor: default;
		font-size: 2rem;
		font-weight: normal;
		font-style: italic;
	}
`;

export const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	li {
		padding: 18px 10px;
		color: #16b1b5;
	}
	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background: tranparent;
		border-left: 2px solid #f1f1f1;
		position: fixed;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;
		li {
			color: #16b1b5;
		}
	}
`;

export const BurgerStyle = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 15px;
	right: 20px;
	z-index: 20;
	display: none;
	@media (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}
	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? '#f300b4' : '#252934')};
		border-radius: 10px;
		transform-origin: 1px;
		transition: 500ms cubic-bezier(0.77, 0, 0.175, 1);
		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;
