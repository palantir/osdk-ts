import{f as p,j as e}from"./iframe-DFGm32Bw.js";import{O as i}from"./object-table-DAoukbAL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fy9m8Fnq.js";import"./Table-C-2dN_9g.js";import"./index-DjqFaeTC.js";import"./Dialog-JVhmUD0b.js";import"./cross-DnLg4Ct0.js";import"./svgIconContainer-D-V_MVwY.js";import"./useBaseUiId-DYKNlNgP.js";import"./InternalBackdrop-DMMzhES7.js";import"./composite-B4OJQV7f.js";import"./index-FvgKhH5U.js";import"./index-DyySrusV.js";import"./index-BtNh-TEb.js";import"./useEventCallback-D-auj4HH.js";import"./SkeletonBar-BnB7SRxp.js";import"./LoadingCell-CRI7SY5l.js";import"./ColumnConfigDialog-BcB0_qFv.js";import"./DraggableList-CrzviJA-.js";import"./search-DNzannB5.js";import"./Input-DL-Ka-L9.js";import"./useControlled-DGRdFYYN.js";import"./Button-DZG39NOd.js";import"./small-cross-D1IQ7GLs.js";import"./ActionButton-DvfQCjtU.js";import"./Checkbox-f6-CCXnM.js";import"./useValueChanged-Cy-yyTWd.js";import"./CollapsiblePanel-BUe5kDOz.js";import"./MultiColumnSortDialog-PFk6lrkl.js";import"./MenuTrigger-D4X0o3Kq.js";import"./CompositeItem-BNbv7BXO.js";import"./ToolbarRootContext-8KEPzI9b.js";import"./getDisabledMountTransitionStyles-Bp5WDZ4V.js";import"./getPseudoElementBounds-opeseqFO.js";import"./chevron-down-PQvYLt7R.js";import"./index-CNgLBIA9.js";import"./error-Ce5TqXqV.js";import"./BaseCbacBanner-BHUG4D8Y.js";import"./makeExternalStore-C_KPNZSJ.js";import"./Tooltip-gJq75AB8.js";import"./PopoverPopup-DcPuDwsK.js";import"./debounce-CGY3R00a.js";import"./useOsdkClient-DRvI5chP.js";import"./tick-BLcfeptW.js";import"./DropdownField-DRjEtpTz.js";import"./isEqual-BobN_a0F.js";import"./withOsdkMetrics-DGoS0Q7x.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
