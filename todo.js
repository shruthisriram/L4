const todoList=()=>{
    let all=[];
    const add=(todoItem)=>{
      all.push(todoItem);
    };
    const markAsComplete=(index)=>{
      all[index].completed=true;
    };
   
  const dueToday=()=>{
      return all.filter(
        (item)=>item.dueDate===new Date().toLocaleDateString("en-CA"));
    };
  const overdue=()=>{
      return all.filter(
        (item)=>item.dueDate<new Date().toLocaleDateString("en-CA"));
    };
  const dueLater=()=>{
      return all.filter(
        (item)=>item.dueDate > new Date().toLocaleDateString("en-CA"));
    };
  return{all,add,markAsComplete,dueLater,overdue,dueToday,};
  };
  module.exports=todoList;
    
