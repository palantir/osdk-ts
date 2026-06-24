import{f as n,j as t}from"./iframe-CLPihOEf.js";import{O as p}from"./object-table-HpYVEUyz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cop9rEOo.js";import"./Table-BoA2aQRf.js";import"./index-BHRxuJRb.js";import"./Dialog-Ck99qWFr.js";import"./cross-dlz43R1S.js";import"./svgIconContainer-qeSd0iWV.js";import"./useBaseUiId-DoN9ceOW.js";import"./InternalBackdrop-Cmp-q0zN.js";import"./composite-V7slbqmN.js";import"./index-fXITLlex.js";import"./index-RxuNakGY.js";import"./index-CfNByWWD.js";import"./useEventCallback-u8D5wEKL.js";import"./SkeletonBar-pPoYWT0l.js";import"./LoadingCell-C_tGkCrF.js";import"./ColumnConfigDialog-BwCx9hUS.js";import"./DraggableList-BrMkmkHh.js";import"./Input-KSpmin9s.js";import"./useControlled-DTx-pxeP.js";import"./Button-C4SngwET.js";import"./small-cross-DI1Nw9Yy.js";import"./ActionButton-Z8mnZQiq.js";import"./Checkbox-SSpbF5VJ.js";import"./minus-amTx0AHT.js";import"./useValueChanged-Bm1HQ6nV.js";import"./caret-down-CIGi_ieV.js";import"./CollapsiblePanel-DT5ITPoe.js";import"./MultiColumnSortDialog-DV0IKlp8.js";import"./MenuTrigger-D8G8b-Ox.js";import"./CompositeItem-CeKGZo-o.js";import"./ToolbarRootContext-DaJKV-5f.js";import"./getDisabledMountTransitionStyles-BJ23vuRY.js";import"./getPseudoElementBounds-Bxcc03k3.js";import"./chevron-down-D2Y-VKfq.js";import"./index-s2aExhi9.js";import"./error-CVCStLYP.js";import"./BaseCbacBanner-Dm_QusTU.js";import"./makeExternalStore-D7YFAXUy.js";import"./Tooltip-BMQs4pRO.js";import"./PopoverPopup-DhgGCoZ4.js";import"./toNumber-loIEuX5C.js";import"./useOsdkClient-CXBKl1wj.js";import"./DropdownField-CaU88iDC.js";import"./useStableShapeDefinition-DV6GOrj6.js";import"./withOsdkMetrics-Cl7dSvmA.js";const er={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,er as default};
