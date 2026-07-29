import{M as a}from"./MultiColumnSortDialog-tZXVnnRH.js";import"./DraggableList-qK4a9iQ1.js";import"./iframe-DWIh2My5.js";import"./preload-helper-DY34mEM_.js";import"./svgIconContainer-BnRb4RdE.js";import"./index-Dr0wFz6U.js";import"./search-BEMkdj45.js";import"./Input-CSwHlBdV.js";import"./useBaseUiId-BeqqY0Lp.js";import"./useControlled-DoDxpg9c.js";import"./index-C4ak3yd0.js";import"./index-RnszV6TD.js";import"./Button-na3Ft-Tz.js";import"./small-cross-CE4fDAR5.js";import"./ActionButton-C38Mxy5Z.js";import"./Dialog-74oicJGg.js";import"./cross-C4nn9kt7.js";import"./InternalBackdrop-wpO0j6ZL.js";import"./composite-B1E5hU3f.js";import"./index-DSDz9GEB.js";import"./MenuTrigger-CWWAu0qI.js";import"./CompositeItem-CR-9HIgj.js";import"./ToolbarRootContext-CvGk5N7v.js";import"./getDisabledMountTransitionStyles-B04wnOdp.js";import"./getPseudoElementBounds-CYjqwHHV.js";import"./caret-down-DgJ1UFvO.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
