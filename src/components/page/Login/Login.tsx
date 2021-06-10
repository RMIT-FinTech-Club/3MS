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
	HStack,
	Heading,
	Text,
	useColorModeValue,
	FormLabel,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
	faLock,
	faUserAlt,
	faEye,
	faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { supabase } from "../../../core/config/supabase-client";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import { Provider, User } from "@supabase/gotrue-js";
import { useHistory } from "react-router";

interface Props {}

const Login = (props: Props) => {
	const history = useHistory();
	const [inputError, setInputError] = React.useState<string>();
	const [uiLoading, setUiLoading] = React.useState<boolean>();
	const [input, setInput] =
		React.useState<{
			email?: string | undefined;
			password?: string | undefined;
		}>();
	const loginStateChanged = useAuthStore((state) => state.authenticated);

	const handleLogin = async (e) => {
		e.preventDefault();
		setUiLoading((load) => (load = true));
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
			setUiLoading((load) => (load = false));
			return;
		}
		setInputError("");
		setUiLoading((load) => (load = false));
		loginStateChanged(res.user as User);
		history.push(`/dashboard`);
	};

	const handleSocialAuthenticate = async (name: Provider | undefined) => {
		console.log(name);
		await supabase.auth.signIn({
			provider: name,
		});
	};

	const [showPassword, setShowPassword] = React.useState(false);

	const handleShowClick = () => setShowPassword(!showPassword);

	return (
		<Flex
			flexDirection="column"
			width="100wh"
			height="100vh"
			bg={useColorModeValue("gray.50", "gray.800")}
			justifyContent="center"
			alignItems="center"
		>
			<Stack
				flexDir="column"
				mb="2"
				justifyContent="center"
				alignItems="center"
			>
				<Stack align={"center"} mb="5">
					<Heading fontSize={{ base: "25px", lg: "40px" }}>
						Sign in to your account
					</Heading>
					<Text fontSize={"md"} color={"gray.600"}>
						to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
					</Text>
				</Stack>
				<Box
					p="4"
					minW={{ base: "90%", sm: "430px" }}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					rounded="lg"
				>
					<form>
						<Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900">
							<FormControl isRequired>
								<FormLabel>Email address</FormLabel>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										fontSize="14"
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
										fontSize="14"
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
							<FormControl isRequired>
								<FormLabel>Password</FormLabel>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										color="gray.300"
										fontSize="14"
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
										fontSize="14"
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
								type="submit"
								variant="solid"
								colorScheme="twitter"
								width="full"
								fontSize="14"
								isLoading={uiLoading}
								onClick={handleLogin}
								spinner={<ReactLoading type={"bubbles"} color="#fff" />}
							>
								Login
							</Button>
							<HStack>
								<Button
									w="full"
									fontSize="14"
									colorScheme="facebook"
									leftIcon={<FaFacebook />}
									onClick={() => handleSocialAuthenticate("facebook")}
								>
									Facebook
								</Button>
								<Button
									w="full"
									fontSize="14"
									colorScheme="red"
									leftIcon={<FaGoogle />}
									onClick={() => handleSocialAuthenticate("google")}
								>
									Google
								</Button>
							</HStack>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box fontSize="14">
				Haven't register yet?{" "}
				<Link color="twitter.500" href="/register">
					Register Now
				</Link>
			</Box>
		</Flex>
	);
};

export default Login;
