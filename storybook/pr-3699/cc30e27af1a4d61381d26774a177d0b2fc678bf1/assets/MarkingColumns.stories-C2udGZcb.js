import{f as p,j as e}from"./iframe-CEzTjPrX.js";import{O as i}from"./object-table-BuQprooG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUTwDOF_.js";import"./Table-B9Oaxure.js";import"./index-Bxks1lYR.js";import"./Dialog-BT6NDBzr.js";import"./cross-CwAqkswM.js";import"./svgIconContainer-CKFVWuuf.js";import"./useBaseUiId-BgFGhdF-.js";import"./InternalBackdrop-B6dk9w1k.js";import"./composite-CVmkB6SM.js";import"./index-C9eueXWb.js";import"./index-DvuOpWIH.js";import"./index-bLaWsTjV.js";import"./useEventCallback-BpwIOGee.js";import"./SkeletonBar-bBQLRVln.js";import"./LoadingCell-CfwL-qQy.js";import"./ColumnConfigDialog-C9qesawH.js";import"./DraggableList-7I4KYQYA.js";import"./search-CcE_VMNk.js";import"./Input-DVRi4ofR.js";import"./useControlled-Ivw8qQ8S.js";import"./isEqual-B56OhnIh.js";import"./isObject-Bcb3ncsj.js";import"./Button-Czzg7E_D.js";import"./ActionButton-CRxSAo_7.js";import"./Checkbox-vmtPyYdc.js";import"./useValueChanged-D2cAZSU7.js";import"./CollapsiblePanel-yT2vOhtf.js";import"./MultiColumnSortDialog-GWfjieQB.js";import"./MenuTrigger-DI7EuJIB.js";import"./CompositeItem-_SDwp0eF.js";import"./ToolbarRootContext-CPNq27yP.js";import"./getDisabledMountTransitionStyles-DG5jRZgt.js";import"./getPseudoElementBounds-BQH9f0wI.js";import"./chevron-down-SfT6NQyX.js";import"./index-0p1gArIw.js";import"./error-B1ipXgKY.js";import"./BaseCbacBanner-Duzjrut7.js";import"./makeExternalStore-C9gV0ZCP.js";import"./Tooltip-CxsESuUv.js";import"./PopoverPopup-BtDjeJwK.js";import"./toNumber-DODznEsd.js";import"./useOsdkClient-Cq3RoDOh.js";import"./tick-DHVN90Kz.js";import"./DropdownField-DMIc5qcW.js";import"./withOsdkMetrics-DrcUYiC0.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
