import{f as p,j as e}from"./iframe-BjbHRI0z.js";import{O as i}from"./object-table-CRsH42Ki.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BUM7BTsm.js";import"./Table-CjrVb0t9.js";import"./index-CGlA5dXU.js";import"./Dialog-DAdIz198.js";import"./cross-DFCaIKoy.js";import"./svgIconContainer-BQW7jGob.js";import"./useBaseUiId-BfNPJ7-Z.js";import"./InternalBackdrop-44a6AIl-.js";import"./composite-BFEQAufL.js";import"./index-CI8QNR9V.js";import"./index-CiZKopjl.js";import"./index-DLLtCTGJ.js";import"./useEventCallback-C_WUDWdo.js";import"./SkeletonBar-CAHftrLV.js";import"./LoadingCell-E8N45omU.js";import"./ColumnConfigDialog-BDpr2Vqq.js";import"./DraggableList-UwyC-4Gj.js";import"./search-DugTyXej.js";import"./Input-BVornoU9.js";import"./useControlled-rSaw5pb5.js";import"./Button-D9KcyGxn.js";import"./small-cross-CN9po8rh.js";import"./ActionButton-BDL-FgSv.js";import"./Checkbox-BJPUMEsA.js";import"./useValueChanged-ls6nut0P.js";import"./CollapsiblePanel-D9oIVLW-.js";import"./MultiColumnSortDialog-Bj0wdEYx.js";import"./MenuTrigger-EwmqbwYj.js";import"./CompositeItem-BUg5QAEv.js";import"./ToolbarRootContext-BIp7KVlb.js";import"./getDisabledMountTransitionStyles-DIaPn1J1.js";import"./getPseudoElementBounds-Cz_FAddT.js";import"./chevron-down-C9nnJYZM.js";import"./index-D90yLxts.js";import"./error-Cl6EUNrf.js";import"./BaseCbacBanner-CF7bmkgw.js";import"./makeExternalStore-CeeAAQpn.js";import"./Tooltip-B88xm2HD.js";import"./PopoverPopup-DUUESn5Y.js";import"./debounce-B0atJeU8.js";import"./useOsdkClient-EcavFoEZ.js";import"./tick-BUlj9YHj.js";import"./DropdownField-D4-t_biV.js";import"./isEqual-BsA9kd7g.js";import"./withOsdkMetrics-BjQ5Qn0j.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
