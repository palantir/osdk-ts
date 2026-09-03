import{f as p,j as e}from"./iframe-czm1xubf.js";import{O as i}from"./object-table-DNMgRG-f.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BGUEigPd.js";import"./Table-B6qewDiI.js";import"./index-_fZ9c0fg.js";import"./Dialog-DHxpHxHZ.js";import"./cross-BQAzUdVL.js";import"./svgIconContainer-E3yOYGsj.js";import"./useBaseUiId-BS68w5je.js";import"./InternalBackdrop-B9KVxE9X.js";import"./composite-B592Vhi6.js";import"./index-DfcivzEs.js";import"./index-yWvVzDbE.js";import"./index-DTt1rg3M.js";import"./useEventCallback-B22Ha2u5.js";import"./SkeletonBar-CdEM0QXh.js";import"./LoadingCell-BVI3jUQO.js";import"./ColumnConfigDialog-Cm2lbAkX.js";import"./DraggableList-DMQ-nVz6.js";import"./search-UypY9bAA.js";import"./Input-DgUpGPn-.js";import"./useControlled-C5Jpqy1f.js";import"./Button-BRqFWopk.js";import"./small-cross-FhsGrgpu.js";import"./ActionButton-BZ-JCoJ_.js";import"./Checkbox-CsxsWFlF.js";import"./useValueChanged-C6JEBq-B.js";import"./CollapsiblePanel-BZqHTtX0.js";import"./MultiColumnSortDialog-BiIQwfLv.js";import"./MenuTrigger-BLnLbRO0.js";import"./CompositeItem-BpDVMI5W.js";import"./ToolbarRootContext-DUZDki5d.js";import"./getDisabledMountTransitionStyles-CpcSQr6S.js";import"./getPseudoElementBounds-pSys7i-_.js";import"./chevron-down-WwCXMtNu.js";import"./index-BSuxyzBF.js";import"./error-DWSVNtwO.js";import"./BaseCbacBanner-CINRFj0R.js";import"./makeExternalStore-BA14Lxn7.js";import"./Tooltip-DhInjGrA.js";import"./PopoverPopup-CShNizHP.js";import"./debounce-DV3wU0MB.js";import"./useOsdkClient-CqNVWEmJ.js";import"./tick-ClPbeRGi.js";import"./DropdownField-D-57vV6-.js";import"./isEqual-W8BNuaGE.js";import"./withOsdkMetrics-C-yijIYr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
