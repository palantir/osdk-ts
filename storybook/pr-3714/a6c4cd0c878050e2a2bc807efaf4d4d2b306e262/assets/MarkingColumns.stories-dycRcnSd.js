import{f as p,j as e}from"./iframe-CAHBdCq1.js";import{O as i}from"./object-table-T_P-24-S.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C93BjOpu.js";import"./Table-DOZQLu0a.js";import"./index-Dqhelv5t.js";import"./Dialog-BzzhzZKr.js";import"./cross-BQ_JGAQt.js";import"./svgIconContainer-DOYhvU8O.js";import"./useBaseUiId-C9UEEuYY.js";import"./InternalBackdrop-CQfjdTft.js";import"./composite-Cw8iKrah.js";import"./index-B6rpGcbO.js";import"./index-CBm27cPC.js";import"./index-t36P8cje.js";import"./useEventCallback-K4V40yth.js";import"./SkeletonBar-DlZvQ982.js";import"./LoadingCell-DbHuNjv4.js";import"./ColumnConfigDialog-LY5BvHeP.js";import"./DraggableList-DlJDdGgL.js";import"./search-qXyA5VAY.js";import"./Input-BRiED6IK.js";import"./useControlled-DCrjw_eX.js";import"./isEqual-D0xhFanq.js";import"./isObject-C-6xjFdv.js";import"./Button-CtYeFmPN.js";import"./ActionButton-B7wsglI1.js";import"./Checkbox-B0i-xbEB.js";import"./useValueChanged-53YKvIDL.js";import"./CollapsiblePanel-BpuV4A--.js";import"./MultiColumnSortDialog-CSswAFhs.js";import"./MenuTrigger-sT3jhqPm.js";import"./CompositeItem-DP-2Pynq.js";import"./ToolbarRootContext-CDnt2Uxp.js";import"./getDisabledMountTransitionStyles-DfOpAOiT.js";import"./getPseudoElementBounds-CV8vvke0.js";import"./chevron-down-BZWaRd4L.js";import"./index-BsrN4B4I.js";import"./error-DWFWgzPi.js";import"./BaseCbacBanner-DewKD20b.js";import"./makeExternalStore-D-PIieom.js";import"./Tooltip-9BPWhjmI.js";import"./PopoverPopup-BWJvzvZ3.js";import"./toNumber-ByImogkG.js";import"./useOsdkClient-BOZytSve.js";import"./tick-CL-fzRZ1.js";import"./DropdownField-aEFzb0eb.js";import"./withOsdkMetrics-CaiqjNUf.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
