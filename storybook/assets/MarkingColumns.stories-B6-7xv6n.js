import{f as n,j as t}from"./iframe-nzWsAB7h.js";import{O as p}from"./object-table-CscD9WH9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DK1sUJta.js";import"./index-C62Qnstq.js";import"./Dialog-D-lb7bZH.js";import"./cross-dfhKNnu6.js";import"./svgIconContainer-CDWAsZcw.js";import"./useBaseUiId-CjURCOWJ.js";import"./InternalBackdrop-Di1nErJx.js";import"./composite-1p3cab6M.js";import"./index-Wzzn5B3O.js";import"./index-ButhXHVJ.js";import"./index-BLx_ypIB.js";import"./useEventCallback-DknQVVsv.js";import"./SkeletonBar-CLy2lGHa.js";import"./LoadingCell-CY0gKWnW.js";import"./ColumnConfigDialog-BdqCrJWi.js";import"./DraggableList-R9k6zJYf.js";import"./search-D4mU7Zsy.js";import"./Input-DISJCG28.js";import"./useControlled-GpOQEggi.js";import"./Button-BZS_x_Dk.js";import"./small-cross-DnDYGeWh.js";import"./ActionButton-CF3OWL2p.js";import"./Checkbox-DVzjitBV.js";import"./useValueChanged-BD6_ls13.js";import"./CollapsiblePanel-D2mWeS3u.js";import"./MultiColumnSortDialog-DG8AF0X8.js";import"./MenuTrigger-vZu6KRpi.js";import"./CompositeItem-CSA9IZiB.js";import"./ToolbarRootContext-B9M-jVGp.js";import"./getDisabledMountTransitionStyles-5J4waycB.js";import"./getPseudoElementBounds-Dbv-vv6T.js";import"./chevron-down-DOio5weU.js";import"./index-CQECUmSh.js";import"./error-BpMsbtqe.js";import"./BaseCbacBanner-CnVG4Q1z.js";import"./makeExternalStore-B-xKD1vG.js";import"./Tooltip-Bx_1Z55f.js";import"./PopoverPopup-CgyFH_X8.js";import"./toNumber-DZDClaIv.js";import"./useOsdkClient-DbszVIqC.js";import"./tick-CPQlcOj9.js";import"./DropdownField-D_ld0fVa.js";import"./withOsdkMetrics-Ow8gWUYh.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
