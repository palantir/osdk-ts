import{f as p,j as e}from"./iframe-DSHto0DU.js";import{O as i}from"./object-table-BgkvCuPO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CxqmXKu3.js";import"./index-DgEgOLFM.js";import"./Dialog-BOyyWGLK.js";import"./cross-FFwPOx1g.js";import"./svgIconContainer-D1SJmbot.js";import"./useBaseUiId-C-ni1EUd.js";import"./InternalBackdrop-BPZt_MJA.js";import"./composite-CGWcZn8w.js";import"./index-Dsj4AUeZ.js";import"./index-Da1D6qV_.js";import"./index-Cg05C7Um.js";import"./useEventCallback-DGorVKay.js";import"./SkeletonBar-_7teksHk.js";import"./LoadingCell-BD0XwVrT.js";import"./ColumnConfigDialog-BbW8nF82.js";import"./DraggableList-CZBWI52s.js";import"./search-BdBx2XvV.js";import"./Input-KYVV9ro4.js";import"./useControlled-vcfVgJyd.js";import"./Button-3LMPugrf.js";import"./small-cross-CDGKQKRZ.js";import"./ActionButton-D1Tmn4nA.js";import"./Checkbox-C0KMOFgH.js";import"./useValueChanged-P73U_JNR.js";import"./CollapsiblePanel-Br5gvUV_.js";import"./MultiColumnSortDialog-p6K-8FgF.js";import"./MenuTrigger-DWjUhq_w.js";import"./CompositeItem-vxVvcXOU.js";import"./ToolbarRootContext-CSFHIoxQ.js";import"./getDisabledMountTransitionStyles-CN3s_Czu.js";import"./getPseudoElementBounds-C1cvZaeh.js";import"./chevron-down-DEDDGssX.js";import"./index-D1lPazbO.js";import"./error-DjYRJjuj.js";import"./BaseCbacBanner-BU4VlrQ_.js";import"./makeExternalStore--ixwTB0S.js";import"./Tooltip-B6O1k0wv.js";import"./PopoverPopup-mckkiFEE.js";import"./debounce-CbpWBqbr.js";import"./useOsdkClient-SmfWaa1T.js";import"./tick-IfmUtKPy.js";import"./DropdownField-Cf3uBb5H.js";import"./isEqual-COTunjEM.js";import"./withOsdkMetrics-BVxbOnBr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
