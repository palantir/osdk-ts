import{f as a}from"./MultiColumnSortDialog-wpXTlXv0.js";import"./DraggableList-BKnEpP4o.js";import"./iframe-D_EUmaph.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-wbniBoWP.js";import"./index-2oD7dIRE.js";import"./Input-sq65U7oK.js";import"./useBaseUiId-B055awP1.js";import"./useControlled-ChEdLc1B.js";import"./index-D-ZFfBay.js";import"./index-mpvlGTne.js";import"./Button-BEXEbcea.js";import"./small-cross-SJOCPcLL.js";import"./ActionButton-CU_-E58k.js";import"./Dialog-Cr7AYep-.js";import"./cross-DL6Y-j5o.js";import"./InternalBackdrop-BxHPHPML.js";import"./composite-Dpqmu7J8.js";import"./index-7N9wqyCL.js";import"./ToolbarRootContext-8004L6JZ.js";import"./getPseudoElementBounds-BQzv0r7b.js";import"./useCompositeListItem-DJKUxpuX.js";import"./CompositeItem-KNxs7MnO.js";import"./getDisabledMountTransitionStyles-dDqvBQLZ.js";import"./useFocus-DIX1ctlF.js";import"./caret-down-BzxkETCu.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],B={title:"Beta/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,B as default};
