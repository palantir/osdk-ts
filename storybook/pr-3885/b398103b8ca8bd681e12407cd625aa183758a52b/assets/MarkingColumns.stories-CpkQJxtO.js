import{f as p,j as e}from"./iframe-DfZGSEnK.js";import{O as i}from"./object-table-BhFBxuuq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-JSyPDtRL.js";import"./Table-DCHQ9DIl.js";import"./index-BtmgN424.js";import"./Dialog-BQK0uf89.js";import"./cross-Beh92vlp.js";import"./svgIconContainer-Df807jxI.js";import"./useBaseUiId-DywIzSMt.js";import"./InternalBackdrop-BrU3GtDz.js";import"./composite-CaYLCY3w.js";import"./index-DCIaOmvZ.js";import"./index-Bgh8wCNB.js";import"./index-BrCUh-Ra.js";import"./useEventCallback-ByrMJoxA.js";import"./SkeletonBar-C-t_-bWa.js";import"./LoadingCell-DVdW8-R0.js";import"./ColumnConfigDialog-fET7wgaA.js";import"./DraggableList-DwhS7pi1.js";import"./search-BwusOqn1.js";import"./Input-DFmCPLco.js";import"./useControlled-CIgmgNK9.js";import"./Button-B1pKZshi.js";import"./small-cross-Bc1839it.js";import"./ActionButton-BFRD3DcD.js";import"./Checkbox-CwNHEUFs.js";import"./useValueChanged-BoS3X9CQ.js";import"./CollapsiblePanel-CkOQ0TcF.js";import"./MultiColumnSortDialog-BTPWsaqG.js";import"./MenuTrigger-BV7h9uJl.js";import"./CompositeItem-BdMjAmQ6.js";import"./ToolbarRootContext-C7WEHba5.js";import"./getDisabledMountTransitionStyles-DJCiV1E5.js";import"./getPseudoElementBounds-B5f8znMc.js";import"./chevron-down-qE8TvtrC.js";import"./index-CgBWG5tj.js";import"./error-C02d4v5E.js";import"./BaseCbacBanner-DOZyeA5C.js";import"./makeExternalStore-BNurq7kY.js";import"./Tooltip-BHkZYyMQ.js";import"./PopoverPopup-BvvL2cGT.js";import"./debounce-CuIu4aks.js";import"./useOsdkClient-COnSdOcv.js";import"./tick-B2x0tHQ4.js";import"./DropdownField-BXW94eU-.js";import"./isEqual-BLC8r3fK.js";import"./withOsdkMetrics-BVC9GIYX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
