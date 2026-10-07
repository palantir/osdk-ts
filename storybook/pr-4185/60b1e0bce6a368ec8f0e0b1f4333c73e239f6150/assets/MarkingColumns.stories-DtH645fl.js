import{f as p,j as e}from"./iframe-DaskLrq8.js";import{O as i}from"./object-table-MAm4yMsf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BVj_xxLy.js";import"./Table-BvP-To-m.js";import"./index-Bqih82xZ.js";import"./Dialog-CtpINbQM.js";import"./cross-B-0FObLb.js";import"./svgIconContainer-tkjo1pD1.js";import"./useBaseUiId-DMXF2oMu.js";import"./InternalBackdrop-B9JHXWHe.js";import"./composite-BYKbQoC1.js";import"./index-C_mHhOwa.js";import"./index-Dy_kZRgY.js";import"./index-D-OWq9M9.js";import"./useEventCallback-CByJ231d.js";import"./SkeletonBar-hMNf9COI.js";import"./LoadingCell-T_mZ2Fqp.js";import"./ColumnConfigDialog-DLMtz1B4.js";import"./DraggableList-BmtoqCPs.js";import"./search-25BjkPAP.js";import"./Input-DB2lb1xd.js";import"./useControlled-CYCM7Lap.js";import"./Button-BrqzKE8K.js";import"./small-cross-C_TPDXPW.js";import"./ActionButton-BtmJUWQ1.js";import"./Checkbox-BgbRBQ_v.js";import"./useValueChanged-C2EMO01l.js";import"./CollapsiblePanel-BAg1IJpg.js";import"./MultiColumnSortDialog-keYjcxBX.js";import"./MenuTrigger-CoiImOBe.js";import"./CompositeItem-BVBCC1HX.js";import"./ToolbarRootContext-BzuzU9vE.js";import"./getDisabledMountTransitionStyles-Dofl4-A2.js";import"./getPseudoElementBounds-CAy3MVIr.js";import"./chevron-down-CjfhpjkO.js";import"./index-DmvVgxHl.js";import"./error-5sU13yE2.js";import"./BaseCbacBanner-DfyARB2D.js";import"./makeExternalStore-CIn7ze2w.js";import"./Tooltip-TPcB9Skk.js";import"./PopoverPopup-DJm9oZWc.js";import"./debounce-CTR7NOXB.js";import"./useOsdkClient-ijg_QbI1.js";import"./tick-BkVL6nis.js";import"./DropdownField-DABHoDU6.js";import"./isEqual-CvlwB9Oh.js";import"./withOsdkMetrics-CjFNfKow.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
