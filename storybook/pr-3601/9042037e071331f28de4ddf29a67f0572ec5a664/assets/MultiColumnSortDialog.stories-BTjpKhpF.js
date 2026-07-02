import{M as a}from"./MultiColumnSortDialog-DHQ7WpqI.js";import"./DraggableList-B589NTDE.js";import"./iframe-D88ys8_5.js";import"./preload-helper-BSuWjTQ8.js";import"./svgIconContainer-CKMXSgTs.js";import"./index-D2iS1gbC.js";import"./Input-ACvvhHDx.js";import"./useBaseUiId-5ahtmozG.js";import"./useControlled-rkZFEJs-.js";import"./index-Cd6eL8Zb.js";import"./index-E2eDRUfi.js";import"./Button-tUp13dwH.js";import"./small-cross-FyZq1WIK.js";import"./ActionButton-qbq-BvAq.js";import"./Dialog-DxzTKsKC.js";import"./cross-32ksmMI9.js";import"./InternalBackdrop-BBguK_Gq.js";import"./composite-DyBPRih-.js";import"./index-DVlbCx9o.js";import"./useRole-BFnkeE3G.js";import"./MenuTrigger-NGM11S8U.js";import"./useCompositeListItem-DhWFIbt1.js";import"./ToolbarRootContext-BaucZlF2.js";import"./getDisabledMountTransitionStyles-Bd0QG0WE.js";import"./safePolygon-BleuNYCX.js";import"./getPseudoElementBounds-gAqFwjdn.js";import"./CompositeItem-D0sipvbn.js";import"./caret-down-g9xom6Am.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],v={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,v as default};
