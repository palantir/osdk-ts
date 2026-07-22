import{f as p,j as e}from"./iframe-CG2OFJ7I.js";import{O as i}from"./object-table-BTZtTzyg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DaORRuYu.js";import"./Table-CHWzpC4Y.js";import"./index-Dby7DClp.js";import"./Dialog-BdXv6i_m.js";import"./cross-DefaB_M5.js";import"./svgIconContainer-CODCypXK.js";import"./useBaseUiId-DLohyEQW.js";import"./InternalBackdrop-DcsR0gWC.js";import"./composite-Blgk7ack.js";import"./index-DJbFUgNQ.js";import"./index-Ddd2yW-8.js";import"./index-DY-JcPJo.js";import"./useEventCallback-C0AthRpJ.js";import"./SkeletonBar-Zqdos3L-.js";import"./LoadingCell-CpSe00QM.js";import"./ColumnConfigDialog-BdLDKrll.js";import"./DraggableList-KAEqiJR3.js";import"./search-D1bpzPZZ.js";import"./Input-CDAk9ihG.js";import"./useControlled-DemSZ3bp.js";import"./isEqual-DZaCZx1y.js";import"./isObject-h-39pN0s.js";import"./Button-DvJGIvnq.js";import"./ActionButton-9uH5V4MK.js";import"./Checkbox-Cm9752ML.js";import"./useValueChanged-D2Q9nhS9.js";import"./CollapsiblePanel-CtLmbdwe.js";import"./MultiColumnSortDialog-Vm3Vi4WE.js";import"./MenuTrigger-BgkpRvSr.js";import"./CompositeItem-B4vKrZ_I.js";import"./ToolbarRootContext-eFJIvnUU.js";import"./getDisabledMountTransitionStyles-F7H9ZnTa.js";import"./getPseudoElementBounds-DOpDgg5c.js";import"./chevron-down-BIj16iZg.js";import"./index-DeBLm_yC.js";import"./error-mpWotWR3.js";import"./BaseCbacBanner-BmkX61oi.js";import"./makeExternalStore-2EXNFTlz.js";import"./Tooltip-5mQixMzC.js";import"./PopoverPopup-Byv-mINe.js";import"./toNumber-Dd0U1AAD.js";import"./useOsdkClient-Cs9GgSAw.js";import"./tick-B9E6c3pz.js";import"./DropdownField-D-kHFxb-.js";import"./withOsdkMetrics-CUzNioJX.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
