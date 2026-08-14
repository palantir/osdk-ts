import{f as p,j as e}from"./iframe-DUEuiXsv.js";import{O as i}from"./object-table-DwqejOUI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Df6_8uD6.js";import"./Table-D1rmwA4c.js";import"./index-VBi3p1EG.js";import"./Dialog-CRCYXUXL.js";import"./cross-BHSnocIt.js";import"./svgIconContainer-fUfiooYh.js";import"./useBaseUiId-rUHLvqa0.js";import"./InternalBackdrop-BKw-qa39.js";import"./composite-BQlLpDbX.js";import"./index-DaaqgxZj.js";import"./index-BSBqPfD7.js";import"./index-BMX1J3aX.js";import"./useEventCallback-CKqvUveK.js";import"./SkeletonBar-BXO9jfRb.js";import"./LoadingCell-BFQbqchN.js";import"./ColumnConfigDialog-Bm7DS_h9.js";import"./DraggableList-DHvOxSWC.js";import"./search-CQkXJiT6.js";import"./Input-DJ0wEJn_.js";import"./useControlled-BNu8ROQV.js";import"./Button-CDlf2YlH.js";import"./small-cross-BIVwOlj8.js";import"./ActionButton-C0gIAKdy.js";import"./Checkbox-BWGAdML-.js";import"./useValueChanged-BaOiGEU-.js";import"./CollapsiblePanel-BP_6HlRq.js";import"./MultiColumnSortDialog-CLvYRvqp.js";import"./MenuTrigger-DgnR2Wms.js";import"./CompositeItem-Bx3c2X42.js";import"./ToolbarRootContext-D11W-0nl.js";import"./getDisabledMountTransitionStyles-BzC4jxKd.js";import"./getPseudoElementBounds-WZokc1Yz.js";import"./chevron-down-D3lkidTG.js";import"./index-CDpKmQsf.js";import"./error-DhHmTIvC.js";import"./BaseCbacBanner-DhziRTee.js";import"./makeExternalStore-LN7J9oHG.js";import"./Tooltip-jqlALrhF.js";import"./PopoverPopup-Bsnp6ds2.js";import"./debounce-B9jYhlwj.js";import"./useOsdkClient-ZL9fjVwz.js";import"./tick-D_exLUv-.js";import"./DropdownField-CG8i5Qlw.js";import"./isEqual-BbITlJwb.js";import"./withOsdkMetrics-CPHwq3ys.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
