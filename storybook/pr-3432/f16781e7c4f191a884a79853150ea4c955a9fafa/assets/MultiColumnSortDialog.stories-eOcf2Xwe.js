import{M as a}from"./MultiColumnSortDialog-e04rDpoZ.js";import"./DraggableList-CeTgsnZr.js";import"./iframe-D7J8vumD.js";import"./preload-helper-CoI2b-NY.js";import"./svgIconContainer-DP4Tdjl6.js";import"./index-QBifOzzz.js";import"./search-B7AI5VYb.js";import"./Input-BjK5t-V3.js";import"./useBaseUiId-C50RoOZc.js";import"./useControlled-BHmaFYpg.js";import"./index-Cknec7q6.js";import"./index-BeuKTTLq.js";import"./Button-DSmwpg33.js";import"./small-cross-s86btn0Y.js";import"./ActionButton-LmuV9UFu.js";import"./Dialog-DBTJtSSO.js";import"./cross-B2gz64XV.js";import"./InternalBackdrop-xKLq0SGe.js";import"./composite-BGDn0_gf.js";import"./index-D54_XBsy.js";import"./MenuTrigger-CQmia2Mi.js";import"./CompositeItem-B4MmY3We.js";import"./ToolbarRootContext-Cwh4PfWk.js";import"./getDisabledMountTransitionStyles-CwmWMk42.js";import"./getPseudoElementBounds-ypB9OXmm.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],x={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
