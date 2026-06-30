import{M as a}from"./MultiColumnSortDialog-CWx2HwQs.js";import"./DraggableList-DAcTSFqG.js";import"./iframe-BSDg5MOj.js";import"./preload-helper-DhhkxHce.js";import"./svgIconContainer-BNfBxi5_.js";import"./index-ChJoNBQZ.js";import"./search-BJIbBP2L.js";import"./Input-BHM1pTwl.js";import"./useBaseUiId-B4d-vjpF.js";import"./useControlled-BhwYl-lI.js";import"./index-BLIkDC4O.js";import"./index-gVxlpqjD.js";import"./Button-Db9WTFhm.js";import"./small-cross-CGlGMfPU.js";import"./ActionButton-E-tx4Y2R.js";import"./Dialog-RZY7Myu9.js";import"./cross-GXuD0dq5.js";import"./InternalBackdrop-Ctu21wJT.js";import"./composite-Cp97NJVX.js";import"./index-CleziYPI.js";import"./MenuTrigger-BGRyP-X4.js";import"./CompositeItem-DB7wPSIT.js";import"./ToolbarRootContext-BSJASkqf.js";import"./getDisabledMountTransitionStyles-RCMSVhJm.js";import"./getPseudoElementBounds-BqetYsh2.js";import"./caret-down-CG5oCyvp.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
