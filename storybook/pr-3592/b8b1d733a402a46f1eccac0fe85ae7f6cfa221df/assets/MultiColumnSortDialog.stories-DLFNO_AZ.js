import{M as a}from"./MultiColumnSortDialog-DLJ3MY9r.js";import"./DraggableList-Cyv_pL3S.js";import"./iframe-hi2BxIHC.js";import"./preload-helper-ZxDKr6DS.js";import"./svgIconContainer-C-L2PUSb.js";import"./index-CFxCkbUH.js";import"./search-DtNWi_d_.js";import"./Input-B7tYC-Xs.js";import"./useBaseUiId-B_tYD7-Z.js";import"./useControlled-CNI1KcEl.js";import"./index-3yirHU9f.js";import"./index-DXA0rk4Q.js";import"./Button-B7N2mn7E.js";import"./small-cross-DrHmdgQz.js";import"./ActionButton-CMlqza77.js";import"./Dialog-CZSLgWq5.js";import"./cross-DvXT3q5F.js";import"./InternalBackdrop-DodjeV4Y.js";import"./composite-8iwrm9g9.js";import"./index-C8zfo1KW.js";import"./MenuTrigger-CtCPxe0t.js";import"./CompositeItem-B5-Du_uy.js";import"./ToolbarRootContext-g85W73-P.js";import"./getDisabledMountTransitionStyles-DaaCp0k2.js";import"./getPseudoElementBounds-_VeLeb6E.js";import"./caret-down-b8yxO5fr.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
