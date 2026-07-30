import{f as p,j as e}from"./iframe-bqNDes0h.js";import{O as i}from"./object-table-Bo7ZzyOs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-KbNypInQ.js";import"./index-D-kpR4U5.js";import"./Dialog-DBt6SKPv.js";import"./cross-D-HBFxBZ.js";import"./svgIconContainer-nN-O7odi.js";import"./useBaseUiId-BdVIrhLm.js";import"./InternalBackdrop-jCgELips.js";import"./composite-Bes1Kf7p.js";import"./index-CQpE82He.js";import"./index-KCfabZ1g.js";import"./index-DuHyQ_BY.js";import"./useEventCallback-BVtK7C84.js";import"./SkeletonBar-BVWt6TzE.js";import"./LoadingCell-BB2VWb1o.js";import"./ColumnConfigDialog-DB-SaiNF.js";import"./DraggableList-BjBpafGP.js";import"./search-DkS45smT.js";import"./Input-Dg6Zh6vs.js";import"./useControlled-BXUawHF3.js";import"./isEqual-CxKcdXuf.js";import"./isObject-D5Xm145F.js";import"./Button-BOlqyk1x.js";import"./ActionButton-Bb4ArXLq.js";import"./Checkbox-D_4CQR_a.js";import"./useValueChanged-BmACd2KS.js";import"./CollapsiblePanel-D76wv8TD.js";import"./MultiColumnSortDialog-BptSZ354.js";import"./MenuTrigger-hKGw6jH7.js";import"./CompositeItem-CdBWSXyW.js";import"./ToolbarRootContext-B-Yq57Bt.js";import"./getDisabledMountTransitionStyles-7Pr0gztR.js";import"./getPseudoElementBounds-DSu5pY6s.js";import"./chevron-down-BfCtZkjC.js";import"./index-Gm4DsetC.js";import"./error-rjrh1Exq.js";import"./BaseCbacBanner-ColLsRFK.js";import"./makeExternalStore-Cz-ju0RG.js";import"./Tooltip-CyTiQ41n.js";import"./PopoverPopup-eUWm8DRH.js";import"./toNumber-C9-sS8P1.js";import"./useOsdkClient-C5axgICL.js";import"./tick-DPgqlyJG.js";import"./DropdownField-DgPlq2BT.js";import"./withOsdkMetrics-BOXWJewy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
