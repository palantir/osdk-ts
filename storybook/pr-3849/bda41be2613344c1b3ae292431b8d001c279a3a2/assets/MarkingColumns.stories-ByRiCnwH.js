import{f as p,j as e}from"./iframe-Dgz81_4K.js";import{O as i}from"./object-table-XVXvflBu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BGuNlUqA.js";import"./Table-C06ByMGO.js";import"./index-F2L_OuM-.js";import"./Dialog-CDp-Veg8.js";import"./cross-HWG3bUDk.js";import"./svgIconContainer-25pdXJKu.js";import"./useBaseUiId-BncAuZS9.js";import"./InternalBackdrop-BPQNGpAG.js";import"./composite-CBrybvSL.js";import"./index-CiBmfd_G.js";import"./index-47H69AQZ.js";import"./index-Ds6p27lf.js";import"./useEventCallback-BnOv6IzA.js";import"./SkeletonBar-VEjFGD4t.js";import"./LoadingCell-K6JSKvyl.js";import"./ColumnConfigDialog-pjMNDJdp.js";import"./DraggableList-D7gqpHuT.js";import"./search-z0PitH45.js";import"./Input-Bd0_Le58.js";import"./useControlled-pvz7JI6x.js";import"./Button-Bs7uQYUi.js";import"./small-cross-B70ETe3L.js";import"./ActionButton-CIeAXwRJ.js";import"./Checkbox-CeDeYt1s.js";import"./useValueChanged-CuNdENEf.js";import"./CollapsiblePanel-C6cIco7o.js";import"./MultiColumnSortDialog-cIk4biXZ.js";import"./MenuTrigger-6x1oizp8.js";import"./CompositeItem-Do6kqd5-.js";import"./ToolbarRootContext-mBIzMDya.js";import"./getDisabledMountTransitionStyles-O1nph41t.js";import"./getPseudoElementBounds-F0fN0QBG.js";import"./chevron-down-Cgs_d-_t.js";import"./index-htBElXvT.js";import"./error-nIlnw04t.js";import"./BaseCbacBanner-DMJ_hAQ0.js";import"./makeExternalStore-B9Noz3DE.js";import"./Tooltip-AKcFu8Jq.js";import"./PopoverPopup-dwsqpii7.js";import"./debounce-D5ysvOol.js";import"./useOsdkClient-CFPwPtkE.js";import"./tick-GG7597jc.js";import"./DropdownField-rCUt7nOE.js";import"./isEqual-UVul4Goj.js";import"./withOsdkMetrics-tYv3puyU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
