import{M as n}from"./MultiColumnSortDialog-DIi6uGpb.js";import"./DraggableList-LvcSAiE7.js";import"./iframe-B1dY-uMG.js";import"./preload-helper-CsaNr_BP.js";import"./svgIconContainer-Hqh_F8lK.js";import"./index-J8POe0xc.js";import"./search-NElMm_h6.js";import"./Input-Bow4iCTS.js";import"./useBaseUiId-BEMvDf4X.js";import"./useControlled-Q3FRIAaO.js";import"./index-DfE0OqSo.js";import"./index-De6BIYNw.js";import"./Button-WD0YpcbL.js";import"./small-cross-DNXIHvDW.js";import"./ActionButton-evAWPmgm.js";import"./Dialog-C3vgrSIv.js";import"./cross-CGzVaZsI.js";import"./InternalBackdrop-kXRP9i2Q.js";import"./composite-DafZoXqK.js";import"./index-v0K9-PBP.js";import"./MenuTrigger-D4C0_RsP.js";import"./CompositeItem-DJ7Q7uHL.js";import"./ToolbarRootContext-B2VcC1-l.js";import"./getDisabledMountTransitionStyles-DNBCt1sN.js";import"./getPseudoElementBounds-C1qwlXI7.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0,dataType:"string"},{id:"email",name:"Email",canSort:!0,dataType:"string"},{id:"jobTitle",name:"Job Title",canSort:!0,dataType:"string"},{id:"department",name:"Department",canSort:!0,dataType:"string"},{id:"startDate",name:"Start Date",canSort:!0,dataType:"timestamp"},{id:"yearsOfService",name:"Years of Service",canSort:!0,dataType:"integer"},{id:"location",name:"Location",canSort:!1,dataType:"string"}],j={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:n,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0},{id:"yearsOfService",desc:!0},{id:"startDate",desc:!1}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu."},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/object-table";

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
