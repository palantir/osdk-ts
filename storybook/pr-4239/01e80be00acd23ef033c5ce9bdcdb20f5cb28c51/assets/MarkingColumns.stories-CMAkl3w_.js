import{f as p,j as e}from"./iframe-Dm6fEHSl.js";import{O as i}from"./object-table-DnFCrXZi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bqb1rZ_1.js";import"./Table-BihK-ML9.js";import"./index-0oZqapnL.js";import"./Dialog-DBnyMnw4.js";import"./cross-Bt5YxcTr.js";import"./svgIconContainer-DQYcgJEu.js";import"./useBaseUiId-DheuxufY.js";import"./InternalBackdrop-CWYVY9cc.js";import"./composite-Dro01qd5.js";import"./index-B9LtevwQ.js";import"./index-CFKD3KmR.js";import"./index-DLRHryCX.js";import"./useEventCallback-CRhDiDVJ.js";import"./SkeletonBar-CuUg8o4-.js";import"./LoadingCell-BpReS1Uv.js";import"./ColumnConfigDialog-CHcXL66b.js";import"./DraggableList-CsP1XmWO.js";import"./search-C7KxNUeL.js";import"./Input-C1Iecv69.js";import"./useControlled-BNqne-mh.js";import"./Button-DtwGlaif.js";import"./small-cross-DZMVW_os.js";import"./ActionButton-BcLZ8dUx.js";import"./Checkbox-CE6rrq8N.js";import"./useValueChanged-DdVY_JQU.js";import"./CollapsiblePanel-CPNer4jD.js";import"./MultiColumnSortDialog-liHRsGTS.js";import"./MenuTrigger-bZ6gnwnL.js";import"./CompositeItem-BlaUOs4g.js";import"./ToolbarRootContext-2ybRt6Lm.js";import"./getDisabledMountTransitionStyles-C5jTdX4L.js";import"./getPseudoElementBounds-B0DqqRGA.js";import"./chevron-down-CWH7kW7k.js";import"./index-nzPy6itP.js";import"./error-CtkZoki4.js";import"./BaseCbacBanner-DvfiGpMO.js";import"./makeExternalStore-Ctl6TIlE.js";import"./Tooltip-R_AQOimg.js";import"./PopoverPopup-DXuTelnl.js";import"./debounce-D-AGcw8s.js";import"./useOsdkClient-CBlvauOc.js";import"./tick-QJWik-78.js";import"./DropdownField-DGrJZFlx.js";import"./isEqual-CuOjpzUY.js";import"./withOsdkMetrics-BttmRgw9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
