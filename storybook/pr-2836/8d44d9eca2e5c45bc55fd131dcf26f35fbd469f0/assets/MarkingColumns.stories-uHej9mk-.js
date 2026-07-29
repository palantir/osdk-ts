import{f as n,j as t}from"./iframe-B0oEEPte.js";import{O as p}from"./object-table-UMP8_Zd2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BSbvu8GQ.js";import"./Table-jrWX1EY3.js";import"./index-DFr9bRTl.js";import"./Dialog-Bx8hyoRm.js";import"./cross-Cyn-JjeY.js";import"./svgIconContainer-69wx9JC3.js";import"./useBaseUiId-DzZtd95w.js";import"./InternalBackdrop-B89_Ug9k.js";import"./composite-DarLCWE2.js";import"./index-DzRZzQbW.js";import"./index-DYvh4vHQ.js";import"./index-BB1COxXt.js";import"./useEventCallback-CjYvsMtA.js";import"./SkeletonBar-Bsrdcm68.js";import"./LoadingCell-CXctNKDM.js";import"./ColumnConfigDialog-mWBVEte6.js";import"./DraggableList-Bs6Rdad3.js";import"./Input-rn_ecV3j.js";import"./useControlled-Cvn-ldWm.js";import"./Button-Dlno79rG.js";import"./small-cross-CuUg1i1Y.js";import"./ActionButton-BrDLRs-c.js";import"./Checkbox-_bGjOqU8.js";import"./minus-UHMg0aVE.js";import"./useValueChanged-BAW-aMwo.js";import"./caret-down-DhudXhw_.js";import"./CollapsiblePanel-CZGFDPhu.js";import"./MultiColumnSortDialog-De9cxc3f.js";import"./MenuTrigger-B781uaC4.js";import"./CompositeItem-ErSro4zV.js";import"./ToolbarRootContext-jLG8XKgb.js";import"./getDisabledMountTransitionStyles-DaEya3sA.js";import"./getPseudoElementBounds-CwyUaNzk.js";import"./chevron-down-DaNPV6F1.js";import"./index-BJFFNloC.js";import"./error-D-71H6jO.js";import"./BaseCbacBanner-DFywqCaf.js";import"./makeExternalStore-mQGUB93m.js";import"./Tooltip-B7Z3BbnH.js";import"./PopoverPopup-0HKFAb-S.js";import"./toNumber-Cl9JO3iN.js";import"./useOsdkClient-CZrvyWnr.js";import"./DropdownField-8Jsn8Oqm.js";import"./withOsdkMetrics-D4_xLDdy.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
