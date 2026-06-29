import{M as a}from"./MultiColumnSortDialog-BRMzrbSx.js";import"./DraggableList-D9CWNOi9.js";import"./iframe-Dby7K8X-.js";import"./preload-helper-DbMpngWi.js";import"./svgIconContainer-mB2sMyBx.js";import"./index-CqHAgdon.js";import"./search-Nog7PiWw.js";import"./Input-fNfkosC1.js";import"./useBaseUiId-BEmZSLoT.js";import"./useControlled-CipfzQZw.js";import"./index-2fRHQ96v.js";import"./index-Dl7mMc_z.js";import"./Button-E6BV5PDL.js";import"./small-cross-CjHRcaNv.js";import"./ActionButton-CJCQc4cC.js";import"./Dialog-wDYI8t0k.js";import"./cross-BGzDdiNr.js";import"./InternalBackdrop-BWyN8TlX.js";import"./composite-DtQqu1F7.js";import"./index-C9w6MWHI.js";import"./MenuTrigger-Cc4wOWA1.js";import"./CompositeItem-C0MPwWG2.js";import"./ToolbarRootContext-Bv8DhEHE.js";import"./getDisabledMountTransitionStyles-Bi9bk7SK.js";import"./getPseudoElementBounds-CUWWN-Xz.js";import"./caret-down-CAlARsVu.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
