import Navbar from "../components/Navbar";
import { Grid, Text } from '@chakra-ui/react'
export default function Layout({ children }: any) {
    return (
        <>

            <Grid width={'100vw'} height={'100vh'} gridTemplateRows={'1fr 14fr'} gridTemplateColumns={'repeat(5, 1fr)'}>
                <Grid backgroundColor="#FFFFFF" gridColumn="1/6" gridTemplateColumns={'repeat(5, 1fr)'} border={'1px solid red'}>
                    <Text>Topbar</Text>
                </Grid>
                <Grid backgroundColor="#FFFFFF" gridColumn="1/2" border={'1px solid red'}>
                    <Navbar />
                </Grid>
                <Grid backgroundColor="#FFFFFF" gridColumn="2/-1" border={'1px solid red'}>
                    <main>{children}</main>
                </Grid>
            </Grid>
        </>
    );
}