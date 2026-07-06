import{f as n,j as t}from"./iframe-C-iT7w4k.js";import{O as p}from"./object-table-CifUTwSZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-vg_g2PU1.js";import"./Table-gxsXXOW-.js";import"./index-BcvTpDLz.js";import"./Dialog-CoPp1So9.js";import"./cross-CU94BJkZ.js";import"./svgIconContainer-CgP6IBxf.js";import"./useBaseUiId-BJ-1OMTm.js";import"./InternalBackdrop-DDmIqenr.js";import"./composite-C0bwRDPE.js";import"./index-BS4XLLOI.js";import"./index-DvUCCHGa.js";import"./index-BUooQTQy.js";import"./useEventCallback-Ctp4yFV7.js";import"./SkeletonBar-C0-gh77H.js";import"./LoadingCell-k7WV97_C.js";import"./ColumnConfigDialog-h8edLgsd.js";import"./DraggableList-JTAKNvlq.js";import"./search-Bo_0IVHL.js";import"./Input-QB8cqiXh.js";import"./useControlled-DIdw599V.js";import"./Button-Dax5y9Ey.js";import"./small-cross-BlPqBlAg.js";import"./ActionButton-CoV1W0v9.js";import"./Checkbox-BsWatnhu.js";import"./useValueChanged-CXqvlNrj.js";import"./CollapsiblePanel-D6euTUSc.js";import"./MultiColumnSortDialog-CkON1h0F.js";import"./MenuTrigger-DPM6XSsK.js";import"./CompositeItem-Vq_k8cXg.js";import"./ToolbarRootContext-CIPU4Dcj.js";import"./getDisabledMountTransitionStyles-CWEdxEfk.js";import"./getPseudoElementBounds-Be7SwITG.js";import"./chevron-down-By4uoNUN.js";import"./index-CDjPIzPn.js";import"./error-BlpxqpIu.js";import"./BaseCbacBanner-DzQfCrSj.js";import"./makeExternalStore-Do5c9HL5.js";import"./Tooltip-DzoqEvpy.js";import"./PopoverPopup-DPnKPhZA.js";import"./toNumber-m3ovtPpD.js";import"./useOsdkClient-A0nyStHJ.js";import"./tick-BKcS9CGI.js";import"./DropdownField-BfE9J_nD.js";import"./withOsdkMetrics-uEINst_o.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
