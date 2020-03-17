import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Container, createMuiTheme, MuiThemeProvider, Grid, TextField } from '@material-ui/core';
import { Editor } from '@tinymce/tinymce-react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  textFields: {
    padding: '2%'
  },
  title: {
    borderBottom: '1px solid #FDD835',
    padding: '1%'
  }
}));

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#FDD835'
        },
        secondary: {
            main: '#00c853'
        }
    }
});

const handleEditorChange = (content, editor) => {
  console.log('Content was updated:', content);
}
const getSteps = () => {
  return ['Title and Limits', 'Statement', 'Input', 'Output', 'Author and Hints'];
}

const TitleAndLimits = () => {
  const classes = useStyles();
  return (
  <Grid container>
    <Grid item md={4} className={classes.textFields}>
      <TextField id="title" label="Title" variant="outlined" fullWidth/>
    </Grid>
    <Grid item md={4} className={classes.textFields}>
      <TextField id="time" label="Time Limit" helperText="meassured in seconds" variant="outlined" fullWidth/>
    </Grid>
    <Grid item md={4} className={classes.textFields}>
      <TextField id="memory" label="Memory Limit"  helperText="meassured in MBs" variant="outlined" fullWidth/>
    </Grid>
    
  </Grid>
  );
}

const Statement = () => {
  return (
    <Editor
      apiKey="gwe7epqc32dbsv229uq80ren4e22fafr6i9n4jw23tgj6rs5"
      initialValue="<p>Your statement goes here :v</p>"
      init={{
        // skin: 'oxide-dark',
        // content_css: 'dark',
        
        height: 500,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code codesample fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent codesample | removeformat | help'
      }}
      onEditorChange={handleEditorChange}
    />
  );
}

const Input = () => {
  return (
    <div>
      <Typography variant="h5">
        Input description
      </Typography>
      <Editor
        apiKey="gwe7epqc32dbsv229uq80ren4e22fafr6i9n4jw23tgj6rs5"
        initialValue="<p>Your statement goes here :v</p>"
        init={{
          // skin: 'oxide-dark',
          // content_css: 'dark',
          
          height: 250,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code codesample fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent codesample | removeformat | help'
        }}
        onEditorChange={handleEditorChange}
      />
      <Typography variant="h5">
        Input example
      </Typography>
      <TextField
        multiline
        rows={15}
        rowsMax={50}
        fullWidth
      />
    </div>
  );
}

const Output = () => {
  return (
    <div>
      <Typography variant="h5">
        Output description
      </Typography>
      <Editor
        apiKey="gwe7epqc32dbsv229uq80ren4e22fafr6i9n4jw23tgj6rs5"
        initialValue="<p>Your statement goes here :v</p>"
        init={{
          // skin: 'oxide-dark',
          // content_css: 'dark',
          
          height: 250,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code codesample fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent codesample | removeformat | help'
        }}
        onEditorChange={handleEditorChange}
      />
      <Typography variant="h5">
        Output example
      </Typography>
      <TextField
        multiline
        rows={15}
        rowsMax={50}
        fullWidth
      />
    </div>
  );
}

const AuthorAndHints = () => {
  return (
    <TextField id="author" label="Author" variant="outlined"/>
  );
}

const getStepContent = step => {
  switch (step) {
    case 0:
      return <TitleAndLimits/>;
    case 1:
      return <Statement/>;
    case 2:
      return <Input/>;
      case 3:
        return <Output/>;
    case 4:
      return <AuthorAndHints/>;          
    default:
      return 'Author and hints (Optional)';
  }
}

const CreateProblem = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container className={classes.root}>
      <MuiThemeProvider theme={theme}>
      <Typography variant="h4" align="center"  className={classes.title}>
            Create Problem
        </Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
      </MuiThemeProvider>
    </Container>
  );
}

export default CreateProblem;