import{M as a}from"./MultiColumnSortDialog-1s1Q4idn.js";import"./DraggableList-CKkFtNxd.js";import"./iframe-D6Qvt5o6.js";import"./preload-helper-QAaNPy0I.js";import"./svgIconContainer-CpbVpwSo.js";import"./index-C-eYbqq8.js";import"./search-Bc8iOYXo.js";import"./Input-DBEbfhOm.js";import"./useBaseUiId-DjH16UDN.js";import"./useControlled-DLFDxyY4.js";import"./index-BdN5mkbW.js";import"./index-DVBCImRO.js";import"./Button-Cg2spKPD.js";import"./small-cross-rvQjYgDJ.js";import"./ActionButton-C73QVJ7G.js";import"./Dialog-kHTXB39K.js";import"./cross-G0YOU9UV.js";import"./InternalBackdrop-BUDWqSzP.js";import"./composite-BC5bcyjw.js";import"./index-C-DxhCBl.js";import"./MenuTrigger-LKFE2fuc.js";import"./CompositeItem-D_5JtvMI.js";import"./ToolbarRootContext-Db9FG9FP.js";import"./getDisabledMountTransitionStyles-D_RUFlGu.js";import"./getPseudoElementBounds-DYmWQeY5.js";import"./caret-down-DUqFqFU8.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
