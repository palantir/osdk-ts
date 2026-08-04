import{f as p,j as e}from"./iframe-B5HqSCrD.js";import{O as i}from"./object-table-CLhvV0sn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DE0BuRVC.js";import"./Table-DkELPzBJ.js";import"./index-3d_Ih8uu.js";import"./Dialog-H9-E4w2l.js";import"./cross-VDxjcvXQ.js";import"./svgIconContainer-CO9jRBk2.js";import"./useBaseUiId-CeyHJ71C.js";import"./InternalBackdrop-DBiFfm9_.js";import"./composite-BZoJUTZ6.js";import"./index-Dmjh6VFf.js";import"./index-DYzYrR48.js";import"./index-99B3A1s9.js";import"./useEventCallback-C8_kB9P9.js";import"./SkeletonBar-BLsKHVil.js";import"./LoadingCell-BEvGs8YD.js";import"./ColumnConfigDialog-DH75OxG6.js";import"./DraggableList-CxDpBb9E.js";import"./search-CuXh0Rqq.js";import"./Input-B9x2qENv.js";import"./useControlled-BmEUk3EV.js";import"./isEqual-Xf2Ok89z.js";import"./isObject-D3meP0-w.js";import"./Button-iUWC51LE.js";import"./ActionButton-DFf9rTic.js";import"./Checkbox-CHxjevHU.js";import"./useValueChanged-1wblBHwY.js";import"./CollapsiblePanel-BBfKXcAF.js";import"./MultiColumnSortDialog-CFCdo4Nh.js";import"./MenuTrigger-C9hbuv7A.js";import"./CompositeItem-B8KMobiC.js";import"./ToolbarRootContext-CDgHazHY.js";import"./getDisabledMountTransitionStyles-hHW3P6En.js";import"./getPseudoElementBounds-BHzfj_4b.js";import"./chevron-down-n8kYFotX.js";import"./index-DQiInoFX.js";import"./error-CIQ5NIBk.js";import"./BaseCbacBanner-BF2X8on1.js";import"./makeExternalStore-DH9SaGtV.js";import"./Tooltip-DvI37wGo.js";import"./PopoverPopup-BW2-1mOh.js";import"./toNumber-BnUSw4ET.js";import"./useOsdkClient-Y2Pbzv4c.js";import"./tick-Z31rtQQN.js";import"./DropdownField-dRPK3w48.js";import"./withOsdkMetrics-GMU0XdN8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
