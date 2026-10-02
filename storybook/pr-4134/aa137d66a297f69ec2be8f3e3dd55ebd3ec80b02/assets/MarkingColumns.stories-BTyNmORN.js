import{f as p,j as e}from"./iframe-DSCKXMMn.js";import{O as i}from"./object-table-CZbIqfQV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ByptHhz6.js";import"./Table-Cr_vfs4t.js";import"./index-C7t8d6sq.js";import"./Dialog-Dkrw2dKY.js";import"./cross-D9ih38aN.js";import"./svgIconContainer-D4l9MrWe.js";import"./useBaseUiId-C9Ey5z8I.js";import"./InternalBackdrop-DJscdhsG.js";import"./composite-CJGYUM8R.js";import"./index-CCGpCs03.js";import"./index-DTvEyVWA.js";import"./index-BEvWt0A3.js";import"./useEventCallback-B0RejaLo.js";import"./SkeletonBar-DseYvX2N.js";import"./LoadingCell-B39OstDD.js";import"./ColumnConfigDialog-CZg_lX5T.js";import"./DraggableList-CU3gmg9g.js";import"./search-D1zNkldZ.js";import"./Input-BzhFYkRc.js";import"./useControlled-D9fcHZz8.js";import"./Button-DsHbP2Ls.js";import"./small-cross-ClLnfsZa.js";import"./ActionButton-CDDQzDqj.js";import"./Checkbox-BcOWPK9W.js";import"./useValueChanged-CJeLgR2q.js";import"./CollapsiblePanel-CwSDo6aL.js";import"./MultiColumnSortDialog-Dd95rHb3.js";import"./MenuTrigger-L3QaBjKq.js";import"./CompositeItem-DuylraaY.js";import"./ToolbarRootContext-DcygcfWk.js";import"./getDisabledMountTransitionStyles-MuBPPf6T.js";import"./getPseudoElementBounds-BMTzjDxj.js";import"./chevron-down-CoJlRxaZ.js";import"./index-BNKB-ErD.js";import"./error-KXOxkvIx.js";import"./BaseCbacBanner-CwIMApuU.js";import"./makeExternalStore-BTu3d_5y.js";import"./Tooltip-BjyKOyVF.js";import"./PopoverPopup-wHBjGNnn.js";import"./debounce-CC8-tWmy.js";import"./useOsdkClient-BI1XigGe.js";import"./tick-DglZI497.js";import"./DropdownField-B7i6TyJK.js";import"./isEqual-W07FZkQR.js";import"./withOsdkMetrics-DIi3nPfP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
