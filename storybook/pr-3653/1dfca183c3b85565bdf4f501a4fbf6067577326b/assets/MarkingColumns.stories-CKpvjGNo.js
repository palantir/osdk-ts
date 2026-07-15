import{f as n,j as t}from"./iframe-Dtbf3TuU.js";import{O as p}from"./object-table-Fj1zAL6r.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CQu8uCfQ.js";import"./Table-CU0qCQYX.js";import"./index-EYso11IY.js";import"./Dialog-D-JUpJf7.js";import"./cross-DNdqZgG6.js";import"./svgIconContainer-C1p-d_dH.js";import"./useBaseUiId-DVd3jV5r.js";import"./InternalBackdrop-qOZ-DFlv.js";import"./composite-CwPVGBWv.js";import"./index-Cwq7Pz9d.js";import"./index-lqXiSb16.js";import"./index-DjT_iMii.js";import"./useEventCallback-C57o7_h0.js";import"./SkeletonBar-BNOwBs73.js";import"./LoadingCell-C6xg2NaT.js";import"./ColumnConfigDialog-B-v7XSWp.js";import"./DraggableList-B_001WcH.js";import"./search-CpfDEfge.js";import"./Input-CLTlUn9N.js";import"./useControlled-BC2dHnLu.js";import"./Button-BDDmjQ5h.js";import"./small-cross-D28OGV1k.js";import"./ActionButton-BPKhgtS-.js";import"./Checkbox-w_NU-R8E.js";import"./useValueChanged-DuLWkq-o.js";import"./CollapsiblePanel-DT1zsVMa.js";import"./MultiColumnSortDialog-CACmVHdf.js";import"./MenuTrigger-hujAw0PI.js";import"./CompositeItem-DcWTbhBi.js";import"./ToolbarRootContext-BAxO_wrr.js";import"./getDisabledMountTransitionStyles-CcIuxN-q.js";import"./getPseudoElementBounds-CMHWZe2a.js";import"./chevron-down-C1BwuCR2.js";import"./index-C5PeE2rD.js";import"./error-QzPjrc98.js";import"./BaseCbacBanner-DNmjADvu.js";import"./makeExternalStore-F_tso8mB.js";import"./Tooltip-BDKleiyx.js";import"./PopoverPopup-BbHVfpib.js";import"./toNumber-D3xfaM9z.js";import"./useOsdkClient-CfRLNnnn.js";import"./tick-CjpbgHg0.js";import"./DropdownField-ClgAM4dd.js";import"./withOsdkMetrics-CqqGBMrg.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
