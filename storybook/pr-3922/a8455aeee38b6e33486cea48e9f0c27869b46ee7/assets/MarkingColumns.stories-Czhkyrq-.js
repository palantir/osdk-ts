import{f as p,j as e}from"./iframe-CSel4t1W.js";import{O as i}from"./object-table-BpmVsFZU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DeRLNq8K.js";import"./Table-CKnMo4X1.js";import"./index-VOBk3ad_.js";import"./Dialog-ClnNjxqL.js";import"./cross-DPetmLAe.js";import"./svgIconContainer-i8GFflPC.js";import"./useBaseUiId-D0496slr.js";import"./InternalBackdrop-BYisvq6i.js";import"./composite-Byzj7O17.js";import"./index-DeXJQAWa.js";import"./index--NqLpmCo.js";import"./index-BV5Cdoe7.js";import"./useEventCallback-DqKcK-vR.js";import"./SkeletonBar-BfqGkaOo.js";import"./LoadingCell--tt_u-sG.js";import"./ColumnConfigDialog-ChsJWmLY.js";import"./DraggableList-DZKIG4MP.js";import"./search-BwGGgMMr.js";import"./Input-DGTrvJuV.js";import"./useControlled-7Z_CrWcG.js";import"./Button-B0bJWnZB.js";import"./small-cross-CV_RxsQI.js";import"./ActionButton-DjrfVe6W.js";import"./Checkbox-Df_kkF2C.js";import"./useValueChanged-wwbLd3Ma.js";import"./CollapsiblePanel-BVTCVGUH.js";import"./MultiColumnSortDialog-HNxeuU0j.js";import"./MenuTrigger-CoXfZTuu.js";import"./CompositeItem-DNegNKGA.js";import"./ToolbarRootContext-CEF5Xnn_.js";import"./getDisabledMountTransitionStyles-BsKiYSYB.js";import"./getPseudoElementBounds-DPjB8idw.js";import"./chevron-down-cgZkYG2x.js";import"./index-BoKtPRc2.js";import"./error-zHB_ZVMZ.js";import"./BaseCbacBanner-C9jY6EAK.js";import"./makeExternalStore-DsAD24Tw.js";import"./Tooltip-D7w10onw.js";import"./PopoverPopup-BrgHtowj.js";import"./debounce-BABMYm_Y.js";import"./useOsdkClient-Dj6M6d9F.js";import"./tick-ChdjX_bW.js";import"./DropdownField-CxMOL9ui.js";import"./isEqual-DbA57Rmi.js";import"./withOsdkMetrics-BkUfyHr_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
