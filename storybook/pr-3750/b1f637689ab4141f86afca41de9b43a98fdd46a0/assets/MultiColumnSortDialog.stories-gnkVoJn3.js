import{M as a}from"./MultiColumnSortDialog-DJw8x3NY.js";import"./DraggableList-Jbf3dttK.js";import"./iframe-Do-wqPAG.js";import"./preload-helper-DHrLiF_n.js";import"./svgIconContainer-B89O08Vs.js";import"./index-Cy5rkzVX.js";import"./search-DfQ-5ttz.js";import"./Input-C7FUOEIR.js";import"./useBaseUiId-Cgco29RD.js";import"./useControlled-BtQf2Mdn.js";import"./index-DSZYY9yk.js";import"./index-Bs0rsg0r.js";import"./isEqual-Bx02XkV9.js";import"./isObject-56Ux56Kw.js";import"./Button-B4RKA1pV.js";import"./ActionButton-BP759aJc.js";import"./Dialog-CA5QjSY1.js";import"./cross-CvbnaeZH.js";import"./InternalBackdrop-DAEAk3PQ.js";import"./composite-CTJiCA6q.js";import"./index-Dgbj4Zle.js";import"./MenuTrigger-CjUQpjMe.js";import"./CompositeItem-BVuMRAPI.js";import"./ToolbarRootContext-DVSI0mCZ.js";import"./getDisabledMountTransitionStyles-BRGxIDFh.js";import"./getPseudoElementBounds-y3XhV5qP.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
