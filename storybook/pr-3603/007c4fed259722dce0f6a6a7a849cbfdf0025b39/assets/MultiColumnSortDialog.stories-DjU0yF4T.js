import{M as a}from"./MultiColumnSortDialog-BmcIpZa5.js";import"./DraggableList-Cm36A5XS.js";import"./iframe-B-N2-r-P.js";import"./preload-helper-D4Q0vOys.js";import"./svgIconContainer-BP_Cyky3.js";import"./index-Bo0hoe2f.js";import"./search-DUpQ9VPH.js";import"./Input-B4_FJ4FZ.js";import"./useBaseUiId-RRwSV0tF.js";import"./useControlled-Bs9QYkJN.js";import"./index-DGpxl1lF.js";import"./index-Byx-03Es.js";import"./Button-6zOkUJKB.js";import"./small-cross-DlV2wPTV.js";import"./ActionButton-CRtQoTxR.js";import"./Dialog-DXd_1Yoc.js";import"./cross-Dj5vzrKC.js";import"./InternalBackdrop-DZCbNm3h.js";import"./composite-33K9WpJB.js";import"./index-DEaJRpmz.js";import"./MenuTrigger-jerYu0NQ.js";import"./CompositeItem-BXK3omay.js";import"./ToolbarRootContext-J4sGFDfu.js";import"./getDisabledMountTransitionStyles-DgWtRyxN.js";import"./getPseudoElementBounds-kFcYL4u5.js";import"./caret-down-CcRq_LZX.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
