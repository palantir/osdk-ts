import{f as n,j as t}from"./iframe-DKL5fMMN.js";import{O as p}from"./object-table-DtnkFDFE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZ75gHYy.js";import"./Table-ZqKQxPVB.js";import"./index-C18S26o0.js";import"./Dialog-ntozXLr-.js";import"./cross-C-pPDyML.js";import"./svgIconContainer-CLgP8v9E.js";import"./useBaseUiId-Lrxw0WNy.js";import"./InternalBackdrop-D7Cn78x_.js";import"./composite-B4XGSPic.js";import"./index-DuLer_zI.js";import"./index-DroEIit2.js";import"./index-Bn0fWXeF.js";import"./useEventCallback-BwUavd9V.js";import"./SkeletonBar-CWwDv5Je.js";import"./LoadingCell-oc7_cn1C.js";import"./ColumnConfigDialog-DjlE6A7b.js";import"./DraggableList-DZ66ThZi.js";import"./search-DrvBLSJq.js";import"./Input-B2RdC9nW.js";import"./useControlled-CR1Oigvm.js";import"./Button-BJawmklY.js";import"./small-cross-dlc2jlAJ.js";import"./ActionButton-BYLA9QLs.js";import"./Checkbox-B_jJZWGG.js";import"./useValueChanged-wSfK2EDf.js";import"./CollapsiblePanel-CJaRKVw8.js";import"./MultiColumnSortDialog-Xb-ZqYfn.js";import"./MenuTrigger-CKnmsi5b.js";import"./CompositeItem-C5EMZa5C.js";import"./ToolbarRootContext-COa18mV2.js";import"./getDisabledMountTransitionStyles-P2wRgni9.js";import"./getPseudoElementBounds-BbAmAIeo.js";import"./chevron-down-CrTICgoo.js";import"./index-DaYoKOt5.js";import"./error-m4vt8SMz.js";import"./BaseCbacBanner-BiHUvq-q.js";import"./makeExternalStore-DaqRDUtN.js";import"./Tooltip-CC98Z34x.js";import"./PopoverPopup-DSVc1mqq.js";import"./toNumber-CUagWF2l.js";import"./useOsdkClient-DSboJ8Sx.js";import"./tick-Dq7Vr91g.js";import"./DropdownField-D0bVDIhg.js";import"./withOsdkMetrics-D2OVVpLz.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
