import { ReactNode } from "react";
import {
	Box,
	Flex,
	Heading,
	Text,
	Stack,
	Container,
	Avatar,
	useColorModeValue,
} from "@chakra-ui/react";
import LargeTestimonial from "./LargeTestimonial";

const Testimonial = ({ children }: { children: ReactNode }) => {
	return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
			boxShadow={"lg"}
			p={8}
			rounded={"xl"}
			align={"center"}
			pos={"relative"}
			_after={{
				content: `""`,
				w: 0,
				h: 0,
				borderLeft: "solid transparent",
				borderLeftWidth: 16,
				borderRight: "solid transparent",
				borderRightWidth: 16,
				borderTop: "solid",
				borderTopWidth: 16,
				borderTopColor: useColorModeValue("white", "gray.800"),
				pos: "absolute",
				bottom: "-16px",
				left: "50%",
				transform: "translateX(-50%)",
			}}
		>
			{children}
		</Stack>
	);
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
	return (
		<Heading as={"h3"} fontSize={"xl"}>
			{children}
		</Heading>
	);
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
	return (
		<Text
			textAlign={"center"}
			color={useColorModeValue("gray.600", "gray.400")}
			fontSize={"sm"}
		>
			{children}
		</Text>
	);
};

const TestimonialAvatar = ({
	src,
	name,
	title,
}: {
	src: string;
	name: string;
	title: string;
}) => {
	return (
		<Flex align={"center"} mt={8} direction={"column"}>
			<Avatar src={src} alt={name} mb={2} />
			<Stack spacing={-1} align={"center"}>
				<Text fontWeight={600}>{name}</Text>
				<Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
					{title}
				</Text>
			</Stack>
		</Flex>
	);
};

export default function Testimonials() {
	return (
		<Box>
			<Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
				<Stack spacing={0} align={"center"}>
					<Heading mb="2">Our Clients Speak</Heading>
					<Text>We have been working with clients around the world</Text>
				</Stack>
				<LargeTestimonial />
				<Stack
					direction={{ base: "column", md: "row" }}
					spacing={{ base: 10, md: 4, lg: 10 }}
				>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Stable software with reasonable price:</TestimonialHeading>
							<TestimonialText>
							: I feel 3M have strong experience in MLM business plan. After understanding their expertise in MLM, I had decided to purchase their premium package. I have been using 3ML premium for more than 2 months now. I feel software is hassle free so far. 
							</TestimonialText>
						</TestimonialContent>
						<TestimonialAvatar
							src={
								"https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/grpress/news_impact/photo/milind-pant-photojpg-ad896e8ff5bfdeee.jpg"
							}
							name={"Milind Pant"}
							title={"CEO at Amway"}
						/>
					</Testimonial>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Fast, Reliable & Innovative Software</TestimonialHeading>
							<TestimonialText>
							Great functionality. Great User Interface. Fast response with timelines met. Great Customer Service Experience and Communication!
							</TestimonialText>
						</TestimonialContent>
						<TestimonialAvatar
							src={
								"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
							}
							name={"Jane Cooper"}
							title={"Founders Platinum Direct Distributor at Amway"}
						/>
					</Testimonial>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Great MLM System</TestimonialHeading>
							<TestimonialText>
							3ML Software is one of the greatest MLM software that i ever used. I like 3ML Services . Very easy to use, and have a very good design. I would strongly suggest that people try this Software
							</TestimonialText>
						</TestimonialContent>
						<TestimonialAvatar
							src={
								"https://mms.businesswire.com/media/20200330005755/en/782325/4/John-Agwunobi.jpg"
							}
							name={"John O. Agwunobi"}
							title={"CEO at Herbalife"}
						/>
					</Testimonial>
				</Stack>
			</Container>
		</Box>
	);
}
