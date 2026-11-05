import{f as p,j as e}from"./iframe-BH1__lyA.js";import{O as i}from"./object-table-C_YYv9IJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CcoKPVmD.js";import"./Table-DdPOGwfn.js";import"./index-COEeIEse.js";import"./Dialog-B-tTj_Nw.js";import"./cross-BG9CU_85.js";import"./svgIconContainer-wKAlV-si.js";import"./useBaseUiId-CocyTtNa.js";import"./InternalBackdrop-Bf6tif4j.js";import"./composite-C3W7I4o1.js";import"./index-Bb8BpDdy.js";import"./index-C3iKmC6u.js";import"./index-BiGG8ZBE.js";import"./useEventCallback-CPUVFOtx.js";import"./SkeletonBar-BGI6vnAm.js";import"./LoadingCell-BBxmDmnN.js";import"./ColumnConfigDialog-B4fUNH1J.js";import"./DraggableList-l-YPQ9p_.js";import"./search-XcMkpgCF.js";import"./Input-hpLjYkh3.js";import"./useControlled-DOGwcjPy.js";import"./Button-DfUwNhvG.js";import"./small-cross-CAPHq35Q.js";import"./ActionButton-C1MKeMQV.js";import"./Checkbox-BWUQFoeG.js";import"./useValueChanged-41xr8V2-.js";import"./CollapsiblePanel-Dn2DChxX.js";import"./MultiColumnSortDialog-D-Q0C7Y-.js";import"./MenuTrigger-PQ3cFOHk.js";import"./CompositeItem-D0FQTfbI.js";import"./ToolbarRootContext-CtjitZ_O.js";import"./getDisabledMountTransitionStyles-DVj5IYmX.js";import"./getPseudoElementBounds-hmm0rsQk.js";import"./chevron-down-PjTLl0ZH.js";import"./index-CGXKdUZr.js";import"./error-Dg7pD9uX.js";import"./BaseCbacBanner-DJUtLNca.js";import"./makeExternalStore-CyAT35zT.js";import"./Tooltip-6cEOUv8s.js";import"./isObject-neNgVvou.js";import"./debounce-CxGZY-Kb.js";import"./useOsdkClient-BG_667E1.js";import"./tick-PqPtFkmd.js";import"./DropdownField-C55flNy_.js";import"./isEqual-DAwlJfTA.js";import"./_baseIsEqual-fFGR7Jxx.js";import"./withOsdkMetrics-B_AmLLOG.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
