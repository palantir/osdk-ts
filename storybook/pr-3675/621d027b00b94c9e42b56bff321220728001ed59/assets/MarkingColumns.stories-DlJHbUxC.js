import{f as n,j as t}from"./iframe-BY5-9hkg.js";import{O as p}from"./object-table-DePHrbOF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CINHPaVZ.js";import"./Table-BqwwU75e.js";import"./index-CJzTTX3u.js";import"./Dialog-nnpGERIy.js";import"./cross-Drh6FKLn.js";import"./svgIconContainer-E55wUvGa.js";import"./useBaseUiId-C_DkBiwm.js";import"./InternalBackdrop-Q_Jy3pX2.js";import"./composite-DqcSZiEj.js";import"./index-BKgkCnpw.js";import"./index-HRSX2Zy8.js";import"./index-thT9pKNG.js";import"./useEventCallback-vFVupt26.js";import"./SkeletonBar-C_3jzWrH.js";import"./LoadingCell-DZQHwCEk.js";import"./ColumnConfigDialog-FvTIjFMR.js";import"./DraggableList-BnQKlxz8.js";import"./search-B7RMBj9o.js";import"./Input-060Zz7KP.js";import"./useControlled-DObQOvvV.js";import"./Button-DOCEB8h2.js";import"./small-cross-B3fTw98-.js";import"./ActionButton-BgVIJ9co.js";import"./Checkbox-BsBgqk_0.js";import"./useValueChanged-DWao_sKU.js";import"./CollapsiblePanel-_jFFo0Op.js";import"./MultiColumnSortDialog-3SHvSutw.js";import"./MenuTrigger-C8Qio5CB.js";import"./CompositeItem-BCPCbCzR.js";import"./ToolbarRootContext-USuO0_Rk.js";import"./getDisabledMountTransitionStyles-Bw3BAoiY.js";import"./getPseudoElementBounds-qbX8SirN.js";import"./chevron-down-3bvaVHxC.js";import"./index-DP1DnTlM.js";import"./error-CDvOmrJi.js";import"./BaseCbacBanner-DbQpKXHm.js";import"./makeExternalStore-BGx7tVqv.js";import"./Tooltip-CzYyii6j.js";import"./PopoverPopup-DfqeQwKm.js";import"./toNumber-HuvsXFBv.js";import"./useOsdkClient-C6BGRcm-.js";import"./tick-CjO7L_37.js";import"./DropdownField-DF8H3vVN.js";import"./withOsdkMetrics-DZo8JWK3.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
