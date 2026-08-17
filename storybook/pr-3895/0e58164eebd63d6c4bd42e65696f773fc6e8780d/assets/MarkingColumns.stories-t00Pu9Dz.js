import{f as p,j as e}from"./iframe-DVwkDS8L.js";import{O as i}from"./object-table-CW5ks6O5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CuM_C8uX.js";import"./Table-DMznMLZl.js";import"./index-B2DFp03X.js";import"./Dialog-i0MtrM66.js";import"./cross-COGhdLyT.js";import"./svgIconContainer-r5K4UgUA.js";import"./useBaseUiId-D7rE6SNe.js";import"./InternalBackdrop-BuWd3sOl.js";import"./composite-CNYsr7GG.js";import"./index-Bb7J_5Af.js";import"./index-Bh-tKDNJ.js";import"./index-C1CmYkA8.js";import"./useEventCallback-DGx2TQYW.js";import"./SkeletonBar-CqsYBrqh.js";import"./LoadingCell-Cl1hyvVa.js";import"./ColumnConfigDialog-DJh4qSym.js";import"./DraggableList-BvwpLn0D.js";import"./search-CaKxRlqq.js";import"./Input-BqPh0cED.js";import"./useControlled-CIDtoIkt.js";import"./Button-BqtiPfOB.js";import"./small-cross-BSPO3y5H.js";import"./ActionButton-BFQ96y8Q.js";import"./Checkbox-CALf-FUx.js";import"./useValueChanged-CR7gMkQc.js";import"./CollapsiblePanel-CnIQhtcV.js";import"./MultiColumnSortDialog-ChJwlnLI.js";import"./MenuTrigger-DWOC39EQ.js";import"./CompositeItem-oNLn9P67.js";import"./ToolbarRootContext-s0DCpxFM.js";import"./getDisabledMountTransitionStyles-a8KtX7wR.js";import"./getPseudoElementBounds-DfG2bGtj.js";import"./chevron-down-9KBxjP_q.js";import"./index-BuNntoD4.js";import"./error-D_Hj0Ztb.js";import"./BaseCbacBanner-at1GySGa.js";import"./makeExternalStore-DelJbyGr.js";import"./Tooltip-TE59fFno.js";import"./PopoverPopup-Bylv3mxH.js";import"./debounce-C4IZ_bH8.js";import"./useOsdkClient-Bu2ys2gj.js";import"./tick-LEloDUPv.js";import"./DropdownField-CCMXdF1T.js";import"./isEqual-DTWh5T8b.js";import"./withOsdkMetrics-D89qfQxD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
