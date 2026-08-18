import{f as p,j as e}from"./iframe-DFUOfUSe.js";import{O as i}from"./object-table-eI_MpLLM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CC8_Mmh6.js";import"./index-kBc01955.js";import"./Dialog-_LqnPVgX.js";import"./cross-B1MvVSxZ.js";import"./svgIconContainer-BEzB0n9v.js";import"./useBaseUiId-iIiGKJbX.js";import"./InternalBackdrop-C8Deyz8F.js";import"./composite-1eFG2hxZ.js";import"./index-CjvFN5_9.js";import"./index-BENq6zow.js";import"./index-DszQvq9I.js";import"./useEventCallback-wAoswJKo.js";import"./SkeletonBar-DGafzJ4m.js";import"./LoadingCell-DUifgGui.js";import"./ColumnConfigDialog-CO5Wyt08.js";import"./DraggableList-RxOxYVED.js";import"./search-DJSgEYs8.js";import"./Input-BQVjPxIe.js";import"./useControlled-v23QOsKY.js";import"./Button-ixew-sI_.js";import"./small-cross-C4xB7Q44.js";import"./ActionButton-DTZYfIEP.js";import"./Checkbox-DRApCZzW.js";import"./useValueChanged-DJsabPfY.js";import"./CollapsiblePanel-CpgSESuR.js";import"./MultiColumnSortDialog-EJkaScIR.js";import"./MenuTrigger-F77Zj-N2.js";import"./CompositeItem-DFHRfQA2.js";import"./ToolbarRootContext-BDheAh6f.js";import"./getDisabledMountTransitionStyles-1clqSlQZ.js";import"./getPseudoElementBounds-C7b_XFOL.js";import"./chevron-down-CYOYBDrS.js";import"./index-DvkqE7yU.js";import"./error-D5rDq67F.js";import"./BaseCbacBanner-DNewZ_zV.js";import"./makeExternalStore-CBoWfP78.js";import"./Tooltip-Fm9QhiyQ.js";import"./PopoverPopup-Dtz2QEwE.js";import"./debounce-DziqxyEi.js";import"./useOsdkClient-BjSmFqIm.js";import"./tick-DzTIrrQ0.js";import"./DropdownField-BhG0LvOe.js";import"./isEqual-CP-xjrih.js";import"./withOsdkMetrics-BWtToZ6G.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
