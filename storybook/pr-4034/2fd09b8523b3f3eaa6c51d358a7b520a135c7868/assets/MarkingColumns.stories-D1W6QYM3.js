import{f as p,j as e}from"./iframe-DuUcAaP1.js";import{O as i}from"./object-table-Dm_KZ43D.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cljs7IBf.js";import"./Table-IFeDj94S.js";import"./index-BMAxCDX5.js";import"./Dialog-MJluOa7D.js";import"./cross-DA3pEoMX.js";import"./svgIconContainer-D6Wl3-m9.js";import"./useBaseUiId-CfMTCz35.js";import"./InternalBackdrop-vDVdwV4k.js";import"./composite-D0tirFPb.js";import"./index-C7wdlZ1Q.js";import"./index-C8RlHGqn.js";import"./index-1IuyBqrn.js";import"./useEventCallback-DzTIRB0b.js";import"./SkeletonBar-BSOPCtS0.js";import"./LoadingCell-C21YoYGE.js";import"./ColumnConfigDialog-glg7uWEe.js";import"./DraggableList-D65kdgez.js";import"./search-B301Jn8l.js";import"./Input-ZBAaH2zD.js";import"./useControlled-hj_GBxd9.js";import"./Button-DYK5XWRq.js";import"./small-cross-DsR2FxNg.js";import"./ActionButton-4IxyZ6p9.js";import"./Checkbox-CAqcqw4h.js";import"./useValueChanged-DC9rBEqy.js";import"./CollapsiblePanel-B9wkvjE1.js";import"./MultiColumnSortDialog-K78lmReX.js";import"./MenuTrigger-Bbfe8Edv.js";import"./CompositeItem-t4AJuCm-.js";import"./ToolbarRootContext-USv7Hl-3.js";import"./getDisabledMountTransitionStyles-BMs-QQOr.js";import"./getPseudoElementBounds-CV4Ydp2d.js";import"./chevron-down-DyPw48Bz.js";import"./index-BdrLvqg1.js";import"./error-CQ18bNi9.js";import"./BaseCbacBanner-Dh_Doq3I.js";import"./makeExternalStore-CsrMhPRl.js";import"./Tooltip-kBgFTss4.js";import"./PopoverPopup-RFQNSErN.js";import"./debounce-XJRfHy2s.js";import"./useOsdkClient-CdO-nD-I.js";import"./tick-DZ3AsDHy.js";import"./DropdownField-Cb0RW1j-.js";import"./isEqual-BatthdD_.js";import"./withOsdkMetrics-C2TwiXMB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
