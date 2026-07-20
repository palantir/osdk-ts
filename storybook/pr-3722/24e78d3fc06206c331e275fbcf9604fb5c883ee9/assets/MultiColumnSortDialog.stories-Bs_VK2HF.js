import{M as a}from"./MultiColumnSortDialog-OI1nJRIk.js";import"./DraggableList-yTg1mUHX.js";import"./iframe-BBQqV7U9.js";import"./preload-helper-CVQ1baRe.js";import"./svgIconContainer-CRTQuoXb.js";import"./index-Ccu1K6sd.js";import"./search-BdhLBc1_.js";import"./Input-CA-eUSvn.js";import"./useBaseUiId-Dsfw9F53.js";import"./useControlled-DUvtrOZ4.js";import"./index-ZnEAsqFI.js";import"./index-ClxSTfiH.js";import"./isEqual-B7PpS1xT.js";import"./isObject-DfWIbGg2.js";import"./Button-B4yyWPOD.js";import"./ActionButton-BU_vTHaY.js";import"./Dialog-q_v5Xg8F.js";import"./cross-CLzE3-U3.js";import"./InternalBackdrop-BIv1AHkl.js";import"./composite-DPcfFrpY.js";import"./index-DqaWGGCa.js";import"./MenuTrigger-B1C32Uw-.js";import"./CompositeItem-CLHj5IXS.js";import"./ToolbarRootContext-DYDg93Tz.js";import"./getDisabledMountTransitionStyles-Gx5EPjB-.js";import"./getPseudoElementBounds-CGcJJbuE.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
