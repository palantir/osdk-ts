import{M as a}from"./MultiColumnSortDialog-Vm3Vi4WE.js";import"./DraggableList-KAEqiJR3.js";import"./iframe-CG2OFJ7I.js";import"./preload-helper-DaORRuYu.js";import"./svgIconContainer-CODCypXK.js";import"./index-Dby7DClp.js";import"./search-D1bpzPZZ.js";import"./Input-CDAk9ihG.js";import"./useBaseUiId-DLohyEQW.js";import"./useControlled-DemSZ3bp.js";import"./index-DJbFUgNQ.js";import"./index-Ddd2yW-8.js";import"./isEqual-DZaCZx1y.js";import"./isObject-h-39pN0s.js";import"./Button-DvJGIvnq.js";import"./ActionButton-9uH5V4MK.js";import"./Dialog-BdXv6i_m.js";import"./cross-DefaB_M5.js";import"./InternalBackdrop-DcsR0gWC.js";import"./composite-Blgk7ack.js";import"./index-DY-JcPJo.js";import"./MenuTrigger-BgkpRvSr.js";import"./CompositeItem-B4vKrZ_I.js";import"./ToolbarRootContext-eFJIvnUU.js";import"./getDisabledMountTransitionStyles-F7H9ZnTa.js";import"./getPseudoElementBounds-DOpDgg5c.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
