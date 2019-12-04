import React from 'react';
import MaterialTable from 'material-table';


export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Date', field: 'date',type: 'date'  },
      { title: 'Category', field: 'category' },
      { title: 'Comment', field: 'comment'},
      {
        title: 'Added By',
        field: 'addedby',
     
      },
    ],
    data: [
      { date: new Date(), category: 'payments', comment: 'hello everyone', addedby: 'vinita' }
     
    ],
  });

  return (
    <MaterialTable
    
      columns={state.columns}
      data={state.data}
      editable={{
       
        onRowAdd: newData =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            setState(prevState => {
              const data = [...prevState.data];
              data.push(newData);
              return { ...prevState, data };
            });
          }, 600);
        }),
      onRowUpdate: (newData, oldData) =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve();
            if (oldData) {
              setState(prevState => {
                const data = [...prevState.data];
                data[data.indexOf(oldData)] = newData;
                return { ...prevState, data };
              });
            }
          }, 600);
        })
      
      }}
    />
  );
}
