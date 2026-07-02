import{f as n,j as t}from"./iframe-DYo6IeSP.js";import{O as p}from"./object-table-CG59J4N8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-oxCfAJG1.js";import"./Table-o7JrwQ4C.js";import"./index-DzBcJ-bt.js";import"./Dialog-B6h3APIA.js";import"./cross-B1TB2OCT.js";import"./svgIconContainer-B2FaZn-h.js";import"./useBaseUiId-BiLXq879.js";import"./InternalBackdrop-iazQE0l1.js";import"./composite-KlwepRBQ.js";import"./index-CTN_uXGU.js";import"./index-Bz8-sxMZ.js";import"./index-_zGOJ2qq.js";import"./useEventCallback-CFgD9ZNE.js";import"./SkeletonBar-ClV0sc18.js";import"./LoadingCell-Dc6lAwrA.js";import"./ColumnConfigDialog-Dhr-G6cs.js";import"./DraggableList-CLsVKaXp.js";import"./search-XvRzOpyc.js";import"./Input-DzarD0SN.js";import"./useControlled-Flk4w1fp.js";import"./Button-48QIVM3v.js";import"./small-cross-CLGnXlJe.js";import"./ActionButton-DOvJ2Rd9.js";import"./Checkbox-Dw_wGWK9.js";import"./minus-BLhW6Wur.js";import"./tick-BaX6sEAv.js";import"./useValueChanged-CLcXd_x7.js";import"./caret-down-CPbx1euP.js";import"./CollapsiblePanel-BAoTV-mA.js";import"./MultiColumnSortDialog-CnLdDpYk.js";import"./MenuTrigger-WWa1NBV4.js";import"./CompositeItem-BU1Uxx4m.js";import"./ToolbarRootContext-B6UoS49F.js";import"./getDisabledMountTransitionStyles-BkoC45jm.js";import"./getPseudoElementBounds-BWBakkdn.js";import"./chevron-down-DdiIc6o8.js";import"./index-DwUuBiAr.js";import"./error-PHk7WabF.js";import"./BaseCbacBanner-yRCGH9aU.js";import"./makeExternalStore-DX5ANJAM.js";import"./Tooltip-B_H9Neaq.js";import"./PopoverPopup-DJ2tpDWr.js";import"./toNumber-Dyr8c359.js";import"./useOsdkClient-1Adnm9ii.js";import"./DropdownField-CnqB9ICP.js";import"./withOsdkMetrics-D6hlhkD1.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
