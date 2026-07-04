import{f as n,j as t}from"./iframe-FKfcGEZl.js";import{O as p}from"./object-table-DDM_geMf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BeXIZzmt.js";import"./Table-UbMkVzms.js";import"./index-CnIqS-gI.js";import"./Dialog-DwT4VK3N.js";import"./cross-CNrBTxg5.js";import"./svgIconContainer-C42q1xjX.js";import"./useBaseUiId-Ch5g6tvE.js";import"./InternalBackdrop-DvIAXjgQ.js";import"./composite-2aT5GdQ2.js";import"./index-BX2INUHu.js";import"./index-DzvIJVEt.js";import"./index-BewsspxN.js";import"./useEventCallback-Bk04FqNt.js";import"./SkeletonBar-kYakAqkH.js";import"./LoadingCell-DUDsuBk7.js";import"./ColumnConfigDialog-NUDGaZWd.js";import"./DraggableList-BQ9-txdF.js";import"./search-C-NMFnh5.js";import"./Input-B6Zw80Nn.js";import"./useControlled-BOr4TDar.js";import"./Button-CMpW18lC.js";import"./small-cross-BfSnXzVY.js";import"./ActionButton-B1GJhE9q.js";import"./Checkbox-Lzk5KU0D.js";import"./useValueChanged-CEGDyAT0.js";import"./CollapsiblePanel-BrhPjj9p.js";import"./MultiColumnSortDialog-D18YXwO1.js";import"./MenuTrigger-BurxVoLM.js";import"./CompositeItem-BaP_QcSF.js";import"./ToolbarRootContext-DzPr42DC.js";import"./getDisabledMountTransitionStyles-CqsTTB7V.js";import"./getPseudoElementBounds-CIiakBEl.js";import"./chevron-down-C5iWmvXK.js";import"./index-ByKPLx2f.js";import"./error-5UnepCgR.js";import"./BaseCbacBanner-C31g_n6-.js";import"./makeExternalStore-GtGhGiKK.js";import"./Tooltip-4d2yktAy.js";import"./PopoverPopup-DJ42wKHM.js";import"./toNumber-DW4oAV1y.js";import"./useOsdkClient-Db0CCXIc.js";import"./tick-BJ0M-GZQ.js";import"./DropdownField-WUQC-sYj.js";import"./withOsdkMetrics-B1J2Hl71.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
