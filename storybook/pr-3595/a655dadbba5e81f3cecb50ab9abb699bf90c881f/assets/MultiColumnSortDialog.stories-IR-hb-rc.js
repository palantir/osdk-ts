import{M as a}from"./MultiColumnSortDialog-Xt7HLORa.js";import"./DraggableList-Cwg1nno2.js";import"./iframe-Cl8eJGqQ.js";import"./preload-helper-D1sGFP9D.js";import"./svgIconContainer-CHD9Zlbf.js";import"./index-DN50PQh-.js";import"./search-DE_gr0Gd.js";import"./Input-Cjk_GJyv.js";import"./useBaseUiId-BNd5VFWN.js";import"./useControlled-morME-0h.js";import"./index-CHnn2mMS.js";import"./index-BRo-G0NH.js";import"./Button-B_F0tOoM.js";import"./small-cross-BmXi7_ZD.js";import"./ActionButton-DMJmWu3H.js";import"./Dialog-Bc2UmNyM.js";import"./cross-CCvLdnS1.js";import"./InternalBackdrop-Cv0OocJC.js";import"./composite-sB4cBqnX.js";import"./index-BrCDZNAH.js";import"./MenuTrigger-LYG29s82.js";import"./CompositeItem-DGV1adBP.js";import"./ToolbarRootContext-BgUoIskF.js";import"./getDisabledMountTransitionStyles-WGVEYmzV.js";import"./getPseudoElementBounds-B4dEW2X9.js";import"./caret-down-DDQ4kVst.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
