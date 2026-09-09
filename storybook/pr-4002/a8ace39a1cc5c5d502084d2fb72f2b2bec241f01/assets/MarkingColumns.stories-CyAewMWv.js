import{f as p,j as e}from"./iframe-Dhq7AaUP.js";import{O as i}from"./object-table-BsDnAea4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5t1nGT4.js";import"./Table-fHRNdmYO.js";import"./index-505BPbMk.js";import"./Dialog-D9RsVnl0.js";import"./cross-BTExjjDl.js";import"./svgIconContainer-D5rjHQJh.js";import"./useBaseUiId-8_wbyGGA.js";import"./InternalBackdrop-BwExNyw1.js";import"./composite-m_TTOmrH.js";import"./index-5i4D4FjR.js";import"./index-Cn7LZsiB.js";import"./index-Ds9Aeuo4.js";import"./useEventCallback-DrWx2I0p.js";import"./SkeletonBar-Dfu2XLH1.js";import"./LoadingCell-DOFmpZhf.js";import"./ColumnConfigDialog--25Pujtc.js";import"./DraggableList-0_lK1LFX.js";import"./search-D9UNy25Q.js";import"./Input-BLnXCCTA.js";import"./useControlled-CWg50-5h.js";import"./Button-DHokje8p.js";import"./small-cross-C-lwhhcT.js";import"./ActionButton-KqE6rva2.js";import"./Checkbox-C_uTtVWa.js";import"./useValueChanged-Ba8xukC7.js";import"./CollapsiblePanel-B1W1icVw.js";import"./MultiColumnSortDialog-4PH33oyq.js";import"./MenuTrigger-ggSaI92l.js";import"./CompositeItem-CmAuNbAQ.js";import"./ToolbarRootContext-BPtqJH5V.js";import"./getDisabledMountTransitionStyles-CskAKAe0.js";import"./getPseudoElementBounds-DfU8GLtR.js";import"./chevron-down-D4blBvUy.js";import"./index-MT3wqTUP.js";import"./error-_SQQqIaC.js";import"./BaseCbacBanner-CASdGgiJ.js";import"./makeExternalStore-v3dRS4Sg.js";import"./Tooltip-DNpuDERk.js";import"./PopoverPopup-CbuPYz_R.js";import"./debounce-DxmZJnBK.js";import"./useOsdkClient-CIEi34cT.js";import"./tick-BxbL6Sum.js";import"./DropdownField-CfokxXbx.js";import"./isEqual-Bw6Bno3N.js";import"./withOsdkMetrics-CQGMBuHv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
