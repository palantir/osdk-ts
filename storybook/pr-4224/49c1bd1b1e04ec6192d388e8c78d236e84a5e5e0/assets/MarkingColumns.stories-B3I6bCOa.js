import{f as p,j as e}from"./iframe-C4UMSUV8.js";import{O as i}from"./object-table-Q8UrgRqd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BqsIy_YL.js";import"./Table-CctLNSxZ.js";import"./index-Dlv7asCS.js";import"./Dialog-DfvM1sIK.js";import"./cross-DzO2_pjl.js";import"./svgIconContainer-AOO7GD-s.js";import"./useBaseUiId-BfnaHgsG.js";import"./InternalBackdrop-_W1XqsYG.js";import"./composite-BaqTaPKU.js";import"./index-Dm12TBSV.js";import"./index-DMrzx1Mz.js";import"./index-C9vtPXO1.js";import"./useEventCallback-DafiBAM-.js";import"./SkeletonBar-BlB5K85_.js";import"./LoadingCell-BQ1ZcdLP.js";import"./ColumnConfigDialog-Bij9Mv3S.js";import"./DraggableList-DTr2Rc6q.js";import"./search-D1rWsfme.js";import"./Input-Dd7hmS3r.js";import"./useControlled-DaMNSDAG.js";import"./Button-3fs9_LlW.js";import"./small-cross-CbMP9reg.js";import"./ActionButton-DPjqFZOR.js";import"./Checkbox-AayFk0MD.js";import"./useValueChanged-GkMCatyW.js";import"./CollapsiblePanel-CT-3U1A3.js";import"./MultiColumnSortDialog-DsWc4H6V.js";import"./MenuTrigger-KLM0HTCA.js";import"./CompositeItem-DdxiUYfL.js";import"./ToolbarRootContext-DVOP2BC1.js";import"./getDisabledMountTransitionStyles-CQ_yz0-6.js";import"./getPseudoElementBounds-CvXSJ4vT.js";import"./chevron-down-OaulZx0F.js";import"./index-BlMVnv-1.js";import"./error-Dz-jjHSU.js";import"./BaseCbacBanner-CpMpxxo1.js";import"./makeExternalStore-CmEuGlMk.js";import"./Tooltip-DEV4zdHe.js";import"./PopoverPopup-N5V--xdD.js";import"./debounce-CZlA4PRB.js";import"./useOsdkClient-C3bf-TDO.js";import"./tick-BvTPrsR3.js";import"./DropdownField-CdX1mzab.js";import"./isEqual-B4AyH633.js";import"./withOsdkMetrics-DT43r1D8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
