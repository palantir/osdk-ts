import{f as n,j as t}from"./iframe-BTpszS53.js";import{O as p}from"./object-table-DQfpVLCz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CRTbrDhO.js";import"./Table-CwW1JFvr.js";import"./index-BIsE3t29.js";import"./Dialog-CpCL07MG.js";import"./cross-BQQjHalP.js";import"./svgIconContainer-DXWLnkhb.js";import"./useBaseUiId-BEw1-y8h.js";import"./InternalBackdrop-DCIgozmh.js";import"./composite-EBIrspWf.js";import"./index-BsYMxwKt.js";import"./index-CXoIhRzc.js";import"./index-BCJmm5Oi.js";import"./useEventCallback-nHnKbpFt.js";import"./SkeletonBar-CFyJz-4w.js";import"./LoadingCell-DCfCGFkr.js";import"./ColumnConfigDialog-BtKSJOsG.js";import"./DraggableList-BYoannka.js";import"./search-JvE6N6pf.js";import"./Input-XT6bJMFf.js";import"./useControlled-DJMITrum.js";import"./Button-yM41p_Kk.js";import"./small-cross-DvkK_wXO.js";import"./ActionButton-aqSvLYac.js";import"./Checkbox-D2pwoodQ.js";import"./minus-ZAZxSLvd.js";import"./tick-Co4R0HiQ.js";import"./useValueChanged-DCIOaG6b.js";import"./caret-down-CM2RPzlS.js";import"./CollapsiblePanel-gbYK33EM.js";import"./MultiColumnSortDialog-Cx_WG3MZ.js";import"./MenuTrigger-Ds9Vrphx.js";import"./CompositeItem-BzAu2XOR.js";import"./ToolbarRootContext-ZHVQx8pV.js";import"./getDisabledMountTransitionStyles-fmTrqLPo.js";import"./getPseudoElementBounds-d1g8lNrw.js";import"./chevron-down-Do4MMpyh.js";import"./index-CWbRLDGn.js";import"./error-DEpU8fF0.js";import"./BaseCbacBanner-CVfAO6Eh.js";import"./makeExternalStore-CuR10-39.js";import"./Tooltip-Dq0tboy7.js";import"./PopoverPopup-UIQCIWK4.js";import"./toNumber-CZUv9eKG.js";import"./useOsdkClient-BZ8eAnjD.js";import"./DropdownField-u1BxGBIi.js";import"./withOsdkMetrics-CtenB4I0.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
