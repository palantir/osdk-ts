import{f as n,j as t}from"./iframe-0jwp69p_.js";import{O as p}from"./object-table-Bqkc53cx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-WTuv2Kb1.js";import"./Table-CH5AooJA.js";import"./index-BIq836Qa.js";import"./Dialog-CWeqaSAB.js";import"./cross-BDOJUkQI.js";import"./svgIconContainer-BJUj5X0X.js";import"./useBaseUiId-Bo6se0E1.js";import"./InternalBackdrop-CADpJrnh.js";import"./composite-CMnbrV0_.js";import"./index-iiMtJJe9.js";import"./index-QRMY8fC0.js";import"./index-CqGUXq7J.js";import"./useEventCallback-DlvGVJ87.js";import"./SkeletonBar-CbGEsIR-.js";import"./LoadingCell-CLgefwzK.js";import"./ColumnConfigDialog-Csyi42qK.js";import"./DraggableList-B3XKv0v5.js";import"./search-B1DPnb_f.js";import"./Input-BCGVW7Yi.js";import"./useControlled-CylMgmPr.js";import"./Button-CHNstSBN.js";import"./small-cross-DzjAyrni.js";import"./ActionButton-eC1BAqpT.js";import"./Checkbox-Dg8j9mTw.js";import"./useValueChanged-DpwlTYyp.js";import"./CollapsiblePanel-BmdO-JEz.js";import"./MultiColumnSortDialog-Dqxo4x5E.js";import"./MenuTrigger-w62FOmOM.js";import"./CompositeItem-d8Vn9RQ1.js";import"./ToolbarRootContext-Cneog7L7.js";import"./getDisabledMountTransitionStyles-CocvnSrK.js";import"./getPseudoElementBounds-BadPA3be.js";import"./chevron-down-DdqY3p1L.js";import"./index-6BA1MBmk.js";import"./error-DSLQgLVp.js";import"./BaseCbacBanner-B61lR9Hw.js";import"./makeExternalStore-DOpXnJp2.js";import"./Tooltip-Ck59xUnU.js";import"./PopoverPopup-DB6RU2dH.js";import"./toNumber-DPUQMTtm.js";import"./useOsdkClient-CJrJqnmn.js";import"./tick-BaQQlYvq.js";import"./DropdownField-OLSA5obe.js";import"./withOsdkMetrics-RxDwJXuL.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
