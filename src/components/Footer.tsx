import { SpeedDial } from "primereact/speeddial";
import { Tooltip } from "primereact/tooltip";
import { useNavigate } from "react-router-dom";
import { usePicPocket } from "../contexts/PicContext";

export function Footer() {
	const navigate = useNavigate();
	const { likes } = usePicPocket();

	const items = [
		{
			label: `Likes (${likes.length})`,
			icon: 'pi pi-heart',
			command: () => {
				navigate('/likes')
			}
		},
		{
			label: 'Home',
			icon: 'pi pi-home',
			command: () => {
				navigate('/')
			}
		},
	];
	return (
		<>
			<footer>PicPocket {new Date().getFullYear()}</footer>
			<SpeedDial style={{ position: 'fixed', right: '20px', bottom: '20px' }} model={items} direction="left" transitionDelay={80} showIcon="pi pi-plus" hideIcon="pi pi-times" className="speeddial" buttonClassName="p-button" />
			<Tooltip position="top" target=".speeddial .p-speeddial-action" />
		</>
	)
}
