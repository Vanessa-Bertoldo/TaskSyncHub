import React from "react";
import { FormProvider } from "react-hook-form";

const HookFormProvider = ({methods, children}) => {
    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    )
}
export default HookFormProvider