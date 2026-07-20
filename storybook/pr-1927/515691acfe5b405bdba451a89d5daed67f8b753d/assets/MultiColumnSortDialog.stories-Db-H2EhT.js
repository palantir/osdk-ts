import{M as a}from"./MultiColumnSortDialog-Dlkwq0zz.js";import"./DraggableList-B4HYopJH.js";import"./iframe-DOKsSIoF.js";import"./preload-helper-DIcDZjtS.js";import"./svgIconContainer-Dpin5oqd.js";import"./index-_xXvNYcY.js";import"./search-BcWq1pIm.js";import"./Input-Do1A5iUq.js";import"./useBaseUiId-DGSgOirr.js";import"./useControlled-B82oHfdu.js";import"./index-BvLhZQjl.js";import"./index-DhP_5L9k.js";import"./isEqual-C6NR7xGt.js";import"./isObject-eWIrV8l-.js";import"./Button-CR4Jq5Wr.js";import"./ActionButton-C0SV8vyY.js";import"./Dialog-BbwWD5pu.js";import"./cross-D475DauV.js";import"./InternalBackdrop-B4AaEj4N.js";import"./composite-DQ6AxwFj.js";import"./index-dUaqq4Fq.js";import"./MenuTrigger-RF-8Atpf.js";import"./CompositeItem-C0yPEj0b.js";import"./ToolbarRootContext-BPvqgk36.js";import"./getDisabledMountTransitionStyles-B3Ro6IiM.js";import"./getPseudoElementBounds-B1JJ3_Zd.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
