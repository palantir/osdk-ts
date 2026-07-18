import{j as r,r as e}from"./iframe-CXhU7t2f.js";import{C as V}from"./ColumnConfigDialog-BBWaoVxB.js";import"./preload-helper-BDvWwuql.js";import"./DraggableList-1n_a8UC4.js";import"./svgIconContainer-CTI46h-O.js";import"./index-9FYVtP3Z.js";import"./search-D4VdaZo6.js";import"./Input-C8ya944S.js";import"./useBaseUiId-A4A1Li5V.js";import"./useControlled-PRJV_Jy7.js";import"./index-4EH_6cib.js";import"./index-BCoFteCI.js";import"./isEqual-CG1oMvXQ.js";import"./isObject-Ike8f_7J.js";import"./Button-B7Bo3D3H.js";import"./ActionButton-BvWh4q0Q.js";import"./Checkbox-Dw3DL3fl.js";import"./InternalBackdrop-ClxFAGmQ.js";import"./composite-CM3mes3D.js";import"./index-BbS8x_iM.js";import"./useValueChanged-Dz55MfZn.js";import"./Dialog-DpNpFOkA.js";import"./cross-C5reyL6B.js";import"./CollapsiblePanel-DqCzuiRX.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,v=[{id:"fullName",name:"Full Name"},{id:"email",name:"Email"},{id:"jobTitle",name:"Job Title"},{id:"department",name:"Department"},{id:"startDate",name:"Start Date"},{id:"location",name:"Location"}],j={fullName:!0,email:!0,jobTitle:!0,department:!0,startDate:!1,location:!1},N=["fullName","email","jobTitle","department"],re={title:"Components/ObjectTable/Building Blocks/ColumnConfigDialog",component:V,tags:["beta"],args:{isOpen:!0,onClose:s(),columnOptions:v,currentVisibility:j,currentColumnOrder:N,onApply:s()},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to configure",control:!1},currentVisibility:{description:"Current visibility state of each column",control:!1},currentColumnOrder:{description:"Current order of visible columns",control:!1},onApply:{description:"Called with the new column configuration when the user clicks Apply",control:!1,table:{category:"Events"}},isValidConfig:{description:"Optional validation function. When provided, the Apply button is disabled if this returns false.",control:!1}}},n={parameters:{docs:{source:{code:`import { ColumnConfigDialog } from "@osdk/react-components/experimental/object-table";

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
/>`}}}},o={args:{currentVisibility:{fullName:!0,email:!0,jobTitle:!0,department:!0,startDate:!0,location:!0},currentColumnOrder:["fullName","email","jobTitle","department","startDate","location"]},parameters:{docs:{description:{story:"Every column is toggled on."},source:{code:`<ColumnConfigDialog
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
/>`}}}},l={args:{currentVisibility:{fullName:!0,email:!1,jobTitle:!1,department:!1,startDate:!1,location:!1},currentColumnOrder:["fullName"]},parameters:{docs:{description:{story:"Only a single column is visible; the rest are toggled off."},source:{code:`<ColumnConfigDialog
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
/>`}}}},t={args:{labels:{columnConfigTitle:"Choose columns",columnConfigApply:"Save",columnConfigCancel:"Discard",columnConfigVisibleColumns:"Shown columns",columnConfigDragToReorder:"Drag rows to reorder",columnConfigAddOrRemoveColumns:"Toggle columns",columnConfigAllColumns:"Everything",columnConfigSearchPlaceholder:"Type to filter…"}},parameters:{docs:{description:{story:"Every user-facing string can be overridden through the `labels` prop. Any key left unset falls back to the built-in English default. Pass the same object to `ObjectTable`/`BaseTable` to localize the whole table at once."},source:{code:`<ColumnConfigDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={columnOptions}
  currentVisibility={visibility}
  currentColumnOrder={order}
  onApply={handleApply}
  labels={{
    columnConfigTitle: "Choose columns",
    columnConfigApply: "Save",
    columnConfigCancel: "Discard",
    columnConfigVisibleColumns: "Shown columns",
  }}
/>`}}}};function _(){const[S,a]=e.useState(!0),E=e.useCallback(()=>a(!1),[]),w=e.useCallback(()=>a(!0),[]),k=e.useCallback(x=>x.filter(L=>L.isVisible).length>=2,[]);return r.jsxs("div",{children:[r.jsx("button",{type:"button",onClick:w,style:{padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Open Column Config"}),r.jsx(V,{isOpen:S,onClose:E,columnOptions:v,currentVisibility:j,currentColumnOrder:N,onApply:s(),isValidConfig:k})]})}const i={args:{isOpen:void 0},parameters:{docs:{description:{story:"The Apply button is disabled when fewer than 2 columns are visible."},source:{code:`const isValidConfig = (columns) => {
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
/>`}}},render:()=>r.jsx(_,{})};var u,c,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var C,g,b;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var O,y,h;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    labels: {
      columnConfigTitle: "Choose columns",
      columnConfigApply: "Save",
      columnConfigCancel: "Discard",
      columnConfigVisibleColumns: "Shown columns",
      columnConfigDragToReorder: "Drag rows to reorder",
      columnConfigAddOrRemoveColumns: "Toggle columns",
      columnConfigAllColumns: "Everything",
      columnConfigSearchPlaceholder: "Type to filter…"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Every user-facing string can be overridden through the \`labels\` " + "prop. Any key left unset falls back to the built-in English " + "default. Pass the same object to \`ObjectTable\`/\`BaseTable\` to " + "localize the whole table at once."
      },
      source: {
        code: \`<ColumnConfigDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={columnOptions}
  currentVisibility={visibility}
  currentColumnOrder={order}
  onApply={handleApply}
  labels={{
    columnConfigTitle: "Choose columns",
    columnConfigApply: "Save",
    columnConfigCancel: "Discard",
    columnConfigVisibleColumns: "Shown columns",
  }}
/>\`
      }
    }
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var T,D,A;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const se=["Default","AllColumnsVisible","SingleColumnVisible","LocalizedLabels","WithValidation"];export{o as AllColumnsVisible,n as Default,t as LocalizedLabels,l as SingleColumnVisible,i as WithValidation,se as __namedExportsOrder,re as default};
