import{f as p,j as e}from"./iframe-BX7t1m7X.js";import{O as i}from"./object-table-Zl1h-uut.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-vs1LH6RG.js";import"./Table-D-Aw9cKN.js";import"./index-CWnEVrcD.js";import"./Dialog-DttKfTF_.js";import"./cross-DHmTrIXq.js";import"./svgIconContainer-B1_oouOg.js";import"./useBaseUiId-Bmd4FcfN.js";import"./InternalBackdrop-Bqks8j8N.js";import"./composite-quGdXDs4.js";import"./index-CKebcxwg.js";import"./index--sVV4r8-.js";import"./index-4mN2Lpue.js";import"./useEventCallback-DRCoKqNP.js";import"./SkeletonBar-DJLl5DO7.js";import"./LoadingCell-BfqcaVr4.js";import"./ColumnConfigDialog-Bivcx7bF.js";import"./DraggableList-BBHkSRR6.js";import"./search-BOoacuk7.js";import"./Input-ffGk1Cv0.js";import"./useControlled-CIYqr8vl.js";import"./Button-HBtTsXNU.js";import"./small-cross-DFcpXRfF.js";import"./ActionButton-BiSFjvED.js";import"./Checkbox-ChxnCNMp.js";import"./useValueChanged-DBl2Xes2.js";import"./CollapsiblePanel-Cz6hvxrp.js";import"./MultiColumnSortDialog-DMOTbytd.js";import"./MenuTrigger-DgwGgOKV.js";import"./CompositeItem-DzuKssIv.js";import"./ToolbarRootContext-D-cnH9Zf.js";import"./getDisabledMountTransitionStyles-Bay-uwBq.js";import"./getPseudoElementBounds-BbiKJCQA.js";import"./chevron-down-Bo5JkLwj.js";import"./index-BjcqwpJd.js";import"./error-CwXOiZUY.js";import"./BaseCbacBanner-tQlPlWcJ.js";import"./makeExternalStore-NTXRhgR1.js";import"./Tooltip-DMMK12H2.js";import"./PopoverPopup-CV61Ww1T.js";import"./debounce-BXIEVhi-.js";import"./useOsdkClient-hFqGetqy.js";import"./tick--CMC8WAi.js";import"./DropdownField-CKrqI4rI.js";import"./isEqual-ZeKprEqC.js";import"./withOsdkMetrics-XI_BAq5U.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
