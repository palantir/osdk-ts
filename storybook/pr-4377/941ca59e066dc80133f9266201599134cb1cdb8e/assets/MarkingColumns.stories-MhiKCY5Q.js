import{f as p,j as e}from"./iframe-C3GSLy5o.js";import{O as i}from"./object-table-C4RtD8RL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D1pMQ95h.js";import"./Table-CkKtRkcj.js";import"./index-BqbG7XLm.js";import"./Dialog-QyPTSiVh.js";import"./cross-dj-R22cu.js";import"./svgIconContainer-F6eoLrGz.js";import"./useBaseUiId-BAyO3Mf6.js";import"./InternalBackdrop-Dum2xeez.js";import"./composite-BVI_0hxc.js";import"./index-BwMTOFIg.js";import"./index-DXO-Swuq.js";import"./index-CZROecO1.js";import"./useEventCallback-BJ1Px1w8.js";import"./SkeletonBar-CVOuSg9f.js";import"./LoadingCell-FBheXDIZ.js";import"./ColumnConfigDialog-B7wNvZn4.js";import"./DraggableList-Bt8Io2mn.js";import"./search-DVQaImB8.js";import"./Input-C6r5AvcX.js";import"./useControlled-Byp-7XUM.js";import"./Button-BYai770H.js";import"./small-cross-DrCyLNki.js";import"./ActionButton-DhwSIxab.js";import"./Checkbox-s9kARS31.js";import"./useValueChanged-CnNP0I2h.js";import"./CollapsiblePanel-BqBPvrl-.js";import"./MultiColumnSortDialog-BpbO_ybu.js";import"./MenuTrigger-C0ONJiNd.js";import"./CompositeItem-BdOQd8fF.js";import"./ToolbarRootContext-DHSDX_M4.js";import"./getDisabledMountTransitionStyles-CmNfXk7f.js";import"./getPseudoElementBounds-DXbT67tB.js";import"./chevron-down-CZCskiqb.js";import"./index-bCW6YcNg.js";import"./error-73rgwKrP.js";import"./BaseCbacBanner-CSAoPOE1.js";import"./makeExternalStore-BkjVxrjL.js";import"./Tooltip-BESMOsqJ.js";import"./isObject-VV2I263M.js";import"./debounce-BTUnznPP.js";import"./useOsdkClient-C6Bijc8m.js";import"./tick-J5BevPob.js";import"./DropdownField-M-86bao8.js";import"./isEqual-C87bStg5.js";import"./_baseIsEqual-DQRLufDU.js";import"./withOsdkMetrics-BcmXRm6y.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
