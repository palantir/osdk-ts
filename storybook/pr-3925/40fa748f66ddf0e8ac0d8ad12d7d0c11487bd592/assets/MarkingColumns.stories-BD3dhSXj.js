import{f as p,j as e}from"./iframe-uWQw-aoo.js";import{O as i}from"./object-table-Dp7GhjPI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVjylv8h.js";import"./Table-DqmlfuPq.js";import"./index-00plDTMi.js";import"./Dialog-C0KqFrbo.js";import"./cross-BoNTQ4Rv.js";import"./svgIconContainer-DmbccLJt.js";import"./useBaseUiId-Ck6WuZAw.js";import"./InternalBackdrop-iaD87yNq.js";import"./composite-DHcKfgn9.js";import"./index-Cf88_5vk.js";import"./index-qKvH1J36.js";import"./index-CmHx58Lo.js";import"./useEventCallback-BkpTty7v.js";import"./SkeletonBar-BkINP_NN.js";import"./LoadingCell-CoOvoRuy.js";import"./ColumnConfigDialog-1DwLq4p-.js";import"./DraggableList-Co2N2rmb.js";import"./search-BdK0N4i0.js";import"./Input--UpB7VqG.js";import"./useControlled-DUIvla77.js";import"./Button-BmUOiVqe.js";import"./small-cross-BTOgfizl.js";import"./ActionButton-Dpwzo-DI.js";import"./Checkbox-CylUXUJ3.js";import"./useValueChanged-DEC2s52_.js";import"./CollapsiblePanel-DXjJkxFh.js";import"./MultiColumnSortDialog-CmlJzOx5.js";import"./MenuTrigger-4-VSJB-3.js";import"./CompositeItem-CDu6JeOP.js";import"./ToolbarRootContext-DVsy_bXc.js";import"./getDisabledMountTransitionStyles-Cvh2Xj1v.js";import"./getPseudoElementBounds-wBDFt1eN.js";import"./chevron-down-CbHcQ9sT.js";import"./index-DTQn9lDq.js";import"./error-GxXvf_3k.js";import"./BaseCbacBanner-CAAHt1df.js";import"./makeExternalStore-DeeFkPyS.js";import"./Tooltip-BcY8Te_I.js";import"./PopoverPopup-6m2VIyOL.js";import"./debounce-DrqyD1Dz.js";import"./useOsdkClient-CJzg9cBw.js";import"./tick-dsXhEjae.js";import"./DropdownField-Co3vy8Yb.js";import"./isEqual-LeAy7veH.js";import"./withOsdkMetrics-YSsi8cLt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
