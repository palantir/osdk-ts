import{f as n,j as t}from"./iframe-ElIqY0cP.js";import{O as p}from"./object-table-Df5oaA0O.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D3LENibV.js";import"./Table-RnbpGaKx.js";import"./index-CBl-7t68.js";import"./Dialog-Cojdxyjy.js";import"./cross-NHyDc3_s.js";import"./svgIconContainer-gnV_r1h9.js";import"./useBaseUiId-BQgOxY9s.js";import"./InternalBackdrop-C_uSn9pC.js";import"./composite-3jlzYhEl.js";import"./index-B7Xi1qIm.js";import"./index-0Uuv0rr_.js";import"./index-DFdTnEH-.js";import"./useEventCallback-B3TrjylV.js";import"./SkeletonBar-DWRZ6Lhm.js";import"./LoadingCell-D7V88kC3.js";import"./ColumnConfigDialog-BjSgOF-J.js";import"./DraggableList-EtWwaQWn.js";import"./search-Cc15fq1P.js";import"./Input-BTWCRvyW.js";import"./useControlled-D34dOxey.js";import"./Button-BjN_nH7V.js";import"./small-cross-B686eK02.js";import"./ActionButton-BTFUyRph.js";import"./Checkbox-DNM8oR33.js";import"./useValueChanged-DHPtsJZ4.js";import"./CollapsiblePanel-Bb3W1GcB.js";import"./MultiColumnSortDialog-veXVP8ZS.js";import"./MenuTrigger-B0MONlEh.js";import"./CompositeItem-Dk1T7wo0.js";import"./ToolbarRootContext-DQir3MKX.js";import"./getDisabledMountTransitionStyles-Bv9M25-M.js";import"./getPseudoElementBounds-D3s_4ROO.js";import"./chevron-down-BE8ZqU7R.js";import"./index-DhXfPQcM.js";import"./error-BhRlw4Nb.js";import"./BaseCbacBanner-CzldGkj0.js";import"./makeExternalStore-NBxV0LlO.js";import"./Tooltip-CzXkdSG2.js";import"./PopoverPopup-CHbECa3h.js";import"./toNumber-xCqG-QMH.js";import"./useOsdkClient-D_pifF9S.js";import"./tick-BhXXlJH4.js";import"./DropdownField-CS1KMSYg.js";import"./withOsdkMetrics-DcF-TsBD.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
