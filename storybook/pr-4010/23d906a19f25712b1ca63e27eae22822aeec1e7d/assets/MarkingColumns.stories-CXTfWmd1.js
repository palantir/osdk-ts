import{f as p,j as e}from"./iframe-4W_gqfri.js";import{O as i}from"./object-table-9J7pqHDM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-iH2eX15p.js";import"./Table-BjxlZ7nu.js";import"./index-BE7X2I8k.js";import"./Dialog-QjDlU9kM.js";import"./cross-DPXC28es.js";import"./svgIconContainer-DXl_IpNa.js";import"./useBaseUiId-CkmLLk3_.js";import"./InternalBackdrop-CUPpQvP1.js";import"./composite-iwN2p37r.js";import"./index-DIt5uu1h.js";import"./index-Xj4teAhO.js";import"./index-DOVruLCM.js";import"./useEventCallback-CfmYFYMZ.js";import"./SkeletonBar-Co4nSFIq.js";import"./LoadingCell-DoRpWxDA.js";import"./ColumnConfigDialog-CdVbA8k5.js";import"./DraggableList-C0lbi6DE.js";import"./search-BfzYHGGv.js";import"./Input-BayiWgWk.js";import"./useControlled-BKLbSuyG.js";import"./Button-DmhydU5X.js";import"./small-cross-brVItmZZ.js";import"./ActionButton-Qd3Ay8Ri.js";import"./Checkbox-06IyHyXP.js";import"./useValueChanged-7OtEnUZo.js";import"./CollapsiblePanel-CdkBP2mF.js";import"./MultiColumnSortDialog-Cc89E02k.js";import"./MenuTrigger-Cl4eIY0V.js";import"./CompositeItem-BflBgmdx.js";import"./ToolbarRootContext-DldxC3FJ.js";import"./getDisabledMountTransitionStyles-tXQmkZ9Q.js";import"./getPseudoElementBounds-CAzCOJ3L.js";import"./chevron-down-DAwV2NNc.js";import"./index-OuSfth0Z.js";import"./error-DvgnJEpu.js";import"./BaseCbacBanner-CA_tZLUE.js";import"./makeExternalStore-DcNKv6Lc.js";import"./Tooltip-D_C8QLsG.js";import"./PopoverPopup-BtHZXFbP.js";import"./debounce-WcXDhRUO.js";import"./useOsdkClient-Dm3jcQQp.js";import"./tick-fx0AyRna.js";import"./DropdownField-DY4lNhEH.js";import"./isEqual-BRRPuctS.js";import"./withOsdkMetrics-CNNLqNUF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
