import{f as n,j as t}from"./iframe-anW6-Kv1.js";import{O as p}from"./object-table-CUtQoBdN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C7Pf2-ue.js";import"./Table-BOq_PJL4.js";import"./index-DZWEciFV.js";import"./Dialog-BgtN7ogu.js";import"./cross-95il3B-S.js";import"./svgIconContainer-CQ9JVNE9.js";import"./useBaseUiId-BskUv227.js";import"./InternalBackdrop-TKdi5D4Y.js";import"./composite-tY0gZ9xf.js";import"./index-aYDmKqlu.js";import"./index-xdzVTZ5K.js";import"./index-CkFva0ao.js";import"./useEventCallback-Bn8Clzat.js";import"./SkeletonBar-Cm3CxD8c.js";import"./LoadingCell-Cfwz5bhg.js";import"./ColumnConfigDialog-DWNfznNw.js";import"./DraggableList-CC65JMcd.js";import"./search-CwkqZKHt.js";import"./Input-pNBQT4IM.js";import"./useControlled-DYLDqUrt.js";import"./Button-BMtVMS_U.js";import"./small-cross-D-ENVNM1.js";import"./ActionButton-B0CesgT4.js";import"./Checkbox-BPAJ35O1.js";import"./useValueChanged-KxBkER4h.js";import"./CollapsiblePanel-C5wRSO9A.js";import"./MultiColumnSortDialog-CBMmjXd8.js";import"./MenuTrigger-QO5X0uON.js";import"./CompositeItem-DenTfmjz.js";import"./ToolbarRootContext-Cfe5oDAE.js";import"./getDisabledMountTransitionStyles-BQr_RpWB.js";import"./getPseudoElementBounds-Ckkk1DhU.js";import"./chevron-down-DVhXO3Vu.js";import"./index-V2ILH22Z.js";import"./error-us3TzVgj.js";import"./BaseCbacBanner-D4F_X7LO.js";import"./makeExternalStore-8xOz0-jk.js";import"./Tooltip-DCf7Gqgo.js";import"./PopoverPopup-B54rNnr0.js";import"./toNumber-CKSeUkHE.js";import"./useOsdkClient-DzdC1FMH.js";import"./tick-BeepcaAK.js";import"./DropdownField-3n4VbPYb.js";import"./withOsdkMetrics-A7ayThPn.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
