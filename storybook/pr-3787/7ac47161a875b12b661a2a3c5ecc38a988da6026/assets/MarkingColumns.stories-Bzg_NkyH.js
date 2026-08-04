import{f as p,j as e}from"./iframe-B312ejAg.js";import{O as i}from"./object-table-DnoG2D9F.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-y_TwqfdY.js";import"./Table-CWU8juG-.js";import"./index-M8CqzHEe.js";import"./Dialog-tA5-WrCl.js";import"./cross-fdsbY64l.js";import"./svgIconContainer-CzNhgEtv.js";import"./useBaseUiId-anpR_KLF.js";import"./InternalBackdrop-Igg-F26O.js";import"./composite-EvWupaEF.js";import"./index-Cf0quKT1.js";import"./index-DAOTkIj1.js";import"./index-kf4fDJGN.js";import"./useEventCallback-BmcDVE9F.js";import"./SkeletonBar-Cp--rqZE.js";import"./LoadingCell-CxO_8mfq.js";import"./ColumnConfigDialog-BJ33PpUQ.js";import"./DraggableList-CqqS-PfK.js";import"./search-DkAQ0ID2.js";import"./Input-hV3H3zUc.js";import"./useControlled-Dbu3jRTE.js";import"./isEqual-DX8Pba1x.js";import"./isObject-BmWUUYs3.js";import"./Button-CREGuHb1.js";import"./ActionButton-BO9c2wPo.js";import"./Checkbox-oHmNLRGC.js";import"./useValueChanged-6i9rivvp.js";import"./CollapsiblePanel-BNxxYAyz.js";import"./MultiColumnSortDialog-CEYgGiwr.js";import"./MenuTrigger-CQVoOi76.js";import"./CompositeItem-B5kZOPHG.js";import"./ToolbarRootContext-CZlcd-GQ.js";import"./getDisabledMountTransitionStyles-DsLtSiiY.js";import"./getPseudoElementBounds-DikY_gPm.js";import"./chevron-down-DR1l8zQy.js";import"./index-OifC9Xwy.js";import"./error-CcgwDgNh.js";import"./BaseCbacBanner-BXUATeZK.js";import"./makeExternalStore-UZoMjkrc.js";import"./Tooltip-DSWFjtCt.js";import"./PopoverPopup-D2zQwFUn.js";import"./toNumber-D7Zr4H5G.js";import"./useOsdkClient-CmtDNjlP.js";import"./tick-BV5lo1Vw.js";import"./DropdownField-RaJqOZ62.js";import"./withOsdkMetrics-BvU1ehSn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
