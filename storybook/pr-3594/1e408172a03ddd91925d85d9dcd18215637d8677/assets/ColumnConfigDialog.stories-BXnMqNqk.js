import{j as l,r as e}from"./iframe-DYo6IeSP.js";import{C as h}from"./ColumnConfigDialog-Dhr-G6cs.js";import"./preload-helper-oxCfAJG1.js";import"./DraggableList-CLsVKaXp.js";import"./svgIconContainer-B2FaZn-h.js";import"./index-DzBcJ-bt.js";import"./search-XvRzOpyc.js";import"./Input-DzarD0SN.js";import"./useBaseUiId-BiLXq879.js";import"./useControlled-Flk4w1fp.js";import"./index-CTN_uXGU.js";import"./index-Bz8-sxMZ.js";import"./Button-48QIVM3v.js";import"./small-cross-CLGnXlJe.js";import"./ActionButton-DOvJ2Rd9.js";import"./Checkbox-Dw_wGWK9.js";import"./minus-BLhW6Wur.js";import"./cross-B1TB2OCT.js";import"./tick-BaX6sEAv.js";import"./InternalBackdrop-iazQE0l1.js";import"./composite-KlwepRBQ.js";import"./index-_zGOJ2qq.js";import"./useValueChanged-CLcXd_x7.js";import"./Dialog-B6h3APIA.js";import"./caret-down-CPbx1euP.js";import"./CollapsiblePanel-BAoTV-mA.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,V=[{id:"fullName",name:"Full Name"},{id:"email",name:"Email"},{id:"jobTitle",name:"Job Title"},{id:"department",name:"Department"},{id:"startDate",name:"Start Date"},{id:"location",name:"Location"}],T={fullName:!0,email:!0,jobTitle:!0,department:!0,startDate:!1,location:!1},D=["fullName","email","jobTitle","department"],ie={title:"Components/ObjectTable/Building Blocks/ColumnConfigDialog",component:h,tags:["beta"],args:{isOpen:!0,onClose:r(),columnOptions:V,currentVisibility:T,currentColumnOrder:D,onApply:r()},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to configure",control:!1},currentVisibility:{description:"Current visibility state of each column",control:!1},currentColumnOrder:{description:"Current order of visible columns",control:!1},onApply:{description:"Called with the new column configuration when the user clicks Apply",control:!1,table:{category:"Events"}},isValidConfig:{description:"Optional validation function. When provided, the Apply button is disabled if this returns false.",control:!1}}},n={parameters:{docs:{source:{code:`import { ColumnConfigDialog } from "@osdk/react-components/experimental/object-table";

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
/>`}}}},t={args:{currentVisibility:{fullName:!0,email:!0,jobTitle:!0,department:!0,startDate:!0,location:!0},currentColumnOrder:["fullName","email","jobTitle","department","startDate","location"]}},o={args:{currentVisibility:{fullName:!0,email:!1,jobTitle:!1,department:!1,startDate:!1,location:!1},currentColumnOrder:["fullName"]}};function E(){const[j,s]=e.useState(!0),N=e.useCallback(()=>s(!1),[]),A=e.useCallback(()=>s(!0),[]),v=e.useCallback(S=>S.filter(x=>x.isVisible).length>=2,[]);return l.jsxs("div",{children:[l.jsx("button",{type:"button",onClick:A,style:{padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Open Column Config"}),l.jsx(h,{isOpen:j,onClose:N,columnOptions:V,currentVisibility:T,currentColumnOrder:D,onApply:r(),isValidConfig:v})]})}const i={args:{isOpen:void 0},parameters:{docs:{description:{story:"The Apply button is disabled when fewer than 2 columns are visible."},source:{code:`const isValidConfig = (columns) => {
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
    currentVisibility: {
      fullName: true,
      email: true,
      jobTitle: true,
      department: true,
      startDate: true,
      location: true
    },
    currentColumnOrder: ["fullName", "email", "jobTitle", "department", "startDate", "location"]
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var f,b,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(O=i.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const le=["Default","AllColumnsVisible","SingleColumnVisible","WithValidation"];export{t as AllColumnsVisible,n as Default,o as SingleColumnVisible,i as WithValidation,le as __namedExportsOrder,ie as default};
