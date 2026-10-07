import{f as p,j as e}from"./iframe-Cidbd9U_.js";import{O as i}from"./object-table-DOYUvVE2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CDZ9ml3u.js";import"./Table-Cm9n3Fcz.js";import"./index-DHtVl5lr.js";import"./Dialog-Cc422kNb.js";import"./cross-BTGq5cWg.js";import"./svgIconContainer-BRrBCQQQ.js";import"./useBaseUiId-qBbflN1T.js";import"./InternalBackdrop-CRTpZ3Mc.js";import"./composite-wQgj7E4E.js";import"./index-CvuA1U9Q.js";import"./index-B4TXSL8y.js";import"./index-ZSi5hxUD.js";import"./useEventCallback-CO_HzDJy.js";import"./SkeletonBar-DL5xvDTN.js";import"./LoadingCell-BXhBEBYw.js";import"./ColumnConfigDialog-O6Wlhrjg.js";import"./DraggableList-CZhlEIQW.js";import"./search-d8u8t1Cm.js";import"./Input-DOViwQP-.js";import"./useControlled-CD8kHrNC.js";import"./Button-B5k9EJ-k.js";import"./small-cross-DlRvHu10.js";import"./ActionButton-CipDVnp9.js";import"./Checkbox-BD3PmDNr.js";import"./useValueChanged-DYHqJuk7.js";import"./CollapsiblePanel-CDei_9JY.js";import"./MultiColumnSortDialog-MAcg3lHH.js";import"./MenuTrigger-DZEXzv0N.js";import"./CompositeItem-RBkj06fN.js";import"./ToolbarRootContext-CFGHeG8t.js";import"./getDisabledMountTransitionStyles-DeD1w0n_.js";import"./getPseudoElementBounds-BvCzK4YA.js";import"./chevron-down-gf2GhVLl.js";import"./index-CSBG_Ogr.js";import"./error-CLTZOyUS.js";import"./BaseCbacBanner-BadiuEUJ.js";import"./makeExternalStore-Cw6sOONN.js";import"./Tooltip-DjjgX0Td.js";import"./PopoverPopup-Bs69cHyF.js";import"./debounce-DvHpY4Ou.js";import"./useOsdkClient-BgKg3-oj.js";import"./tick-C2hQsqLU.js";import"./DropdownField-DiOH_8ae.js";import"./isEqual-L9bITeX8.js";import"./withOsdkMetrics-CFH71nhb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
