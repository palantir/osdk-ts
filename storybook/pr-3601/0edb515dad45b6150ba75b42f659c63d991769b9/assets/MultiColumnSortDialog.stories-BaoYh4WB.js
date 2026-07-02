import{M as a}from"./MultiColumnSortDialog-BPKVgG4j.js";import"./DraggableList-Ck5-8GdF.js";import"./iframe-g5gKY9_O.js";import"./preload-helper-vD_ADXE0.js";import"./svgIconContainer-CCJJt3RP.js";import"./index-C40rUIxn.js";import"./Input-mkx3L3Pg.js";import"./useBaseUiId-Cu9W3twr.js";import"./useControlled-C8OguibT.js";import"./index-CvH9dz38.js";import"./index-DJ73cS3V.js";import"./Button-BmSo5q-L.js";import"./small-cross-BWKgMqr5.js";import"./ActionButton-C1jidlz5.js";import"./Dialog-BVtHnaJo.js";import"./cross-D1KqNeKH.js";import"./InternalBackdrop-DNedxnEH.js";import"./composite-Du8KNnA7.js";import"./index-DadRuR0G.js";import"./useRole-A63eqnir.js";import"./MenuTrigger-D9IBFJEa.js";import"./useCompositeListItem-BfgEgn4l.js";import"./ToolbarRootContext-BGBMNAEP.js";import"./getDisabledMountTransitionStyles-SjYBpT_j.js";import"./safePolygon-SiHk0P-C.js";import"./getPseudoElementBounds-B_ULom34.js";import"./CompositeItem-B8ZcJXf0.js";import"./caret-down-Bqs0Pmcj.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],v={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
