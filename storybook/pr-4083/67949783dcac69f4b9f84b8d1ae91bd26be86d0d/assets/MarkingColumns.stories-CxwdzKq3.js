import{f as p,j as e}from"./iframe-CmWe6Tkd.js";import{O as i}from"./object-table-BDW2e7eZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CZkXumnj.js";import"./Table-Bf77Bvdy.js";import"./index-B0FfbiTF.js";import"./Dialog-Baty4Szl.js";import"./cross-DOjQafmq.js";import"./svgIconContainer-DT9zh-Vk.js";import"./useBaseUiId-Bs3xq9h4.js";import"./InternalBackdrop-Bgkh1XM7.js";import"./composite-BpFW5Zxj.js";import"./index-CsFAVmPm.js";import"./index-BoUQWx-c.js";import"./index-Czd4gxpW.js";import"./useEventCallback-zOr5ERUR.js";import"./SkeletonBar-BgpMicw2.js";import"./LoadingCell-BfizB9li.js";import"./ColumnConfigDialog-BvKtMJ72.js";import"./DraggableList-CG6HloQL.js";import"./search-BJsFf8Sf.js";import"./Input-CO62StGf.js";import"./useControlled-CuXXFPaU.js";import"./Button-DwrepdjR.js";import"./small-cross-Dx1H7YZV.js";import"./ActionButton-CvgVXH59.js";import"./Checkbox-BSGDor4r.js";import"./useValueChanged-D7qGEQa7.js";import"./CollapsiblePanel-CHhRUS9J.js";import"./MultiColumnSortDialog-BiWo3PKA.js";import"./MenuTrigger-CaGVAVpU.js";import"./CompositeItem-X2tnD8zQ.js";import"./ToolbarRootContext-DXrMWEKA.js";import"./getDisabledMountTransitionStyles-BRrVpNFj.js";import"./getPseudoElementBounds-CHGjGQ44.js";import"./chevron-down-B1zAncDT.js";import"./index-Ck62PufT.js";import"./error-C_AVzlpM.js";import"./BaseCbacBanner-8XqlSMPo.js";import"./makeExternalStore-CSTPATui.js";import"./Tooltip-CvPILd44.js";import"./PopoverPopup-2IEXcKZV.js";import"./debounce-CgnLqzzw.js";import"./useOsdkClient-CitkFKLb.js";import"./tick-BW8FxYJj.js";import"./DropdownField-BNVRIq1Y.js";import"./isEqual-Mehm483B.js";import"./withOsdkMetrics-CiiIaaP6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
