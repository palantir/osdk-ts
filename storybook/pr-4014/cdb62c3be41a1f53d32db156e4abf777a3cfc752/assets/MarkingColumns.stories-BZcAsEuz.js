import{f as p,j as e}from"./iframe-BYyS3cG-.js";import{O as i}from"./object-table-BdAQglbf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BXbEnpda.js";import"./Table-DdldgeZT.js";import"./index-BXxvc4Z_.js";import"./Dialog-DSUrjl3E.js";import"./cross-K2cagqs8.js";import"./svgIconContainer-Dk59z4vq.js";import"./useBaseUiId-CGKSvxjI.js";import"./InternalBackdrop-80Nj_94O.js";import"./composite-ZjlJlMFO.js";import"./index-D2gKK-6z.js";import"./index-DvCEvxA7.js";import"./index-2l1FSn_M.js";import"./useEventCallback-CVm-QX4M.js";import"./SkeletonBar-BaIiRjVZ.js";import"./LoadingCell-DnoRe_V7.js";import"./ColumnConfigDialog-DbGm1Quk.js";import"./DraggableList-DPCdR4Np.js";import"./search-Can7HIrw.js";import"./Input-C27Z_igv.js";import"./useControlled-Br7xWf3M.js";import"./Button-DO8jDkqh.js";import"./small-cross-j0KzCO-W.js";import"./ActionButton-DudpqNmL.js";import"./Checkbox-Cw0OjqdD.js";import"./useValueChanged-R62FXs_N.js";import"./CollapsiblePanel-74GeumXY.js";import"./MultiColumnSortDialog--YgHyIyy.js";import"./MenuTrigger-gGiqxUYZ.js";import"./CompositeItem-GKFr0mZp.js";import"./ToolbarRootContext-dI5H3gst.js";import"./getDisabledMountTransitionStyles-Dqbr5jIl.js";import"./getPseudoElementBounds-Do85zsEf.js";import"./chevron-down-QowdN_dJ.js";import"./index-Bi1g2iim.js";import"./error-BijATQGq.js";import"./BaseCbacBanner-VgUAaZoc.js";import"./makeExternalStore-DxNQWYP7.js";import"./Tooltip-BB4biWHU.js";import"./PopoverPopup-Zw1VqF60.js";import"./debounce-BSTm8Z6M.js";import"./useOsdkClient-CZiykm71.js";import"./tick-D6fAtfPQ.js";import"./DropdownField-DMszTIIw.js";import"./isEqual-CPsrx-FY.js";import"./withOsdkMetrics-DhZ_7yXB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
