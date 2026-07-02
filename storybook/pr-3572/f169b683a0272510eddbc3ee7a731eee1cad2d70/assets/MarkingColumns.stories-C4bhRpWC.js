import{f as n,j as t}from"./iframe-BtqArRp_.js";import{O as p}from"./object-table-UHGJPajX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CCCWJTyF.js";import"./Table-CMwc0tpz.js";import"./index-BzxWm08t.js";import"./Dialog-BoWjuqqw.js";import"./cross-pW8we9AT.js";import"./svgIconContainer-3MnKoS_i.js";import"./useBaseUiId-0Vbapi6A.js";import"./InternalBackdrop-Bb3jTWuA.js";import"./composite-oOleH5NB.js";import"./index-CBcCnrRd.js";import"./index-lK7kjT7q.js";import"./index-CInzoReu.js";import"./useEventCallback-ChByEdX-.js";import"./SkeletonBar-DLAUwSXq.js";import"./LoadingCell-DCfnAYxW.js";import"./ColumnConfigDialog-BwRvlRRO.js";import"./DraggableList-Q85STStp.js";import"./search-C1LRanub.js";import"./Input-DYV7wbma.js";import"./useControlled-Dm2hXrNC.js";import"./Button-Cv-jNafh.js";import"./small-cross-qaEOxaky.js";import"./ActionButton-DNzS00zX.js";import"./Checkbox-BpCoz7nj.js";import"./minus-B3oIwiZs.js";import"./tick-B43-VuL_.js";import"./useValueChanged-hmc_sBPn.js";import"./caret-down-DtH-ySMI.js";import"./CollapsiblePanel-BZ7eFTvJ.js";import"./MultiColumnSortDialog-DouHDG8X.js";import"./MenuTrigger-DYTy6gRU.js";import"./CompositeItem-TKwL8ljX.js";import"./ToolbarRootContext-SKC-tSE_.js";import"./getDisabledMountTransitionStyles-2QlVVVNK.js";import"./getPseudoElementBounds-CMqZrd8l.js";import"./chevron-down-DM4F0TBT.js";import"./index-HfPtYqs5.js";import"./error-CaLujl_f.js";import"./BaseCbacBanner-BfjbZlxe.js";import"./makeExternalStore-Cl23MqTd.js";import"./Tooltip-DFMAKWwg.js";import"./PopoverPopup-JPeURiGw.js";import"./toNumber-hmL91ORX.js";import"./useOsdkClient-BynZ5qpe.js";import"./DropdownField-B2Ernbck.js";import"./withOsdkMetrics-BKW2F_xA.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
