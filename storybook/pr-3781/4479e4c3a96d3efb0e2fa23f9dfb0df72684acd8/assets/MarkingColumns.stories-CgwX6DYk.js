import{f as p,j as e}from"./iframe-DkjIhjOk.js";import{O as i}from"./object-table-DjhA7KTC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUI5tsck.js";import"./Table-YRTYsQnk.js";import"./index-Ci1HsxQf.js";import"./Dialog-B-doa8PC.js";import"./cross-BOLu8mlC.js";import"./svgIconContainer-bvG5TW2Y.js";import"./useBaseUiId-Biend9O3.js";import"./InternalBackdrop-C_M3PWM9.js";import"./composite-DVDI3Vyc.js";import"./index-ey6hl2b8.js";import"./index--Nzol5yv.js";import"./index-C-30e07L.js";import"./useEventCallback-BcNnEe4O.js";import"./SkeletonBar-xPxJdYTs.js";import"./LoadingCell-RKWHNWRh.js";import"./ColumnConfigDialog-DcTSIA3i.js";import"./DraggableList-DelcAz5h.js";import"./search-BZ8v_096.js";import"./Input-D-eMrt1E.js";import"./useControlled-BTghw2bz.js";import"./Button-CwSvPgha.js";import"./small-cross-Bdoag7lD.js";import"./ActionButton-DnSGyXBp.js";import"./Checkbox-BUlFL2Ay.js";import"./useValueChanged-mGVslq15.js";import"./CollapsiblePanel-DeuzuEYY.js";import"./MultiColumnSortDialog-BW9H5Lbm.js";import"./MenuTrigger-JLOD6Cua.js";import"./CompositeItem-BNwAusbR.js";import"./ToolbarRootContext-6z2XExln.js";import"./getDisabledMountTransitionStyles-4RzuPJj6.js";import"./getPseudoElementBounds-Cjnm34tD.js";import"./chevron-down-DahpzRGw.js";import"./index-BSyqZrwB.js";import"./error-B5H2RzDH.js";import"./BaseCbacBanner-BRzJz9wR.js";import"./makeExternalStore-DV2VnHUE.js";import"./Tooltip-A5u3Ouiv.js";import"./PopoverPopup-D3VoNSFI.js";import"./debounce-JLt9Gzvl.js";import"./useOsdkClient-CXgoPmaj.js";import"./tick-PgSwRzNQ.js";import"./DropdownField-BL_jj1eH.js";import"./isEqual-BroWPddn.js";import"./withOsdkMetrics-CFjDkd46.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
