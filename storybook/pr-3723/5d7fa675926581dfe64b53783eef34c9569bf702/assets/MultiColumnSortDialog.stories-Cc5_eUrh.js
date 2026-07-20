import{M as a}from"./MultiColumnSortDialog-Dnx81jDn.js";import"./DraggableList-Bhng7sIV.js";import"./iframe-BKuJ3YK-.js";import"./preload-helper-DYAnbvQu.js";import"./svgIconContainer-CO4uzBXb.js";import"./index-DOC-3Q2e.js";import"./search-C2R58gu2.js";import"./Input-BuPE6di9.js";import"./useBaseUiId-CmjMaZif.js";import"./useControlled-Dgcubknr.js";import"./index-CyPxhMS0.js";import"./index-BL-28NIt.js";import"./isEqual-Rmzr3cyu.js";import"./isObject-h0cx7wZc.js";import"./Button-KVWxQo2x.js";import"./ActionButton-CH1Ap5aa.js";import"./Dialog-CZqNO7Eg.js";import"./cross-5zQYDp4L.js";import"./InternalBackdrop-BZn_v4Ut.js";import"./composite-CMqWpSV4.js";import"./index-BFx5rq6J.js";import"./MenuTrigger-EiKSStXQ.js";import"./CompositeItem-Dhhm1Ue0.js";import"./ToolbarRootContext-Dcjq1toe.js";import"./getDisabledMountTransitionStyles-D27tB-TO.js";import"./getPseudoElementBounds-5nfaJR8T.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
