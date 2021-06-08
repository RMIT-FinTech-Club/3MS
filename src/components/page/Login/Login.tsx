import React from "react";
import { useAuthStore } from "../../../core/store";
import {
	Flex,
	Input,
	Button,
	InputGroup,
	Stack,
	InputLeftElement,
	Box,
	Link,
	FormControl,
	InputRightElement,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLock,
	faUserAlt,
	faEye,
	faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { supabase } from "../../../core/config/supabase-client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {}

const Login = (props: Props) => {
	const [inputError, setInputError] = React.useState<string>();
	const [uiLoading, setUiLoading] = React.useState<boolean>();
	const [input, setInput] =
		React.useState<{
			email?: string | undefined;
			password?: string | undefined;
		}>();
	const loginStateChanged = useAuthStore((state) => state.login);

	const handleLogin = async (e) => {
		e.preventDefault();
		let email = input?.email;
		let password = input?.password;
		let res = await supabase.auth.signIn({
			email,
			password,
		});
		if (res.error?.message) {
			switch (res.error.message) {
				case "You must provide either an email or a third-party provider.":
					setInputError("You must fill in the required fields first!");
					break;

				default:
					setInputError(res.error.message);
					break;
			}
			return;
		}
		toast("✔ Successfully log in!", {
			position: "bottom-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		setInputError("");
		loginStateChanged();
	};

	const [showPassword, setShowPassword] = React.useState(false);

	const handleShowClick = () => setShowPassword(!showPassword);

	return (
		<Flex
			flexDirection="column"
			width="100wh"
			height="100vh"
			backgroundColor="gray.200"
			justifyContent="center"
			alignItems="center"
		>
			<Stack
				flexDir="column"
				mb="2"
				justifyContent="center"
				alignItems="center"
			>
				<Box minW={{ base: "90%", sm: "400px" }}>
					<form>
						<Stack
							spacing={4}
							p="1rem"
							backgroundColor="whiteAlpha.900"
							boxShadow="md"
						>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										fontSize="12"
										children={
											<FontAwesomeIcon
												icon={faUserAlt}
												style={{
													color: "grey",
												}}
											/>
										}
									/>
									<Input
										isInvalid={(inputError?.length as any) > 0}
										errorBorderColor="red.300"
										type="email"
										placeholder="Email address"
										fontSize="12"
										onChange={(e) =>
											setInput(
												(input) =>
													(input = {
														...input,
														email: e.target.value,
													})
											)
										}
									/>
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										color="gray.300"
										fontSize="12"
										children={
											<FontAwesomeIcon
												icon={faLock}
												style={{
													color: "grey",
												}}
											/>
										}
									/>
									<Input
										isInvalid={(inputError?.length as any) > 0}
										errorBorderColor="red.300"
										type={showPassword ? "text" : "password"}
										placeholder="Password"
										fontSize="12"
										onChange={(e) =>
											setInput(
												(input) =>
													(input = {
														...input,
														password: e.target.value,
													})
											)
										}
									/>
									<InputRightElement width="4.5rem">
										<Button
											h="1.75rem"
											size="md"
											fontSize="10"
											onClick={handleShowClick}
										>
											{!showPassword ? (
												<FontAwesomeIcon icon={faEyeSlash} />
											) : (
												<FontAwesomeIcon icon={faEye} />
											)}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							{(inputError?.length as any) > 0 && (
								<Box fontSize="10" color="red.400">
									{inputError}
								</Box>
							)}

							<Button
								borderRadius={0}
								type="submit"
								variant="solid"
								colorScheme="twitter"
								width="full"
								fontSize="14"
								onClick={handleLogin}
							>
								Login
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box fontSize="12">
				Haven't register yet?{" "}
				<Link color="twitter.500" href="/register">
					Register Now
				</Link>
			</Box>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</Flex>
	);
};

export default Login;
