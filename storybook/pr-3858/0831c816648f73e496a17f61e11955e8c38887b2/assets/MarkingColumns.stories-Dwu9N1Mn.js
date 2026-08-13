import{f as p,j as e}from"./iframe-KsjdEO7I.js";import{O as i}from"./object-table-CGHR2NCM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C0pJc9t5.js";import"./Table-DQtM9mY-.js";import"./index-BZRO3JpH.js";import"./Dialog-D41qlHqs.js";import"./cross-CWhIw0VB.js";import"./svgIconContainer-BGAWhN04.js";import"./useBaseUiId-C5JviLwb.js";import"./InternalBackdrop-CVGwHL6o.js";import"./composite-ByWaRsZl.js";import"./index-DvmmtGln.js";import"./index-C8vmqYWN.js";import"./index-Ba1VmSUV.js";import"./useEventCallback-Qxkrrdjq.js";import"./SkeletonBar-yHuYGeJF.js";import"./LoadingCell-9tKhkWXf.js";import"./ColumnConfigDialog-BexFVn6M.js";import"./DraggableList-BlcM5wlm.js";import"./search-DGehlEKr.js";import"./Input-C9qK0nTt.js";import"./useControlled-gVlU2BHL.js";import"./Button-ilD2Ywfa.js";import"./small-cross-BfS99eaU.js";import"./ActionButton-DeueSjTK.js";import"./Checkbox-C_aOxFYa.js";import"./useValueChanged-DsE0A3ks.js";import"./CollapsiblePanel-d3N9ZnYl.js";import"./MultiColumnSortDialog-BQ4SwnnC.js";import"./MenuTrigger-Bh1wIPnk.js";import"./CompositeItem-CmqFJQHv.js";import"./ToolbarRootContext-Dc9sSpUa.js";import"./getDisabledMountTransitionStyles-DYmcQNg5.js";import"./getPseudoElementBounds-CF4Nu5Z4.js";import"./chevron-down-CUpqK55l.js";import"./index-BhHreNeB.js";import"./error-s9sAxwq2.js";import"./BaseCbacBanner-DpbKijSV.js";import"./makeExternalStore-C8Usq2x_.js";import"./Tooltip-D437-ORi.js";import"./PopoverPopup-COwg5rea.js";import"./toNumber-sTi_usYo.js";import"./useOsdkClient-DI6J8JGK.js";import"./tick-BvcefncJ.js";import"./DropdownField-U-n8RG-x.js";import"./withOsdkMetrics-BAP0ApJK.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
