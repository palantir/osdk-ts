import{f as n,j as t}from"./iframe-DQN-Pq2T.js";import{O as p}from"./object-table-CmeVp8n1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ClfwPwjs.js";import"./Table-BpU0vAJ6.js";import"./index-Chu8aKzj.js";import"./Dialog-Dj2BCQ8N.js";import"./cross-3ovuSxzt.js";import"./svgIconContainer-BP9Z-tDZ.js";import"./useBaseUiId-DkaPH0Rf.js";import"./InternalBackdrop-BygPAN2W.js";import"./composite-Dbvdjp0t.js";import"./index-Bp1bTyR_.js";import"./index-Cce1HCVa.js";import"./index-ChGfHgET.js";import"./useEventCallback-DYYlu-m6.js";import"./SkeletonBar-BE3I8MoQ.js";import"./LoadingCell-Dsx3HKoS.js";import"./ColumnConfigDialog-E60CVnkB.js";import"./DraggableList-DmfXfJbM.js";import"./search-CoQIVL1G.js";import"./Input-TdFqwFJ9.js";import"./useControlled-8x2p57kR.js";import"./Button-BY76ulQB.js";import"./small-cross-B-2QeqQn.js";import"./ActionButton-CBkhyQTC.js";import"./Checkbox-Drs7IfGF.js";import"./useValueChanged-hm5_Lcsk.js";import"./CollapsiblePanel-Dfy6-tFp.js";import"./MultiColumnSortDialog-bTl9ud3S.js";import"./MenuTrigger-DuJcmvYA.js";import"./CompositeItem-D-EwU_cS.js";import"./ToolbarRootContext-De5GksnA.js";import"./getDisabledMountTransitionStyles-C0v-gC6m.js";import"./getPseudoElementBounds-CLo3dBn9.js";import"./chevron-down-Bf5jOaiw.js";import"./index-B-hvhj9n.js";import"./error-D2knBKFU.js";import"./BaseCbacBanner-FyyDsrjU.js";import"./makeExternalStore-B1QPW6-K.js";import"./Tooltip-BsnTz5C5.js";import"./PopoverPopup-DZ6yf8Vp.js";import"./toNumber-DrM8AWaT.js";import"./useOsdkClient-Dj_nXCJ7.js";import"./tick-D2NTJYm4.js";import"./DropdownField-COktRTPB.js";import"./withOsdkMetrics-C7yAfJYl.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
