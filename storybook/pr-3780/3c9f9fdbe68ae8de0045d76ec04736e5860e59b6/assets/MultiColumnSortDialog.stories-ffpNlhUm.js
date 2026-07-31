import{M as a}from"./MultiColumnSortDialog-BTeLTlUO.js";import"./DraggableList-BXrBLydx.js";import"./iframe-8l4VgzvN.js";import"./preload-helper-BWMgMhg-.js";import"./svgIconContainer-BQL_tfkb.js";import"./index-CENhKLHr.js";import"./search-Bd8us1xK.js";import"./Input-CdaK_hcH.js";import"./useBaseUiId-DUa6Gl7o.js";import"./useControlled-D-2KZgoS.js";import"./index-e67zZ8CW.js";import"./index-ue3NKf6y.js";import"./isEqual-Di3NOZUo.js";import"./isObject-Bswa1wAC.js";import"./Button-aIlHQ8yg.js";import"./ActionButton-C_uBNnQ3.js";import"./Dialog-7UDuPlvQ.js";import"./cross-B2bEUPP4.js";import"./InternalBackdrop-BYDChCJ5.js";import"./composite-a8JqXKoE.js";import"./index-CGcIjaZR.js";import"./MenuTrigger-CsMLDPFG.js";import"./CompositeItem-Db4Osd20.js";import"./ToolbarRootContext-DpqGT7Lo.js";import"./getDisabledMountTransitionStyles-C2NmiCwZ.js";import"./getPseudoElementBounds-CJwQ3ni7.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
