import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { FiRadio } from "react-icons/fi";

const Home = () => {
	return (
		<Stack
			style={{
				height: "85%",
				alignItems: "center",
				justifyContent: "space-evenly",
			}}
		>
			<Box />
			<Avatar
				src={"/favicon.svg"}
				variant={"rounded"}
				sx={{
					height: "100px",
					width: "100px",
				}}
			/>
			<Stack
				style={{
					alignItems: "center",
					maxWidth: "420px",
					rowGap: 20,
				}}
			>
				<Typography
					textAlign={"center"}
					variant={"subtitle2"}
				>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
					praesentium atque aliquam aliquid error quasi expedita numquam ab
					eveniet? Earum, explicabo! Qui autem expedita vel unde beatae
					voluptatibus, fugit at.
				</Typography>
				<Button
					variant={"contained"}
					sx={{ borderRadius: "100px" }}
					startIcon={<FiRadio />}
				>
					Open App
				</Button>
			</Stack>
		</Stack>
	);
};

export default Home;
