import{f as p,j as e}from"./iframe-hkjMetp8.js";import{O as i}from"./object-table-BRxCfB_0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BG3PwWgg.js";import"./Table-Dko8Upk3.js";import"./index-DGAVzjUG.js";import"./Dialog-BOBWfbkF.js";import"./cross-BtmO4_tP.js";import"./svgIconContainer-6MVX_yz2.js";import"./useBaseUiId-vPjg87EZ.js";import"./InternalBackdrop-nPd6HaQG.js";import"./composite-CH-gf1yj.js";import"./index-DekbtEE0.js";import"./index-Cdw40tlt.js";import"./index-CZwKy0_e.js";import"./useEventCallback-DrBTYvw2.js";import"./SkeletonBar-CiIjXZ8Z.js";import"./LoadingCell-fVbK0evv.js";import"./ColumnConfigDialog-Dck2Ojjg.js";import"./DraggableList--J9ne7rl.js";import"./search-CEBIaEbf.js";import"./Input-5tyvJsuV.js";import"./useControlled-BbG65MVX.js";import"./isEqual-DxFkj09B.js";import"./isObject-BQUFjSwU.js";import"./Button-Ca8Yrp0-.js";import"./ActionButton-B2oiBf7l.js";import"./Checkbox-CvNyspqG.js";import"./useValueChanged-pSSuPQN8.js";import"./CollapsiblePanel-Db6NbA8L.js";import"./MultiColumnSortDialog--efeFQie.js";import"./MenuTrigger-T7OTl7Yr.js";import"./CompositeItem-DF9NnpkL.js";import"./ToolbarRootContext-Dr07gjpJ.js";import"./getDisabledMountTransitionStyles-5QCsfeUs.js";import"./getPseudoElementBounds-wN4T0YrG.js";import"./chevron-down-C1qRhGfc.js";import"./index-D9iCbPpq.js";import"./error-BfCVgfZr.js";import"./BaseCbacBanner-DKZQG3ac.js";import"./makeExternalStore-BByL-sEm.js";import"./Tooltip-bjs24eg9.js";import"./PopoverPopup-CcVfATcq.js";import"./toNumber-BRsGC7Sk.js";import"./useOsdkClient-BwTex2Oc.js";import"./tick-D4T1Ni-K.js";import"./DropdownField-Bo90G8ai.js";import"./withOsdkMetrics-BAFcUBo2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
