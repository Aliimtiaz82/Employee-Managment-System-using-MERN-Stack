const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design landing page",
        taskDescription: "Create the hero section and responsive layout for new product site.",
        taskDate: "2025-07-10",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix navbar bug",
        taskDescription: "Resolve the dropdown overlap issue in Safari.",
        taskDate: "2025-06-30",
        category: "Bug Fix"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Research caching strategies",
        taskDescription: "Evaluate Redis vs. Memcached for session storage.",
        taskDate: "2025-07-12",
        category: "Research"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write API docs",
        taskDescription: "Document the authentication endpoints in OpenAPI format.",
        taskDate: "2025-07-01",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Integrate payment gateway",
        taskDescription: "Stripe integration for subscription flow (blocked by missing keys).",
        taskDate: "2025-06-25",
        category: "Feature"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize images",
        taskDescription: "Convert hero images to WebP and set up lazy loading.",
        taskDate: "2025-07-11",
        category: "Performance"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Set up CI pipeline",
        taskDescription: "Configure GitHub Actions for automated testing and deployment.",
        taskDate: "2025-07-13",
        category: "DevOps"
      }
    ]
  }
];



const admin = [{
  "id": 99,
  "email": "admin@example.com",
  "password": "123"
}]


export const setLocalStorage = () =>{

}

export const getLocalStorege = () =>{
    
}