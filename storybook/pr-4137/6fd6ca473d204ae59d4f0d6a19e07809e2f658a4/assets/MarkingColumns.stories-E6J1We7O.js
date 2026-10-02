import{f as p,j as e}from"./iframe-BolfAo4P.js";import{O as i}from"./object-table-CGzR-sbg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ByLp_rEH.js";import"./Table-BEqc_WR2.js";import"./index-Dmp4oRqW.js";import"./Dialog-CZoZOnFW.js";import"./cross-CPB91upb.js";import"./svgIconContainer-zqDwx0Og.js";import"./useBaseUiId-DvZ-ac1w.js";import"./InternalBackdrop-DZT8OdtD.js";import"./composite-kotVvYj1.js";import"./index-Bt9kKuNp.js";import"./index-Cea80THD.js";import"./index-D4xBMDlg.js";import"./useEventCallback-CGEex2j7.js";import"./SkeletonBar-DUdd9eS6.js";import"./LoadingCell-Fz4GYLYB.js";import"./ColumnConfigDialog-D_o0xYK3.js";import"./DraggableList-BmC77OFq.js";import"./search-Sp-9ghy3.js";import"./Input-DnQW0UEK.js";import"./useControlled-C5FT7OgD.js";import"./Button-D-ABdEsl.js";import"./small-cross-CxRkjASt.js";import"./ActionButton-duX_H6Q1.js";import"./Checkbox-BzfUZdq-.js";import"./useValueChanged-DaE8aoFn.js";import"./CollapsiblePanel-CpsBsEMc.js";import"./MultiColumnSortDialog-DAhtncQF.js";import"./MenuTrigger-kv8wd5CF.js";import"./CompositeItem-BQgJHL6C.js";import"./ToolbarRootContext-Dsfyi3tb.js";import"./getDisabledMountTransitionStyles-D2DQ87Q4.js";import"./getPseudoElementBounds-JSG5w0o1.js";import"./chevron-down-Bj7fILeX.js";import"./index-DXDGkGFP.js";import"./error-Dnl49oZI.js";import"./BaseCbacBanner-BMamh7k1.js";import"./makeExternalStore-B6jLw3hY.js";import"./Tooltip-SA4YBfEO.js";import"./PopoverPopup-CE-WFncL.js";import"./debounce-B4mSXpkc.js";import"./useOsdkClient-BZmtEJhW.js";import"./tick-CY1tZTIW.js";import"./DropdownField-1RfM4rou.js";import"./isEqual-r9e_6t0W.js";import"./withOsdkMetrics-DkkczEbv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
