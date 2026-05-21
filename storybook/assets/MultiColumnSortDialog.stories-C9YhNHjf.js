import{M as a}from"./MultiColumnSortDialog-BzsOWd1e.js";import"./DraggableList-BVHH3kiu.js";import"./iframe-CRoe7Mj3.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-CxHWAJJZ.js";import"./index-C05GB5BL.js";import"./Input-Bhr66ktD.js";import"./useBaseUiId-Bt3mAdmy.js";import"./useControlled-D60LYFfU.js";import"./index-CcZ3Lr2p.js";import"./index-CQFgUc8B.js";import"./Button-BCi-FSON.js";import"./small-cross-DOlhVNXU.js";import"./ActionButton-BkyiFMTN.js";import"./Dialog-CG4kxmCV.js";import"./cross-C-KMNiw-.js";import"./InternalBackdrop-Ykln84GQ.js";import"./composite-YewlmpLR.js";import"./index-DLKIHgsA.js";import"./MenuTrigger-DK9D26pM.js";import"./CompositeItem-r1QQsQqL.js";import"./ToolbarRootContext-BZRGO1kX.js";import"./getDisabledMountTransitionStyles-C1TKm3yR.js";import"./getPseudoElementBounds-ClH_7QQt.js";import"./caret-down-DnrlEHd-.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],x={title:"Beta/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,x as default};
