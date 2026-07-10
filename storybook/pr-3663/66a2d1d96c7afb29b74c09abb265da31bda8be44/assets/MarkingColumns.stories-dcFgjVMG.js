import{f as n,j as t}from"./iframe-BnmParoh.js";import{O as p}from"./object-table-Bwbqyxqo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cvy_vUUf.js";import"./Table-ahLN04_4.js";import"./index-DCgasJ8a.js";import"./Dialog-C_LdqDHR.js";import"./cross-mwjl5l3K.js";import"./svgIconContainer-DBDDFCwx.js";import"./useBaseUiId-puuRtNOw.js";import"./InternalBackdrop-DKbPucZC.js";import"./composite-DREzLeH0.js";import"./index-DlGr10DU.js";import"./index-DZ4b_GdU.js";import"./index-aaXIO5EY.js";import"./useEventCallback-CZwQYAcs.js";import"./SkeletonBar-kgY83Fp2.js";import"./LoadingCell-DJlRzn9l.js";import"./ColumnConfigDialog-DRukfY_K.js";import"./DraggableList-nAiCeue1.js";import"./search-BKxgLIR1.js";import"./Input-BqrRRG8Z.js";import"./useControlled-vDaQHP2_.js";import"./Button-D0fUI8oS.js";import"./small-cross-6eoiwpk4.js";import"./ActionButton-E-eXEXHy.js";import"./Checkbox-DAGcRqFW.js";import"./useValueChanged-oLNpZyTD.js";import"./CollapsiblePanel-CIlfnPOX.js";import"./MultiColumnSortDialog-CTClyuV0.js";import"./MenuTrigger-kbhdT-Pw.js";import"./CompositeItem-QiZ2YQX0.js";import"./ToolbarRootContext-D9HpIQbP.js";import"./getDisabledMountTransitionStyles-CZnwy8mH.js";import"./getPseudoElementBounds-BrjXW35u.js";import"./chevron-down-IaQfVpn8.js";import"./index-CW9_cB-q.js";import"./error-CBf2M0qd.js";import"./BaseCbacBanner-C5mY_Hzk.js";import"./makeExternalStore-qCm8NC8u.js";import"./Tooltip-BVwijZPT.js";import"./PopoverPopup-hm1o3aA8.js";import"./toNumber-Swm3VG91.js";import"./useOsdkClient-cigETLdD.js";import"./tick-B9kJix-X.js";import"./DropdownField-CwoLIgEA.js";import"./withOsdkMetrics-DKcGj9-N.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
