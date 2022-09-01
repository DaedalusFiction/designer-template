import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ProcessStep from "../../components/process/ProcessStep";
import { processSteps } from "../../siteInfo";

const index = () => {
    return (
        <Box className="section">
            <Container maxWidth="xl">
                <Typography variant="h1" sx={{ textAlign: "center" }}>
                    THE PROCESS
                </Typography>
                <br />
                {processSteps.map((step, index) => {
                    return <ProcessStep key={index} step={step} />;
                })}
            </Container>
        </Box>
    );
};

export default index;
