import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { createMuiTheme, MuiThemeProvider, Container } from '@material-ui/core';


export default function ListProblems() {
  let theme = createMuiTheme({
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
  const [problems, setProblems] = useState([]);
  const columns = [
    { title: 'Problem ID', field: 'id' },
    { title: 'Title', field: 'title' },
    { title: 'Author', field: 'author' },
    { title: 'Accepted', field: 'acs' },
    { title: 'Sent', field: 'tries' },    
  ];

  return (
    <Container>
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Problems"
          columns={columns}
          data={
            query => 
              new Promise((resolve, reject) => {
                let url = 'http://192.168.0.15:5000/api/problems';
                url += '?per_page=' + query.pageSize;
                url += '&page=' + (query.page + 1);
                fetch(url)
                  .then(response => response.json())
                  .then(result => {
                    resolve({
                      data: result.data,
                      page: result.page - 1,
                      totalCount: result.totalCount
                    });
                  });
              }) 
          }
          options={{
            search: true,
            headerStyle: {
              fontWeight: 'bold',
              fontSize: theme.typography.fontSize * 1.2
              // backgroundColor: theme.palette.primary.dark,
              // color: theme.palette.primary.contrastText
            },
            rowStyle: rowData => ({
              backgroundColor: rowData.id % 7 == 0 ? theme.palette.error.dark: rowData.id % 3 === 0 ? theme.palette.success.dark : null
            })
          }}
        />
      </MuiThemeProvider>
    </Container>
  );
}