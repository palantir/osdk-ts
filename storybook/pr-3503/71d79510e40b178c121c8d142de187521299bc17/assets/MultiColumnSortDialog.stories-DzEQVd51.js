import{M as a}from"./MultiColumnSortDialog-CiM3ohMZ.js";import"./DraggableList-BUd7BBZo.js";import"./iframe-Cj5XhV0K.js";import"./preload-helper-CuJrIVwN.js";import"./svgIconContainer-B4JaXaFc.js";import"./index-BUuf6QFI.js";import"./search-8fWNri7B.js";import"./Input-DpvlHRmk.js";import"./useBaseUiId-EaNfd7E5.js";import"./useControlled-BqmBP-xo.js";import"./index-3sVAsvdZ.js";import"./index-KpoTnuXn.js";import"./Button-C0iKOXSP.js";import"./small-cross-BTK8lVXe.js";import"./ActionButton-DerugDVR.js";import"./Dialog-H-Z7HMFG.js";import"./cross-ipEa_Fgv.js";import"./InternalBackdrop-DAf5h5Ih.js";import"./composite-DourfYiy.js";import"./index-BkAkxe5V.js";import"./MenuTrigger-CMQV_neq.js";import"./CompositeItem-uYx2vIaG.js";import"./ToolbarRootContext-C5rbQ6xe.js";import"./getDisabledMountTransitionStyles-BAqZpw4e.js";import"./getPseudoElementBounds-BYdtGyMi.js";import"./caret-down-BC5F8GeJ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
