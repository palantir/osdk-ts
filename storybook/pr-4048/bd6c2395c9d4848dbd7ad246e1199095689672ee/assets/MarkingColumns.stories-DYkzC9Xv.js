import{f as p,j as e}from"./iframe-cfVHShSW.js";import{O as i}from"./object-table-h-pD-D9U.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DIuXOY3G.js";import"./Table-BkLnj2tw.js";import"./index-Dh0_pJy1.js";import"./Dialog-fvTgsksn.js";import"./cross-CQMpStFn.js";import"./svgIconContainer-shdj6Qbw.js";import"./useBaseUiId-Dx0z8IdG.js";import"./InternalBackdrop-D8f4nw96.js";import"./composite-DGFet_96.js";import"./index-DyU-H2ls.js";import"./index-B1nRcBho.js";import"./index-4e4CIFBu.js";import"./useEventCallback-BEjjrUNS.js";import"./SkeletonBar-B7tEemlu.js";import"./LoadingCell-BQwKQHLp.js";import"./ColumnConfigDialog-BxFvYZit.js";import"./DraggableList-B-boOlGO.js";import"./search-HP5frDaz.js";import"./Input-CRQW49QU.js";import"./useControlled-DRr_lzX9.js";import"./Button-2DUkL7w7.js";import"./small-cross-CMcRrXYz.js";import"./ActionButton-CQj94TDP.js";import"./Checkbox-B5DEItIX.js";import"./useValueChanged-B7R09HF5.js";import"./CollapsiblePanel-CHOxQQMz.js";import"./MultiColumnSortDialog-DoGW72Du.js";import"./MenuTrigger-DgHMNTY4.js";import"./CompositeItem-BNd8aIDX.js";import"./ToolbarRootContext-rTwoUfWD.js";import"./getDisabledMountTransitionStyles-Q1E4gOTQ.js";import"./getPseudoElementBounds-DNOwWkqq.js";import"./chevron-down-SG4gwSm2.js";import"./index-C9sGbhZ7.js";import"./error-DFzqEfiP.js";import"./BaseCbacBanner-CAItOWNI.js";import"./makeExternalStore-ClpC--FM.js";import"./Tooltip-dXIOIOnO.js";import"./PopoverPopup-Ra0J62dt.js";import"./debounce-l3cliQfv.js";import"./useOsdkClient-DhV-YBPx.js";import"./tick-Clw3DVoZ.js";import"./DropdownField-qj0jYiEp.js";import"./isEqual-C3ehgu6v.js";import"./withOsdkMetrics-C8YqvKiy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
