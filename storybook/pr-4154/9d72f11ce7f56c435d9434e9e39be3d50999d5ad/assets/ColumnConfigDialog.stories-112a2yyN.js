import{j as i,r as e}from"./iframe-D6fPZnqe.js";import{C as h}from"./ColumnConfigDialog-CDyMzNiq.js";import"./preload-helper-CBKbTLo4.js";import"./DraggableList-Boy9Qx86.js";import"./svgIconContainer-DubCep_u.js";import"./index-DhSFErPm.js";import"./search-j5vkqq1q.js";import"./Input-DoNUyN0C.js";import"./useBaseUiId-D4NDHa5t.js";import"./useControlled-iYay2yJT.js";import"./index-DAhymAav.js";import"./index-D-Gucmtt.js";import"./Button-BLxStAZZ.js";import"./small-cross-DR8DSWW3.js";import"./ActionButton-S2mIoAOj.js";import"./Checkbox-CXAqa0cU.js";import"./InternalBackdrop-C5Ye3Vqn.js";import"./composite-Be4p-4ws.js";import"./index-BewO9ECR.js";import"./useValueChanged-1d_1m1_Q.js";import"./Dialog-DOJWZ1NL.js";import"./cross-9F8JKEQy.js";import"./CollapsiblePanel-CxtE82_6.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,D=[{id:"fullName",name:"Full Name"},{id:"email",name:"Email"},{id:"jobTitle",name:"Job Title"},{id:"department",name:"Department"},{id:"startDate",name:"Start Date"},{id:"location",name:"Location"}],V={fullName:!0,email:!0,jobTitle:!0,department:!0,startDate:!1,location:!1},T=["fullName","email","jobTitle","department"],ne={title:"Components/ObjectTable/Building Blocks/ColumnConfigDialog",component:h,tags:["beta"],args:{isOpen:!0,onClose:r(),columnOptions:D,currentVisibility:V,currentColumnOrder:T,onApply:r()},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to configure",control:!1},currentVisibility:{description:"Current visibility state of each column",control:!1},currentColumnOrder:{description:"Current order of visible columns",control:!1},onApply:{description:"Called with the new column configuration when the user clicks Apply",control:!1,table:{category:"Events"}},isValidConfig:{description:"Optional validation function. When provided, the Apply button is disabled if this returns false.",control:!1}}},n={parameters:{docs:{source:{code:`import { ColumnConfigDialog } from "@osdk/react-components/object-table";

const [isOpen, setIsOpen] = useState(false);

<ColumnConfigDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name" },
    { id: "email", name: "Email" },
    { id: "jobTitle", name: "Job Title" },
    { id: "department", name: "Department" },
  ]}
  currentVisibility={{ fullName: true, email: true, jobTitle: true, department: true }}
  currentColumnOrder={["fullName", "email", "jobTitle", "department"]}
  onApply={(columns) => console.log("Applied:", columns)}
/>`}}}},t={args:{currentVisibility:{fullName:!0,email:!0,jobTitle:!0,department:!0,startDate:!0,location:!0},currentColumnOrder:["fullName","email","jobTitle","department","startDate","location"]},parameters:{docs:{description:{story:"Every column is toggled on."},source:{code:`<ColumnConfigDialog
  isOpen={isOpen}
  onClose={handleClose}
  columnOptions={columnOptions}
  currentVisibility={{
    fullName: true,
    email: true,
    jobTitle: true,
    department: true,
    startDate: true,
    location: true,
  }}
  currentColumnOrder={[
    "fullName",
    "email",
    "jobTitle",
    "department",
    "startDate",
    "location",
  ]}
  onApply={handleApply}
/>`}}}},o={args:{currentVisibility:{fullName:!0,email:!1,jobTitle:!1,department:!1,startDate:!1,location:!1},currentColumnOrder:["fullName"]},parameters:{docs:{description:{story:"Only a single column is visible; the rest are toggled off."},source:{code:`<ColumnConfigDialog
  isOpen={isOpen}
  onClose={handleClose}
  columnOptions={columnOptions}
  currentVisibility={{
    fullName: true,
    email: false,
    jobTitle: false,
    department: false,
    startDate: false,
    location: false,
  }}
  currentColumnOrder={["fullName"]}
  onApply={handleApply}
/>`}}}};function x(){const[j,s]=e.useState(!0),N=e.useCallback(()=>s(!1),[]),A=e.useCallback(()=>s(!0),[]),v=e.useCallback(S=>S.filter(E=>E.isVisible).length>=2,[]);return i.jsxs("div",{children:[i.jsx("button",{type:"button",onClick:A,style:{padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Open Column Config"}),i.jsx(h,{isOpen:j,onClose:N,columnOptions:D,currentVisibility:V,currentColumnOrder:T,onApply:r(),isValidConfig:v})]})}const l={args:{isOpen:void 0},parameters:{docs:{description:{story:"The Apply button is disabled when fewer than 2 columns are visible."},source:{code:`const isValidConfig = (columns) => {
  const visibleCount = columns.filter(c => c.isVisible).length;
  return visibleCount >= 2;
};

<ColumnConfigDialog
  isOpen={isOpen}
  onClose={handleClose}
  columnOptions={columnOptions}
  currentVisibility={visibility}
  currentColumnOrder={order}
  onApply={handleApply}
  isValidConfig={isValidConfig}
/>`}}},render:()=>i.jsx(x,{})};var a,u,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { ColumnConfigDialog } from "@osdk/react-components/object-table";

const [isOpen, setIsOpen] = useState(false);

<ColumnConfigDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name" },
    { id: "email", name: "Email" },
    { id: "jobTitle", name: "Job Title" },
    { id: "department", name: "Department" },
  ]}
  currentVisibility={{ fullName: true, email: true, jobTitle: true, department: true }}
  currentColumnOrder={["fullName", "email", "jobTitle", "department"]}
  onApply={(columns) => console.log("Applied:", columns)}
/>\`
      }
    }
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    currentVisibility: {
      fullName: true,
      email: true,
      jobTitle: true,
      department: true,
      startDate: true,
      location: true
    },
    currentColumnOrder: ["fullName", "email", "jobTitle", "department", "startDate", "location"]
  },
  parameters: {
    docs: {
      description: {
        story: "Every column is toggled on."
      },
      source: {
        code: \`<ColumnConfigDialog
  isOpen={isOpen}
  onClose={handleClose}
  columnOptions={columnOptions}
  currentVisibility={{
    fullName: true,
    email: true,
    jobTitle: true,
    department: true,
    startDate: true,
    location: true,
  }}
  currentColumnOrder={[
    "fullName",
    "email",
    "jobTitle",
    "department",
    "startDate",
    "location",
  ]}
  onApply={handleApply}
/>\`
      }
    }
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var f,C,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentVisibility: {
      fullName: true,
      email: false,
      jobTitle: false,
      department: false,
      startDate: false,
      location: false
    },
    currentColumnOrder: ["fullName"]
  },
  parameters: {
    docs: {
      description: {
        story: "Only a single column is visible; the rest are toggled off."
      },
      source: {
        code: \`<ColumnConfigDialog
  isOpen={isOpen}
  onClose={handleClose}
  columnOptions={columnOptions}
  currentVisibility={{
    fullName: true,
    email: false,
    jobTitle: false,
    department: false,
    startDate: false,
    location: false,
  }}
  currentColumnOrder={["fullName"]}
  onApply={handleApply}
/>\`
      }
    }
  }
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var O,g,y;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isOpen: undefined as unknown as boolean
  },
  parameters: {
    docs: {
      description: {
        story: "The Apply button is disabled when fewer than 2 columns are visible."
      },
      source: {
        code: \`const isValidConfig = (columns) => {
  const visibleCount = columns.filter(c => c.isVisible).length;
  return visibleCount >= 2;
};

<ColumnConfigDialog
  isOpen={isOpen}
  onClose={handleClose}
  columnOptions={columnOptions}
  currentVisibility={visibility}
  currentColumnOrder={order}
  onApply={handleApply}
  isValidConfig={isValidConfig}
/>\`
      }
    }
  },
  render: () => <WithValidationStory />
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const te=["Default","AllColumnsVisible","SingleColumnVisible","WithValidation"];export{t as AllColumnsVisible,n as Default,o as SingleColumnVisible,l as WithValidation,te as __namedExportsOrder,ne as default};
