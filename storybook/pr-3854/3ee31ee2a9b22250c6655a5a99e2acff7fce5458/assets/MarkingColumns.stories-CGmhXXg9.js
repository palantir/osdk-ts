import{f as p,j as e}from"./iframe-BRcSfazb.js";import{O as i}from"./object-table-CveJ5maX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BThzV-GG.js";import"./Table-DBKYzQPw.js";import"./index-DySxQINm.js";import"./Dialog-BfW2k7mq.js";import"./cross-CzKOFjwP.js";import"./svgIconContainer-DFKBkWeR.js";import"./useBaseUiId-BZvlmCQ4.js";import"./InternalBackdrop-CPNW_N8S.js";import"./composite-AJQkq8yV.js";import"./index-Bj7tQvH9.js";import"./index-C16WPibF.js";import"./index-Cvqq4wj-.js";import"./useEventCallback-yfWQdhbU.js";import"./SkeletonBar-CBiF5c3x.js";import"./LoadingCell-V9JYgXpH.js";import"./ColumnConfigDialog-8s7pSmnr.js";import"./DraggableList-_03NYpNz.js";import"./search-BmQN2RwS.js";import"./Input-Dlwmy4kD.js";import"./useControlled-DVF1OsTI.js";import"./isEqual-CoVSWq5v.js";import"./isObject-CPVVSD5k.js";import"./Button-B_Mp1Nhv.js";import"./ActionButton-CAEW5VU9.js";import"./Checkbox-Bp57gTcy.js";import"./useValueChanged-Cf_8cs-A.js";import"./CollapsiblePanel-G_UPH1_-.js";import"./MultiColumnSortDialog-TN06HLk6.js";import"./MenuTrigger-mo6qcJt4.js";import"./CompositeItem-BZBUwPb5.js";import"./ToolbarRootContext-nXfAGVO2.js";import"./getDisabledMountTransitionStyles-CvYowRBO.js";import"./getPseudoElementBounds-CpVepoIM.js";import"./chevron-down-g3mf6yyW.js";import"./index-C7jMOB_Z.js";import"./error-CmdKI6uR.js";import"./BaseCbacBanner-VAO8jA4f.js";import"./makeExternalStore-B5f_GCis.js";import"./Tooltip-C0DB0uEe.js";import"./PopoverPopup-C_mRv8Tw.js";import"./toNumber-BrTFY869.js";import"./useOsdkClient-B3E6OW-I.js";import"./tick-D9nOZ42t.js";import"./DropdownField-BfzIcpjx.js";import"./withOsdkMetrics-jypHlMPF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
