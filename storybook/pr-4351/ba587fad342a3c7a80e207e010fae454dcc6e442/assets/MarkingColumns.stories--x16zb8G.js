import{f as p,j as e}from"./iframe-BCHKv9OM.js";import{O as i}from"./object-table-B9cXelKG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-VdwPsvvy.js";import"./Table-CPWiRxme.js";import"./index-Bwt2nvxG.js";import"./Dialog-DDvBinru.js";import"./cross-2PepCGpt.js";import"./svgIconContainer-DyfXuRzr.js";import"./useBaseUiId-D9fN6cGs.js";import"./InternalBackdrop-C0GHdOIg.js";import"./composite-C-pKBr51.js";import"./index-BkIhD60u.js";import"./index-z0BP5rZZ.js";import"./index-DwHqoGtG.js";import"./useEventCallback-DEkx1Ulc.js";import"./SkeletonBar-B3WDYch4.js";import"./LoadingCell-tRarhgMa.js";import"./ColumnConfigDialog-BagXSypE.js";import"./DraggableList-Ck0dsNNP.js";import"./search-DF6xe5EC.js";import"./Input-sKzdlVIX.js";import"./useControlled-BHnn3yAy.js";import"./Button-C3RFGMgN.js";import"./small-cross-95SsO8Gt.js";import"./ActionButton-8LNq2ikE.js";import"./Checkbox-D_U5yD_5.js";import"./useValueChanged-C7KiF5LC.js";import"./CollapsiblePanel-BbSBPuZD.js";import"./MultiColumnSortDialog-0X8uCerL.js";import"./MenuTrigger-evJ21J4D.js";import"./CompositeItem-BMLR6r4a.js";import"./ToolbarRootContext-CwhQOyHm.js";import"./getDisabledMountTransitionStyles-5PmgAQkM.js";import"./getPseudoElementBounds-UEouzKLj.js";import"./chevron-down-BKy1nerW.js";import"./index-C5vlMEFw.js";import"./error-6YNMu2Ib.js";import"./BaseCbacBanner-Bi4Q6fdO.js";import"./makeExternalStore-CbzDxk6X.js";import"./Tooltip-DBSqCNw9.js";import"./isObject-BYugPURt.js";import"./debounce-CdYSIISE.js";import"./useOsdkClient-BaaChpHI.js";import"./tick-D35hPI0R.js";import"./DropdownField-Ce9UBfUI.js";import"./isEqual-BBtYZJe_.js";import"./_baseIsEqual-UBFzx4HI.js";import"./withOsdkMetrics-DIduflDc.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
