import{f as p,j as e}from"./iframe-CQJeOMd0.js";import{O as i}from"./object-table-BaogrCgp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DYgGZ5xf.js";import"./Table-ByZuZRpi.js";import"./index-ZrJt1iGx.js";import"./Dialog-DuFQkJ75.js";import"./cross-DwSzg9Eu.js";import"./svgIconContainer-By2ff4hT.js";import"./useBaseUiId-UYsDOBIH.js";import"./InternalBackdrop-CKGnsbEW.js";import"./composite-B-fR2hSY.js";import"./index-Bfc4h_Hy.js";import"./index-CazEHWy5.js";import"./index-CbOC1UiM.js";import"./useEventCallback-4rx4kNgb.js";import"./SkeletonBar-CJs85s_z.js";import"./LoadingCell-CYH9nq0A.js";import"./ColumnConfigDialog-BNs0bEEk.js";import"./DraggableList-BfqmQOLq.js";import"./search-CdEhbnO_.js";import"./Input-D3KZDZ9i.js";import"./useControlled-DiW8shJx.js";import"./Button-CNntGJtS.js";import"./small-cross-CMRpYjz3.js";import"./ActionButton-C2rYN8Vu.js";import"./Checkbox-D0poUwAI.js";import"./useValueChanged-Ou9HudZH.js";import"./CollapsiblePanel-VDI8WSX1.js";import"./MultiColumnSortDialog-BfrQpE1H.js";import"./MenuTrigger-CvrPqGqN.js";import"./CompositeItem-BlyLfX91.js";import"./ToolbarRootContext-BZfxaQ_Q.js";import"./getDisabledMountTransitionStyles-DrAx-qMj.js";import"./getPseudoElementBounds-Pki9YJrO.js";import"./chevron-down-BsREGsZS.js";import"./index-DTaUM21t.js";import"./error-pXwI3jKa.js";import"./BaseCbacBanner-0YdtQ9d0.js";import"./makeExternalStore-D7pp3thE.js";import"./Tooltip-tmOp52T4.js";import"./PopoverPopup-huW2-2Wz.js";import"./debounce-Bq_e46wp.js";import"./useOsdkClient-DTbHiSsE.js";import"./tick-hTuAcIOp.js";import"./DropdownField-BCiB5LRe.js";import"./isEqual-DokZbVzi.js";import"./withOsdkMetrics-BvV17iLP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
