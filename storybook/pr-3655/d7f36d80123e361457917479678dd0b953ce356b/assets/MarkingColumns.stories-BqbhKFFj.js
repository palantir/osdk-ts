import{f as n,j as t}from"./iframe-BHU4Gxck.js";import{O as p}from"./object-table-DxNMnLRD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YHwgluMs.js";import"./Table-CPeJndF1.js";import"./index-CgXHfWE-.js";import"./Dialog-B5kcQ_6X.js";import"./cross-v65tmb55.js";import"./svgIconContainer-D5m_4kfF.js";import"./useBaseUiId-D2L0PxcZ.js";import"./InternalBackdrop-B-SDQyrs.js";import"./composite-Bv0dm5JS.js";import"./index-VBJbAK1D.js";import"./index-C5wKM8rg.js";import"./index-BWXCquqC.js";import"./useEventCallback-wqduhzGO.js";import"./SkeletonBar-B8cp0B_q.js";import"./LoadingCell-wBh8FlzH.js";import"./ColumnConfigDialog-B1keNvnt.js";import"./DraggableList-DdrukRjn.js";import"./search-Buj_7hNC.js";import"./Input-B73veKR0.js";import"./useControlled-BloUbVdA.js";import"./Button-Glm7ZX31.js";import"./small-cross-DLQHPB49.js";import"./ActionButton-lTuqbS3P.js";import"./Checkbox-MObv8WX_.js";import"./useValueChanged-B-m2QxLm.js";import"./CollapsiblePanel-DKMa31q6.js";import"./MultiColumnSortDialog-Cotkk_9V.js";import"./MenuTrigger-Chi5xBxd.js";import"./CompositeItem-CtbkiQmK.js";import"./ToolbarRootContext-Brm7_ofQ.js";import"./getDisabledMountTransitionStyles-B1SOcxvh.js";import"./getPseudoElementBounds-BUZS4ozu.js";import"./chevron-down-D3TrVsXp.js";import"./index-D3EuoeSW.js";import"./error-DHJ8twOj.js";import"./BaseCbacBanner-TPVDxgwi.js";import"./makeExternalStore-CxPtkjXX.js";import"./Tooltip-dDI89shq.js";import"./PopoverPopup-ClG_RiRl.js";import"./toNumber-Dd0QCJs6.js";import"./useOsdkClient-CaQJaV0G.js";import"./tick-DQKw7_l2.js";import"./DropdownField-BXSrXoXS.js";import"./withOsdkMetrics-CHJ4ewcT.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
