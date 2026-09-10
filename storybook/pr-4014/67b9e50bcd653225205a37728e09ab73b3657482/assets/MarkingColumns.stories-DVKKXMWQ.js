import{f as p,j as e}from"./iframe-vYDcoh77.js";import{O as i}from"./object-table-C88r-WHY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DSINEazd.js";import"./Table-DssIb2XA.js";import"./index-Dvlndinu.js";import"./Dialog-Di5B1QLo.js";import"./cross-Bh3JhpLG.js";import"./svgIconContainer-DRRBBWTo.js";import"./useBaseUiId-D0wGlEuT.js";import"./InternalBackdrop-Bmbg-Qqi.js";import"./composite-CbGeFR41.js";import"./index-CnEHE-8v.js";import"./index-k5xDOMrk.js";import"./index-SN9c52dU.js";import"./useEventCallback-HvgQ2Jp9.js";import"./SkeletonBar-DDd9jroq.js";import"./LoadingCell-BOe9IZBL.js";import"./ColumnConfigDialog-8IXi2hA2.js";import"./DraggableList-S-kgc1zg.js";import"./search-BbY6TLBc.js";import"./Input-D4hoKYSh.js";import"./useControlled-9JxLuZTe.js";import"./Button-C4utuT7d.js";import"./small-cross-DXqEeC7m.js";import"./ActionButton-CEGBUekT.js";import"./Checkbox-CSVANSDS.js";import"./useValueChanged-DvGgnr1I.js";import"./CollapsiblePanel-ClbxZsmn.js";import"./MultiColumnSortDialog-CFwnfwMI.js";import"./MenuTrigger-Bkb6t9HP.js";import"./CompositeItem-tKjm3ITX.js";import"./ToolbarRootContext-DC4Rn718.js";import"./getDisabledMountTransitionStyles-CPDXZ_d3.js";import"./getPseudoElementBounds-D-Q4b5_k.js";import"./chevron-down-DE4Yil-_.js";import"./index-C4jC_mo-.js";import"./error-BQSdaUYK.js";import"./BaseCbacBanner-B-S-FPnG.js";import"./makeExternalStore-C5vRMRFb.js";import"./Tooltip-7NXZ14u1.js";import"./PopoverPopup-Cgz3LCEw.js";import"./debounce-DUf2Feva.js";import"./useOsdkClient-Bc2tSKuP.js";import"./tick-CryZzvkg.js";import"./DropdownField-CfMw9HLs.js";import"./isEqual-B7tlXMU_.js";import"./withOsdkMetrics-o2mYvA2y.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
