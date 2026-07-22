import{M as a}from"./MultiColumnSortDialog-287Y8HJj.js";import"./DraggableList-COhsxiYh.js";import"./iframe-D9lxuTZ1.js";import"./preload-helper-Do7-tsr0.js";import"./svgIconContainer-B5cX7c4P.js";import"./index-B7SuRf-V.js";import"./search-P4qKgx4r.js";import"./Input-JFvS6kPu.js";import"./useBaseUiId-C5fWipJz.js";import"./useControlled-K8Wk1UIc.js";import"./index-CMtfSI0z.js";import"./index-JW_r_biz.js";import"./isEqual-BDIfFjZC.js";import"./isObject-CYhijOxl.js";import"./Button-DfHA5hQa.js";import"./ActionButton-Bcj4bgB4.js";import"./Dialog-VwCR0bPK.js";import"./cross-Dp8JFrXV.js";import"./InternalBackdrop-zHLZ2Pg6.js";import"./composite-N1lpXgfE.js";import"./index-B6rg5sLK.js";import"./MenuTrigger-CfFIFz0j.js";import"./CompositeItem-DaRifkLs.js";import"./ToolbarRootContext-Btl_Kd9E.js";import"./getDisabledMountTransitionStyles-rVL7Pgrv.js";import"./getPseudoElementBounds-BliHZfBe.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
