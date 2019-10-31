import axios from "axios";


var initialData = {
  tasks: {
    

  },
  columns: {
    'column-0': {
      id: 'column-0',
      title: 'Inactive Students',
      taskIds: []
    }

  },
  // Facilitate reordering of the columns
  columnOrder: ['column-0']
}


const admin_token = localStorage.getItem("token");
const admin_email = localStorage.getItem("email");




axios.post(`/api/groups_list`,{
        admin_email,
        admin_token
    })
    .then(res => {
      let groups = res.data;
      //initialData.tasks['task-5'] = { id: 'task-5', content: groups[0].email }
      Object.keys(groups).forEach(function (item) {
        var student_email = groups[item].email;
        var student_group = groups[item].group_name;
        var student_name = groups[item].name;
        if(!initialData.columnOrder.includes(student_group))
        {
          initialData.columns[student_group] = {
            id: student_group,
            title: 'Group_'+groups[item].group_name,
            taskIds: []
          }
          initialData.columnOrder.push(student_group)
          
        }
        initialData.tasks[student_email] = { id: student_email, content: student_name,group:groups[item].group_name }
        initialData.columns[student_group].taskIds.push(student_email);
      });
    })


export default initialData
