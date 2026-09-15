import{f as p,j as e}from"./iframe-Cmyuw2Ph.js";import{O as i}from"./object-table-CawhF4-U.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BdOHKbj_.js";import"./Table-BY0MFWMS.js";import"./index-DmkTpiQF.js";import"./Dialog-uqtrzIbG.js";import"./cross-DgRED2Y7.js";import"./svgIconContainer-kIxwS322.js";import"./useBaseUiId-BKvwKpWC.js";import"./InternalBackdrop-aC0FPmUr.js";import"./composite-BApZsjKv.js";import"./index-DdBzIF29.js";import"./index-Cy1dz_-E.js";import"./index-DrYEH3ho.js";import"./useEventCallback-D2P37CA4.js";import"./SkeletonBar-BFEabyG6.js";import"./LoadingCell-DWhEU-Sm.js";import"./ColumnConfigDialog-BjRzXQ2B.js";import"./DraggableList-Dx2ER0hA.js";import"./search-MWYwj9aD.js";import"./Input-DF2j3Inj.js";import"./useControlled-1Ry22NdV.js";import"./Button-Cgurdd-l.js";import"./small-cross-B-7R2q8G.js";import"./ActionButton-BwGzlO-h.js";import"./Checkbox-DGGzqo-s.js";import"./useValueChanged-C6zv_ojv.js";import"./CollapsiblePanel-DIQ0ICSn.js";import"./MultiColumnSortDialog-BtDphT88.js";import"./MenuTrigger-BEFYxjmP.js";import"./CompositeItem-Bm_UDkTp.js";import"./ToolbarRootContext-Bziyhvzk.js";import"./getDisabledMountTransitionStyles-A2_XJssl.js";import"./getPseudoElementBounds-C24zyg7W.js";import"./chevron-down-DihUPRd8.js";import"./index-BIIUg6ti.js";import"./error-BVkhCBJN.js";import"./BaseCbacBanner-nzEPUeti.js";import"./makeExternalStore-D1HySzYn.js";import"./Tooltip-DJOnRYv9.js";import"./PopoverPopup-BFna4Wvy.js";import"./debounce-YjruCfws.js";import"./useOsdkClient-Bhx478d6.js";import"./tick-Ci4PnMCw.js";import"./DropdownField-BYzSEZU3.js";import"./isEqual-3pvGkThH.js";import"./withOsdkMetrics-DCjep4oi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
