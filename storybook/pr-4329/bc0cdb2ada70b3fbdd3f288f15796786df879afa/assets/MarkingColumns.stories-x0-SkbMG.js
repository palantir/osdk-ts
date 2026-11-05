import{f as p,j as e}from"./iframe-D9LEKPHA.js";import{O as i}from"./object-table-B1AfggZM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dxzd1OZD.js";import"./Table-DXZyWBeX.js";import"./index-DzK_y6C8.js";import"./Dialog-CWnr_w5m.js";import"./cross-C3SLdrCX.js";import"./svgIconContainer-e-ufemnI.js";import"./useBaseUiId-CBbaApFb.js";import"./InternalBackdrop-GJoSUQP4.js";import"./composite-CGRnG1Ww.js";import"./index-DXKCvCyZ.js";import"./index-Bc3q1fMe.js";import"./index-DsxzOZNt.js";import"./useEventCallback-DDtAALNo.js";import"./SkeletonBar-Dyau828r.js";import"./LoadingCell-CAS6H_28.js";import"./ColumnConfigDialog-A5yV7I5q.js";import"./DraggableList-a_S_NMQt.js";import"./search-CA19qJZK.js";import"./Input-D7T3_Ui_.js";import"./useControlled-3uaONOlZ.js";import"./Button-CFsy2fIN.js";import"./small-cross-suCAhOQB.js";import"./ActionButton-Bf8hi2D9.js";import"./Checkbox-k2zGxl_k.js";import"./useValueChanged-CGf07a8j.js";import"./CollapsiblePanel-D4Wj2a6a.js";import"./MultiColumnSortDialog-DkEgg_lY.js";import"./MenuTrigger-hlDUsPJn.js";import"./CompositeItem-C_PTfcmx.js";import"./ToolbarRootContext-CATQRVeE.js";import"./getDisabledMountTransitionStyles-CBkqgZFm.js";import"./getPseudoElementBounds-BqSDvjTD.js";import"./chevron-down-5k8pvBL_.js";import"./index-vYt4oG90.js";import"./error-CuQM1-tZ.js";import"./BaseCbacBanner-BDhY3mYb.js";import"./makeExternalStore-CH14MzlW.js";import"./Tooltip-BTJQl-Kl.js";import"./isObject-D93Vzkd_.js";import"./debounce-BbpvLq-c.js";import"./useOsdkClient-CcWL-FKN.js";import"./tick-CbRcQjZj.js";import"./DropdownField-BGcI4SWd.js";import"./isEqual-CFExKmCm.js";import"./_baseIsEqual-O2ApXnqd.js";import"./withOsdkMetrics-CQaJkAGj.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
