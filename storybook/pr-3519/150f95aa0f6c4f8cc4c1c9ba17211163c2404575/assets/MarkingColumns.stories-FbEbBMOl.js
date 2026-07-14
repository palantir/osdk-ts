import{f as n,j as t}from"./iframe-BI4mv9kr.js";import{O as p}from"./object-table-DiWnZqrg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dt0Twvmj.js";import"./Table-Bww8DLMw.js";import"./index-DBuQd2cE.js";import"./Dialog-O-XLZE2r.js";import"./cross-IOYA3BMD.js";import"./svgIconContainer-DXKz2g6i.js";import"./useBaseUiId-dZrnpRDf.js";import"./InternalBackdrop-DiHpgcCt.js";import"./composite-DSqZameO.js";import"./index-B9DuMdAz.js";import"./index-BOmc3ycU.js";import"./index-BaUGSAz-.js";import"./useEventCallback-DmrPnDiN.js";import"./SkeletonBar-CZVTRQ_c.js";import"./LoadingCell-CoWc94XM.js";import"./ColumnConfigDialog-CgDTQ8Sm.js";import"./DraggableList-DcLwxH19.js";import"./search-COytg_IS.js";import"./Input-CoUXyPMe.js";import"./useControlled-Dw2VLJ3p.js";import"./Button-D3Zu-C0a.js";import"./small-cross-DnF7t-Cn.js";import"./ActionButton-RCbtLJtB.js";import"./Checkbox-DgNMfB3U.js";import"./useValueChanged-CZY6Khxy.js";import"./CollapsiblePanel-D4vzANls.js";import"./MultiColumnSortDialog-B1smqcM1.js";import"./MenuTrigger-B63KZ9fQ.js";import"./CompositeItem-CtYZ0HZn.js";import"./ToolbarRootContext-CPvJTDaT.js";import"./getDisabledMountTransitionStyles-CLmOlF5D.js";import"./getPseudoElementBounds-BlKODG9i.js";import"./chevron-down-DdrZvlkD.js";import"./index-BusFLKiz.js";import"./error-B3oUAsIz.js";import"./BaseCbacBanner-CCoHgrU_.js";import"./makeExternalStore-D35xftiO.js";import"./Tooltip-DEgrlHyh.js";import"./PopoverPopup-C2vYVp_K.js";import"./toNumber-Dok99jHq.js";import"./useOsdkClient-Pn41qJKN.js";import"./tick-BXhWxouM.js";import"./DropdownField-DHja99mO.js";import"./withOsdkMetrics-DPBuA6d7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
