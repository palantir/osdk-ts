import{M as a}from"./MultiColumnSortDialog-DQXMez7K.js";import"./DraggableList-yXZoFYuZ.js";import"./iframe-Dp1CRu6c.js";import"./preload-helper-CWkOsMkG.js";import"./svgIconContainer-BC_0vX_e.js";import"./index-DDVLxBOy.js";import"./Input-DTQu9GLN.js";import"./useBaseUiId-CWccYlZs.js";import"./useControlled-CKURD5_M.js";import"./index-vVu9ASLZ.js";import"./index-DQ0ad4Rd.js";import"./Button-Izn2a-Gf.js";import"./small-cross-Capthggd.js";import"./ActionButton-D4OZ4fs0.js";import"./Dialog-Ct47gwOa.js";import"./cross-CG-DeC47.js";import"./InternalBackdrop-BKqn0-3A.js";import"./composite-BycuXxpQ.js";import"./index-uDlakMiO.js";import"./useRole-D754jaaZ.js";import"./MenuTrigger-C2n9VC45.js";import"./useCompositeListItem-CF6DL62K.js";import"./ToolbarRootContext-BrIGoR_-.js";import"./getDisabledMountTransitionStyles-BGWbjSuz.js";import"./safePolygon-OCeT35xw.js";import"./getPseudoElementBounds-CfE7TmeC.js";import"./CompositeItem-NxCGTSTJ.js";import"./caret-down-DRUruF7z.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],v={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
