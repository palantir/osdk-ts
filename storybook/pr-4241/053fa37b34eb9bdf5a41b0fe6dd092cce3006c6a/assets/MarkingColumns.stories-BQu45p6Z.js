import{f as p,j as e}from"./iframe-AXAl_lkK.js";import{O as i}from"./object-table-DaeXsc4W.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CmOyIjss.js";import"./Table-D6yteXfE.js";import"./index-WwDO5TYI.js";import"./Dialog-hRq7aSV9.js";import"./cross-CQtMlVpl.js";import"./svgIconContainer-C41-1JgD.js";import"./useBaseUiId-Z03BErLK.js";import"./InternalBackdrop-hFYkRxh1.js";import"./composite-DhTcvoOi.js";import"./index-waMJrP0w.js";import"./index-BfO3FL2b.js";import"./index--PmXZ_gO.js";import"./useEventCallback-Djw-n0Ln.js";import"./SkeletonBar-B1COelSe.js";import"./LoadingCell-BQTu8WdY.js";import"./ColumnConfigDialog-DJKuo9pD.js";import"./DraggableList-DmbkwluN.js";import"./search-DSOJHa0m.js";import"./Input-rah5Oh7j.js";import"./useControlled-CwZsDCym.js";import"./Button-PnLOiyuX.js";import"./small-cross-Dbzif9Zo.js";import"./ActionButton-BVOTHsC2.js";import"./Checkbox-W6po3mzH.js";import"./useValueChanged-DttVAdvH.js";import"./CollapsiblePanel-DVYu9T5b.js";import"./MultiColumnSortDialog-BTDBrS5R.js";import"./MenuTrigger-BNvawPed.js";import"./CompositeItem-3bSE7nfu.js";import"./ToolbarRootContext-Bjje7bvz.js";import"./getDisabledMountTransitionStyles-Cg9BxDUe.js";import"./getPseudoElementBounds-CBJSNv6r.js";import"./chevron-down-Bzpri4FT.js";import"./index-DyLMV4YC.js";import"./error-DelAmSaO.js";import"./BaseCbacBanner-BX9rKr8l.js";import"./makeExternalStore-xudMkMrV.js";import"./Tooltip-OQ9Lr3E8.js";import"./PopoverPopup-P-aEfD8I.js";import"./debounce-DoYq5Fyf.js";import"./useOsdkClient-UMx75Wu3.js";import"./tick-BKo5ivYX.js";import"./DropdownField-zE-ANVSd.js";import"./isEqual-BvwLvsdD.js";import"./withOsdkMetrics-CZL_7UfS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
