import{M as a}from"./MultiColumnSortDialog-CSswAFhs.js";import"./DraggableList-DlJDdGgL.js";import"./iframe-CAHBdCq1.js";import"./preload-helper-C93BjOpu.js";import"./svgIconContainer-DOYhvU8O.js";import"./index-Dqhelv5t.js";import"./search-qXyA5VAY.js";import"./Input-BRiED6IK.js";import"./useBaseUiId-C9UEEuYY.js";import"./useControlled-DCrjw_eX.js";import"./index-B6rpGcbO.js";import"./index-CBm27cPC.js";import"./isEqual-D0xhFanq.js";import"./isObject-C-6xjFdv.js";import"./Button-CtYeFmPN.js";import"./ActionButton-B7wsglI1.js";import"./Dialog-BzzhzZKr.js";import"./cross-BQ_JGAQt.js";import"./InternalBackdrop-CQfjdTft.js";import"./composite-Cw8iKrah.js";import"./index-t36P8cje.js";import"./MenuTrigger-sT3jhqPm.js";import"./CompositeItem-DP-2Pynq.js";import"./ToolbarRootContext-CDnt2Uxp.js";import"./getDisabledMountTransitionStyles-DfOpAOiT.js";import"./getPseudoElementBounds-CV8vvke0.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
