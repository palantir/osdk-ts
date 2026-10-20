import{f as p,j as e}from"./iframe-DTW0zbJg.js";import{O as i}from"./object-table-BEpCdqlB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CHqtrcoH.js";import"./Table-CAZxm3nQ.js";import"./index-C19Cbd9w.js";import"./Dialog-DkpQneLX.js";import"./cross-DUPbOXnx.js";import"./svgIconContainer-C_NUwc74.js";import"./useBaseUiId-pXEfVnMq.js";import"./InternalBackdrop-4VqQwQv1.js";import"./composite-Ch_TQxW6.js";import"./index-Dd12A0b5.js";import"./index-BNxdJsoF.js";import"./index-5qBmfdlD.js";import"./useEventCallback-cQNzf77G.js";import"./SkeletonBar-CDOQsslB.js";import"./LoadingCell-BR7Clm_q.js";import"./ColumnConfigDialog-BFrZlNI3.js";import"./DraggableList-BsjIts7t.js";import"./search-DeSIHMGj.js";import"./Input-9Y-Iasoe.js";import"./useControlled-B9BNpkGu.js";import"./Button-Bl_fb9NZ.js";import"./small-cross-Bf21DHmz.js";import"./ActionButton-BmVlmB5r.js";import"./Checkbox-DJWeAXt-.js";import"./useValueChanged-Cbl0UOUH.js";import"./CollapsiblePanel-Cd-HUXxd.js";import"./MultiColumnSortDialog-CrE6Md6y.js";import"./MenuTrigger-DFscXaTL.js";import"./CompositeItem-B8f4EvZj.js";import"./ToolbarRootContext-D1Ryhi91.js";import"./getDisabledMountTransitionStyles-BbG3pxx_.js";import"./getPseudoElementBounds-9ob2YQd8.js";import"./chevron-down-B_r9FktR.js";import"./index-DwQpT-YG.js";import"./error-DehDfWea.js";import"./BaseCbacBanner-CSmyF8Eg.js";import"./makeExternalStore-Cd_b6BPY.js";import"./Tooltip-zKVmMRSO.js";import"./PopoverPopup-BhSRrebE.js";import"./debounce-AmCXqNPb.js";import"./useOsdkClient-BE_aYXwA.js";import"./tick-CoEPOCTW.js";import"./DropdownField-BUpFr6O7.js";import"./isEqual-BwJgMRCR.js";import"./withOsdkMetrics-BhopaHNu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
