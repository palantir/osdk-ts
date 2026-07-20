import{M as a}from"./MultiColumnSortDialog-CS2i_d3d.js";import"./DraggableList-CfKV8oK8.js";import"./iframe-BeWD4gFl.js";import"./preload-helper-Dw7qT2Q0.js";import"./svgIconContainer-DXjOt0sW.js";import"./index-BXKqMrkH.js";import"./search-CI0bdP3y.js";import"./Input-CAOYmcYS.js";import"./useBaseUiId-BGPDWa3G.js";import"./useControlled-Dqdvh-ch.js";import"./index-Cl6Uh4EY.js";import"./index-4cN8XWCC.js";import"./isEqual-FD81JcUf.js";import"./isObject-CjHqv28Z.js";import"./Button-CRhC6gUl.js";import"./ActionButton-CLWa40Ck.js";import"./Dialog-BB46r7YI.js";import"./cross-D5kvX5ak.js";import"./InternalBackdrop-1EHWPanZ.js";import"./composite-nAA0SdpW.js";import"./index-BocqDfMV.js";import"./MenuTrigger-DGmhqAjp.js";import"./CompositeItem-B0kK1CX0.js";import"./ToolbarRootContext-D9znTR5H.js";import"./getDisabledMountTransitionStyles-D6tYiR7K.js";import"./getPseudoElementBounds-B8BrzO0t.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
