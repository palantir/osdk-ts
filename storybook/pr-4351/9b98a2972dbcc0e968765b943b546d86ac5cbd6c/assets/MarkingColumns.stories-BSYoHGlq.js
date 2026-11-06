import{f as p,j as e}from"./iframe-DalzUr1q.js";import{O as i}from"./object-table-D2quk6NQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D_n2FxVD.js";import"./Table-CntDsDRk.js";import"./index-BFBpHzmv.js";import"./Dialog-Dgd8ztuF.js";import"./cross-SZYnhdqh.js";import"./svgIconContainer-8scThZ5S.js";import"./useBaseUiId-C1YfiI_O.js";import"./InternalBackdrop-DXBWgB6P.js";import"./composite-ByIGP6v1.js";import"./index-CyRUVzxf.js";import"./index-8qyP2Pih.js";import"./index-6hqAlpZu.js";import"./useEventCallback-BAIllV_R.js";import"./SkeletonBar-BlqAJr93.js";import"./LoadingCell-BEct-0kK.js";import"./ColumnConfigDialog-EF_ikodc.js";import"./DraggableList-B75g6wQ8.js";import"./search-B4UxFsnj.js";import"./Input-D5Owm4cS.js";import"./useControlled-kzcpSzwV.js";import"./Button-c1CthLqB.js";import"./small-cross-BSqUQSnp.js";import"./ActionButton-BXGwgDtg.js";import"./Checkbox-ZFYZdGE6.js";import"./useValueChanged-Bc2VNrg5.js";import"./CollapsiblePanel-BcUy2Ne8.js";import"./MultiColumnSortDialog-BgZ7UXse.js";import"./MenuTrigger-BfxMhCU3.js";import"./CompositeItem-BA4-v1aY.js";import"./ToolbarRootContext-BCpC9w2q.js";import"./getDisabledMountTransitionStyles-BC7pIBNq.js";import"./getPseudoElementBounds-BzW4F44J.js";import"./chevron-down-CPH5FDFQ.js";import"./index-B3TGx6rz.js";import"./error-3LJUbIdl.js";import"./BaseCbacBanner-BynMbQO8.js";import"./makeExternalStore-Ill0Kq_R.js";import"./Tooltip-fxzvXvP9.js";import"./isObject-CZa9j52y.js";import"./debounce-BZIGTgj-.js";import"./useOsdkClient-LHIhBz2N.js";import"./tick-BBITmVPh.js";import"./DropdownField-Bri-IXaO.js";import"./isEqual-fqlKF2yu.js";import"./_baseIsEqual-DiyQ7VZY.js";import"./withOsdkMetrics-pz-JOP6f.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
