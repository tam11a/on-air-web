import {
	AppBar,
	Avatar,
	Box,
	Toolbar,
	ListItemText,
	IconButton,
} from "@mui/material";

import { AiOutlineUser } from "react-icons/ai";

const AppHeader = () => {
	return (
		<>
			<AppBar
				elevation={0}
				sx={{
					bgcolor: "transparent",
					color: "#fff",
				}}
			>
				<Toolbar sx={{ columnGap: 1 }}>
					<Avatar
						src={"/favicon.svg"}
						variant={"rounded"}
						sx={{ height: "30px", width: "30px" }}
					/>
					<ListItemText primary={"On Air"} />
					<IconButton color={"secondary"}>
						<AiOutlineUser />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box
				sx={{
					mt: { xs: "60px", sm: "70px" },
				}}
			/>
		</>
	);
};

export default AppHeader;
