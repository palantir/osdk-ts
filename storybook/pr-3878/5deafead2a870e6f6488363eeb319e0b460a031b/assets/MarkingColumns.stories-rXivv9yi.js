import{f as p,j as e}from"./iframe-BoMYVZ8P.js";import{O as i}from"./object-table-Co3y61KL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BK2UTj0g.js";import"./Table-XGt5dfzF.js";import"./index-CWGS1jbk.js";import"./Dialog-dGxgbeh7.js";import"./cross-C8gHFhcw.js";import"./svgIconContainer-BVTvLC-e.js";import"./useBaseUiId-B21DQZ5t.js";import"./InternalBackdrop-B8fkQuwz.js";import"./composite-KNqjoGAg.js";import"./index-BhWLpeRw.js";import"./index-ClsDrsL5.js";import"./index-BUL6qdYX.js";import"./useEventCallback-CE7eeu8C.js";import"./SkeletonBar-Dv0Y2UuW.js";import"./LoadingCell-DFwTonfQ.js";import"./ColumnConfigDialog-Ck894DdU.js";import"./DraggableList-Cnf7C36G.js";import"./search-DXLrUQjP.js";import"./Input-BTERu37S.js";import"./useControlled-5CvF-qs0.js";import"./Button-B6yMNcTW.js";import"./small-cross-BlU6xsJJ.js";import"./ActionButton-BBxv047F.js";import"./Checkbox-f9_0ybPg.js";import"./useValueChanged-ZQkTxx0f.js";import"./CollapsiblePanel-DyxxtPmZ.js";import"./MultiColumnSortDialog-k7xUY6Eq.js";import"./MenuTrigger-C5KjlB94.js";import"./CompositeItem-Dh_pkc7t.js";import"./ToolbarRootContext-vNggTixJ.js";import"./getDisabledMountTransitionStyles-2namnzPQ.js";import"./getPseudoElementBounds-CjFtrMwo.js";import"./chevron-down-xbPqDJA1.js";import"./index-XV4DS-Dv.js";import"./error-6dVeQLZ0.js";import"./BaseCbacBanner-9RL_iOqo.js";import"./makeExternalStore-DnUcW7Zh.js";import"./Tooltip-DmCHNO1q.js";import"./PopoverPopup-Cj48muFO.js";import"./debounce-CQ_hqDhi.js";import"./useOsdkClient-C2JlPVLC.js";import"./tick-Ci6gbHCk.js";import"./DropdownField-B_NajMDf.js";import"./isEqual-DBIn-C9s.js";import"./withOsdkMetrics-DqIIQvI6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
