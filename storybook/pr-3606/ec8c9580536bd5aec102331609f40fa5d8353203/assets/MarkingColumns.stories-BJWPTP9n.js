import{f as n,j as t}from"./iframe-CLDlJA2S.js";import{O as p}from"./object-table-BAT4tGPN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CXVvapeK.js";import"./Table-DRzUfYRg.js";import"./index-CjWLHdP7.js";import"./Dialog-06NnbNCM.js";import"./cross-w5tFrasF.js";import"./svgIconContainer-Bsv-V3VT.js";import"./useBaseUiId-DU0FaGpG.js";import"./InternalBackdrop-Bm-vCytl.js";import"./composite-omEez6mY.js";import"./index-C2706k_4.js";import"./index-2FUSAzUu.js";import"./index-BZ8xoYyc.js";import"./useEventCallback-C6G-Ar9n.js";import"./SkeletonBar-CbEfOYgg.js";import"./LoadingCell-CV7LjkC-.js";import"./ColumnConfigDialog-DecVN42d.js";import"./DraggableList-BAwTGc7i.js";import"./search-po_EH-M7.js";import"./Input-BUSNukVX.js";import"./useControlled-BRi2dXMQ.js";import"./Button-C_dQ-nxq.js";import"./small-cross-DOjoh-Q7.js";import"./ActionButton-D7zlIEVX.js";import"./Checkbox-CblVaNDF.js";import"./minus-DFMFtxEr.js";import"./tick-COYt_DtG.js";import"./useValueChanged-DLxu2TWG.js";import"./caret-down-BJ87WUX8.js";import"./CollapsiblePanel-5fM7l2S4.js";import"./MultiColumnSortDialog-Dd8CIvnf.js";import"./MenuTrigger-CvxBrx8M.js";import"./CompositeItem-hgFX3c_J.js";import"./ToolbarRootContext-B2WobvF0.js";import"./getDisabledMountTransitionStyles-CJuxgz3c.js";import"./getPseudoElementBounds-DjA5KB5j.js";import"./chevron-down-91Nhm8NY.js";import"./index-DBhRc1iV.js";import"./error-DWCbKEr9.js";import"./BaseCbacBanner-CSd9JGF7.js";import"./makeExternalStore-DY7VlyDS.js";import"./Tooltip-BPQZResH.js";import"./PopoverPopup-CihAIc9G.js";import"./toNumber-D_68cKX9.js";import"./useOsdkClient-CNGNJc-v.js";import"./DropdownField-LzJdDihR.js";import"./withOsdkMetrics-v1XnYU5Y.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
