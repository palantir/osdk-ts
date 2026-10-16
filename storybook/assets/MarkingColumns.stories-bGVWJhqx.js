import{f as p,j as e}from"./iframe-CE0i8pTB.js";import{O as i}from"./object-table-BqB2N9IL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C1VfsXyS.js";import"./index-B12pLj4f.js";import"./Dialog-B5WFHcUY.js";import"./cross-B7SwfS_M.js";import"./svgIconContainer-B8VYHmcD.js";import"./useBaseUiId-DyVtWBOW.js";import"./InternalBackdrop-BV_Rke0C.js";import"./composite-C3AQHTlr.js";import"./index-D0yQsmtH.js";import"./index-BxLsqAz-.js";import"./index-CWtwdWGx.js";import"./useEventCallback-OX93Cv40.js";import"./SkeletonBar-CseY9H7t.js";import"./LoadingCell-BhkoJpZq.js";import"./ColumnConfigDialog-EXxClbRv.js";import"./DraggableList-DoIC54Mt.js";import"./search-B_4eoJVo.js";import"./Input-Bhr3RBZS.js";import"./useControlled-CDXR85QA.js";import"./Button-CEwAliaC.js";import"./small-cross-Cqq_EZqy.js";import"./ActionButton-B8HjZLzN.js";import"./Checkbox-BQpLae3k.js";import"./useValueChanged-BNETI0SY.js";import"./CollapsiblePanel-BXnErSCf.js";import"./MultiColumnSortDialog-B8dHVGrh.js";import"./MenuTrigger-BtCRNzYm.js";import"./CompositeItem-Ei3HHm0y.js";import"./ToolbarRootContext-DUj8Vy75.js";import"./getDisabledMountTransitionStyles-C6UHxgiN.js";import"./getPseudoElementBounds-BNWxnzVQ.js";import"./chevron-down-D2N1M9YY.js";import"./index-DaY6cbYZ.js";import"./error-WOehnpts.js";import"./BaseCbacBanner-CP4iN72h.js";import"./makeExternalStore-CD97K3xm.js";import"./Tooltip-C8uGck5Z.js";import"./PopoverPopup-DjwUMmwA.js";import"./debounce-6QIE8t0g.js";import"./useOsdkClient-DcXY1zGj.js";import"./tick-_bZ7VOxl.js";import"./DropdownField-Drtn2NQI.js";import"./isEqual-BGT09CQh.js";import"./withOsdkMetrics-DRff-iWr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
