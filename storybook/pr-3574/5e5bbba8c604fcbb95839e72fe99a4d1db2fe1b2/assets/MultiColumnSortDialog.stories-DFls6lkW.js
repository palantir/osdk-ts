import{M as a}from"./MultiColumnSortDialog-BHTrvpco.js";import"./DraggableList-BwAdZC5p.js";import"./iframe-ze6JErKo.js";import"./preload-helper-DS_iGLkb.js";import"./svgIconContainer-DGCjPM9q.js";import"./index-B5u6Brpy.js";import"./search-DO35-Aev.js";import"./Input-Diw1Icia.js";import"./useBaseUiId-B5MU88id.js";import"./useControlled-D9slw4Au.js";import"./index-DAQPWFr2.js";import"./index-DNJB-usE.js";import"./Button-CJ3GEhv1.js";import"./small-cross-Dq5ZHHkJ.js";import"./ActionButton-C-YYuFJL.js";import"./Dialog-Dk8NRl8I.js";import"./cross-DI5j8eLi.js";import"./InternalBackdrop-BqUOZoSz.js";import"./composite-BEE0FYVF.js";import"./index-DDHYdtsp.js";import"./MenuTrigger-7-RX-Nb_.js";import"./CompositeItem-Bhm16n8y.js";import"./ToolbarRootContext-CBfSL9vs.js";import"./getDisabledMountTransitionStyles-TFq9cCGI.js";import"./getPseudoElementBounds-CpuTFzGd.js";import"./caret-down-Cku-i4_H.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
