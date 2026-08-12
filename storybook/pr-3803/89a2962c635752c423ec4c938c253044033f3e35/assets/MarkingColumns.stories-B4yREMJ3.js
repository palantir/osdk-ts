import{f as p,j as e}from"./iframe-q4S2v8GD.js";import{O as i}from"./object-table-BvRSzjb-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dpp2lQ4d.js";import"./Table-Drtwulh9.js";import"./index-BRFgZsWh.js";import"./Dialog-DL6vx7cQ.js";import"./cross-CN4Kceog.js";import"./svgIconContainer-DFZA-Fi_.js";import"./useBaseUiId-D3OPJG_I.js";import"./InternalBackdrop-Bld_ME41.js";import"./composite-DOJ73mma.js";import"./index-BWxwkoVm.js";import"./index-B40hmhNC.js";import"./index-Bk_rrwjS.js";import"./useEventCallback-De6jZjPl.js";import"./SkeletonBar-Byu2pDu2.js";import"./LoadingCell-CKL4pqco.js";import"./ColumnConfigDialog-CblCdaMB.js";import"./DraggableList-BTGvR-Bu.js";import"./search-YAd7k3do.js";import"./Input-DwFaTt_h.js";import"./useControlled-D8LdPNhB.js";import"./isEqual-DGTzVpqZ.js";import"./isObject-CgjyPitK.js";import"./Button-Cxxa8caB.js";import"./ActionButton-BiXIiqha.js";import"./Checkbox-CUw5mc94.js";import"./useValueChanged-BuKbmg_i.js";import"./CollapsiblePanel-DcijGtz2.js";import"./MultiColumnSortDialog-9_tVI5Wa.js";import"./MenuTrigger-BZarWjlz.js";import"./CompositeItem-D_tBcLdd.js";import"./ToolbarRootContext-DRR8g4NM.js";import"./getDisabledMountTransitionStyles-BeQTEcPy.js";import"./getPseudoElementBounds-CRkiwrFu.js";import"./chevron-down-DRJe7j9S.js";import"./index-BAqD6s8z.js";import"./error-BqxlTXt7.js";import"./BaseCbacBanner-BF-mF9lT.js";import"./makeExternalStore-B1AqrHO7.js";import"./Tooltip-DROwBxlR.js";import"./PopoverPopup-ChsXcYzN.js";import"./toNumber-CdKQpFiI.js";import"./useOsdkClient-f_xWKxSr.js";import"./tick-BdVu04v7.js";import"./DropdownField-DjGfuLt1.js";import"./withOsdkMetrics-DyNmWK8l.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
