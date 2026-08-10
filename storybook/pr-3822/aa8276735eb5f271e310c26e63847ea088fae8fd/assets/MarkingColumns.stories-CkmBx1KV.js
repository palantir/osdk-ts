import{f as p,j as e}from"./iframe-DnXG6ria.js";import{O as i}from"./object-table-KFsg62x-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DdcgdAiM.js";import"./Table-CQJ4vgR6.js";import"./index-DxGDEKEE.js";import"./Dialog-CNCtnPRX.js";import"./cross-DGHgZ4N6.js";import"./svgIconContainer-ChS4vANK.js";import"./useBaseUiId-SDlMWfrq.js";import"./InternalBackdrop-BQ-7_gxa.js";import"./composite-BEEpir5s.js";import"./index-DxHtJywa.js";import"./index-BqFzb3S3.js";import"./index-BzoiIP9u.js";import"./useEventCallback-DjluW_k9.js";import"./SkeletonBar-Dwni2nXR.js";import"./LoadingCell-Bn_yeQJc.js";import"./ColumnConfigDialog-DlSyRhLb.js";import"./DraggableList-CbZ-0Bi-.js";import"./search-CeZhHxk0.js";import"./Input-Bl1_npZH.js";import"./useControlled-r9d6OnMX.js";import"./isEqual-gAaIwKbo.js";import"./isObject-A2Q3YumP.js";import"./Button-cT8XGKmn.js";import"./ActionButton-w_6XSUcW.js";import"./Checkbox-CD6f-efu.js";import"./useValueChanged-DPra_eNP.js";import"./CollapsiblePanel-BiYr8rym.js";import"./MultiColumnSortDialog-CEZrlD_o.js";import"./MenuTrigger-CWLeW0Na.js";import"./CompositeItem-CIThtc7F.js";import"./ToolbarRootContext-Z4gE_V_n.js";import"./getDisabledMountTransitionStyles-9qXvSGVO.js";import"./getPseudoElementBounds-BZ3Q47XE.js";import"./chevron-down-DxHRdvtD.js";import"./index-CYr1UXPi.js";import"./error-BVlgT8A_.js";import"./BaseCbacBanner-CRDypnj8.js";import"./makeExternalStore-DUeGYV2j.js";import"./Tooltip-D-bOi1It.js";import"./PopoverPopup-_C67I76H.js";import"./toNumber-BGtg9XJ9.js";import"./useOsdkClient-BYVbAAl7.js";import"./tick-DafkJj6Q.js";import"./DropdownField-BmAVXTfo.js";import"./withOsdkMetrics-k-U64tRw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
