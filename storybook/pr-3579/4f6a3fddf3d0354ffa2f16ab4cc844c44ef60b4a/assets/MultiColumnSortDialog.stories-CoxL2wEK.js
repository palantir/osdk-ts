import{M as a}from"./MultiColumnSortDialog-19hxAa_r.js";import"./DraggableList-yBj5sOCC.js";import"./iframe-B2-8TOfx.js";import"./preload-helper-CT34ep4T.js";import"./svgIconContainer-CS7IdlFh.js";import"./index-Bt1Oakql.js";import"./search-DFcXYwcj.js";import"./Input-CaqWprYd.js";import"./useBaseUiId-DkQdkAZ0.js";import"./useControlled-C-enUzEJ.js";import"./index-CZX5jAs_.js";import"./index-Bg1nm3YS.js";import"./Button-nT-Y9tpL.js";import"./small-cross-D_JB0Htf.js";import"./ActionButton-BlnZ7Qn3.js";import"./Dialog-DgmzSNYd.js";import"./cross-DnSL1XCn.js";import"./InternalBackdrop-Rt7VDdoZ.js";import"./composite-DoioqM1e.js";import"./index-CXCgztOC.js";import"./MenuTrigger-C0sRmmM5.js";import"./CompositeItem-JGq-PrRF.js";import"./ToolbarRootContext-DuxaWivy.js";import"./getDisabledMountTransitionStyles-CL21CT3a.js";import"./getPseudoElementBounds-Dbb7y0bR.js";import"./caret-down-DUDLuTPE.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true },
    { id: "email", name: "Email", canSort: true },
    { id: "department", name: "Department", canSort: true },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "department", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>`}}}};var o,n,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true },
    { id: "email", name: "Email", canSort: true },
    { id: "department", name: "Department", canSort: true },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "department", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>\`
      }
    }
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,I as default};
