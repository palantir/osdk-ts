import{f as p,j as e}from"./iframe-DuF9ULT7.js";import{O as i}from"./object-table-BfPXsznY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-kD_tsguj.js";import"./Table-Ck3oDQZz.js";import"./index-muXsy8in.js";import"./Dialog-C4PvVf4N.js";import"./cross-CWdW2uUC.js";import"./svgIconContainer-Cg0DvcJX.js";import"./useBaseUiId-toBz8Uh9.js";import"./InternalBackdrop-DAn5w1fs.js";import"./composite-B1SRd4gq.js";import"./index-CQs0rdO8.js";import"./index-DaCqd03Q.js";import"./index-D5Uc12e6.js";import"./useEventCallback-CNUkj118.js";import"./SkeletonBar-CgHloKeI.js";import"./LoadingCell-D_nqtry4.js";import"./ColumnConfigDialog-B_SLMB2N.js";import"./DraggableList-Bi7JcdoK.js";import"./search-BijdxR6R.js";import"./Input-Cz82mbXb.js";import"./useControlled-DjU5snnM.js";import"./Button-BZjuNt0h.js";import"./small-cross-DUrm4kRJ.js";import"./ActionButton-CX87U3oR.js";import"./Checkbox-Dai2y2mJ.js";import"./useValueChanged-Cn14tmvW.js";import"./CollapsiblePanel-DBem6MQm.js";import"./MultiColumnSortDialog-D2TaUp4Q.js";import"./MenuTrigger-l9somBBq.js";import"./CompositeItem-lLhT8JrE.js";import"./ToolbarRootContext-4pjZNXLZ.js";import"./getDisabledMountTransitionStyles-BJaQXL8u.js";import"./getPseudoElementBounds-BUh7K_dy.js";import"./chevron-down-CaPJ8T2H.js";import"./index-B-a6xU5p.js";import"./error-BLlGlY0w.js";import"./BaseCbacBanner-BrhvEN2m.js";import"./makeExternalStore-BjN8YBiO.js";import"./Tooltip-BNXMXQEy.js";import"./PopoverPopup-mneHcQVw.js";import"./debounce-CrZBwGro.js";import"./useOsdkClient-BSXkMVIu.js";import"./tick-D563aBAq.js";import"./DropdownField-BF8fdmfG.js";import"./isEqual-Bfv2CuL1.js";import"./withOsdkMetrics-BCYo5O_x.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
