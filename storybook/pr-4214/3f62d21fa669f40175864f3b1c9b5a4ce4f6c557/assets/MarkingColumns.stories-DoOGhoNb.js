import{f as p,j as e}from"./iframe-CofS9Mjv.js";import{O as i}from"./object-table-DAECEFk_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DCg3GuVE.js";import"./Table-EqdpuzEw.js";import"./index-Dba1-hqN.js";import"./Dialog-lhlR2-KK.js";import"./cross-5sYjwK4P.js";import"./svgIconContainer-rLHaF5xG.js";import"./useBaseUiId-BkkGBRPa.js";import"./InternalBackdrop-qRjGdl8e.js";import"./composite-BDNG4DUT.js";import"./index-FNQL6Pr9.js";import"./index-KxxBCqJY.js";import"./index-BHS0czud.js";import"./useEventCallback-lNR3-f9S.js";import"./SkeletonBar-Aa10YgO8.js";import"./LoadingCell-By89uux3.js";import"./ColumnConfigDialog-IsC4-88V.js";import"./DraggableList-8GCsi5Wd.js";import"./search-CbFqNZT1.js";import"./Input-Bk5_B8IH.js";import"./useControlled-Dhms1Lp4.js";import"./Button-3zEBIt6E.js";import"./small-cross-DKt2prc5.js";import"./ActionButton-DNNEXv6M.js";import"./Checkbox-CniU0Q9L.js";import"./useValueChanged-BdhihQIl.js";import"./CollapsiblePanel-P6K_7Hb6.js";import"./MultiColumnSortDialog-q887Qwbf.js";import"./MenuTrigger-DUYeCOY7.js";import"./CompositeItem-GQbg_S7m.js";import"./ToolbarRootContext-B8GhaGLP.js";import"./getDisabledMountTransitionStyles-4uwyOcbE.js";import"./getPseudoElementBounds-YLTZgyuZ.js";import"./chevron-down-CACMHp08.js";import"./index-CfMbSRut.js";import"./error-DOmo2qFa.js";import"./BaseCbacBanner-Q1kDpWFI.js";import"./makeExternalStore-BJ0PmYe7.js";import"./Tooltip-Ceoi_Zxm.js";import"./PopoverPopup-CuVPSugr.js";import"./debounce-DZR19dzG.js";import"./useOsdkClient-CEI0BVbt.js";import"./tick-B5fekc3f.js";import"./DropdownField-Bix-FJpy.js";import"./isEqual-V26gfMdB.js";import"./withOsdkMetrics-PwzVtj_c.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
