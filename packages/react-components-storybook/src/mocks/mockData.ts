export const employeeData: ({
  employeeId: string;
  fullName: string;
  email: string;
  jobTitle: string;
  department: string;
  officeId: string;
  firstFullTimeStartDate: string;
  lead?: string;
})[] = [
  {
    employeeId: "emp001",
    fullName: "John Smith",
    email: "john.smith@example.com",
    jobTitle: "Senior Software Engineer",
    department: "Engineering",
    officeId: "office001",
    firstFullTimeStartDate: "2020-01-15",
    lead: "emp005",
  },
  {
    employeeId: "emp002",
    fullName: "Jane Doe",
    email: "jane.doe@example.com",
    jobTitle: "Product Manager",
    department: "Product",
    officeId: "office001",
    firstFullTimeStartDate: "2019-03-20",
    lead: "emp006",
  },
  {
    employeeId: "emp003",
    fullName: "Bob Johnson",
    email: "bob.johnson@example.com",
    jobTitle: "UX Designer",
    department: "Design",
    officeId: "office002",
    firstFullTimeStartDate: "2021-06-01",
    lead: "emp006",
  },
  {
    employeeId: "emp004",
    fullName: "Alice Williams",
    email: "alice.williams@example.com",
    jobTitle: "Data Analyst",
    department: "Analytics",
    officeId: "office002",
    firstFullTimeStartDate: "2018-11-10",
    lead: "emp005",
  },
  {
    employeeId: "emp005",
    fullName: "Charlie Brown",
    email: "charlie.brown@example.com",
    jobTitle: "Engineering Manager",
    department: "Engineering",
    officeId: "office001",
    firstFullTimeStartDate: "2017-05-15",
  },
  {
    employeeId: "emp006",
    fullName: "Diana Prince",
    email: "diana.prince@example.com",
    jobTitle: "VP of Product",
    department: "Product",
    officeId: "office001",
    firstFullTimeStartDate: "2016-09-01",
  },
  {
    employeeId: "emp007",
    fullName: "Frank Miller",
    email: "frank.miller@example.com",
    jobTitle: "Junior Developer",
    department: "Engineering",
    officeId: "office003",
    firstFullTimeStartDate: "2023-01-10",
    lead: "emp001",
  },
  {
    employeeId: "emp008",
    fullName: "Grace Hopper",
    email: "grace.hopper@example.com",
    jobTitle: "Principal Engineer",
    department: "Engineering",
    officeId: "office001",
    firstFullTimeStartDate: "2015-04-20",
    lead: "emp005",
  },
  {
    employeeId: "emp009",
    fullName: "Henry Ford",
    email: "henry.ford@example.com",
    jobTitle: "Operations Manager",
    department: "Operations",
    officeId: "office003",
    firstFullTimeStartDate: "2019-07-15",
  },
  {
    employeeId: "emp010",
    fullName: "Iris West",
    email: "iris.west@example.com",
    jobTitle: "Marketing Specialist",
    department: "Marketing",
    officeId: "office002",
    firstFullTimeStartDate: "2022-02-28",
  },
];

export const officeData: {
  officeId: string;
  officeName: string;
  location: string;
  capacity: number;
}[] = [
  {
    officeId: "office001",
    officeName: "New York HQ",
    location: "New York, NY",
    capacity: 500,
  },
  {
    officeId: "office002",
    officeName: "San Francisco Office",
    location: "San Francisco, CA",
    capacity: 250,
  },
  {
    officeId: "office003",
    officeName: "London Office",
    location: "London, UK",
    capacity: 150,
  },
];
