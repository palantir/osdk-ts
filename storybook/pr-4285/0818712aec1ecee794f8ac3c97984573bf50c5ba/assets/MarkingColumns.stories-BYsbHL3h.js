import{f as p,j as e}from"./iframe-DzAVrHJ1.js";import{O as i}from"./object-table-Bnf64FoN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ty-K3PMW.js";import"./Table-Z8p84qki.js";import"./index-C292Gvtl.js";import"./Dialog-DlW-Iivu.js";import"./cross-CwuqZdL9.js";import"./svgIconContainer-Cjn3QLE6.js";import"./useBaseUiId-C1k_ZcgS.js";import"./InternalBackdrop-BDeEY7y8.js";import"./composite-CMwdngwB.js";import"./index-Bz0mU_jm.js";import"./index-eBdvYF3H.js";import"./index-BITESRA3.js";import"./useEventCallback-ClRDKuB_.js";import"./SkeletonBar-CCisd-VN.js";import"./LoadingCell-Bz4DD9uV.js";import"./ColumnConfigDialog-65KeMPvb.js";import"./DraggableList-B-KFUbtk.js";import"./search-Bq5r2eJD.js";import"./Input-BlhxiPuo.js";import"./useControlled-P8ZVsLoA.js";import"./Button-G6bICRGy.js";import"./small-cross-BSn3VnZ1.js";import"./ActionButton-OV3tGcjp.js";import"./Checkbox-CQxEUilD.js";import"./useValueChanged-DsB7tdZ5.js";import"./CollapsiblePanel-DZRV367u.js";import"./MultiColumnSortDialog-DVENVKDl.js";import"./MenuTrigger-CbBXGgjg.js";import"./CompositeItem-DvTwYr0k.js";import"./ToolbarRootContext-mfvQj9MT.js";import"./getDisabledMountTransitionStyles-BvYKup6L.js";import"./getPseudoElementBounds-BHcHYgUs.js";import"./chevron-down-BLhnWXgc.js";import"./index-GsoBtsBJ.js";import"./error-BRilv6DJ.js";import"./BaseCbacBanner-DiXmyfjJ.js";import"./makeExternalStore-DMxEFrb0.js";import"./Tooltip-QlEg8iZs.js";import"./PopoverPopup-BfNxXbJo.js";import"./debounce-BdQCzqPM.js";import"./useOsdkClient-CMKwPtVZ.js";import"./tick-kpTktDfZ.js";import"./DropdownField-DPtluWvH.js";import"./isEqual-Bj__1TVq.js";import"./withOsdkMetrics-C01mqZCt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
