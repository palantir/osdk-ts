import{f as p,j as e}from"./iframe-youlX2De.js";import{O as i}from"./object-table-CZlqesvA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DMj5aBc5.js";import"./Table-BUXNF9G6.js";import"./index-Dyy6V7kE.js";import"./Dialog-CEPS87HP.js";import"./cross-JeqqL3a9.js";import"./svgIconContainer-jpw1hIcy.js";import"./useBaseUiId-CNEu6f9Y.js";import"./InternalBackdrop-DrcATpaw.js";import"./composite-DF73ZPcS.js";import"./index-rZeAfKdB.js";import"./index-DQbJRRPB.js";import"./index-BKFOU1PI.js";import"./useEventCallback-CBEba5_p.js";import"./SkeletonBar-D9FqFwfd.js";import"./LoadingCell-BioKg3ey.js";import"./ColumnConfigDialog-BdeKS_jT.js";import"./DraggableList-CN91YWNw.js";import"./search-D5ZZMY1l.js";import"./Input-B5YU-z1C.js";import"./useControlled-DaSybbDg.js";import"./Button-CbOY6Chn.js";import"./small-cross-C88pqnLw.js";import"./ActionButton-B9nof7-y.js";import"./Checkbox-ALGSiDY-.js";import"./useValueChanged-CwfpjC1s.js";import"./CollapsiblePanel-DcdJjh9a.js";import"./MultiColumnSortDialog-Dquqxk1p.js";import"./MenuTrigger-Dt4-5A8f.js";import"./CompositeItem-Cml7HDGs.js";import"./ToolbarRootContext-CA4yJOZ7.js";import"./getDisabledMountTransitionStyles-CJj-Pq78.js";import"./getPseudoElementBounds-CGTU7rr0.js";import"./chevron-down-CmXpC65B.js";import"./index-wc1nMvwS.js";import"./error-BHWsO3Au.js";import"./BaseCbacBanner-DWHrmiV_.js";import"./makeExternalStore-qhtMEBHa.js";import"./Tooltip-DefV4BIS.js";import"./PopoverPopup-DhxeTh5N.js";import"./debounce-B4zD5peJ.js";import"./useOsdkClient-11CkZQ2p.js";import"./tick-DwbVRuy-.js";import"./DropdownField-DLS2xroO.js";import"./isEqual-Dc24nM2v.js";import"./withOsdkMetrics-BqmpDAQp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
