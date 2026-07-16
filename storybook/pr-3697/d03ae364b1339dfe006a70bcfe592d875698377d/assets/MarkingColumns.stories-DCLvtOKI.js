import{f as n,j as t}from"./iframe-DWrMy0yZ.js";import{O as p}from"./object-table-BhsC_ajN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-hiCfVkrW.js";import"./Table-Cdt-erKR.js";import"./index-DWE6OuUn.js";import"./Dialog-ukUwacGs.js";import"./cross-DAjRBQac.js";import"./svgIconContainer-BEn0zHz3.js";import"./useBaseUiId-DUxT2a9f.js";import"./InternalBackdrop-DTpNSlvT.js";import"./composite-hO8DpeuU.js";import"./index-vQKyn22n.js";import"./index-WaykaH_P.js";import"./index-Dzenwf6h.js";import"./useEventCallback-Dj2ZfrPp.js";import"./SkeletonBar-CPyOiZ0u.js";import"./LoadingCell-wJj5C06y.js";import"./ColumnConfigDialog-nV0fdZNL.js";import"./DraggableList-Db2-PnHi.js";import"./search-Bz7bfMv6.js";import"./Input-XRgJh16U.js";import"./useControlled-BzTSnQwz.js";import"./isEqual-DE0aHWIu.js";import"./isObject-BakIJxD_.js";import"./Button-rN6BhzSe.js";import"./ActionButton-C6tloPXY.js";import"./Checkbox-B5oa4-Tc.js";import"./useValueChanged-PfjJvUZA.js";import"./CollapsiblePanel-CZvl0QuD.js";import"./MultiColumnSortDialog-BDff2FNG.js";import"./MenuTrigger-DUjkDouJ.js";import"./CompositeItem-jesKs--B.js";import"./ToolbarRootContext-C-bzPO9B.js";import"./getDisabledMountTransitionStyles-Bmhibdk7.js";import"./getPseudoElementBounds-bE6i3bFv.js";import"./chevron-down-N4ynOSmR.js";import"./index-DrB0YY75.js";import"./error-jp0PlQCR.js";import"./BaseCbacBanner-NH8l1Tnt.js";import"./makeExternalStore-QenJWAX6.js";import"./Tooltip-D2DjCH-e.js";import"./PopoverPopup-B7rWQpc_.js";import"./toNumber-IoHvA27q.js";import"./useOsdkClient-Cjul2Xxp.js";import"./tick-BeyCacAS.js";import"./DropdownField-Bn0tnkG0.js";import"./withOsdkMetrics-DH3uuG-W.js";const er={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,er as default};
