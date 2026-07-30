import{M as a}from"./MultiColumnSortDialog-DjwA5Ul2.js";import"./DraggableList-zk1lRqcV.js";import"./iframe-BpLfy_7x.js";import"./preload-helper-hhne1Nkw.js";import"./svgIconContainer-BJcxFCQJ.js";import"./index-CI-PQox6.js";import"./search-CWqxR7My.js";import"./Input-B6V3A2xO.js";import"./useBaseUiId-DLhvCT2w.js";import"./useControlled-DQnuFJYA.js";import"./index-CqzGtbz4.js";import"./index-CS2EtUA3.js";import"./isEqual-BKD4Aek-.js";import"./isObject-CsyTGM2I.js";import"./Button-ByGcR2jl.js";import"./ActionButton-tsCNhUs0.js";import"./Dialog-DMcE_XRG.js";import"./cross-PuYX_-t_.js";import"./InternalBackdrop-Cg_--_dl.js";import"./composite-D6MrKr0W.js";import"./index-DwBmIhXs.js";import"./MenuTrigger-CUguWp68.js";import"./CompositeItem-Dh49dnMe.js";import"./ToolbarRootContext-CZ4baxUR.js";import"./getDisabledMountTransitionStyles-BDsUR9tp.js";import"./getPseudoElementBounds-Cd9zz7lc.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
