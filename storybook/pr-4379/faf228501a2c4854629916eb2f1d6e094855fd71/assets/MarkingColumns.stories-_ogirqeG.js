import{f as p,j as e}from"./iframe-CvQ7w9cm.js";import{O as i}from"./object-table-BD6xXVB8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DQXfiblR.js";import"./Table-CCxHM7vg.js";import"./index-2iDqrev3.js";import"./Dialog-C8xu7YHc.js";import"./cross-xNEqMC60.js";import"./svgIconContainer-DN6Jj3b-.js";import"./useBaseUiId-Dm6kpRCs.js";import"./InternalBackdrop-CwQyz_cr.js";import"./composite-BwPwzWwu.js";import"./index-Ban7KgTd.js";import"./index-DRIyOfaO.js";import"./index-DnyowYhp.js";import"./useEventCallback-LDd7TooX.js";import"./SkeletonBar-xL8OjV1Y.js";import"./LoadingCell-gZ3203G9.js";import"./ColumnConfigDialog-DgAVaxF2.js";import"./DraggableList-D1fZWSgR.js";import"./search-D1f6LLc_.js";import"./Input-DHzSCAAb.js";import"./useControlled-D1WZsU2S.js";import"./Button-Cq3u6MOe.js";import"./small-cross-B8OuHgpK.js";import"./ActionButton-BLcdgpDk.js";import"./Checkbox-Bo7l3oec.js";import"./useValueChanged-g749mAHL.js";import"./CollapsiblePanel-KnikiUjX.js";import"./MultiColumnSortDialog-DreGQvh8.js";import"./MenuTrigger-DD5xa4vq.js";import"./CompositeItem-BhDBjBvE.js";import"./ToolbarRootContext-DjbW4ahc.js";import"./getDisabledMountTransitionStyles-BKY7Nc99.js";import"./getPseudoElementBounds-P4K_6V9u.js";import"./chevron-down-CVrOZp8I.js";import"./index-F4qb8FGJ.js";import"./error-S-GP8zQ9.js";import"./BaseCbacBanner-C9TbuCH_.js";import"./makeExternalStore-BQ0wnuzx.js";import"./Tooltip-C4qhRtMx.js";import"./isObject-HYSX2VgC.js";import"./debounce-DMAHBIBw.js";import"./useOsdkClient-CHxvOOOU.js";import"./tick-92o4E8CL.js";import"./DropdownField-DM7hESN-.js";import"./isEqual-BT_34lmI.js";import"./_baseIsEqual-BzDQjxTy.js";import"./withOsdkMetrics-YRpFiv4w.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
