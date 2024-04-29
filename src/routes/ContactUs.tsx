import * as React from 'react';
import { Button, CircularProgress, Container, Stack, TextField, Typography } from '@mui/material';

export default function ContactUs() {
  const initialFormValues = {
    fullName: "",
    email: "",
    message:"",
    formSubmitted: false,
    success: false
  }
  // We'll update "values" as the form updates
  const [values, setValues] = React.useState(initialFormValues);
  // "errors" is used to check the form for errors
  const [errors, setErrors] = React.useState({} as any);
  const [contacted, setContacted] = React.useState(false);
  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors }

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required."

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required."
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid."
    }

    if ("message" in fieldValues)
      temp.message =
        fieldValues.message ? "" : "This field is required."

    setErrors({
      ...temp
    });
  }
  // const handleInputValue: any = (fieldValues = values) => {
  // }
  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  };

  const [sending, setSending] = React.useState(false);
  React.useEffect(() => {
    if (sending){
      window.onbeforeunload = () => "Contact request is still sending, are you sure you want to leave?";
    } else {
      window.onbeforeunload = null;
    }
  })

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (formIsValid()) {
      setSending(true);
      fetch("https://formcarry.com/s/lLNdc7gZhfw", {
        method: 'POST',
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
      .then(r => r.json())
      .then(response => {
        if (response.code === 200) {
          setContacted(true);
        } else {
          alert('Submission failed, please try again. Error: ' + response.message);
        }
      }).catch(()=> {
        alert('Submission failed, please try again');
      }).finally(()=>{
        setSending(false);
      });
      
    }
  }
  const formIsValid: any = ( fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  }
  return (
    <Container
      id="about"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      
      <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '90%' }, 
          pt: { xs: 4, sm: 6 },
          pb: { xs: 4, sm: 6 },
          pl: { xs: 2, sm: 4},
          pr: { xs: 2, sm: 4},
          background: 'white'}} component="form" onSubmit={handleFormSubmit}>
          <Typography variant="h1" sx={{textAlign: 'center'}}>Contact Us</Typography>
            {(contacted)?<Typography variant='subtitle1' sx={{textAlign: 'center', py: 4}}>
        Contact request sent. We will be in touch shortly
      </Typography>:<React.Fragment>
        <TextField name="fullName" onBlur={handleInputValue} onChange={handleInputValue} label="Full Name"  autoComplete="none" {...(errors["fullName"] && { error: true, helperText: errors["fullName"] })}/>   
        <TextField name="email" onBlur={handleInputValue} onChange={handleInputValue} label="Email"  autoComplete="none" {...(errors["email"] && { error: true, helperText: errors["email"]  })}/>   
        <TextField name="position" onBlur={handleInputValue} onChange={handleInputValue} label="Position/Title"  autoComplete="none" {...(errors["position"] && { error: true, helperText: errors["position"]  })}/>   
        <TextField name="affiliation" onBlur={handleInputValue} onChange={handleInputValue} label="Affiliation" autoComplete="none" {...(errors["affiliation"] && { error: true, helperText: errors["affiliation"]  })}/>   
        <TextField name="message" onBlur={handleInputValue} onChange={handleInputValue} label="Message"  multiline rows={5} autoComplete="none" {...(errors["message"] && { error: true, helperText: errors["message"] })}/> 
        <Button type="submit" disabled={!formIsValid() && !sending}>Submit</Button> 
        {(sending)?<React.Fragment>Submitting contact request <CircularProgress /></React.Fragment>:''}
        </React.Fragment>}
      </Stack>
    </Container>
  );
}
