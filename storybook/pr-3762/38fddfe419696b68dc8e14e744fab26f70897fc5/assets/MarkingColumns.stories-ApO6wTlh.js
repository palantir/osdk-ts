import{f as p,j as e}from"./iframe-BcdGDu9j.js";import{O as i}from"./object-table-CLlobdDW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CMbSo1WN.js";import"./Table-CbY9U08a.js";import"./index-CV-Cj0Fr.js";import"./Dialog-BFu9Jvbt.js";import"./cross-HX620Mow.js";import"./svgIconContainer-dXK4wDtR.js";import"./useBaseUiId-DuyHfeNj.js";import"./InternalBackdrop-ye5hVQhH.js";import"./composite-FZbs1kn9.js";import"./index-kWczGDq0.js";import"./index-Bf3lveVK.js";import"./index-DELrWLc6.js";import"./useEventCallback-0GkWAOSy.js";import"./SkeletonBar-IaH5vXYh.js";import"./LoadingCell-B9K2QG1V.js";import"./ColumnConfigDialog-BKYdkhP1.js";import"./DraggableList-BpJWrtjR.js";import"./search-CVgCtTip.js";import"./Input-DBRGGeXT.js";import"./useControlled-DXehS_Ds.js";import"./Button-BxGbP4Tj.js";import"./small-cross-Bc-bQBjF.js";import"./ActionButton-CoM8fqA1.js";import"./Checkbox-BubTyfqD.js";import"./useValueChanged-DPTlKWjR.js";import"./CollapsiblePanel-aNff5u-g.js";import"./MultiColumnSortDialog-Bj0C4GEb.js";import"./MenuTrigger-DlV5a9JX.js";import"./CompositeItem-D98IS09u.js";import"./ToolbarRootContext-BRDqWHEt.js";import"./getDisabledMountTransitionStyles-DH1jUBNu.js";import"./getPseudoElementBounds-QT6HlcN-.js";import"./chevron-down-DIIoHKL4.js";import"./index-Cz3Lv1z4.js";import"./error-0GjEwwWq.js";import"./BaseCbacBanner-VxS8s1Ia.js";import"./makeExternalStore-DW1w7Bj0.js";import"./Tooltip-B8GoiLs-.js";import"./PopoverPopup-CSwQSVBM.js";import"./debounce-GGX-LYbn.js";import"./useOsdkClient-8LhuH1T7.js";import"./tick-DyYg55N-.js";import"./DropdownField-B02oWN-k.js";import"./isEqual-BdDBDq6i.js";import"./withOsdkMetrics-CesyT9oD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
