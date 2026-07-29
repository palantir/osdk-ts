import{f as p,j as e}from"./iframe-DSTev5eS.js";import{O as i}from"./object-table-BfGnW0RR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C0ahMEab.js";import"./Table-DZIaqkCI.js";import"./index-BtWbeQUf.js";import"./Dialog-VfaVCThH.js";import"./cross-C10Jdqp4.js";import"./svgIconContainer-Cai_TSPH.js";import"./useBaseUiId-B59XoFeA.js";import"./InternalBackdrop-CEvJom9I.js";import"./composite-BJhDqHa5.js";import"./index-BwPzfPTv.js";import"./index-S3ZDNn8V.js";import"./index-XegCYuh1.js";import"./useEventCallback-KvrwGKDq.js";import"./SkeletonBar-DImFuTjI.js";import"./LoadingCell-BumKG1aU.js";import"./ColumnConfigDialog-Y2zJST67.js";import"./DraggableList-CxQgflTL.js";import"./search-DMSt_gFn.js";import"./Input-CzYxINMZ.js";import"./useControlled-Da-Y32Lj.js";import"./isEqual-B2qfbV2W.js";import"./isObject-CNoyAvLK.js";import"./Button-CdwVU5le.js";import"./ActionButton-gapXhp9b.js";import"./Checkbox-C3ybVd8y.js";import"./useValueChanged-DPsQXvZl.js";import"./CollapsiblePanel-DGmMO_kp.js";import"./MultiColumnSortDialog-8bpT1T9L.js";import"./MenuTrigger-Cnleo6p4.js";import"./CompositeItem-CNtoihVd.js";import"./ToolbarRootContext-BBHEgGcZ.js";import"./getDisabledMountTransitionStyles-Bk8gM2Hm.js";import"./getPseudoElementBounds-CPd5ApbU.js";import"./chevron-down-BhNoewVe.js";import"./index-dImclggj.js";import"./error-Dov-wMuf.js";import"./BaseCbacBanner-B0qn_muO.js";import"./makeExternalStore-CuCFyRpr.js";import"./Tooltip-DTJ2zgDX.js";import"./PopoverPopup-ChZ9Vu8V.js";import"./toNumber-CTCdAXlD.js";import"./useOsdkClient-DRuEyjWM.js";import"./tick-BrokP2U5.js";import"./DropdownField-B-9m17pd.js";import"./withOsdkMetrics-DyUr7g82.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
