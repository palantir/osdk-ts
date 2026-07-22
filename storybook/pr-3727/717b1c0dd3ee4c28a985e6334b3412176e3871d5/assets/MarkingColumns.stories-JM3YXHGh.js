import{f as p,j as e}from"./iframe-uQf2Y6HY.js";import{O as i}from"./object-table-DQt5yxaU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Du3gRcYm.js";import"./Table-9AQeJSh6.js";import"./index-BN2fncHn.js";import"./Dialog-B9EecI1R.js";import"./cross-D7UO5IDe.js";import"./svgIconContainer-BjU-0ep4.js";import"./useBaseUiId-BLcC56e1.js";import"./InternalBackdrop-C6HlheEM.js";import"./composite-BVu4qhAZ.js";import"./index-B12iX9a-.js";import"./index-Dk4BWPdu.js";import"./index-M5181JLA.js";import"./useEventCallback-CO_z638G.js";import"./SkeletonBar-Bq_s3uM9.js";import"./LoadingCell-BkNbQrIJ.js";import"./ColumnConfigDialog-Cf32CT1u.js";import"./DraggableList-I_Ro7yVS.js";import"./search-v_cg4ZhI.js";import"./Input-CiZhYTqy.js";import"./useControlled-CkzW_hrg.js";import"./isEqual-DFG5pq8M.js";import"./isObject-CcVU54Jt.js";import"./Button-D7tsmr_Z.js";import"./ActionButton-zKss17dg.js";import"./Checkbox-D6X628fx.js";import"./useValueChanged-CSdyG5P4.js";import"./CollapsiblePanel-BfCQh_J2.js";import"./MultiColumnSortDialog-BAt8hFm9.js";import"./MenuTrigger-BK-NYu4h.js";import"./CompositeItem-xMHAt2fI.js";import"./ToolbarRootContext-BiNbQSPr.js";import"./getDisabledMountTransitionStyles-BSoK7Im8.js";import"./getPseudoElementBounds-8g8R3PQv.js";import"./chevron-down-DgfzreOC.js";import"./index-CSLzCzGV.js";import"./error-59MnhwpW.js";import"./BaseCbacBanner-CcymD6OY.js";import"./makeExternalStore-BtLnKhO1.js";import"./Tooltip-BPmIrGMo.js";import"./PopoverPopup-Dhn9i3v0.js";import"./toNumber-B_Nph6Sy.js";import"./useOsdkClient-CkIwKmuM.js";import"./tick-CqBlLImE.js";import"./DropdownField-D8k8v8mo.js";import"./withOsdkMetrics-_IPiFb8m.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
