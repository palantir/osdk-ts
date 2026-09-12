import{f as p,j as e}from"./iframe-kpUBKcBo.js";import{O as i}from"./object-table-DVI3tGuH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CEFfxAxV.js";import"./Table-BiN_aC4V.js";import"./index-CzIfSD2x.js";import"./Dialog-hBnbAc_e.js";import"./cross-CsmLqXcs.js";import"./svgIconContainer-D1XUyLZc.js";import"./useBaseUiId-eq47N9Yh.js";import"./InternalBackdrop-DVlojBH2.js";import"./composite-DqwQEgXz.js";import"./index-Cg38QLat.js";import"./index-nssiJGD2.js";import"./index-6t1ngEdK.js";import"./useEventCallback-BdQ28hwQ.js";import"./SkeletonBar-DS70zOH6.js";import"./LoadingCell-LNiY6iol.js";import"./ColumnConfigDialog-DIRwtqwm.js";import"./DraggableList-D6O5_Ce_.js";import"./search-D4qHiAMZ.js";import"./Input-xZVHbMZj.js";import"./useControlled-C4e8W1YD.js";import"./Button-IGB5Y7yU.js";import"./small-cross-CiRkoian.js";import"./ActionButton-Ro556bBe.js";import"./Checkbox-BMh40uEe.js";import"./useValueChanged-DJoTowgi.js";import"./CollapsiblePanel-BOpgrZXx.js";import"./MultiColumnSortDialog-CIWBS5RX.js";import"./MenuTrigger-DduVQheP.js";import"./CompositeItem-ChylY6HS.js";import"./ToolbarRootContext-CcFhYs5t.js";import"./getDisabledMountTransitionStyles-_MqiT5fI.js";import"./getPseudoElementBounds-DZf2g3Nn.js";import"./chevron-down-CeKigphE.js";import"./index-fVh42c2P.js";import"./error-DS4cKU2L.js";import"./BaseCbacBanner-BFifP6cY.js";import"./makeExternalStore-DQTLFAQr.js";import"./Tooltip-uU_kBQ9q.js";import"./PopoverPopup-D3WckLAC.js";import"./debounce-ClFDaysW.js";import"./useOsdkClient-BcqrqAzc.js";import"./tick-BmvMnIBg.js";import"./DropdownField-BrydZO3u.js";import"./isEqual-Bqos626r.js";import"./withOsdkMetrics-DpMhi7xT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
