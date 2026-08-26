import{f as p,j as e}from"./iframe-HPk8PS_c.js";import{O as i}from"./object-table-DyFkhb8j.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-su4Hi2o2.js";import"./index-ycotQEUY.js";import"./Dialog-DF3gmhsv.js";import"./cross-qvgLowaP.js";import"./svgIconContainer-BMj1NZEz.js";import"./useBaseUiId-DyhY13O7.js";import"./InternalBackdrop-DLnVAThU.js";import"./composite-CDSdRi3O.js";import"./index-Bnjs_noj.js";import"./index-0ACB6LG3.js";import"./index-CVMhrb3v.js";import"./useEventCallback-VhI6mw5e.js";import"./SkeletonBar-Ce3NAC-V.js";import"./LoadingCell-CumeMH-r.js";import"./ColumnConfigDialog-ko1-r91r.js";import"./DraggableList-D2pNdOgJ.js";import"./search-x6xgpOK0.js";import"./Input-Bh9c4kB6.js";import"./useControlled-Km1VPfUr.js";import"./Button-rjBOsBth.js";import"./small-cross-D6KgMXaf.js";import"./ActionButton-Ci9x-kBG.js";import"./Checkbox-Br4gvYc9.js";import"./useValueChanged-D0B2x_ZH.js";import"./CollapsiblePanel-DAjrCgEC.js";import"./MultiColumnSortDialog-BOH4eueD.js";import"./MenuTrigger-wiRu2lqv.js";import"./CompositeItem-GZD7DweO.js";import"./ToolbarRootContext-Bc6ZO6TN.js";import"./getDisabledMountTransitionStyles-Br696C9U.js";import"./getPseudoElementBounds-BLRKQPoP.js";import"./chevron-down-bsQWt5c5.js";import"./index-CJv58edI.js";import"./error-B-DQrxK7.js";import"./BaseCbacBanner-CjDeC_hp.js";import"./makeExternalStore-BZC1NDUy.js";import"./Tooltip-C-1zfwo-.js";import"./PopoverPopup-b-zBBO9f.js";import"./debounce-MLDsEJum.js";import"./useOsdkClient-Df4IDmh8.js";import"./tick-DRH0bCvc.js";import"./DropdownField-CMFJy-W9.js";import"./isEqual-DgpaePJY.js";import"./withOsdkMetrics-DPrVQQ1f.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
