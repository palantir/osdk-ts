import{M as a}from"./MultiColumnSortDialog-PYDVMeT7.js";import"./DraggableList-BAk8YP9w.js";import"./iframe-DPif3BCt.js";import"./preload-helper-BbPxCDmH.js";import"./svgIconContainer-CMyuo72G.js";import"./index-DlKJyA6f.js";import"./search-HlRbx8Td.js";import"./Input-ChIFSgLe.js";import"./useBaseUiId-1LP5pxZR.js";import"./useControlled-bK4vBxg8.js";import"./index-CS7wiWS2.js";import"./index-C2K5BBQe.js";import"./Button-DL74wRaw.js";import"./small-cross-2_WpjdP5.js";import"./ActionButton-DOsUHU-M.js";import"./Dialog-BpUk9Kra.js";import"./cross-B3XRATNr.js";import"./InternalBackdrop-BH3ffLIu.js";import"./composite-Du3vYNL-.js";import"./index-Dqv9wJPn.js";import"./MenuTrigger-BmxDvXRQ.js";import"./CompositeItem-C-6zUN9Y.js";import"./ToolbarRootContext-DNYYxNIX.js";import"./getDisabledMountTransitionStyles-Cp9ZYZ-J.js";import"./getPseudoElementBounds-DuPFuyhJ.js";import"./caret-down-CaHd8l-E.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
