import { FC } from "react";

const url =
	"https://nzt6ku-a.akamaihd.net/downloads/ringtones/files/mp3/yt1s-com-its-yet-another-58638.mp3";

const Dashboard: FC = () => {
	return (
		<>
			<audio
				src={url}
				controls
				autoPlay={true}
				loop
			/>
		</>
	);
};

export default Dashboard;
