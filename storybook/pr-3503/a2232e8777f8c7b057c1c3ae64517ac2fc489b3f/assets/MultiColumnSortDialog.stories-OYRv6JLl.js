import{M as a}from"./MultiColumnSortDialog-vNOssYUS.js";import"./DraggableList-BCQ6BUzk.js";import"./iframe-C-Wr9VZl.js";import"./preload-helper-BMwxQW-0.js";import"./svgIconContainer-zPYJv1Bz.js";import"./index-CITtb26w.js";import"./search-CwutRYPM.js";import"./Input-uZlEy4vY.js";import"./useBaseUiId-deFCLU8y.js";import"./useControlled-B8-8z5Bx.js";import"./index-rD-ZbUoc.js";import"./index-7qVEtzBc.js";import"./Button-X8ZqtMOT.js";import"./small-cross-Dprtsj-K.js";import"./ActionButton-Dnf4F-mY.js";import"./Dialog-B1vV4hpI.js";import"./cross-CJDfqCM7.js";import"./InternalBackdrop-MK_KDUKs.js";import"./composite-BPT2hDEZ.js";import"./index-1GipIr9Y.js";import"./MenuTrigger-DwvOAmv5.js";import"./CompositeItem-DXr-uad3.js";import"./ToolbarRootContext-BGgBDtJM.js";import"./getDisabledMountTransitionStyles-CbqHRRPn.js";import"./getPseudoElementBounds-B7GEyelV.js";import"./caret-down-B6Lbg7DT.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
