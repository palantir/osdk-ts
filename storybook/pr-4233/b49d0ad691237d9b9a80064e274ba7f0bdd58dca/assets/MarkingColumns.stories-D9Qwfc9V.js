import{f as p,j as e}from"./iframe-Yi2ClGEq.js";import{O as i}from"./object-table-CaIo3T7V.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bw9P2RvH.js";import"./Table-BdFrvihc.js";import"./index-kCKGZ11f.js";import"./Dialog-C9gO9GIU.js";import"./cross-DHxNtUiL.js";import"./svgIconContainer-DLtA5jnz.js";import"./useBaseUiId-BJvR5yfv.js";import"./InternalBackdrop-D86_8K-4.js";import"./composite-7FUpzlUO.js";import"./index-C3Jd9_Nf.js";import"./index-DxUEYHeM.js";import"./index-BWR70Qv0.js";import"./useEventCallback-C9LtGhrj.js";import"./SkeletonBar-CDwfwm__.js";import"./LoadingCell-CROJ_4TS.js";import"./ColumnConfigDialog-Dy_CqDUs.js";import"./DraggableList-DaGXgq_V.js";import"./search-D88J6TuI.js";import"./Input-B_VCwPTa.js";import"./useControlled-688Acsw-.js";import"./Button-BhYwxPlJ.js";import"./small-cross-BME_eUbX.js";import"./ActionButton-Cu3YO4Fd.js";import"./Checkbox-y1-FMYyx.js";import"./useValueChanged-DMCuXC2X.js";import"./CollapsiblePanel-pAq3TuKo.js";import"./MultiColumnSortDialog-DwKTr3Yn.js";import"./MenuTrigger-DuKpFfjw.js";import"./CompositeItem-DwrEPXux.js";import"./ToolbarRootContext-erRSrQJW.js";import"./getDisabledMountTransitionStyles-B8Q9sBzy.js";import"./getPseudoElementBounds-Dsc1LKXz.js";import"./chevron-down-A6HBtaN4.js";import"./index-Ccuhm711.js";import"./error-CvXgqfjV.js";import"./BaseCbacBanner-i-5de_6b.js";import"./makeExternalStore-BnsF0xX3.js";import"./Tooltip-RTNvhfg1.js";import"./PopoverPopup-C3dzCr8l.js";import"./debounce-gfIDaUjK.js";import"./useOsdkClient-tf1w8g-M.js";import"./tick-Di576YmF.js";import"./DropdownField-BGRkIBYk.js";import"./isEqual-8BsEnXjv.js";import"./withOsdkMetrics-Dhx42yDK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
