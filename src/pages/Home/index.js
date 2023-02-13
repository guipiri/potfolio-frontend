import styles from "./index.module.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

function Home() {
	return (
		<div className={styles.home}>
				<NavBar />
				<Outlet/>
				<Footer/>
		</div>
	);
}

export default Home;