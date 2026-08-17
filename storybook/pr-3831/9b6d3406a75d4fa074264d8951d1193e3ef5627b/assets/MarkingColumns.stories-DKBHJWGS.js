import{f as p,j as e}from"./iframe-CP7QTMjD.js";import{O as i}from"./object-table-D9Dw5A1S.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bd8suxmt.js";import"./Table-WYu1FoLA.js";import"./index-BPsbF1qe.js";import"./Dialog-CcSBw3cV.js";import"./cross-DFB4dF8m.js";import"./svgIconContainer-BrNHieP3.js";import"./useBaseUiId-BaO1Z6ca.js";import"./InternalBackdrop-Cing5ETY.js";import"./composite-CVUK9pNM.js";import"./index-CcGoeXSV.js";import"./index-DJ7K6xAB.js";import"./index-B8n6SXrn.js";import"./useEventCallback-DsWKuR0v.js";import"./SkeletonBar-D5qgVXpA.js";import"./LoadingCell-DGzNCCL0.js";import"./ColumnConfigDialog-I_9AraPf.js";import"./DraggableList-MRdSsgMG.js";import"./search-BhBPvxZt.js";import"./Input-DJXNsHex.js";import"./useControlled-qxdzJ-6o.js";import"./Button-COqGdDuO.js";import"./small-cross-BqZiuEiq.js";import"./ActionButton-DbYjNuD3.js";import"./Checkbox-NO0w5BLz.js";import"./useValueChanged-DQ3D-BRv.js";import"./CollapsiblePanel-bhxAfR0e.js";import"./MultiColumnSortDialog-DopPnQeE.js";import"./MenuTrigger-BdHpW3oz.js";import"./CompositeItem-CZgkbGHU.js";import"./ToolbarRootContext-DiyEBXMz.js";import"./getDisabledMountTransitionStyles-Cv6vIEs8.js";import"./getPseudoElementBounds-RlrWvf9k.js";import"./chevron-down-BXz7fXPz.js";import"./index-Dee7JgMQ.js";import"./error-CB1q8I3x.js";import"./BaseCbacBanner-CVuUMrb-.js";import"./makeExternalStore-Bl7e9I-a.js";import"./Tooltip-BoUewqjJ.js";import"./PopoverPopup-DA2udT_l.js";import"./debounce-DNDQd4GO.js";import"./useOsdkClient-Cme5jE9K.js";import"./tick-BDk4I-rW.js";import"./DropdownField-DBFC8z6r.js";import"./isEqual-8KxI1bXH.js";import"./withOsdkMetrics-BE1P-0Lv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
