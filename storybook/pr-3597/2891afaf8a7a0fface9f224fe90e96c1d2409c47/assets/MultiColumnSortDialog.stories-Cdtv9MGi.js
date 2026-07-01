import{M as a}from"./MultiColumnSortDialog-loZgDEZ9.js";import"./DraggableList-Fe-9Iy-Q.js";import"./iframe-CNeLbKR0.js";import"./preload-helper-t6i53lZY.js";import"./svgIconContainer-BZaeorZI.js";import"./index-8cQwkJos.js";import"./search-BHuH4UT5.js";import"./Input-BgnrhhXf.js";import"./useBaseUiId-DIhe_FS8.js";import"./useControlled-DDWfgMvb.js";import"./index-Ds4ML4jl.js";import"./index-7euDZAsg.js";import"./Button-Bk9cUjq4.js";import"./small-cross-BnJQuN1A.js";import"./ActionButton-iLDHmZ0i.js";import"./Dialog-DU0uDqGo.js";import"./cross-CBV_IYC3.js";import"./InternalBackdrop-CtrCM3Nw.js";import"./composite-C-XAEXGU.js";import"./index-D5kHiwHU.js";import"./MenuTrigger-CtbVfHkL.js";import"./CompositeItem-njWh5NE4.js";import"./ToolbarRootContext-BVIcN7p5.js";import"./getDisabledMountTransitionStyles-DmqgBKm9.js";import"./getPseudoElementBounds-Dy3M3vCL.js";import"./caret-down-B4mmkM1f.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
