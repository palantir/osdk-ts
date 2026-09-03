import{f as p,j as e}from"./iframe-BbienW_k.js";import{O as i}from"./object-table-B0ggEq35.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BwYT6GBt.js";import"./Table-CfHAZrq3.js";import"./index-BtVRX5ik.js";import"./Dialog-CEYCtVCN.js";import"./cross-D79BwPuA.js";import"./svgIconContainer-9jKJCEtA.js";import"./useBaseUiId-mGNAwuSb.js";import"./InternalBackdrop-BGghe2gX.js";import"./composite-DehmI49I.js";import"./index-_tXk15dP.js";import"./index-CBwDIYK2.js";import"./index-DHabHcMF.js";import"./useEventCallback-CRCaMKxg.js";import"./SkeletonBar-CNiR4LJi.js";import"./LoadingCell-CLphyg8f.js";import"./ColumnConfigDialog-D9bURUp0.js";import"./DraggableList-CaawD_zV.js";import"./search-DtpodeH8.js";import"./Input-C02zCytb.js";import"./useControlled-BbPCoZLB.js";import"./Button-DgQWdRpI.js";import"./small-cross-Bbjb07uO.js";import"./ActionButton-CH9BHHmi.js";import"./Checkbox-Bh14gdun.js";import"./useValueChanged-B86iGZyF.js";import"./CollapsiblePanel-CzWLrbRF.js";import"./MultiColumnSortDialog-CbdTworu.js";import"./MenuTrigger-B_CsaOE_.js";import"./CompositeItem-BtZO_Q27.js";import"./ToolbarRootContext-tNJYHhh0.js";import"./getDisabledMountTransitionStyles-DNQX_6BS.js";import"./getPseudoElementBounds-B22wLb31.js";import"./chevron-down-BvQtKUUh.js";import"./index-Bvo9wdGf.js";import"./error-Re8NGQni.js";import"./BaseCbacBanner-Cl4iMAcK.js";import"./makeExternalStore-D54vu3Pa.js";import"./Tooltip-CfUkHW1C.js";import"./PopoverPopup-9hgtmzo1.js";import"./debounce-CfOEKZQ8.js";import"./useOsdkClient-Ba-MyRxU.js";import"./tick-DXkGn8fU.js";import"./DropdownField-DWMcGlhL.js";import"./isEqual-CS7j3ZhU.js";import"./withOsdkMetrics-dw5qmcGp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
