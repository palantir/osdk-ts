import{f as p,j as e}from"./iframe-C3XbZWen.js";import{O as i}from"./object-table-6roN3fnf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bd8vTro1.js";import"./Table-D7RKx9UH.js";import"./index-Cbx6a8hz.js";import"./Dialog-CmTFGtwU.js";import"./cross-CPx39Rqk.js";import"./svgIconContainer-MmaHaGlI.js";import"./useBaseUiId-DhsKY9ve.js";import"./InternalBackdrop-QCSxKShv.js";import"./composite-DWbLdHMu.js";import"./index-DIlMfn_R.js";import"./index-BjtPHMiR.js";import"./index-B1lp1N2Z.js";import"./useEventCallback-CpM6E-JP.js";import"./SkeletonBar-mZUFcLb-.js";import"./LoadingCell-oXQ47sGg.js";import"./ColumnConfigDialog-BjA5WfGE.js";import"./DraggableList-DxLeHlTQ.js";import"./search-BWwFBwJa.js";import"./Input-C6CMN-6w.js";import"./useControlled-RhoVVMbd.js";import"./Button-D5gsrDav.js";import"./small-cross-BsVnexPM.js";import"./ActionButton-BsycIRPd.js";import"./Checkbox-C4-C-7mU.js";import"./useValueChanged-Dt05zWq3.js";import"./CollapsiblePanel-CH5HVZ_W.js";import"./MultiColumnSortDialog-BHkGXMnA.js";import"./MenuTrigger-CS6NiigY.js";import"./CompositeItem-CDPEnVwM.js";import"./ToolbarRootContext-CLeDTtLu.js";import"./getDisabledMountTransitionStyles-QJ6Sy96Q.js";import"./getPseudoElementBounds-DtIXpuuI.js";import"./chevron-down-DqIBtDWK.js";import"./index-LyhSYXkQ.js";import"./error-BB9ysK2b.js";import"./BaseCbacBanner-sgH90S1X.js";import"./makeExternalStore-DZjltypg.js";import"./Tooltip-DAvT5ZSN.js";import"./PopoverPopup-USAcLK7W.js";import"./debounce-CIDwCQJK.js";import"./useOsdkClient-C2mkXTFj.js";import"./tick-Dimo0cUA.js";import"./DropdownField-vrHc5lZl.js";import"./isEqual-GbIpCj4g.js";import"./withOsdkMetrics-B9g6zipx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
