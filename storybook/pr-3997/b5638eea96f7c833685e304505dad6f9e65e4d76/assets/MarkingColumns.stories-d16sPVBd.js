import{f as p,j as e}from"./iframe-9-OswRKS.js";import{O as i}from"./object-table-wpL3Cm1K.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DYL5InEO.js";import"./Table-CvGw4i9O.js";import"./index-SvIFWBde.js";import"./Dialog-C30pJrHD.js";import"./cross-C9OnvPLu.js";import"./svgIconContainer-DVdpIesk.js";import"./useBaseUiId-CXx1U6Z5.js";import"./InternalBackdrop-B8-pARTC.js";import"./composite-BDc56zIL.js";import"./index-HMIJrenA.js";import"./index-D2h7VYDA.js";import"./index-CgAEYrry.js";import"./useEventCallback-Jrhf3FEf.js";import"./SkeletonBar-B0TH4rTw.js";import"./LoadingCell-OeZp9zKS.js";import"./ColumnConfigDialog-CKJWMH1q.js";import"./DraggableList-IWsi11_u.js";import"./search-DPzUsQds.js";import"./Input-0npSrlPh.js";import"./useControlled-CGEFCoiG.js";import"./Button-gzjofzeF.js";import"./small-cross-zc5ZGHVz.js";import"./ActionButton-mnEAQH7e.js";import"./Checkbox-QBMXMF1z.js";import"./useValueChanged-D0cvyeOe.js";import"./CollapsiblePanel-DZN0B05J.js";import"./MultiColumnSortDialog-Qc0ZudeP.js";import"./MenuTrigger-Ql2c4oyO.js";import"./CompositeItem-TZo4ZNUL.js";import"./ToolbarRootContext-DtmptTL0.js";import"./getDisabledMountTransitionStyles-B9CzyLp8.js";import"./getPseudoElementBounds-CkUMfr4i.js";import"./chevron-down-B8yYoTwv.js";import"./index-D44_FbgA.js";import"./error-BLLqk3sD.js";import"./BaseCbacBanner-BSIiSJcU.js";import"./makeExternalStore-D5luXUgx.js";import"./Tooltip-BCzkmJcH.js";import"./PopoverPopup-KmKJk9qz.js";import"./debounce-Bb1Cpy72.js";import"./useOsdkClient-B_1Wh43n.js";import"./tick-DBm-RnL7.js";import"./DropdownField-BZtIeQpR.js";import"./isEqual-CSlBgnD1.js";import"./withOsdkMetrics-DVJybCh6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
