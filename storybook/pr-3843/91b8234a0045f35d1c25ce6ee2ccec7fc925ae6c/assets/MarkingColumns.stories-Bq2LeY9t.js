import{f as p,j as e}from"./iframe-YPYsIb22.js";import{O as i}from"./object-table-CtbV_lm5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bm267i2E.js";import"./Table-DRkKPyHa.js";import"./index-tbAq8Ohd.js";import"./Dialog-KKxMQUvZ.js";import"./cross-Bvh9g_GQ.js";import"./svgIconContainer-DjM3XCjt.js";import"./useBaseUiId-DcZVCxGy.js";import"./InternalBackdrop-CdruCL_T.js";import"./composite-DzJGJJnK.js";import"./index-Cg0mmqLz.js";import"./index-DBWmIQLG.js";import"./index-DwCIcKt5.js";import"./useEventCallback-B9OthbKU.js";import"./SkeletonBar-WJg75WZq.js";import"./LoadingCell-zWDjiQ5u.js";import"./ColumnConfigDialog-8A-B2Bod.js";import"./DraggableList-C2O4QV4a.js";import"./search-Cmuvm24Z.js";import"./Input-C7Rttt_L.js";import"./useControlled-CSFowk_7.js";import"./isEqual-s1bPN8Kr.js";import"./isObject-CYfcTCzm.js";import"./Button-BIBGF6Kj.js";import"./ActionButton-BpXqO9zC.js";import"./Checkbox-D6GbL2Cv.js";import"./useValueChanged-91bWric7.js";import"./CollapsiblePanel-DmGeo7Hg.js";import"./MultiColumnSortDialog-DcJA4KJc.js";import"./MenuTrigger-ornS5oyF.js";import"./CompositeItem-guz_X3dC.js";import"./ToolbarRootContext-BbwNnKOF.js";import"./getDisabledMountTransitionStyles-JY1Za2dw.js";import"./getPseudoElementBounds-xEkpdBae.js";import"./chevron-down-DA0ta6Kf.js";import"./index-rKVmsUIV.js";import"./error-C5wdbzy2.js";import"./BaseCbacBanner-5IT3qCUT.js";import"./makeExternalStore-6VAz4fOk.js";import"./Tooltip-CLhzcRJW.js";import"./PopoverPopup-D-OFQvOK.js";import"./toNumber-CJU3h-Bh.js";import"./useOsdkClient-BBWJ8V-r.js";import"./tick-D0TmV92Y.js";import"./DropdownField-ChvYS7Am.js";import"./withOsdkMetrics-B5RDuhJT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
