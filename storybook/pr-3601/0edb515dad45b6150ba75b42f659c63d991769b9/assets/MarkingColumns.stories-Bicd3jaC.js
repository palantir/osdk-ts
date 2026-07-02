import{f as n,j as t}from"./iframe-g5gKY9_O.js";import{O as p}from"./object-table-Cv0eExjX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-vD_ADXE0.js";import"./Table-Dup8Wuqu.js";import"./index-C40rUIxn.js";import"./Dialog-BVtHnaJo.js";import"./cross-D1KqNeKH.js";import"./svgIconContainer-CCJJt3RP.js";import"./useBaseUiId-Cu9W3twr.js";import"./InternalBackdrop-DNedxnEH.js";import"./composite-Du8KNnA7.js";import"./index-CvH9dz38.js";import"./index-DJ73cS3V.js";import"./index-DadRuR0G.js";import"./useRole-A63eqnir.js";import"./useEventCallback-BWIhuzkk.js";import"./SkeletonBar-CeIHcByV.js";import"./LoadingCell-CoTZnqsO.js";import"./ColumnConfigDialog-DL1Vst-T.js";import"./DraggableList-Ck5-8GdF.js";import"./Input-mkx3L3Pg.js";import"./useControlled-C8OguibT.js";import"./Button-BmSo5q-L.js";import"./small-cross-BWKgMqr5.js";import"./ActionButton-C1jidlz5.js";import"./Checkbox-DWlqoevB.js";import"./minus-DdlsLNy9.js";import"./useValueChanged-K2NEwIRi.js";import"./FieldItemContext-CofMgA_r.js";import"./caret-down-Bqs0Pmcj.js";import"./CollapsiblePanel-DFk-YE9W.js";import"./MultiColumnSortDialog-BPKVgG4j.js";import"./MenuTrigger-D9IBFJEa.js";import"./useCompositeListItem-BfgEgn4l.js";import"./ToolbarRootContext-BGBMNAEP.js";import"./getDisabledMountTransitionStyles-SjYBpT_j.js";import"./safePolygon-SiHk0P-C.js";import"./getPseudoElementBounds-B_ULom34.js";import"./CompositeItem-B8ZcJXf0.js";import"./chevron-down-CJwzE1wb.js";import"./index-BdFO9CbL.js";import"./error-6eOYL3Dm.js";import"./BaseCbacBanner-C5nx8zcl.js";import"./makeExternalStore-_BB3nsXJ.js";import"./Tooltip-CZGtBZAD.js";import"./PopoverPopup-CZ75TeZe.js";import"./toNumber-Dq45Lx_b.js";import"./useOsdkClient-DRcOrZXH.js";import"./Combobox-B1npoE69.js";import"./DropdownField-Q3dwOs-y.js";import"./useOsdkObjects-DPeKE1Nk.js";import"./withOsdkMetrics-DHCx2HxD.js";const mr={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const sr=["MarkingColumns"];export{r as MarkingColumns,sr as __namedExportsOrder,mr as default};
