import{f as p,j as e}from"./iframe-pYM9Kle3.js";import{O as i}from"./object-table-Dg8X1YLC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D5KvRmWw.js";import"./Table-r_TjHfFz.js";import"./index-aGm8-TAF.js";import"./Dialog-DL97wxmD.js";import"./cross-BnBrW-eg.js";import"./svgIconContainer-C_8arsQh.js";import"./useBaseUiId-RIZ0yVnd.js";import"./InternalBackdrop-DIPX0H2i.js";import"./composite-sTRtyjQk.js";import"./index-W-KSUEkN.js";import"./index-BOW_h0zx.js";import"./index-05AG5g9M.js";import"./useEventCallback-D8yjtfXj.js";import"./SkeletonBar-BK9B7HSX.js";import"./LoadingCell-CN61tLvp.js";import"./ColumnConfigDialog-CURzWvFL.js";import"./DraggableList-pKSWkaE1.js";import"./search-DhM0Kz_K.js";import"./Input-CwD97Qzu.js";import"./useControlled-BncmKvh2.js";import"./isEqual-3I2_tgp7.js";import"./isObject-CgQKXRFD.js";import"./Button-CU-ddK4J.js";import"./ActionButton-BKxfDdu4.js";import"./Checkbox-CZptYZXi.js";import"./useValueChanged-CWxRqVfZ.js";import"./CollapsiblePanel-o9ZfF3wl.js";import"./MultiColumnSortDialog-B89-LTwa.js";import"./MenuTrigger-6lJzNeVm.js";import"./CompositeItem-Cx5UxeIi.js";import"./ToolbarRootContext-B9CW3s9P.js";import"./getDisabledMountTransitionStyles-RZdmxJEf.js";import"./getPseudoElementBounds-D-2Wx9v7.js";import"./chevron-down-BISeLNQR.js";import"./index-CS1mNa9j.js";import"./error-BxZYQlfA.js";import"./BaseCbacBanner-Dfp89-qt.js";import"./makeExternalStore-BkiGOiIS.js";import"./Tooltip-XQHWhF0b.js";import"./PopoverPopup-BJDqIkbD.js";import"./toNumber-BgnxX0iA.js";import"./useOsdkClient-BD1XYN6K.js";import"./tick-BiUS3pKu.js";import"./DropdownField-BFRZdytN.js";import"./withOsdkMetrics-DOlv4fq5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
