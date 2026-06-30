import{f as n,j as t}from"./iframe-DLyQaqpF.js";import{O as p}from"./object-table-CTL-bjOb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C-e9bxMY.js";import"./Table-IlmCorYQ.js";import"./index-7upvneg1.js";import"./Dialog-QIKP8tRU.js";import"./cross-D2gbBT1d.js";import"./svgIconContainer-DWDDdKTE.js";import"./useBaseUiId-UuMgtbSi.js";import"./InternalBackdrop-eT8qcf8n.js";import"./composite-CA2Ka0zc.js";import"./index-BqCwBdPB.js";import"./index-B9IWF8Og.js";import"./index-FHoX54VO.js";import"./useEventCallback-C7mS3DKi.js";import"./SkeletonBar-CCvryGJX.js";import"./LoadingCell-G9BH13tW.js";import"./ColumnConfigDialog-Di8S_sgK.js";import"./DraggableList-BlI4_FZF.js";import"./search-CQt5paG8.js";import"./Input-DIP4Tvvh.js";import"./useControlled-ZIKIXp5D.js";import"./Button-BQRCdod0.js";import"./small-cross-CwIKl9iB.js";import"./ActionButton-C00s-dCH.js";import"./Checkbox-BIN480y8.js";import"./minus-Baj_-Rxs.js";import"./tick-CZdCfrnF.js";import"./useValueChanged-vYXIxlHh.js";import"./caret-down-B7WRGSAE.js";import"./CollapsiblePanel-DxSU3gGY.js";import"./MultiColumnSortDialog-XlULzT-P.js";import"./MenuTrigger-D5Gw0d49.js";import"./CompositeItem-7PPYSQCL.js";import"./ToolbarRootContext-B2nN4Zah.js";import"./getDisabledMountTransitionStyles-CyUQV4jz.js";import"./getPseudoElementBounds-BZgj4mN5.js";import"./chevron-down-CkglZp0i.js";import"./index-DRPFHYZj.js";import"./error-DX7nP_6B.js";import"./BaseCbacBanner-3PA2ZimL.js";import"./makeExternalStore-B3q1dpq0.js";import"./Tooltip-Ce36bqpQ.js";import"./PopoverPopup-BdjA_EMn.js";import"./toNumber-PpyWuKWW.js";import"./useOsdkClient-BQ4OnmB6.js";import"./DropdownField-Ohlxx2XH.js";import"./withOsdkMetrics-CMPmtg6O.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
