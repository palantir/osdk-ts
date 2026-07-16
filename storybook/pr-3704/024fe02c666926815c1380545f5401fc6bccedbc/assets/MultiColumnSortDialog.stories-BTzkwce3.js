import{M as a}from"./MultiColumnSortDialog-BYOZg9O5.js";import"./DraggableList-C5ZfWEjN.js";import"./iframe-B-bI26qs.js";import"./preload-helper-CyAMPy-I.js";import"./svgIconContainer-VHKYNUGL.js";import"./index-BO1Z2F8c.js";import"./search-DCiLGM6V.js";import"./Input-15l147x7.js";import"./useBaseUiId-DFxa8KHY.js";import"./useControlled-B9jXB5z3.js";import"./index-DAGzsosQ.js";import"./index-QKKc5Ld_.js";import"./isEqual-Bx1s22Z6.js";import"./isObject-BBhmxkoG.js";import"./Button-D-VXe3Fn.js";import"./ActionButton-Bmyf3rc7.js";import"./Dialog-H9tD7XDb.js";import"./cross-ZObj4Zbg.js";import"./InternalBackdrop-BIj-JJ9Q.js";import"./composite-nT2iGLyC.js";import"./index-BYI1FAfC.js";import"./MenuTrigger-j_WWc1Sg.js";import"./CompositeItem-CozhSruV.js";import"./ToolbarRootContext-HXa5oleO.js";import"./getDisabledMountTransitionStyles-dTfyqDTr.js";import"./getPseudoElementBounds-YyzRwYGd.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
