import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Box, Button, Tooltip, Icon } from "@chakra-ui/react";
import React from "react";
import { MdShowChart } from 'react-icons/md'

const data = [
    {
        id: "1",
        title: "Home",
        href: "home",
        submenu: [
            {
                title: "Login",
                href: "login",
            },
            {
                title: "Register",
                href: "register",
            }
        ]
    },
    {
        id: "2",
        title: "Profile",
        href: "profile",
        submenu: [
            {
                title: "email",
                href: "email",
            },
            {
                title: "password",
                href: "password",
            }
        ]
    }

]

export default function Navbar() {
    const router = useRouter();
    const [activeElement, setActiveElement] = React.useState(data[0].id);
    const onIconClick = (val: any) => {
        console.log("val", val);
        setActiveElement(val)
    }

    return (
        <nav className="nav_container">
            <Flex>
                <Box>
                    <Box h="80%">
                        {data.map((list: any, index: any) => {
                            return (
                                <Box id={list.id}
                                    data-testid={list.id}
                                    bg={activeElement === list.id ? '#F0F4F9' : 'transparent'}
                                    key={index}
                                    onClick={() => { onIconClick(list.id) }}
                                >
                                    <Flex justifyContent={"center"} alignItems={"center"} h="80px">
                                        <Tooltip label={list.name}>
                                            <Icon as={MdShowChart} w={8} h={8} color={activeElement === list.id ? "18222F" : "#A2B5D0"} cursor="pointer" />
                                        </Tooltip>
                                    </Flex>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>

                {data.map((singleRoute, index) => {
                    return (
                        <>

                            <Box w="78.5%" h="100%"
                                key={index}
                                style={{ display: activeElement === singleRoute.id ? 'block' : 'none' }}
                                bg={"#F0F4F9"}
                            >
                                {singleRoute.submenu.map((item: any, key: any) => {
                                    return (
                                        <Flex flexDirection={'column'} >
                                            <NavigationLink
                                                key={item.title}
                                                href={`/${item.href}`}
                                                text={item.title}
                                                router={router}
                                            />
                                        </Flex>
                                    )
                                })}
                            </Box>
                        </>
                    );
                })}
            </Flex>
        </nav>

    );
}

function NavigationLink({ href, text, router }: any) {
    // console.log('href', href);

    const isActive = router.asPath === (href === "/login" ? "/" : href);
    return (
        <Link href={href === "/login" ? "/" : href}>
            <a
                href={href === "/login" ? "/" : href}
                className={`${isActive && "nav_item_active"} nav_item`}
            >
                <span>{text}</span>
            </a>
        </Link>
    );
}
