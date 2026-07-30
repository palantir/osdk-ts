import{M as a}from"./MultiColumnSortDialog-36rP3VXm.js";import"./DraggableList-BkTfh7dw.js";import"./iframe-B_IZKh8P.js";import"./preload-helper-BSCxhMTJ.js";import"./svgIconContainer-Xsv1xEak.js";import"./index-CnhyFb-r.js";import"./search-Bd9-hZh2.js";import"./Input-fcRS9Kmg.js";import"./useBaseUiId-Dr3xYZYx.js";import"./useControlled-DNbx2H9c.js";import"./index-Cn6YA2O8.js";import"./index-CEu3xKdf.js";import"./isEqual-CBO4YZX2.js";import"./isObject-BTbytGDT.js";import"./Button-BzbSQLjH.js";import"./ActionButton-DP2zPa-7.js";import"./Dialog-Wm4jDDQn.js";import"./cross-hQMC7b3L.js";import"./InternalBackdrop-CIvkvTEF.js";import"./composite-D9C4oNf8.js";import"./index-Cz_FWict.js";import"./MenuTrigger-5jncTReB.js";import"./CompositeItem-CFKw5_bq.js";import"./ToolbarRootContext-B8yBsSST.js";import"./getDisabledMountTransitionStyles-tSHMiDPJ.js";import"./getPseudoElementBounds-Bx5ztzSJ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
