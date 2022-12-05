import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import WebsiteFooter from "./Footer";
import WebsiteHeader from "./Header";

const WebsiteLayout = () => {
	return (
		<>
			<WebsiteHeader />
			<Box
				sx={{
					minHeight: "80vh",
				}}
			>
				<Outlet />
			</Box>
			<WebsiteFooter />
		</>
	);
};

export default WebsiteLayout;
