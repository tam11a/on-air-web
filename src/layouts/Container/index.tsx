import { Container } from "@mui/material";
import React from "react";

const Index: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Container
				maxWidth={"sm"}
				sx={{
					bgcolor: "background.paper",
					height: { xs: "100vh", sm: "90vh" },
					overflowY: "auto",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					// px: "0 !important",
				}}
			>
				{children}
			</Container>
		</>
	);
};

type Props = {
	children?: React.ReactNode;
};

export default Index;
