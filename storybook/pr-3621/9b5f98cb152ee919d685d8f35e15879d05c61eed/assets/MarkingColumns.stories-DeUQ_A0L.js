import{f as n,j as t}from"./iframe-Dosm-TT_.js";import{O as p}from"./object-table-D8j3oThO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVnMXwFk.js";import"./Table-WzK5ANvW.js";import"./index-D1y6s0O_.js";import"./Dialog-CkDIoo7h.js";import"./cross-DZYsf2bT.js";import"./svgIconContainer-gSM7aVB8.js";import"./useBaseUiId-B3O-t6Rg.js";import"./InternalBackdrop-CGK9odNO.js";import"./composite-DIDiEn7q.js";import"./index-qYnVUvvJ.js";import"./index-NaQYoD_T.js";import"./index-CmUW9b7Y.js";import"./useEventCallback-Dls59x5A.js";import"./SkeletonBar-HZsNj97d.js";import"./LoadingCell-VW2vCeHl.js";import"./ColumnConfigDialog-ChLGGxlq.js";import"./DraggableList-ExvBD8SO.js";import"./search-DqB70Fo6.js";import"./Input-JfDyytdY.js";import"./useControlled-Qqs1pXRD.js";import"./Button-_P8k0PT0.js";import"./small-cross-CS9el7-Q.js";import"./ActionButton-DG8_GL9X.js";import"./Checkbox-CudzEfTU.js";import"./useValueChanged-Dux4mLaT.js";import"./CollapsiblePanel-BNjIqZQw.js";import"./MultiColumnSortDialog-DKMNuS6-.js";import"./MenuTrigger-DcCaqBSp.js";import"./CompositeItem-DToeVY_R.js";import"./ToolbarRootContext-BWKyVrsh.js";import"./getDisabledMountTransitionStyles-CM4eAwpL.js";import"./getPseudoElementBounds-Cr6saa4b.js";import"./chevron-down-rsUTVL8g.js";import"./index-CPn0b97L.js";import"./error-CgCpmqrL.js";import"./BaseCbacBanner-BgB1dpbU.js";import"./makeExternalStore-Bbldta8w.js";import"./Tooltip-D7Ywl4JF.js";import"./PopoverPopup-DXDN-pPF.js";import"./toNumber-CsipesBt.js";import"./useOsdkClient-BY3dL-8o.js";import"./tick-DfY2drKb.js";import"./DropdownField-DqdqY7e9.js";import"./withOsdkMetrics-ClNJzRHn.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
