import{f as n,j as t}from"./iframe-Bbafph4K.js";import{O as p}from"./object-table-Bfxh-cYQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CaSCSgVc.js";import"./Table-CqYLgB8U.js";import"./index-CwsL8f-H.js";import"./Dialog-gcd0FPM0.js";import"./cross-DMS9CKBB.js";import"./svgIconContainer-qODLhhla.js";import"./useBaseUiId-Dv7galBf.js";import"./InternalBackdrop-B-g4Nety.js";import"./composite-Bvn9XMBe.js";import"./index--Cvvoryu.js";import"./index-tbmcPS6b.js";import"./index-rNsar0y-.js";import"./useEventCallback-BzsJfwaK.js";import"./SkeletonBar-G-ciF08f.js";import"./LoadingCell-Yj4CH3hy.js";import"./ColumnConfigDialog-nRsXsdE0.js";import"./DraggableList-CSECzFH1.js";import"./search-CIIgq1u5.js";import"./Input-DDKg2pDq.js";import"./useControlled-DUKvpuhs.js";import"./Button-BHOpXDH0.js";import"./small-cross-Cm_L4X0F.js";import"./ActionButton-Cv9hEqiE.js";import"./Checkbox-EUeONQPO.js";import"./useValueChanged-Di0sbWVK.js";import"./CollapsiblePanel-LOdwH0Ps.js";import"./MultiColumnSortDialog-Cf7rSVyx.js";import"./MenuTrigger-D0k2yMq9.js";import"./CompositeItem-o8LqhoF4.js";import"./ToolbarRootContext--d2sb2_x.js";import"./getDisabledMountTransitionStyles-B2JfI0Vj.js";import"./getPseudoElementBounds-D55567jC.js";import"./chevron-down-A3yYbQMG.js";import"./index-BsRKMc4H.js";import"./error-Dv-6aR3m.js";import"./BaseCbacBanner-DrgC9mkK.js";import"./makeExternalStore-kKI7EASY.js";import"./Tooltip-Pw4quFjQ.js";import"./PopoverPopup-zjxZEZoF.js";import"./toNumber-BNohZHsc.js";import"./useOsdkClient-CJXeJooD.js";import"./tick-Br6lpI6U.js";import"./DropdownField-D7_ilebP.js";import"./withOsdkMetrics-NYKKZ0WO.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
