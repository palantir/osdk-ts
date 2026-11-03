import{f as p,j as e}from"./iframe-BZrHCCWD.js";import{O as i}from"./object-table-DpPY2M7V.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-OKpIXbCH.js";import"./index-BbBwfHG7.js";import"./Dialog-D5yCcZki.js";import"./cross-CQg-zCtt.js";import"./svgIconContainer-DvKRTV-T.js";import"./useBaseUiId-BS5c_qfo.js";import"./InternalBackdrop-C26unrC9.js";import"./composite-B06N-5LO.js";import"./index-D_mlxwiI.js";import"./index-BoSlXWJn.js";import"./index-aQp0TPl5.js";import"./useEventCallback-Bz01pljJ.js";import"./SkeletonBar-CbuDz3oc.js";import"./LoadingCell-DOCqVuTS.js";import"./ColumnConfigDialog-DkSiEPBm.js";import"./DraggableList-DsrHiH1T.js";import"./search-PU-jJ5zI.js";import"./Input-3V3vHuAM.js";import"./useControlled-CGFBoHyX.js";import"./Button-JGRhrjvL.js";import"./small-cross-o2gbtp7v.js";import"./ActionButton-C6T7h1rl.js";import"./Checkbox-BGBCPMbG.js";import"./useValueChanged-DanfgwZ-.js";import"./CollapsiblePanel-BrYWz7mk.js";import"./MultiColumnSortDialog-Vt0kB0E9.js";import"./MenuTrigger-8jpSTywc.js";import"./CompositeItem-DdzLCYzu.js";import"./ToolbarRootContext-HdK5b1bg.js";import"./getDisabledMountTransitionStyles-BMID7lxe.js";import"./getPseudoElementBounds-C0AdvYra.js";import"./chevron-down-BCopBMR6.js";import"./index-J3cPUL6v.js";import"./error-D2Jou9ns.js";import"./BaseCbacBanner-BPwWbKhf.js";import"./makeExternalStore-Dg_VN0ud.js";import"./Tooltip-CPptvKhe.js";import"./PopoverPopup-CGVwQ1cR.js";import"./debounce-RV0_NzqU.js";import"./useOsdkClient-aEZ1eEbo.js";import"./tick-DOuBmutW.js";import"./DropdownField-JLZ1LJgg.js";import"./isEqual-B_gGF4aE.js";import"./withOsdkMetrics-DyjVeD0H.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
