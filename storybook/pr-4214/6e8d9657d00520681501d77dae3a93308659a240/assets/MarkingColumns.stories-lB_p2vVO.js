import{f as p,j as e}from"./iframe-C9SuZ1RJ.js";import{O as i}from"./object-table-B7ycQ6BE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DMSK6AnV.js";import"./Table-CF0LDgDy.js";import"./index-DT_ukoYl.js";import"./Dialog-D1IV12yc.js";import"./cross-Itynl6FX.js";import"./svgIconContainer-D69sxdT1.js";import"./useBaseUiId-7WRirspl.js";import"./InternalBackdrop-CMb1PVBv.js";import"./composite-CLRoo5Je.js";import"./index-DSlBaHfK.js";import"./index-BHS-eS1n.js";import"./index-CbbSTcJP.js";import"./useEventCallback-BATy1042.js";import"./SkeletonBar-B5kYBk_d.js";import"./LoadingCell-BCwvJEAw.js";import"./ColumnConfigDialog-CWF5ZNIo.js";import"./DraggableList-3rM2js5S.js";import"./search-N0RiDnX8.js";import"./Input-D0BDhaw_.js";import"./useControlled-DGoyddZA.js";import"./Button-DPVeNaPl.js";import"./small-cross-CVj6zxAy.js";import"./ActionButton-CFuC9l1R.js";import"./Checkbox-DlQe_mGI.js";import"./useValueChanged-DcttfwPd.js";import"./CollapsiblePanel-BYWPcYrr.js";import"./MultiColumnSortDialog-DaPBsJDS.js";import"./MenuTrigger-7tikn6Hn.js";import"./CompositeItem-y2AxCYkL.js";import"./ToolbarRootContext-IeBvAErZ.js";import"./getDisabledMountTransitionStyles-D61a-Amc.js";import"./getPseudoElementBounds-C0ASFWoG.js";import"./chevron-down-BSUO84z0.js";import"./index-tNEhjfv0.js";import"./error-JN7vVG19.js";import"./BaseCbacBanner-Bk40eYrU.js";import"./makeExternalStore-BkAl_UIS.js";import"./Tooltip-CDDNzZxm.js";import"./PopoverPopup-iUPwntF5.js";import"./debounce-Bhm2oAnY.js";import"./useOsdkClient-es3CZ3SD.js";import"./tick-Bfjhhadh.js";import"./DropdownField-Bh7g_Xnj.js";import"./isEqual-Bya2yiBi.js";import"./withOsdkMetrics-FfcvjHUd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
