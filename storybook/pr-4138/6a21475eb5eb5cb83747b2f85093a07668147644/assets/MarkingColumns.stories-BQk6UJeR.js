import{f as p,j as e}from"./iframe-DxhkFI2j.js";import{O as i}from"./object-table-slaHud4u.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--cN_jItM.js";import"./Table-i5kZBEKo.js";import"./index-DVJz8wW_.js";import"./Dialog-CKYNsASz.js";import"./cross-BLpXMPe1.js";import"./svgIconContainer-DVO7NdYN.js";import"./useBaseUiId-C54mcYTS.js";import"./InternalBackdrop-aZ_35dbO.js";import"./composite-CohQOjSI.js";import"./index-C1nkpuUA.js";import"./index-BpgIDDBL.js";import"./index-D7092Ody.js";import"./useEventCallback-MoMmp1Ig.js";import"./SkeletonBar-CgnvwVJl.js";import"./LoadingCell-CaiZTiWX.js";import"./ColumnConfigDialog-HX2GxGQF.js";import"./DraggableList-DeiP1ftY.js";import"./search-E8ja1e9g.js";import"./Input-COHFDix-.js";import"./useControlled-CrH9oqwV.js";import"./Button-Cavox7D-.js";import"./small-cross-DhzKRe0M.js";import"./ActionButton-BUSMwbnp.js";import"./Checkbox-CXP57loB.js";import"./useValueChanged-BpuEkHow.js";import"./CollapsiblePanel-Cuwr74Hw.js";import"./MultiColumnSortDialog-DktJcNWB.js";import"./MenuTrigger-CfI6O0-8.js";import"./CompositeItem-Cf1SIU17.js";import"./ToolbarRootContext-e2y-n1Yh.js";import"./getDisabledMountTransitionStyles-BV-oK1o7.js";import"./getPseudoElementBounds-CRJR5h2h.js";import"./chevron-down-DTSGl_xB.js";import"./index-BD1sd-aL.js";import"./error-BmTcrgoE.js";import"./BaseCbacBanner-KgEBwAOi.js";import"./makeExternalStore-CoWtabiz.js";import"./Tooltip-CQ4YGG8B.js";import"./PopoverPopup-CWVn6OUK.js";import"./debounce-b65eNSpY.js";import"./useOsdkClient-85CPOR81.js";import"./tick-W6nypDvp.js";import"./DropdownField-DwO_XOP0.js";import"./isEqual-B81PYfVj.js";import"./withOsdkMetrics-BMPSufl2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
