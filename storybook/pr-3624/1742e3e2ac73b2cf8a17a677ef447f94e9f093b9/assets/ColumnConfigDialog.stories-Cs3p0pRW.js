import{j as l,r as e}from"./iframe-BeCKStTi.js";import{C as h}from"./ColumnConfigDialog-DdaKJmFv.js";import"./preload-helper-BICrzKRt.js";import"./DraggableList-CTKpXlM5.js";import"./svgIconContainer-D-9_AOAs.js";import"./index-BfYzXW_3.js";import"./search-CZf2_gwq.js";import"./Input-fr7UgVSn.js";import"./useBaseUiId-COsIpFVh.js";import"./useControlled-5Cxw9uoZ.js";import"./index-BkJ0Lguu.js";import"./index-BPIvZm15.js";import"./Button-to0u69wN.js";import"./small-cross-BWK0DWdF.js";import"./ActionButton-BABms-rZ.js";import"./Checkbox-B6cs6clj.js";import"./InternalBackdrop--cXN5sjO.js";import"./composite-U2ojCD3f.js";import"./index-ya4S42ZF.js";import"./useValueChanged-BYmOXC78.js";import"./Dialog-sahsqXct.js";import"./cross-DDXI9CZ5.js";import"./CollapsiblePanel-DkIfNruL.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,V=[{id:"fullName",name:"Full Name"},{id:"email",name:"Email"},{id:"jobTitle",name:"Job Title"},{id:"department",name:"Department"},{id:"startDate",name:"Start Date"},{id:"location",name:"Location"}],T={department:!0,email:!0,fullName:!0,jobTitle:!0,location:!1,startDate:!1},D=["fullName","email","jobTitle","department"],ne={argTypes:{columnOptions:{control:!1,description:"Available columns to configure"},currentColumnOrder:{control:!1,description:"Current order of visible columns"},currentVisibility:{control:!1,description:"Current visibility state of each column"},isOpen:{control:"boolean",description:"Whether the dialog is open"},isValidConfig:{control:!1,description:"Optional validation function. When provided, the Apply button is disabled if this returns false."},onApply:{control:!1,description:"Called with the new column configuration when the user clicks Apply",table:{category:"Events"}},onClose:{control:!1,description:"Called when the dialog is closed",table:{category:"Events"}}},args:{columnOptions:V,currentColumnOrder:D,currentVisibility:T,isOpen:!0,onApply:r(),onClose:r()},component:h,tags:["beta"],title:"Components/ObjectTable/Building Blocks/ColumnConfigDialog"},n={parameters:{docs:{source:{code:`import { ColumnConfigDialog } from "@osdk/react-components/experimental/object-table";

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
/>`}}}},t={args:{currentColumnOrder:["fullName","email","jobTitle","department","startDate","location"],currentVisibility:{department:!0,email:!0,fullName:!0,jobTitle:!0,location:!0,startDate:!0}}},o={args:{currentColumnOrder:["fullName"],currentVisibility:{department:!1,email:!1,fullName:!0,jobTitle:!1,location:!1,startDate:!1}}};function E(){const[j,s]=e.useState(!0),N=e.useCallback(()=>s(!1),[]),A=e.useCallback(()=>s(!0),[]),v=e.useCallback(S=>S.filter(x=>x.isVisible).length>=2,[]);return l.jsxs("div",{children:[l.jsx("button",{type:"button",onClick:A,style:{backgroundColor:"#3b82f6",border:"none",borderRadius:"4px",color:"white",cursor:"pointer",padding:"8px 16px"},children:"Open Column Config"}),l.jsx(h,{isOpen:j,onClose:N,columnOptions:V,currentVisibility:T,currentColumnOrder:D,onApply:r(),isValidConfig:v})]})}const i={args:{isOpen:void 0},parameters:{docs:{description:{story:"The Apply button is disabled when fewer than 2 columns are visible."},source:{code:`const isValidConfig = (columns) => {
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
/>`}}},render:()=>l.jsx(E,{})};var a,m,u;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { ColumnConfigDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    currentColumnOrder: ["fullName", "email", "jobTitle", "department", "startDate", "location"],
    currentVisibility: {
      department: true,
      email: true,
      fullName: true,
      jobTitle: true,
      location: true,
      startDate: true
    }
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var f,b,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentColumnOrder: ["fullName"],
    currentVisibility: {
      department: false,
      email: false,
      fullName: true,
      jobTitle: false,
      location: false,
      startDate: false
    }
  }
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var g,O,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(O=i.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const te=["Default","AllColumnsVisible","SingleColumnVisible","WithValidation"];export{t as AllColumnsVisible,n as Default,o as SingleColumnVisible,i as WithValidation,te as __namedExportsOrder,ne as default};
