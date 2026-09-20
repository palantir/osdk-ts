import{f as p,j as e}from"./iframe-BdKsMQww.js";import{O as i}from"./object-table-BkuIvgs3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-MlpURx7u.js";import"./Table-COLO6x9d.js";import"./index-DKUuG3z9.js";import"./Dialog-BZinWXyV.js";import"./cross-DNiGESUx.js";import"./svgIconContainer-BnCWnnko.js";import"./useBaseUiId-DO0eFKXX.js";import"./InternalBackdrop-DjojD6Rk.js";import"./composite-BNox4Mzc.js";import"./index-EXOzxBPi.js";import"./index-DYRORlje.js";import"./index-DhxjQLte.js";import"./useEventCallback--olNvQB0.js";import"./SkeletonBar-MNZpFCNa.js";import"./LoadingCell-x5JMX0sy.js";import"./ColumnConfigDialog-C4xdKt-Z.js";import"./DraggableList-DXLCT-Tu.js";import"./search-PSF1rGs2.js";import"./Input-D7CFUCMW.js";import"./useControlled-7KbTYIa_.js";import"./Button-CcSyVXzr.js";import"./small-cross-BxFuyZcX.js";import"./ActionButton-DsqqImyB.js";import"./Checkbox-C7TXRP0z.js";import"./useValueChanged-D6y7mlr9.js";import"./CollapsiblePanel-DCh2QXjz.js";import"./MultiColumnSortDialog-B3qpBvBx.js";import"./MenuTrigger-I9hrZ2IK.js";import"./CompositeItem-e2FL5qAU.js";import"./ToolbarRootContext-CdO1SR-V.js";import"./getDisabledMountTransitionStyles-TgKlIubu.js";import"./getPseudoElementBounds-D4Wbrwbn.js";import"./chevron-down-Bw8Fchsf.js";import"./index-BbdEClvW.js";import"./error-Nv9n4Hjz.js";import"./BaseCbacBanner-C4MJE6CF.js";import"./makeExternalStore-BoNEUCBG.js";import"./Tooltip-BTAbXJfa.js";import"./PopoverPopup-B2wOVFFv.js";import"./debounce-BNPeqOUu.js";import"./useOsdkClient-DZdPds6c.js";import"./tick-B_ziR0EA.js";import"./DropdownField-B3O32GOa.js";import"./isEqual-DRWZbCfX.js";import"./withOsdkMetrics-C12liwOp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
