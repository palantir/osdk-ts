import{f as n,j as t}from"./iframe-DN65ZULk.js";import{O as p}from"./object-table-CSglT7rT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CiNzMRR4.js";import"./Table-BdUSECFa.js";import"./index-ByQYW3t2.js";import"./Dialog-DWYMHSfg.js";import"./cross-CyxO-cnH.js";import"./svgIconContainer-DZzEmdRb.js";import"./useBaseUiId-H2Zqc_QQ.js";import"./InternalBackdrop-e_MuVPH-.js";import"./composite-CDPezDlO.js";import"./index-LkcACoU7.js";import"./index-NL_ODISt.js";import"./index-Dma_rskb.js";import"./useEventCallback-CFHqXDuV.js";import"./SkeletonBar-tRusW49H.js";import"./LoadingCell-DaPl5QWK.js";import"./ColumnConfigDialog-Dt55z1cs.js";import"./DraggableList-BZRhlXPH.js";import"./Input-HfqVjhNr.js";import"./useControlled-OaEhX1yQ.js";import"./Button-BzXFAJr0.js";import"./small-cross-Dw1hTcb2.js";import"./ActionButton-tJ7mdE3W.js";import"./Checkbox-DJQxTrkd.js";import"./minus-d3MuRCzM.js";import"./useValueChanged-xwxUkYPL.js";import"./caret-down-C4ibZwrt.js";import"./CollapsiblePanel-M5WcbZmZ.js";import"./MultiColumnSortDialog-CZaWJu9h.js";import"./MenuTrigger-Bl7BBGqR.js";import"./CompositeItem-Dnf8vdtX.js";import"./ToolbarRootContext-BUJx5G3J.js";import"./getDisabledMountTransitionStyles-DpAKURqz.js";import"./getPseudoElementBounds-DGIfkLWR.js";import"./chevron-down-czvi6l-9.js";import"./index-CuHYQke7.js";import"./error-gZA7BHjj.js";import"./BaseCbacBanner-DawLrGcA.js";import"./makeExternalStore-B2t23lM2.js";import"./Tooltip-Cby6l_Nr.js";import"./PopoverPopup-CCLcTvRh.js";import"./toNumber-HVsewlrr.js";import"./useOsdkClient-CiJffSxa.js";import"./DropdownField-CuhhEo7N.js";import"./withOsdkMetrics-Csf3-kyZ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
