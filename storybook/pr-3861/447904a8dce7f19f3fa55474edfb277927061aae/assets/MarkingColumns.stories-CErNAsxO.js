import{f as p,j as e}from"./iframe-DKy1AV9s.js";import{O as i}from"./object-table-B9HBiAT2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BQnNVSqD.js";import"./Table-CgA0pJZo.js";import"./index-Du9AgFeI.js";import"./Dialog-CzH2sOkG.js";import"./cross-DWvNM6aD.js";import"./svgIconContainer-CmdDPKdW.js";import"./useBaseUiId-DXR-gGQN.js";import"./InternalBackdrop-Hx_fAg69.js";import"./composite-DIA_5bjb.js";import"./index-DYHGdsLl.js";import"./index-WeJ_Lope.js";import"./index-_0GvayOq.js";import"./useEventCallback-Dr0GHl4b.js";import"./SkeletonBar-5tg7WMK9.js";import"./LoadingCell-BRyArc3C.js";import"./ColumnConfigDialog-DIDxiY08.js";import"./DraggableList-CQBonzRI.js";import"./search-CoqdhJoi.js";import"./Input-ClkjPeCn.js";import"./useControlled-BeCa4j1K.js";import"./Button-CT75AnP8.js";import"./small-cross-B73khPHd.js";import"./ActionButton-Ch5xzSjH.js";import"./Checkbox-yfgCXt3G.js";import"./useValueChanged-Dzc4R6hM.js";import"./CollapsiblePanel-XdZ5rNxN.js";import"./MultiColumnSortDialog-Be3EoEW-.js";import"./MenuTrigger-DEiICrj5.js";import"./CompositeItem-D1YEdKX1.js";import"./ToolbarRootContext-B96YkNbH.js";import"./getDisabledMountTransitionStyles-DMo4BEvH.js";import"./getPseudoElementBounds-8aym6eDS.js";import"./chevron-down-BgiHHBSL.js";import"./index-DUh9Rd_7.js";import"./error-B2JG09GC.js";import"./BaseCbacBanner-DaWThKyM.js";import"./makeExternalStore-O-ViDFSd.js";import"./Tooltip-STNIv-wy.js";import"./PopoverPopup-Bt_JvPjL.js";import"./debounce-De_uQl3O.js";import"./useOsdkClient-BTgiLzGJ.js";import"./tick-CPA85Yzm.js";import"./DropdownField-CoeAa-lS.js";import"./isEqual-DGhgqELw.js";import"./withOsdkMetrics-DmspcQnU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
