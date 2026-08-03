import{f as p,j as e}from"./iframe-ChCYWkFC.js";import{O as i}from"./object-table-B8V5n9QI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-2e0CXzEG.js";import"./Table-DdOs5DiG.js";import"./index-Be19pAzV.js";import"./Dialog-DiAl1dGe.js";import"./cross-BkiSPzBk.js";import"./svgIconContainer-C2FhCoFe.js";import"./useBaseUiId-D7_MSijo.js";import"./InternalBackdrop-CzrE4rQX.js";import"./composite-Dsg-9HAA.js";import"./index-D9paw9rd.js";import"./index-CeE-gYem.js";import"./index-Sj4nune6.js";import"./useEventCallback-C5Q-Fk9J.js";import"./SkeletonBar-CZyrUc0Z.js";import"./LoadingCell-D2VM2uWE.js";import"./ColumnConfigDialog-BN4-d9R6.js";import"./DraggableList-xXmrPcMZ.js";import"./search-D9jFpevZ.js";import"./Input-BD-LZGDG.js";import"./useControlled-Cy91VBio.js";import"./isEqual-CUS8mcyZ.js";import"./isObject-D0a6_sYT.js";import"./Button-DPenXW8U.js";import"./ActionButton-lOa1i4jD.js";import"./Checkbox-CRTz6qdh.js";import"./useValueChanged-DJZIY-Cm.js";import"./CollapsiblePanel-BhUHDzpm.js";import"./MultiColumnSortDialog-Br-y3SjY.js";import"./MenuTrigger-ClS1UY1q.js";import"./CompositeItem-BwVCbGsl.js";import"./ToolbarRootContext-Bp-TiK-m.js";import"./getDisabledMountTransitionStyles-CcH0c07C.js";import"./getPseudoElementBounds-aG8uwwHI.js";import"./chevron-down-sfySf6B-.js";import"./index-DvYGmwtE.js";import"./error-lNGXoKCc.js";import"./BaseCbacBanner-BYdLPlbE.js";import"./makeExternalStore-BdUDleba.js";import"./Tooltip-DHh8c6jU.js";import"./PopoverPopup-CHAYmNQc.js";import"./toNumber-B5PO3x__.js";import"./useOsdkClient-D1FULPKE.js";import"./tick-Du832I-m.js";import"./DropdownField-CTYOA5hJ.js";import"./withOsdkMetrics-CuxbWZN_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
