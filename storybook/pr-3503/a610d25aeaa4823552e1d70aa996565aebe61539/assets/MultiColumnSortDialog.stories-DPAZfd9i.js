import{M as a}from"./MultiColumnSortDialog-Bzr6ieQV.js";import"./DraggableList-DxQGf9DY.js";import"./iframe-Cqd6mCx5.js";import"./preload-helper-B5_FrBjC.js";import"./svgIconContainer-CsLzM4Jm.js";import"./index-Bc7Ez_JZ.js";import"./search-D11RYUBy.js";import"./Input-B5ce1Scx.js";import"./useBaseUiId-Bw5Nmb77.js";import"./useControlled-BKiA-CeF.js";import"./index-DXPzuDG-.js";import"./index-BC5vzZrt.js";import"./Button-ZqD5CzRW.js";import"./small-cross-CeK1ORjO.js";import"./ActionButton-Cg5kA67c.js";import"./Dialog-BON1RLkw.js";import"./cross-Dell5WBW.js";import"./InternalBackdrop-BU7IpAxl.js";import"./composite-CTXTgIc0.js";import"./index-CeAncLhm.js";import"./MenuTrigger-W-jRBjv2.js";import"./CompositeItem-B76PN5h_.js";import"./ToolbarRootContext-LZMATbJl.js";import"./getDisabledMountTransitionStyles-YPQPuR4M.js";import"./getPseudoElementBounds-D2lUqzA4.js";import"./caret-down-DkRNnvWd.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
