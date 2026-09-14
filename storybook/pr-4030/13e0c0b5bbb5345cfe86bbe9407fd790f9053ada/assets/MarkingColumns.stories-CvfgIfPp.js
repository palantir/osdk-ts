import{f as p,j as e}from"./iframe-DNB7pKwx.js";import{O as i}from"./object-table-NhqJjfhz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-zsyjqppt.js";import"./Table-6ooXf9WE.js";import"./index-CO8W_kBY.js";import"./Dialog-CXIS6D4l.js";import"./cross-Z_Cymmuf.js";import"./svgIconContainer-C0yR1K-j.js";import"./useBaseUiId-CFk2utP-.js";import"./InternalBackdrop-CIfMg3nl.js";import"./composite-Bsz5rAKx.js";import"./index-Cw7J0xRI.js";import"./index-BWzAq-lx.js";import"./index-ByG_Kyzm.js";import"./useEventCallback-TZn-4x3i.js";import"./SkeletonBar-w-Qq4Ert.js";import"./LoadingCell-C9GMa5FX.js";import"./ColumnConfigDialog-nfmzFuly.js";import"./DraggableList-BNjC8l2T.js";import"./search-B9wO7VDL.js";import"./Input-D7pQEHrn.js";import"./useControlled-CZirorca.js";import"./Button-HIyOMk5a.js";import"./small-cross-Cm5tY5N1.js";import"./ActionButton-BDTx-Qbk.js";import"./Checkbox-Cw-ak7s5.js";import"./useValueChanged-CqJ9Z422.js";import"./CollapsiblePanel-B-v-suKQ.js";import"./MultiColumnSortDialog-BBCRPuIP.js";import"./MenuTrigger-ZMUMiY9J.js";import"./CompositeItem-DZ0O8IVJ.js";import"./ToolbarRootContext-Bsj6zD7P.js";import"./getDisabledMountTransitionStyles-C1tq72oP.js";import"./getPseudoElementBounds-C6kDNpun.js";import"./chevron-down-DkSb3Fq2.js";import"./index-B7VbqBWX.js";import"./error-DTTI1i1g.js";import"./BaseCbacBanner-6LauhKz6.js";import"./makeExternalStore-rGxpfiad.js";import"./Tooltip-CPCusgxO.js";import"./PopoverPopup-CBmLhNWS.js";import"./debounce-o7CNYw6i.js";import"./useOsdkClient-DLQVDV9-.js";import"./tick-avU0SFao.js";import"./DropdownField-BbJfNZO2.js";import"./isEqual-DDNJ2-ln.js";import"./withOsdkMetrics-aAvnjy0e.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
