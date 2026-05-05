import{f as a}from"./MultiColumnSortDialog-BkHzKZRU.js";import"./DraggableList-CU9zzE5Z.js";import"./iframe-BDzFOxX0.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-C_yJ1WXt.js";import"./index-D_Ioicug.js";import"./Input-Di3QJ4qh.js";import"./useBaseUiId-05QqjS5V.js";import"./useControlled-hrXkzhJL.js";import"./index-D__9VqCX.js";import"./index-BPPhVEDk.js";import"./Button-BResIl2M.js";import"./small-cross-Bbh6IRZM.js";import"./InternalBackdrop-DFT0v-6r.js";import"./composite-DsgudkzN.js";import"./index-DPbCF3mi.js";import"./Dialog-CKzPZvHN.js";import"./cross-C4udWbRu.js";import"./ToolbarRootContext-DFrYGIGv.js";import"./getPseudoElementBounds-CarfQvrt.js";import"./CompositeItem-gvBUtfn0.js";import"./getDisabledMountTransitionStyles-9Ut6Ds9Z.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],w={title:"Experimental/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,w as default};
