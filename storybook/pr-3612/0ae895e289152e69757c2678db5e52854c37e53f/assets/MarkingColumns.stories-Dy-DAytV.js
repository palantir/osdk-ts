import{f as n,j as t}from"./iframe-BrKhH_8U.js";import{O as p}from"./object-table-BNOFGNWk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CixVNBXc.js";import"./Table-DLttGiBp.js";import"./index-DLFRq0fk.js";import"./Dialog-DEHGX3K6.js";import"./cross-CERk_AYz.js";import"./svgIconContainer-BAvRxQfV.js";import"./useBaseUiId-DviDdHmF.js";import"./InternalBackdrop-BNulJ-pq.js";import"./composite-C8s_Cnxx.js";import"./index-Uf5yNz3F.js";import"./index-BDbogzKC.js";import"./index-C42lYyzv.js";import"./useEventCallback-Dd3_pbpa.js";import"./SkeletonBar-C1jV27I5.js";import"./LoadingCell-BRTEBXan.js";import"./ColumnConfigDialog-Cs9xBWST.js";import"./DraggableList-I1qdcQiB.js";import"./search-BdlbsWDT.js";import"./Input-D2QPVo1M.js";import"./useControlled-C9JrXNOF.js";import"./Button-C2inf5rY.js";import"./small-cross-CPMngEKl.js";import"./ActionButton-DPKa47L8.js";import"./Checkbox-9MPt7Cga.js";import"./minus-ZigxQGa9.js";import"./tick-C8S8Ags6.js";import"./useValueChanged-OP2_GtCD.js";import"./caret-down-Tmez1UL0.js";import"./CollapsiblePanel-D7Ba9Sqq.js";import"./MultiColumnSortDialog-LPLd9n2G.js";import"./MenuTrigger-C_cou5fl.js";import"./CompositeItem-BrVmYibG.js";import"./ToolbarRootContext-DuQ_a6L2.js";import"./getDisabledMountTransitionStyles-BwhtUX4y.js";import"./getPseudoElementBounds-BxNsMv44.js";import"./chevron-down-CrYvrwth.js";import"./index-BO650apv.js";import"./error-Bv15h-Vo.js";import"./BaseCbacBanner-qEO52bG0.js";import"./makeExternalStore-VG7HHRW4.js";import"./Tooltip-DgCH4J8j.js";import"./PopoverPopup-C1z34sRJ.js";import"./toNumber-Bjnj1Rko.js";import"./useOsdkClient-CTQRksOW.js";import"./DropdownField-uHnjGX9S.js";import"./withOsdkMetrics-mdCcmRVX.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
