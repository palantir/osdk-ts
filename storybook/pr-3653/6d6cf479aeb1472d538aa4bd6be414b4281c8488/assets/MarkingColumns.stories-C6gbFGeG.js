import{f as n,j as t}from"./iframe-C5aCmoNO.js";import{O as p}from"./object-table-B91wKaJL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-WhdHBd3t.js";import"./Table-qDUZdVuM.js";import"./index-cSFONtJU.js";import"./Dialog-BRC-c0Mc.js";import"./cross-Dziqcvjd.js";import"./svgIconContainer-MBJNi3sf.js";import"./useBaseUiId-CZFdvPLq.js";import"./InternalBackdrop-DX1qrneR.js";import"./composite-ycAiGuBV.js";import"./index-BYMUbS1D.js";import"./index-VK30H4xM.js";import"./index-CPFayGUB.js";import"./useEventCallback-Dregsry3.js";import"./SkeletonBar-B1vukO3p.js";import"./LoadingCell-DuMTg06s.js";import"./ColumnConfigDialog-rePW7Acf.js";import"./DraggableList-BOCtmgmS.js";import"./search-CXEAIpAp.js";import"./Input-UxbHtRcv.js";import"./useControlled-DV86-8Mx.js";import"./Button-Dg_73S_B.js";import"./small-cross-1JzqkYDv.js";import"./ActionButton-Bj7hlHIO.js";import"./Checkbox-C-cVJGKP.js";import"./useValueChanged-BfgCE0cn.js";import"./CollapsiblePanel-C4KGf4fh.js";import"./MultiColumnSortDialog-AiB0qJpC.js";import"./MenuTrigger-Ci4kSBUp.js";import"./CompositeItem-j_9AjjOt.js";import"./ToolbarRootContext-dz5ogJMW.js";import"./getDisabledMountTransitionStyles-Bktr30DT.js";import"./getPseudoElementBounds-DChvPGzh.js";import"./chevron-down-zYcwkkW1.js";import"./index-BsgkMab_.js";import"./error-BgTzr7up.js";import"./BaseCbacBanner-CFelTCGa.js";import"./makeExternalStore-hJeL3jdd.js";import"./Tooltip-CFX-u485.js";import"./PopoverPopup-CyZJ1rzM.js";import"./toNumber-6wO6IzAa.js";import"./useOsdkClient-CW_AHi79.js";import"./tick-CE0kqBWJ.js";import"./DropdownField-B43j7_ix.js";import"./withOsdkMetrics-NIUjjKKK.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
