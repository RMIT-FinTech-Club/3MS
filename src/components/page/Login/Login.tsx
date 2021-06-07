import React from "react";
import { useAuthStore } from "../../../core/store";
import {
	Flex,
	Heading,
	Input,
	Button,
	InputGroup,
	Stack,
	InputLeftElement,
	Box,
	Link,
	Avatar,
	FormControl,
	FormHelperText,
	InputRightElement,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLock,
	faUserAlt,
	faEye,
	faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

interface Props {}

const Login = (props: Props) => {
	const login = useAuthStore((state) => state.login);

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
				<Box minW={{ base: "90%", md: "408px" }}>
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
										type="email"
										placeholder="Email address"
										fontSize="12"
									/>
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents="none"
										color="gray.300"
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
										type={showPassword ? "text" : "password"}
										placeholder="Password"
										fontSize="12"
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
								{/* <FormHelperText textAlign="right">
									<Link>Forgot password?</Link>
								</FormHelperText> */}
							</FormControl>
							<Button
								borderRadius={0}
								type="submit"
								variant="solid"
								colorScheme="twitter"
								width="full"
								onClick={login}
							>
								Login
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box>
				Haven't register yet?{" "}
				<Link color="twitter.500" href="#">
					Register Now
				</Link>
			</Box>
		</Flex>
	);
};

export default Login;
