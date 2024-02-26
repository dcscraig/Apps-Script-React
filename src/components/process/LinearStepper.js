import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";

const steps = ["step 1", "step 2", "step3"];


export default function LinearStepper(){
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
    <>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
        //   if (isStepOptional(index)) {
        //     labelProps.optional = (
        //       <Typography variant="caption">Optional</Typography>
        //     );
        //   }
        //   if (isStepSkipped(index)) {
        //     stepProps.completed = false;
        //   }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      </Box>
      </>
    )


}