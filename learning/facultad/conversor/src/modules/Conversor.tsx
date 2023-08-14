import { Box, TextField, Typography, ThemeProvider, createTheme, styled } from "@mui/material";
import { ChangeEvent, useState } from "react";
import "./Conversor.css";
import "typeface-montserrat";


const CustomBox = styled(Box)({
  borderRadius: 10,
  backgroundColor: 'hsl(215, 78%, 73%)',
  padding: '10px 20px',
  marginBottom: '10px',
  width: '90%',
}) as typeof Box;

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h4: {
      fontWeight: 700,
      textAlign: 'center',
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '50%',
        },
      },
    }
  }
});



export const Conversor = () => {
  const [miles, setMillas] = useState(0);
  const kilometers = miles * 1.60934;

  const handleMillasChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMillas(parseFloat(event.target.value));
  };
  
  return (
    <ThemeProvider theme={theme}>
      <section className="conversor">
        <CustomBox boxShadow={3}>
          <Typography variant="h4" className="header">
            Conversor de millas a kilómetros - React
          </Typography>
        </CustomBox>
        <section className="input">
          <TextField id="outlined-basic" label="Miles per hour" variant="outlined" onChange={handleMillasChange}/>
          <section className="kilometers">
            <Typography variant="h6">Kilometers per hour</Typography>
            <Typography variant="h6">{kilometers.toFixed(2)}</Typography>
          </section>
        </section>
      </section >
    </ThemeProvider >
  );
};
