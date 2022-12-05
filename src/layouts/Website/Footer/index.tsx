import { Button } from "@mui/material";

const WebsiteFooter = () => {
	return (
		<Button
			component="a"
			target="_blank"
			rel="noreferrer"
			href="https://github.com/tam11a"
			disableRipple
			fullWidth
			sx={{
				letterSpacing: 2,
				"& span": { color: "#fff", mr: 0.5, fontSize: "0.75em" },
				"&:hover": { bgcolor: "transparent" },
			}}
		>
			<span>Powered By</span> Tam11a
		</Button>
	);
};

export default WebsiteFooter;
