import { Suspense } from "react";

// 3rd Party Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

// Layouts
import AppLayout from "@layouts/App";
import Container from "@layouts/Container";
import WebsiteLayout from "@layouts/Website";

const BaseRoutes = () => {
	return (
		<Container>
			<BrowserRouter>
				<Routes>
					<Route
						path={"/"}
						element={<WebsiteLayout />}
					>
						{publicRoutes.map(({ path, Component }) => (
							<Route
								key={path}
								path={path}
								element={
									<Suspense fallback={<>Loading..</>}>
										<Component />
									</Suspense>
								}
							/>
						))}
					</Route>
					<Route
						path={"app"}
						element={<AppLayout />}
					>
						{privateRoutes.map(({ path, Component }) => (
							<Route
								key={path}
								path={path}
								element={
									<Suspense fallback={<>Loading..</>}>
										<Component />
									</Suspense>
								}
							/>
						))}
					</Route>
				</Routes>
			</BrowserRouter>
		</Container>
	);
};

export default BaseRoutes;
