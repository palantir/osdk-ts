import{f as p,j as e}from"./iframe-D4YDcgkV.js";import{O as i}from"./object-table-CQVl6PEc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DCpW9ncL.js";import"./Table-CC9yKcnM.js";import"./index-8cY8PtKc.js";import"./Dialog--FEoWfuM.js";import"./cross-Behni1B5.js";import"./svgIconContainer-COB7RfBn.js";import"./useBaseUiId-Ce1LHnbR.js";import"./InternalBackdrop-QtP5wFDT.js";import"./composite-B2mz0pd-.js";import"./index-BDXEDFqG.js";import"./index-D59BFBqo.js";import"./index-D43eNy-E.js";import"./useEventCallback-BwE5rOmy.js";import"./SkeletonBar-CzsWUOUE.js";import"./LoadingCell-BBX5gfRn.js";import"./ColumnConfigDialog-BJ_ASjlT.js";import"./DraggableList-CVz1UPCT.js";import"./search-DK0Hi7mb.js";import"./Input-Ddw8KtcR.js";import"./useControlled-Bj0_koJm.js";import"./Button--v4W1QZO.js";import"./small-cross-BbdSAPDn.js";import"./ActionButton-CvGZig-A.js";import"./Checkbox-DoYKUy50.js";import"./useValueChanged-CI55RSfr.js";import"./CollapsiblePanel-CSS__w8o.js";import"./MultiColumnSortDialog-BYHB62Sd.js";import"./MenuTrigger-CYLhsVUK.js";import"./CompositeItem-CnYlQOQU.js";import"./ToolbarRootContext-BCQVnjEL.js";import"./getDisabledMountTransitionStyles-8crufxW_.js";import"./getPseudoElementBounds-B5M65vT3.js";import"./chevron-down-BuYLfoea.js";import"./index-DFYfgBX1.js";import"./error-CiQk9egS.js";import"./BaseCbacBanner-BUp57Dg7.js";import"./makeExternalStore-CBSa4JL4.js";import"./Tooltip-mhyE4ARD.js";import"./PopoverPopup-IdL2xFMr.js";import"./debounce-Dfrp39m8.js";import"./useOsdkClient-JcjdO1LI.js";import"./tick-LVA-wE2q.js";import"./DropdownField-BQkaE1vz.js";import"./isEqual-CVZJBzTI.js";import"./withOsdkMetrics-BfFmFbhV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
