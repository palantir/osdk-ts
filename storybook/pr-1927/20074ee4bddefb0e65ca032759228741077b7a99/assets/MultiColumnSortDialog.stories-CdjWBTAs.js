import{M as n}from"./MultiColumnSortDialog-B3iIgZb6.js";import"./DraggableList-BDgiyc03.js";import"./iframe-B-Vichjj.js";import"./preload-helper-Cti1Qb3M.js";import"./svgIconContainer-DKifyIgl.js";import"./index-BrQCMcFI.js";import"./search-DODYwrTJ.js";import"./Input-Dd8GNXSA.js";import"./useBaseUiId-BbqzJTxC.js";import"./useControlled-CyehoLEN.js";import"./index-CXmDZCit.js";import"./index-roXzNt2R.js";import"./Button-DhB4QIGX.js";import"./small-cross-CDE3T1VP.js";import"./ActionButton-3O7yiqt6.js";import"./Dialog-CxYJpKtD.js";import"./cross-DLbo6j99.js";import"./InternalBackdrop-Chx6xO5M.js";import"./composite-Disga3Gv.js";import"./index-Dv4MxiBX.js";import"./MenuTrigger-DhKPEuWO.js";import"./CompositeItem-nXpoZPrc.js";import"./ToolbarRootContext-Gi45tW71.js";import"./getDisabledMountTransitionStyles-DwdzBcwv.js";import"./getPseudoElementBounds-D1q0SwFG.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0,dataType:"string"},{id:"email",name:"Email",canSort:!0,dataType:"string"},{id:"jobTitle",name:"Job Title",canSort:!0,dataType:"string"},{id:"department",name:"Department",canSort:!0,dataType:"string"},{id:"startDate",name:"Start Date",canSort:!0,dataType:"timestamp"},{id:"yearsOfService",name:"Years of Service",canSort:!0,dataType:"integer"},{id:"location",name:"Location",canSort:!1,dataType:"string"}],j={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:n,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0},{id:"yearsOfService",desc:!0},{id:"startDate",desc:!1}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu."},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/object-table";

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
        code: \`import { MultiColumnSortDialog } from "@osdk/react-components/object-table";

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
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,j as default};
