import{f as p,j as e}from"./iframe-BN5ehZsU.js";import{O as i}from"./object-table-BiY9bRY-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DiI2ZQ3N.js";import"./Table-DkXsCYJE.js";import"./index-CUoza1kZ.js";import"./Dialog-DetNl7lg.js";import"./cross-CTzlKmgX.js";import"./svgIconContainer-3_nrEXxJ.js";import"./useBaseUiId-BEp1f_TL.js";import"./InternalBackdrop-Cd1W5N03.js";import"./composite-Dz6G3wtQ.js";import"./index-CNUSOrN9.js";import"./index-BMD_ABKq.js";import"./index-cT-qCssu.js";import"./useEventCallback-CfoOVKbg.js";import"./SkeletonBar-CzWtUtS0.js";import"./LoadingCell-Dm1PRD3p.js";import"./ColumnConfigDialog-BMx-cACT.js";import"./DraggableList-Df0gkaKK.js";import"./search-B5pZpNhj.js";import"./Input-Byq2KsKZ.js";import"./useControlled-Dn-0uibR.js";import"./Button-Ca_A2rxi.js";import"./small-cross-BhsmHd15.js";import"./ActionButton-in3xyPdG.js";import"./Checkbox-Uoa-vC10.js";import"./useValueChanged-ByN6FCGV.js";import"./CollapsiblePanel-e8TDfTp5.js";import"./MultiColumnSortDialog-Dy6VCNrc.js";import"./MenuTrigger-5qlhqjab.js";import"./CompositeItem-CfdU5eWF.js";import"./ToolbarRootContext-C4vwBpF_.js";import"./getDisabledMountTransitionStyles-CbLH7J6E.js";import"./getPseudoElementBounds-B23cJjwW.js";import"./chevron-down-DSRGL9k7.js";import"./index-CfzvYg2Q.js";import"./error-BrwUp-mO.js";import"./BaseCbacBanner-DP2nV8rQ.js";import"./makeExternalStore-9ZiGbHue.js";import"./Tooltip-B7KHYj-o.js";import"./PopoverPopup-CDJ9nvZU.js";import"./debounce-DDVGe1yo.js";import"./useOsdkClient-D_Tzde9i.js";import"./tick-CWonoO7R.js";import"./DropdownField-CPsZXnb7.js";import"./isEqual-sFEmQ9k3.js";import"./withOsdkMetrics-XTiZGcd-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
