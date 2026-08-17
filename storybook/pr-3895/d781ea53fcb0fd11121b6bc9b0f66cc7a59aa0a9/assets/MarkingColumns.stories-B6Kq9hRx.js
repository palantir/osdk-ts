import{f as p,j as e}from"./iframe-j08fV6dz.js";import{O as i}from"./object-table-D0aqCmoe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BGl13g2I.js";import"./Table-DGpvKX3S.js";import"./index-CWHssFJB.js";import"./Dialog-Bx1tL4sT.js";import"./cross-CoN6-ekW.js";import"./svgIconContainer-YCYSEUhp.js";import"./useBaseUiId-CplXrATv.js";import"./InternalBackdrop-DZLfLAx9.js";import"./composite-D8eTqwE5.js";import"./index-C5nt5hOV.js";import"./index-kp1WZsxE.js";import"./index-Bq-uEYwJ.js";import"./useEventCallback-B4fw5bnT.js";import"./SkeletonBar-D7gl1oaW.js";import"./LoadingCell-QeinshAp.js";import"./ColumnConfigDialog-DC855AY_.js";import"./DraggableList-BabylKSA.js";import"./search-ClQdTzkO.js";import"./Input-DhrpnbAE.js";import"./useControlled-CHR2SRbk.js";import"./Button-DpHwku46.js";import"./small-cross-B4PHUogj.js";import"./ActionButton-BEQq70gP.js";import"./Checkbox-DO2v6AWI.js";import"./useValueChanged-DtEqK2bI.js";import"./CollapsiblePanel-BooDUqDc.js";import"./MultiColumnSortDialog-CzL3h7dk.js";import"./MenuTrigger-DjCmUySM.js";import"./CompositeItem-BGXPo5gO.js";import"./ToolbarRootContext-CtzwSIgo.js";import"./getDisabledMountTransitionStyles-CBnNedNN.js";import"./getPseudoElementBounds-Bdf_5u_d.js";import"./chevron-down-Doe0Cvk6.js";import"./index-DHqM0ir-.js";import"./error-D_bwL8by.js";import"./BaseCbacBanner-CPz003VT.js";import"./makeExternalStore-D_d4tJsc.js";import"./Tooltip-C6gafiZv.js";import"./PopoverPopup-DBdryem6.js";import"./debounce-DRljlDql.js";import"./useOsdkClient-DBxZJFUJ.js";import"./tick-DOh48VMM.js";import"./DropdownField-B_PRVOpm.js";import"./isEqual-MzBwduGE.js";import"./withOsdkMetrics-d653yHww.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
