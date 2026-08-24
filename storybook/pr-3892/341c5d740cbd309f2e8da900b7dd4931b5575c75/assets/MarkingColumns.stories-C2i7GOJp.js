import{f as p,j as e}from"./iframe-Dux2Qj3g.js";import{O as i}from"./object-table-D1_EyN1b.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bmm2hojr.js";import"./Table-URVL5IF2.js";import"./index-DYXOz2KI.js";import"./Dialog-D3t5BU2x.js";import"./cross-BN8ne7bQ.js";import"./svgIconContainer-BifzH97M.js";import"./useBaseUiId-D_xWZtaR.js";import"./InternalBackdrop-C19pElAH.js";import"./composite-ExUcYNpU.js";import"./index-8ZfSX0Ah.js";import"./index-ChzWjjSE.js";import"./index-BgSd39KN.js";import"./useEventCallback-BRs2rNZa.js";import"./SkeletonBar-DjvHpYhU.js";import"./LoadingCell-Bu6ye8hm.js";import"./ColumnConfigDialog-Dqru0J9z.js";import"./DraggableList-BooAKe5B.js";import"./search-CZ5yXAIw.js";import"./Input-CmbycQCS.js";import"./useControlled-v5c73Hs6.js";import"./Button-DqQZXePg.js";import"./small-cross-DO46gXNN.js";import"./ActionButton-BV9Vc2OE.js";import"./Checkbox-B-0McJWo.js";import"./useValueChanged-BvHTePul.js";import"./CollapsiblePanel-DKqzGBfA.js";import"./MultiColumnSortDialog-DPe5lHO5.js";import"./MenuTrigger-DasyMhWF.js";import"./CompositeItem-0lWnRnJ1.js";import"./ToolbarRootContext-BLtnGACK.js";import"./getDisabledMountTransitionStyles-R5nWDe4s.js";import"./getPseudoElementBounds-CRIgf0ZE.js";import"./chevron-down-MKh3Y1PC.js";import"./index-CTN-iZVf.js";import"./error-Dn9sEgKj.js";import"./BaseCbacBanner-BbT4UFKk.js";import"./makeExternalStore-BDAriLIM.js";import"./Tooltip-RggE_7g1.js";import"./PopoverPopup-0sML79DS.js";import"./debounce-Bz72JVsr.js";import"./useOsdkClient-DANBmGn-.js";import"./tick-Dx1-rbQT.js";import"./DropdownField-Du4rKZP5.js";import"./useDebouncedCallback-lmpQIr4o.js";import"./withOsdkMetrics-BlPb20x4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
