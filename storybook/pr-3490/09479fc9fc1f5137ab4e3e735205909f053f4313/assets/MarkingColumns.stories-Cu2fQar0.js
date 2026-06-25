import{f as n,j as t}from"./iframe-Cwa4OV2p.js";import{O as p}from"./object-table-CGjW-2_C.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CCq-bIdu.js";import"./Table-BmlcWEaH.js";import"./index-BEvgsLyB.js";import"./Dialog-DpjDFxHi.js";import"./cross-Czbv8y8T.js";import"./svgIconContainer-Cu3N0QL9.js";import"./useBaseUiId-DMqO1SgA.js";import"./InternalBackdrop-B6EbKSnP.js";import"./composite-DeA0pGnE.js";import"./index-Cm6cItz_.js";import"./index-JfSSgdbO.js";import"./index-DogpvH-7.js";import"./useEventCallback-Di5mt5I_.js";import"./SkeletonBar-BojTcNhc.js";import"./LoadingCell-CyivX_g3.js";import"./ColumnConfigDialog-ApK-_Sth.js";import"./DraggableList-Cpk6wQFg.js";import"./Input-CjfPVenj.js";import"./useControlled-BN_Kaq39.js";import"./Button-BdFbfm_2.js";import"./small-cross-CxpayZPs.js";import"./ActionButton-CQCZBJcg.js";import"./Checkbox-Df0F4gWa.js";import"./minus-BrvIrOBK.js";import"./useValueChanged-C7l1TuUP.js";import"./caret-down-yLyBSF09.js";import"./CollapsiblePanel-rRxFI3e6.js";import"./MultiColumnSortDialog-BGKFDtdr.js";import"./MenuTrigger-PyfrbPop.js";import"./CompositeItem-BWKAEQuh.js";import"./ToolbarRootContext-7us1qpDr.js";import"./getDisabledMountTransitionStyles-Um9JXN9h.js";import"./getPseudoElementBounds-BUkRkEK7.js";import"./chevron-down-q-9Gl2Vu.js";import"./index-BrHN71JD.js";import"./error-fw63jDoE.js";import"./BaseCbacBanner-CMvOKmZl.js";import"./makeExternalStore-qJgrB_IM.js";import"./Tooltip-NM5W2Qyt.js";import"./PopoverPopup-CeBQLpJ0.js";import"./toNumber-C1zW-h46.js";import"./useOsdkClient-CGzimhkR.js";import"./DropdownField-9psEp3hz.js";import"./withOsdkMetrics-lyAfb3NY.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
