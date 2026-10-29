import{f as p,j as e}from"./iframe-CrKPlwEU.js";import{O as i}from"./object-table-CvR6OxpR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-haeFzdUn.js";import"./Table-DgE5klJe.js";import"./index-CpV23X_V.js";import"./Dialog-D19FsKBo.js";import"./cross-BOaN4EGV.js";import"./svgIconContainer-DeM85DcU.js";import"./useBaseUiId-3D9LSptD.js";import"./InternalBackdrop-CANy3XAr.js";import"./composite-chiYjW3e.js";import"./index-CuiFjKJ6.js";import"./index-Tf0Q6mNY.js";import"./index-FzYKWb4a.js";import"./useEventCallback-CrnEc3ig.js";import"./SkeletonBar-DHBToYCm.js";import"./LoadingCell-CEYS61L0.js";import"./ColumnConfigDialog-BRK66Wau.js";import"./DraggableList-DYCS6jmS.js";import"./search-Djn1cGPu.js";import"./Input-D5pWgixZ.js";import"./useControlled-BeRVPSrG.js";import"./Button-C2XUaQth.js";import"./small-cross-CeyGDtbC.js";import"./ActionButton-Dk7pYVbj.js";import"./Checkbox-DddYpv7L.js";import"./useValueChanged-B9MjiZal.js";import"./CollapsiblePanel-CkSGM0Jv.js";import"./MultiColumnSortDialog-9ZoqMut-.js";import"./MenuTrigger-BExeNii_.js";import"./CompositeItem-CWEcL4Np.js";import"./ToolbarRootContext-CqOU07W6.js";import"./getDisabledMountTransitionStyles-DT-8seTh.js";import"./getPseudoElementBounds-Bvl6KZtn.js";import"./chevron-down-B-Yd5sHs.js";import"./index-Dr_M4lxK.js";import"./error-DbcL_3Bp.js";import"./BaseCbacBanner-BTtW5FAV.js";import"./makeExternalStore-Drk2huTh.js";import"./Tooltip-C4p1lLDJ.js";import"./PopoverPopup-Ce9yvUeR.js";import"./debounce-l8Bh5wEB.js";import"./useOsdkClient-TsA83w7k.js";import"./tick-Ciq_5nwQ.js";import"./DropdownField-CU7FI4gK.js";import"./isEqual-C8BY78Y6.js";import"./withOsdkMetrics-CM1wTx4W.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
