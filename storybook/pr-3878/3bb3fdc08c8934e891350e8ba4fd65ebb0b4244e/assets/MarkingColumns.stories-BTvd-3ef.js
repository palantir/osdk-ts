import{f as p,j as e}from"./iframe-Q3lyvqpT.js";import{O as i}from"./object-table-DjUxPUAU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C1UOXpSy.js";import"./Table-v4htO3pV.js";import"./index-DeVeQfvD.js";import"./Dialog-C8KqO5c3.js";import"./cross-0utMfnpw.js";import"./svgIconContainer-_aeVyyfk.js";import"./useBaseUiId-TlHWJ25V.js";import"./InternalBackdrop-CRj-pdnm.js";import"./composite-BRlBDXOv.js";import"./index-BgSh7jc2.js";import"./index-Bkfj5pmT.js";import"./index-Bl6Opt5R.js";import"./useEventCallback-DnvC_ML6.js";import"./SkeletonBar-QK5le0jY.js";import"./LoadingCell-BAiUfDTv.js";import"./ColumnConfigDialog-BRjbHqVx.js";import"./DraggableList-ji0QiaRd.js";import"./search-DRlPV6Yf.js";import"./Input-DsdhnLi8.js";import"./useControlled-D3J0OrAn.js";import"./Button-7q-Awilo.js";import"./small-cross-BEYL-4rR.js";import"./ActionButton-OcicrXmk.js";import"./Checkbox-C4u4wGQ6.js";import"./useValueChanged-BQwBfP0w.js";import"./CollapsiblePanel-CFtMnobt.js";import"./MultiColumnSortDialog-iq_y_xkS.js";import"./MenuTrigger-CaBal1-u.js";import"./CompositeItem-BdfVH036.js";import"./ToolbarRootContext-bI52zd0O.js";import"./getDisabledMountTransitionStyles-CX6UYYQ4.js";import"./getPseudoElementBounds-Bb-Q1nBa.js";import"./chevron-down-CyTKzqpr.js";import"./index-CCtIAxk4.js";import"./error-CMb3oavi.js";import"./BaseCbacBanner-BhMHFvMV.js";import"./makeExternalStore-DEfXnagi.js";import"./Tooltip-C59Dncbu.js";import"./PopoverPopup-BMgvSen-.js";import"./debounce-Bsm6DEnd.js";import"./useOsdkClient-DfbTHzVZ.js";import"./tick-CuCRS-A9.js";import"./DropdownField-D-IHjSdp.js";import"./isEqual-vx51G8vk.js";import"./withOsdkMetrics-PcCF_U4s.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
