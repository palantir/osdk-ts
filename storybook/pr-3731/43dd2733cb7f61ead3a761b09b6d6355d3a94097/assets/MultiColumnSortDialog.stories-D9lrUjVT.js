import{M as a}from"./MultiColumnSortDialog-3aN9_CA3.js";import"./DraggableList-GUAg5Dpp.js";import"./iframe-Ds6ci5f_.js";import"./preload-helper-BmgiVgXk.js";import"./svgIconContainer-Dc9SJ_SV.js";import"./index-BF2buGCB.js";import"./search-VNnWqJuM.js";import"./Input-C_GkCnWt.js";import"./useBaseUiId-D5z5kVld.js";import"./useControlled-aWNAMtDj.js";import"./index-C7rj8PmX.js";import"./index-BF1y1McZ.js";import"./isEqual-CeuVkr2d.js";import"./isObject-DbC-Jx7m.js";import"./Button-BBlEXWMP.js";import"./ActionButton-BiW9Byve.js";import"./Dialog-B4j4VlaZ.js";import"./cross-T2wtcCzG.js";import"./InternalBackdrop-fgnk488v.js";import"./composite-CfTm1kpt.js";import"./index-C4iA4fv0.js";import"./MenuTrigger-jcY8nQZI.js";import"./CompositeItem-CPz6r1FZ.js";import"./ToolbarRootContext-DxXa8C9m.js";import"./getDisabledMountTransitionStyles-DYPS8V0e.js";import"./getPseudoElementBounds-B-uuo1bm.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
