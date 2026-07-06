import{f as n,j as t}from"./iframe-B8vqzFe3.js";import{O as p}from"./object-table-BK2lmmQm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5X3SMHc.js";import"./Table-DEUqsT4x.js";import"./index-DHjIuCHt.js";import"./Dialog-CI8tnJ-A.js";import"./cross-BOWYnPPb.js";import"./svgIconContainer-Bxaaw6x9.js";import"./useBaseUiId-JigyG1hd.js";import"./InternalBackdrop-BEh1HyLK.js";import"./composite-Be24EvrE.js";import"./index-BGQwUmYq.js";import"./index-BTjydR7y.js";import"./index-BgsWZy71.js";import"./useEventCallback-CuLkzWyC.js";import"./SkeletonBar-DS974XFl.js";import"./LoadingCell-DzuHzSCk.js";import"./ColumnConfigDialog-BLZCKZHE.js";import"./DraggableList-CH0Gz_NQ.js";import"./search-BMkHwDPb.js";import"./Input-CzhCo-O4.js";import"./useControlled-CMBNMJSH.js";import"./Button-D6b8X_gy.js";import"./small-cross-C0HIyTeS.js";import"./ActionButton-L7armCZX.js";import"./Checkbox-Dd9ZbaeJ.js";import"./useValueChanged-CxwPXbNx.js";import"./CollapsiblePanel-DZS1scR4.js";import"./MultiColumnSortDialog-D3GRXiCZ.js";import"./MenuTrigger-CTEMLF2Q.js";import"./CompositeItem-Dx3tXM3q.js";import"./ToolbarRootContext-GlsRnXN1.js";import"./getDisabledMountTransitionStyles-Bk53SQoi.js";import"./getPseudoElementBounds-DYleJCpH.js";import"./chevron-down-CD75IzLu.js";import"./index-CWJt-pi1.js";import"./error-CQ76ig0F.js";import"./BaseCbacBanner-DyZI1nXZ.js";import"./makeExternalStore-qqTlBNVF.js";import"./Tooltip-DhbX8Oqd.js";import"./PopoverPopup-BWX8d6fn.js";import"./toNumber-BlsNp8v7.js";import"./useOsdkClient-QV4vCC8R.js";import"./tick-qbNHOaOB.js";import"./DropdownField-KuqCkhE9.js";import"./withOsdkMetrics-BQw1oUhi.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
