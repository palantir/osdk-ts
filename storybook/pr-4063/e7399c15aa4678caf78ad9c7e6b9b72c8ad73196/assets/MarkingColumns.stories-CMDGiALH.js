import{f as p,j as e}from"./iframe-C4MIlXUU.js";import{O as i}from"./object-table-DDycTUTt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DCfOkHUu.js";import"./Table-jh-sNjmf.js";import"./index-QdXGOJ9B.js";import"./Dialog-BPEWuES9.js";import"./cross-D03lplef.js";import"./svgIconContainer-DoAfVxUT.js";import"./useBaseUiId-BLYxIIxg.js";import"./InternalBackdrop-C98GTYMM.js";import"./composite-7GWV62aV.js";import"./index-fTGPOK7q.js";import"./index-DDMEfKUV.js";import"./index-Cltx_TvU.js";import"./useEventCallback-A9aazwfG.js";import"./SkeletonBar-DZ93h05E.js";import"./LoadingCell-Cco5s7MI.js";import"./ColumnConfigDialog-BSg8I-6I.js";import"./DraggableList-lWiaBS2q.js";import"./search-Bbx7uHY2.js";import"./Input-u7GRO9F9.js";import"./useControlled-DaM2GsbY.js";import"./Button-BxGZ6LLp.js";import"./small-cross-CI-bZQTO.js";import"./ActionButton-DY1T25ma.js";import"./Checkbox-CheOw8Pz.js";import"./useValueChanged-C4rXhlJi.js";import"./CollapsiblePanel-DHh5X-RV.js";import"./MultiColumnSortDialog-Nov7WwuB.js";import"./MenuTrigger-D0TRSJ66.js";import"./CompositeItem-C-l5BZdt.js";import"./ToolbarRootContext-DtcwdZup.js";import"./getDisabledMountTransitionStyles-BIGg12Vn.js";import"./getPseudoElementBounds-Bg5q8lr3.js";import"./chevron-down-DQjtaLz5.js";import"./index-BpG7TDWh.js";import"./error-m5JvGXlH.js";import"./BaseCbacBanner-BGFoGpfs.js";import"./makeExternalStore-D8FJMeEh.js";import"./Tooltip-hAryQfwI.js";import"./PopoverPopup-BqUvpiAJ.js";import"./debounce-NhhwNg05.js";import"./useOsdkClient-BdpGzgo-.js";import"./tick-Be-lb4_a.js";import"./DropdownField-iPMHZz0u.js";import"./isEqual-ncJ8uLoB.js";import"./withOsdkMetrics-P9SsSnz2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
