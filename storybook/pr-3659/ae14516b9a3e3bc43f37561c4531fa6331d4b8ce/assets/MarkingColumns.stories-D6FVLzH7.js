import{f as n,j as t}from"./iframe-Cxtcv0d9.js";import{O as p}from"./object-table-BfKOAGoM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D1GuoLdP.js";import"./Table-WYvShVIQ.js";import"./index-BlSn1tlK.js";import"./Dialog-Bn3zDdY9.js";import"./cross-LYIgU31E.js";import"./svgIconContainer-CKovAZ4c.js";import"./useBaseUiId-DV9TMn4x.js";import"./InternalBackdrop-BVyR75T3.js";import"./composite-BJ7LyHwz.js";import"./index-TlU05mVn.js";import"./index-DiaYbqRj.js";import"./index-Bc58cZ4B.js";import"./useEventCallback-CUSBozHw.js";import"./SkeletonBar-jxTNWDax.js";import"./LoadingCell-CAWsgdeQ.js";import"./ColumnConfigDialog-DI5pkdhy.js";import"./DraggableList-VgSvQjkz.js";import"./search-DTleQUOK.js";import"./Input-7FEdlFK5.js";import"./useControlled-rLvJ-LwX.js";import"./Button-BoD27CJ5.js";import"./small-cross-DoEhv6wy.js";import"./ActionButton-CNNpihfe.js";import"./Checkbox-BKnHcknO.js";import"./useValueChanged-DDwK7T1r.js";import"./CollapsiblePanel-ZAPmnyzo.js";import"./MultiColumnSortDialog-SuWPUmPd.js";import"./MenuTrigger-Dedub3I5.js";import"./CompositeItem-D_wRufqr.js";import"./ToolbarRootContext-D13Eg15c.js";import"./getDisabledMountTransitionStyles-CbNHfpXI.js";import"./getPseudoElementBounds-B_ZFbIxr.js";import"./chevron-down-BgXzULso.js";import"./index-_Uc7BDeo.js";import"./error-DGu_-bua.js";import"./BaseCbacBanner-DZqB3kBK.js";import"./makeExternalStore-C4CJcZ3F.js";import"./Tooltip-GwhxrQIg.js";import"./PopoverPopup-ClCkW9On.js";import"./toNumber-CWtIjLfa.js";import"./useOsdkClient-DDPT4RfO.js";import"./tick-CmjIS-VP.js";import"./DropdownField-tQPZLp9U.js";import"./withOsdkMetrics-TcG52pZd.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
