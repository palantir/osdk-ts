import{f as p,j as e}from"./iframe-Bw13kIxi.js";import{O as i}from"./object-table-kxZ9tU0A.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BzOLmTcY.js";import"./Table-C8yqct6T.js";import"./index-MMxGRtZu.js";import"./Dialog-DfHRROsO.js";import"./cross-Bot7O1S5.js";import"./svgIconContainer-CHQSAFNt.js";import"./useBaseUiId-BD7FpPox.js";import"./InternalBackdrop-A7BWoqb_.js";import"./composite-BFCFgZut.js";import"./index-CUU4Y7hn.js";import"./index-BqWGwO84.js";import"./index-BFk6o5Yc.js";import"./useEventCallback-DTY0kHsH.js";import"./SkeletonBar-CpAUSAEn.js";import"./LoadingCell-CanaaSrx.js";import"./ColumnConfigDialog-JQuoDAkJ.js";import"./DraggableList-BslGcgGG.js";import"./search-DC1ogqGn.js";import"./Input-2zOhGHVv.js";import"./useControlled-DefJa1NZ.js";import"./Button-CE0Z6ey5.js";import"./small-cross-jMKjsjhb.js";import"./ActionButton-DXMkOznn.js";import"./Checkbox-C5nrXeA-.js";import"./useValueChanged-qKqnNGu6.js";import"./CollapsiblePanel-C7c8Mi8e.js";import"./MultiColumnSortDialog-D0HB9zMf.js";import"./MenuTrigger-DrqgM8Ia.js";import"./CompositeItem-B4j9mPKG.js";import"./ToolbarRootContext-IHMHRzml.js";import"./getDisabledMountTransitionStyles-Dm6t4Qzi.js";import"./getPseudoElementBounds-BbQB3o-0.js";import"./chevron-down-hwQFkKEa.js";import"./index-Dtvh5Ts7.js";import"./error-CDpWRRdK.js";import"./BaseCbacBanner-C6nWB-Kz.js";import"./makeExternalStore-BPlb4pia.js";import"./Tooltip-C2VUAIPR.js";import"./PopoverPopup-Fr35LjTY.js";import"./debounce-BaVRg2vf.js";import"./useOsdkClient-ysIV4O88.js";import"./tick-vVehnAOz.js";import"./DropdownField-QqZNyAQs.js";import"./isEqual-DLZP89tE.js";import"./withOsdkMetrics-Bh3armvA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
