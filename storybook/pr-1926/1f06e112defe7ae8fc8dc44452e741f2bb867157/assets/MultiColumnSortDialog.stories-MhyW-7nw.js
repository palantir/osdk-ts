import{M as a}from"./MultiColumnSortDialog-CH_zI2gJ.js";import"./DraggableList-TEoMhKot.js";import"./iframe-Cbvz--ap.js";import"./preload-helper-FkStB5Zs.js";import"./svgIconContainer-DyoXLVNM.js";import"./index-CvbvMARM.js";import"./search-CE0tvX4w.js";import"./Input-D2cwtccY.js";import"./useBaseUiId-Df_vl-3Z.js";import"./useControlled--RTYo_QZ.js";import"./index-QV0aMfVF.js";import"./index-CP3ZTFUy.js";import"./Button-CG_Kv4Or.js";import"./small-cross-Bw61aFea.js";import"./ActionButton-Crm7nPLN.js";import"./Dialog-5pJsw2QK.js";import"./cross-CBeCnkf0.js";import"./InternalBackdrop-D7R4kN7a.js";import"./composite-Bcrw3nO4.js";import"./index-Dd0Wv14X.js";import"./MenuTrigger-C0k_YFE8.js";import"./CompositeItem-DPkyiQny.js";import"./ToolbarRootContext-ISXILCdO.js";import"./getDisabledMountTransitionStyles-BSw9YK5_.js";import"./getPseudoElementBounds-5xBcV3Rf.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],x={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,x as default};
