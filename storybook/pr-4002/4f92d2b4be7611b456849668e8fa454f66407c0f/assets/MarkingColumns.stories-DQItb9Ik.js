import{f as p,j as e}from"./iframe-ooeZhevd.js";import{O as i}from"./object-table-BNZpf3v7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BnwSBXhQ.js";import"./Table-BMiiJ1dv.js";import"./index-Opepl_3W.js";import"./Dialog-whPx79dt.js";import"./cross-iJZIJRn7.js";import"./svgIconContainer-ibzsHUTw.js";import"./useBaseUiId-C4sL4iAi.js";import"./InternalBackdrop-x2qoBta4.js";import"./composite-DKgZ9LEy.js";import"./index-CYHbLiIc.js";import"./index-BCos5_Jn.js";import"./index-B9EyyIgd.js";import"./useEventCallback-EkipuQOe.js";import"./SkeletonBar-BEN-vvtf.js";import"./LoadingCell-BLOrCGFf.js";import"./ColumnConfigDialog-Bz6SjtKR.js";import"./DraggableList-DnSrmqMp.js";import"./search-DiIwZt1O.js";import"./Input-ChnU8vn2.js";import"./useControlled-Gm0PZX0G.js";import"./Button-DqC8xzBf.js";import"./small-cross-BLYu_41q.js";import"./ActionButton-W94KnoF6.js";import"./Checkbox-CNgD2rt5.js";import"./useValueChanged-DdWwkIMT.js";import"./CollapsiblePanel-Dp0b_V1p.js";import"./MultiColumnSortDialog-CzlwmuQV.js";import"./MenuTrigger-2FtXkbkY.js";import"./CompositeItem-CeghUTrN.js";import"./ToolbarRootContext-DJcBXYiU.js";import"./getDisabledMountTransitionStyles-BzrJdGmZ.js";import"./getPseudoElementBounds-DWlgx5fm.js";import"./chevron-down-BdjihE2B.js";import"./index-BYF2kMrC.js";import"./error-Cy4V0hs4.js";import"./BaseCbacBanner-CBMCJm_T.js";import"./makeExternalStore-BQ6V8XYd.js";import"./Tooltip-CXPB0dJ-.js";import"./PopoverPopup-BxQimM2r.js";import"./debounce-Bz4zrZ7K.js";import"./useOsdkClient-niwjXdb6.js";import"./tick-BBpzHv2k.js";import"./DropdownField-w_-x_8X7.js";import"./isEqual-Cr1Ti8md.js";import"./withOsdkMetrics-BKB5x-AQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
