import{M as a}from"./MultiColumnSortDialog-BGfwWYs-.js";import"./DraggableList-CeDMmITJ.js";import"./iframe-D2XFuklh.js";import"./preload-helper-DkuUTQOb.js";import"./svgIconContainer-BzGraci7.js";import"./index-CZPXsQVY.js";import"./search-D-2QIl00.js";import"./Input-Ch1OQ8sF.js";import"./useBaseUiId-CSOiJPHm.js";import"./useControlled-BSiffkjq.js";import"./index-wq2p0Quo.js";import"./index-DNInbmlu.js";import"./Button-BJ8-7aKB.js";import"./small-cross-DD3K3n41.js";import"./ActionButton-Dqm2BUaS.js";import"./Dialog-Nmy-Ffyi.js";import"./cross-BT8Rhhk0.js";import"./InternalBackdrop-CvJ3ANkY.js";import"./composite-DrSVg6K0.js";import"./index-BfWBHWbi.js";import"./MenuTrigger-CrGS7y6W.js";import"./CompositeItem-C6StUy7G.js";import"./ToolbarRootContext-6HfJCD2I.js";import"./getDisabledMountTransitionStyles-CSrGk6-k.js";import"./getPseudoElementBounds-CVG4E5oc.js";import"./caret-down-lhdmcEFE.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
