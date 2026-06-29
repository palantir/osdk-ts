import{M as a}from"./MultiColumnSortDialog-rg2xFFVu.js";import"./DraggableList-uHueOzKx.js";import"./iframe-Dcob2W8_.js";import"./preload-helper-Dp1pzeXC.js";import"./svgIconContainer-BpTYx9Q8.js";import"./index-Bvh3RcnQ.js";import"./search-DMNHMKQT.js";import"./Input-B9MgFoYa.js";import"./useBaseUiId-U9aYAGEx.js";import"./useControlled-WTczK4fM.js";import"./index-BoFlf3Uo.js";import"./index-BDsZi_tg.js";import"./Button-CLYa9bys.js";import"./small-cross-BsPwaf41.js";import"./ActionButton-BJ5oPQSc.js";import"./Dialog-DYOlHOKm.js";import"./cross-C_jTsLej.js";import"./InternalBackdrop-DpnEyZiz.js";import"./composite-M8BIEMcs.js";import"./index-Blbk1WCr.js";import"./MenuTrigger-CUYAn02Y.js";import"./CompositeItem-DjGNiNJg.js";import"./ToolbarRootContext-CUhgq_HJ.js";import"./getDisabledMountTransitionStyles-U5k01Ji_.js";import"./getPseudoElementBounds-BEx-K6Y8.js";import"./caret-down-CV4aXDks.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
