import{f as p,j as e}from"./iframe-DTeHu6hN.js";import{O as i}from"./object-table-03npjXVR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJczF-mP.js";import"./Table-CTWBUyTO.js";import"./index-GlGN6f0J.js";import"./Dialog-Ba8dstj7.js";import"./cross-D9lLXQ9E.js";import"./svgIconContainer-BK0RrMLF.js";import"./useBaseUiId-B6SeHPK4.js";import"./InternalBackdrop-D2EW-JX2.js";import"./composite-DPUdrTzN.js";import"./index-oDiTKYqb.js";import"./index-D41-ZHpX.js";import"./index-CvHpteUf.js";import"./useEventCallback-RgqIl7rB.js";import"./SkeletonBar-Ba3CJoC6.js";import"./LoadingCell-D1El-mWl.js";import"./ColumnConfigDialog-Cyzu2-5J.js";import"./DraggableList-Cw1L_Iwo.js";import"./search-DAVjXXcT.js";import"./Input-DdoqLgIV.js";import"./useControlled-hZDpOyJh.js";import"./isEqual-BV8A95Gh.js";import"./isObject-xYxJ2tLM.js";import"./Button-CLs8AEax.js";import"./ActionButton-D8n1TYlU.js";import"./Checkbox-BfVX8uzg.js";import"./useValueChanged-BsjZlgdf.js";import"./CollapsiblePanel-BycloGE-.js";import"./MultiColumnSortDialog-D_f41uIV.js";import"./MenuTrigger-BL5OXGpm.js";import"./CompositeItem-Ci805EOV.js";import"./ToolbarRootContext-DTRaSwpU.js";import"./getDisabledMountTransitionStyles-DqirUZeo.js";import"./getPseudoElementBounds-BX4RifU_.js";import"./chevron-down-D59gcI1r.js";import"./index-CIRwu5si.js";import"./error-JVP3oq4B.js";import"./BaseCbacBanner-BSxjuEX2.js";import"./makeExternalStore-CID1p47X.js";import"./Tooltip-DGSlJk_v.js";import"./PopoverPopup-yWpi1R68.js";import"./toNumber-oWWfNhKI.js";import"./useOsdkClient-DSxJja1U.js";import"./tick-DG2AQnY-.js";import"./DropdownField-DUMxzE_l.js";import"./withOsdkMetrics-D89cB6fV.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
