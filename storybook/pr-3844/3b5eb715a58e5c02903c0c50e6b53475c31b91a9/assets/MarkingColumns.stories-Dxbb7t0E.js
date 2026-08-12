import{f as p,j as e}from"./iframe-DRBkbE1i.js";import{O as i}from"./object-table-C_j_0jcR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bhy-vhLy.js";import"./Table-C1q3NVW5.js";import"./index-Ga9rMgQo.js";import"./Dialog-DpzItFLS.js";import"./cross-0Mj0-pu3.js";import"./svgIconContainer-GQruUs5P.js";import"./useBaseUiId-BZVOUgQ3.js";import"./InternalBackdrop-1gUwgard.js";import"./composite-D-yjAodN.js";import"./index-BnWv0qmu.js";import"./index-ucRzESfs.js";import"./index-sOMbo7xM.js";import"./useEventCallback-CrX-MfN8.js";import"./SkeletonBar-Du0j_bJ1.js";import"./LoadingCell-B-pvt2hb.js";import"./ColumnConfigDialog-D9xD06Iq.js";import"./DraggableList-ClvcvVVQ.js";import"./search-BCFpbh-w.js";import"./Input-5siurHkP.js";import"./useControlled-DwqloCO6.js";import"./isEqual-BUHBmoa0.js";import"./isObject-DtZ0hGEB.js";import"./Button-BLvvEGYy.js";import"./ActionButton-C53YW_7q.js";import"./Checkbox-ClDUwm9r.js";import"./useValueChanged-CwOVIz65.js";import"./CollapsiblePanel-B6DMNgeu.js";import"./MultiColumnSortDialog-DwXXtltp.js";import"./MenuTrigger-Cb_yabDY.js";import"./CompositeItem-DFqDcWEk.js";import"./ToolbarRootContext-D1BoJMvj.js";import"./getDisabledMountTransitionStyles-BsNbfQXH.js";import"./getPseudoElementBounds-BEb3Hnaa.js";import"./chevron-down-XFaMqkP6.js";import"./index-CV6Dvu1R.js";import"./error-CZAmZxlc.js";import"./BaseCbacBanner-DHSUKASY.js";import"./makeExternalStore-zFNhFc_7.js";import"./Tooltip-kNmVaPUd.js";import"./PopoverPopup-DnoVF_UW.js";import"./toNumber-Bn9QajWk.js";import"./useOsdkClient-CJVpIN8w.js";import"./tick-HaTM7KoE.js";import"./DropdownField-DuRoHfH_.js";import"./withOsdkMetrics-BK4JgsVP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
