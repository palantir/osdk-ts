import{f as p,j as e}from"./iframe-yLJxkVzB.js";import{O as i}from"./object-table-BjJ7VNCo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BvwH_ZL2.js";import"./index-nIKj5uY4.js";import"./Dialog-2IuBkREG.js";import"./cross-Owpme9BE.js";import"./svgIconContainer-TK-Ji3z6.js";import"./useBaseUiId-C2QLSnG8.js";import"./InternalBackdrop-BBxC8DKB.js";import"./composite-dCt9YpUk.js";import"./index-BA5McYn9.js";import"./index-DfLe8XpU.js";import"./index-CozEKZMT.js";import"./useEventCallback-fdgxuXgo.js";import"./SkeletonBar-DZZlKsf1.js";import"./LoadingCell-CUdyrdoA.js";import"./ColumnConfigDialog-DQt6LAOo.js";import"./DraggableList-Dl4LF87d.js";import"./search-B5yRV9xp.js";import"./Input-CPmagxfJ.js";import"./useControlled-CJJ5Ltiy.js";import"./Button-wUttMbxG.js";import"./small-cross-CG34SVyC.js";import"./ActionButton-Clr_BQ-v.js";import"./Checkbox-Cy7DSLTa.js";import"./useValueChanged-BAqw25z8.js";import"./CollapsiblePanel-DgS9WHma.js";import"./MultiColumnSortDialog-DXJkaF5P.js";import"./MenuTrigger-CTEiO2Bu.js";import"./CompositeItem-Bteys6EZ.js";import"./ToolbarRootContext-LMgR1PX5.js";import"./getDisabledMountTransitionStyles-Dokq89QC.js";import"./getPseudoElementBounds-B28lIi_Q.js";import"./chevron-down-NEt8c7o4.js";import"./index-vF_-Jyj8.js";import"./error-CkjCJkJz.js";import"./BaseCbacBanner-BLXv67Yn.js";import"./makeExternalStore-BrbywmR6.js";import"./Tooltip-D82BZFwQ.js";import"./PopoverPopup-DvlntHwZ.js";import"./debounce-CAdN6VB_.js";import"./useOsdkClient-BeKNNCDt.js";import"./tick-BN9LdMqy.js";import"./DropdownField-BBTmJj7c.js";import"./isEqual-BU8jNfNb.js";import"./withOsdkMetrics-EW4d60np.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
