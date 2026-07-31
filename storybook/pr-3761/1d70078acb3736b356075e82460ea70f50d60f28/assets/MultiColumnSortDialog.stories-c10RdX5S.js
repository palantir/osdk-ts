import{M as a}from"./MultiColumnSortDialog-DBNQOGqf.js";import"./DraggableList-DUOjZipc.js";import"./iframe-BgoKo-i2.js";import"./preload-helper-DIrScT_n.js";import"./svgIconContainer-Co1wj9K_.js";import"./index-3V6CRxOT.js";import"./search-C9CyrmBD.js";import"./Input-CjhSYZMH.js";import"./useBaseUiId-DS7J75OO.js";import"./useControlled-DShEq97X.js";import"./index-Bdsk4x9T.js";import"./index-B65kqQu_.js";import"./isEqual-C90e21Bj.js";import"./isObject-swjZWcT8.js";import"./Button-CreK4JWQ.js";import"./ActionButton-D_CIcEZj.js";import"./Dialog-Ltm4-WQh.js";import"./cross-pMkSGJpw.js";import"./InternalBackdrop-kJ7I3CoG.js";import"./composite-CMVBbtsk.js";import"./index-BmEzYu9v.js";import"./MenuTrigger-Mw5Zxb32.js";import"./CompositeItem-DXRUm4lR.js";import"./ToolbarRootContext-CNkC_ExZ.js";import"./getDisabledMountTransitionStyles-CPZmqG2A.js";import"./getPseudoElementBounds-Cpf5jJJ0.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
