import{f as p,j as e}from"./iframe-B3mx1e7o.js";import{O as i}from"./object-table-1PCcbDzi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CYshz4VR.js";import"./Table-D76OmSYk.js";import"./index-DGYUX92V.js";import"./Dialog-V-zagEfu.js";import"./cross-B9kPzvEC.js";import"./svgIconContainer-FK5xU_Ww.js";import"./useBaseUiId-jhGUmvK_.js";import"./InternalBackdrop-CUnDJSE9.js";import"./composite-B6Bzb-Bh.js";import"./index-DkggUZJz.js";import"./index-okIslH3U.js";import"./index-QxzKJckf.js";import"./useEventCallback-DB1VO-Ej.js";import"./SkeletonBar-DkIR69a2.js";import"./LoadingCell-2emHpL4r.js";import"./ColumnConfigDialog-Bmr6E9K8.js";import"./DraggableList-Camw0BGD.js";import"./search-C3rgfEDS.js";import"./Input-DMnsQZMf.js";import"./useControlled-NC3pjcpV.js";import"./Button-BLh3Q0Cn.js";import"./small-cross-BV1Y16pW.js";import"./ActionButton-CYYHdkDq.js";import"./Checkbox-D3gxqTUf.js";import"./useValueChanged-uIwJjbQa.js";import"./CollapsiblePanel-PLEB1nBg.js";import"./MultiColumnSortDialog-BZuM4OQt.js";import"./MenuTrigger-D5nHAN_h.js";import"./CompositeItem-BYviqqVz.js";import"./ToolbarRootContext-CWnM7U0U.js";import"./getDisabledMountTransitionStyles-DNG-Xre2.js";import"./getPseudoElementBounds-CnHMtgYQ.js";import"./chevron-down-CK-ezsYC.js";import"./index-COi3FVZS.js";import"./error-BPT5rBPO.js";import"./BaseCbacBanner-CFo5Bld3.js";import"./makeExternalStore-y1Nxnt7J.js";import"./Tooltip-DKeBpkxz.js";import"./PopoverPopup-9q-Aq5vE.js";import"./debounce-DwgWTWp1.js";import"./useOsdkClient-DrZXbU1R.js";import"./tick-BmfvJE-P.js";import"./DropdownField-CCkjgUnV.js";import"./useDebouncedCallback-DrsZGHfG.js";import"./withOsdkMetrics-ChTwZ6CU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
