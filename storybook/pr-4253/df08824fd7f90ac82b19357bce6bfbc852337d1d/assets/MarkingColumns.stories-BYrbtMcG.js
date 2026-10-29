import{f as p,j as e}from"./iframe-2fyz7Bbq.js";import{O as i}from"./object-table-DTsycy5s.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-FOou-mrh.js";import"./Table-gi5CAIvR.js";import"./index-w9tQLZ4b.js";import"./Dialog-B6oPQQYk.js";import"./cross-FzaN-G0q.js";import"./svgIconContainer-CyZL2Xnt.js";import"./useBaseUiId-Dhg2ncZ0.js";import"./InternalBackdrop-BtkGVef4.js";import"./composite-B2qtiWqW.js";import"./index-2dmmxfKi.js";import"./index-BVjs4Tt3.js";import"./index-D6LVVKRT.js";import"./useEventCallback-UvUwHhfn.js";import"./SkeletonBar-C3vpEq_4.js";import"./LoadingCell-BVnG1Q6E.js";import"./ColumnConfigDialog-Z6LmvzGj.js";import"./DraggableList-B9RB01Oo.js";import"./search-Cte9a7SC.js";import"./Input-BME0--u-.js";import"./useControlled-DBeA7CGw.js";import"./Button-CEYlZhfx.js";import"./small-cross-BrCxHajj.js";import"./ActionButton-DopClacG.js";import"./Checkbox-Ym-MOukq.js";import"./useValueChanged-DqgUGOFJ.js";import"./CollapsiblePanel-BaQP6E3J.js";import"./MultiColumnSortDialog-CBbZFdhX.js";import"./MenuTrigger-CpWAGEsx.js";import"./CompositeItem-DxQDXycs.js";import"./ToolbarRootContext-D0NvUOkn.js";import"./getDisabledMountTransitionStyles-DUL0cjvK.js";import"./getPseudoElementBounds-nIhWr_xb.js";import"./chevron-down-IEWgGiNw.js";import"./index-CV5ZhaCs.js";import"./error-DQou1LSG.js";import"./BaseCbacBanner-BNLddCcH.js";import"./makeExternalStore-wF1R62-h.js";import"./Tooltip-BzXO1CqE.js";import"./PopoverPopup-Djz7xAaZ.js";import"./debounce-BsOS8FIl.js";import"./useOsdkClient-CFdcyAcU.js";import"./tick-DxXdptn1.js";import"./DropdownField-D9o_O7ux.js";import"./isEqual-DRIBlFhv.js";import"./withOsdkMetrics-BgEBqHFS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
