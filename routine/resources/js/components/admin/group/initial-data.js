import axios from "axios";


var initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Shoikot',group:'1' },

  },
  columns: {
    'column-0': {
      id: 'column-0',
      title: 'Inactive Students',
      taskIds: ['task-1']
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
      console.log(groups);

      Object.keys(groups).forEach(function (item) {
        var student_email = groups[item].email;
        var student_group = groups[item].group_name;
        console.log(student_email+student_group);
        if(!initialData.columnOrder.includes(student_group))
        {
          initialData.columns[student_group] = {
            id: student_group,
            title: 'Group_'+groups[item].group_name,
            taskIds: []
          }
          initialData.columnOrder.push(student_group)
          
        }
        initialData.tasks[student_email] = { id: student_email, content: student_email,group:groups[item].group_name }
        initialData.columns[student_group].taskIds.push(student_email);
      });
    })


export default initialData
