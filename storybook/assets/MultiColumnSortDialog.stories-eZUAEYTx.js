import{M as n}from"./MultiColumnSortDialog-7Aw90Y90.js";import"./DraggableList-BzcZwy3J.js";import"./iframe-CnAEf3IJ.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-BIdExII8.js";import"./index-B8Nz7JJW.js";import"./search-CEklk6Yi.js";import"./Input-x_02lyVD.js";import"./useBaseUiId-CeIC7NO6.js";import"./useControlled-B_4lFiHq.js";import"./index-BcvNcIza.js";import"./index-CX6f-w2g.js";import"./Button-C2qyHp3c.js";import"./small-cross-BLoBHL9y.js";import"./ActionButton-DZsexcaK.js";import"./Dialog-D5gMprTa.js";import"./cross-Dt0cGPfd.js";import"./InternalBackdrop-YQuz4Vbl.js";import"./composite-CL6haQa-.js";import"./index-Cig9tftr.js";import"./MenuTrigger-CW4cqosj.js";import"./CompositeItem-ByBfsUTK.js";import"./ToolbarRootContext-CoOtTfWl.js";import"./getDisabledMountTransitionStyles-DPIKQDtQ.js";import"./getPseudoElementBounds-DpmHiwP5.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0,dataType:"string"},{id:"email",name:"Email",canSort:!0,dataType:"string"},{id:"jobTitle",name:"Job Title",canSort:!0,dataType:"string"},{id:"department",name:"Department",canSort:!0,dataType:"string"},{id:"startDate",name:"Start Date",canSort:!0,dataType:"timestamp"},{id:"yearsOfService",name:"Years of Service",canSort:!0,dataType:"integer"},{id:"location",name:"Location",canSort:!1,dataType:"string"}],j={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:n,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0},{id:"yearsOfService",desc:!0},{id:"startDate",desc:!1}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu."},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true, dataType: "string" },
    { id: "email", name: "Email", canSort: true, dataType: "string" },
    { id: "yearsOfService", name: "Years of Service", canSort: true, dataType: "integer" },
    { id: "startDate", name: "Start Date", canSort: true, dataType: "timestamp" },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "yearsOfService", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>`}}}};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true, dataType: "string" },
    { id: "email", name: "Email", canSort: true, dataType: "string" },
    { id: "yearsOfService", name: "Years of Service", canSort: true, dataType: "integer" },
    { id: "startDate", name: "Start Date", canSort: true, dataType: "timestamp" },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "yearsOfService", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>\`
      }
    }
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,j as default};
