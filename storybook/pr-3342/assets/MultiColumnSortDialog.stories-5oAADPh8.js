import{f as a}from"./MultiColumnSortDialog-Ue58lZz7.js";import"./DraggableList-BjuajZM0.js";import"./iframe-DuVqCQ9Y.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-CpDyVwKR.js";import"./index-DUsGWmvk.js";import"./Input-BSnsWg-O.js";import"./useBaseUiId-C52SIdJF.js";import"./useControlled-B0_0JJXK.js";import"./index-CRbZp6L0.js";import"./index-DLo6CZ5S.js";import"./Button-DVFP8T0c.js";import"./small-cross-BgkCuy1M.js";import"./ActionButton-BriqExXY.js";import"./Dialog-a5pWDL09.js";import"./cross-BHZFXa2C.js";import"./InternalBackdrop-DzWWNKiw.js";import"./composite-C1USiBfe.js";import"./index-BiR_x4ZX.js";import"./ToolbarRootContext-ClJbZpTE.js";import"./getPseudoElementBounds-DFoNrtmz.js";import"./useCompositeListItem-D-ombNlk.js";import"./CompositeItem-CapoO8lR.js";import"./getDisabledMountTransitionStyles-CHgDpiP2.js";import"./useFocus-CvUWYuj8.js";import"./caret-down-BdThZL3S.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],B={title:"Beta/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,B as default};
