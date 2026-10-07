import{f as p,j as e}from"./iframe-CaNMSJKR.js";import{O as i}from"./object-table-B4nUFTX-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CgAWU684.js";import"./Table-CXor-3n_.js";import"./index-BPdtXYwS.js";import"./Dialog-DZmI8oo7.js";import"./cross-B28N2oZp.js";import"./svgIconContainer-BGKrE44l.js";import"./useBaseUiId-PY7Joizm.js";import"./InternalBackdrop-D8_pjPZI.js";import"./composite-Dq7ZaU-F.js";import"./index-DwHiGc_W.js";import"./index-D7ympiaR.js";import"./index-B-0ROkdE.js";import"./useEventCallback-DELk9yi6.js";import"./SkeletonBar-DZW3AZk0.js";import"./LoadingCell-Bct2rEqt.js";import"./ColumnConfigDialog-CM4I9Zey.js";import"./DraggableList-BZrwHyPq.js";import"./search-DK5elQsW.js";import"./Input-D6a6LuGx.js";import"./useControlled-HJg4bzpt.js";import"./Button-BAJ6GAJV.js";import"./small-cross-BFWN5N2J.js";import"./ActionButton-CuPxYvfY.js";import"./Checkbox-DhBO-rGO.js";import"./useValueChanged-CuGKNkm7.js";import"./CollapsiblePanel-Deq-o9BK.js";import"./MultiColumnSortDialog-CPOHrKZz.js";import"./MenuTrigger-C0JMR4yg.js";import"./CompositeItem-BvVHH8oi.js";import"./ToolbarRootContext-D5kbM0o_.js";import"./getDisabledMountTransitionStyles-CpEFz5aF.js";import"./getPseudoElementBounds-B9dP_zSK.js";import"./chevron-down-QgUF0MKI.js";import"./index-A0dvdsuB.js";import"./error-B3rv2TKE.js";import"./BaseCbacBanner-DBsGqNjb.js";import"./makeExternalStore-CFwmhsDu.js";import"./Tooltip-DK9uzyUm.js";import"./PopoverPopup-te4Dxo5n.js";import"./debounce-BYEPsvAQ.js";import"./useOsdkClient-Cyo_6-30.js";import"./tick-DUxcYiue.js";import"./DropdownField-DhO1HYQh.js";import"./isEqual--yZjSA3R.js";import"./withOsdkMetrics-OgxjXoMv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
