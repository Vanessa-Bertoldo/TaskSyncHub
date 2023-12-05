import { FormControl, Select } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";

function RHFSelect({ name, label, onChange,onGetValue, onGetDescription, options,  ...other}){
    const { control } = useForm()

    return(
        <Controller
            name={name}
            control={control}
            render={({field: {ref, ...fieldOther}, fieldState: {error}}) => (
                <FormControl variant="outlined" ><InputLabel id={label}>{label}</InputLabel>
                <Select
                    labelId={label}
                    label={label}
                    variant="outlined"
                    inputRef={ref}
                    {...fieldOther}
                    error={!!error}
                    {...other}
                >
                    {options.map((option, index) => {
                        const value = onGetValue(option, index);
                        const description = onGetDescription(option, index);
                        return(
                            <MenuItem key={value} value={value}>{description}</MenuItem>
                        )
                    })}
                </Select> 
                </FormControl>
            )}
        />
       
    )
} 
export default RHFSelect;