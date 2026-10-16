import{f as p,j as e}from"./iframe-DmjyB9qr.js";import{O as i}from"./object-table-BgGiwYnL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CAx3wjDj.js";import"./Table-fnyTkzoV.js";import"./index-D4TDlc_O.js";import"./Dialog-3AtA3abT.js";import"./cross-C5lxgD8z.js";import"./svgIconContainer-D2c8Ba4-.js";import"./useBaseUiId-BIBlatd5.js";import"./InternalBackdrop-CPUdsPru.js";import"./composite-ClGRLeRM.js";import"./index-CaiUNbzc.js";import"./index-Cv1wdKn8.js";import"./index-DaPZuE20.js";import"./useEventCallback-BDzgTZ89.js";import"./SkeletonBar-D7_1dMLv.js";import"./LoadingCell-iGmoUmLt.js";import"./ColumnConfigDialog-5IQv3rnK.js";import"./DraggableList-Zr6y84A2.js";import"./search-CQ17z9WA.js";import"./Input-CLw0N-7T.js";import"./useControlled-Bb9znHKm.js";import"./Button-DBHSL7QN.js";import"./small-cross-DjWAfLNP.js";import"./ActionButton-B_Fb6ob-.js";import"./Checkbox-B1MeKgvP.js";import"./useValueChanged-BLYKdZPH.js";import"./CollapsiblePanel-BBVpPSYq.js";import"./MultiColumnSortDialog-BHEa5kPa.js";import"./MenuTrigger-Bt2b4Jd1.js";import"./CompositeItem-DhSM1hah.js";import"./ToolbarRootContext-9w_REGks.js";import"./getDisabledMountTransitionStyles-Cs3lm4js.js";import"./getPseudoElementBounds-DttlvabX.js";import"./chevron-down-8HOE1Tp7.js";import"./index-ByDovlnf.js";import"./error-C5ZuOycH.js";import"./BaseCbacBanner-zoKqjEbA.js";import"./makeExternalStore-BpvdNYu5.js";import"./Tooltip-DoFgPSBW.js";import"./PopoverPopup-B54LMItf.js";import"./debounce-BacvmWfK.js";import"./useOsdkClient-C4LtXzbF.js";import"./tick-BMnkz0dp.js";import"./DropdownField-B6gxSasK.js";import"./isEqual-8t1qMO1j.js";import"./withOsdkMetrics-DRRr7i5M.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
