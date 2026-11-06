import{f as p,j as e}from"./iframe-CRvr4m23.js";import{O as i}from"./object-table-b8tcKba1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DdCCWYOA.js";import"./Table-Bj__yKc6.js";import"./index-D9ceHjwW.js";import"./Dialog-Cie038FA.js";import"./cross-C9z9h8JK.js";import"./svgIconContainer-DGdcF-OS.js";import"./useBaseUiId-B6Sq2DDd.js";import"./InternalBackdrop-BxZfZedD.js";import"./composite-BaJaFCUV.js";import"./index-C-IWKanX.js";import"./index-DjDCowvu.js";import"./index-DJL6J6Yv.js";import"./useEventCallback-D3cYyTze.js";import"./SkeletonBar-BcFufqC8.js";import"./LoadingCell-52h9HBzW.js";import"./ColumnConfigDialog-BoVl4f11.js";import"./DraggableList-CzL0YJBu.js";import"./search-S4tClITX.js";import"./Input-Bb951IY0.js";import"./useControlled-CzRMF11H.js";import"./Button-CICDzuCH.js";import"./small-cross-B41-2T8P.js";import"./ActionButton-CdBe91xX.js";import"./Checkbox-DqptaqLe.js";import"./useValueChanged-CZQ4YioP.js";import"./CollapsiblePanel-DOhZMIUq.js";import"./MultiColumnSortDialog-DMM04g0W.js";import"./MenuTrigger-TLk2OofL.js";import"./CompositeItem-AIxAUMBi.js";import"./ToolbarRootContext-CSQhZUTB.js";import"./getDisabledMountTransitionStyles-C-PY_iOt.js";import"./getPseudoElementBounds-CyO_YVnW.js";import"./chevron-down-D0i9lEgO.js";import"./index-B0l7E8Kk.js";import"./error-ClpIR9By.js";import"./BaseCbacBanner-BZbKEwfF.js";import"./makeExternalStore-B5l5c53p.js";import"./Tooltip-CRs42sBR.js";import"./isObject-B8xrtduv.js";import"./debounce-B7GzlHZ2.js";import"./useOsdkClient-Bx3PkGcF.js";import"./tick-CR12WH8n.js";import"./DropdownField-m8FHeW1l.js";import"./isEqual-9tV0CO0a.js";import"./_baseIsEqual-DHO7-zGr.js";import"./withOsdkMetrics-Dd7zkJUD.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
