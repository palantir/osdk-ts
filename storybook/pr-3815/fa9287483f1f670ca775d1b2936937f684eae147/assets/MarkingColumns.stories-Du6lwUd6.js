import{f as p,j as e}from"./iframe-9-Df-LIJ.js";import{O as i}from"./object-table-B124FTHg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DCEoRWVY.js";import"./Table-B99stKfq.js";import"./index-CmMoO6Ab.js";import"./Dialog-rM4yBLfb.js";import"./cross-AVBxO2wq.js";import"./svgIconContainer-CzbhhJSw.js";import"./useBaseUiId-CmM9rxW8.js";import"./InternalBackdrop-BxohvQV3.js";import"./composite-BEjSgt66.js";import"./index-DGNsP-w2.js";import"./index-B7Tyltek.js";import"./index-BNQc9m_n.js";import"./useEventCallback-Catk2moi.js";import"./SkeletonBar-DUxSEbIz.js";import"./LoadingCell-Bt6rXw2C.js";import"./ColumnConfigDialog-kkDBjdQ7.js";import"./DraggableList-DCMiU0kK.js";import"./search-Dkc3mdwO.js";import"./Input-BYsu1Abh.js";import"./useControlled-CvfHdbPA.js";import"./createLabelsContext-CzvgkkdI.js";import"./small-cross-ClJF0W2q.js";import"./Button-D-l8XO1Q.js";import"./ActionButton-G_Towlh-.js";import"./Checkbox-CT7dBybc.js";import"./useValueChanged-CekEGMLc.js";import"./CollapsiblePanel-B7kYsjAX.js";import"./MultiColumnSortDialog-BYCLRZ6I.js";import"./MenuTrigger-BSiGuHtc.js";import"./CompositeItem-C6gHKrG3.js";import"./ToolbarRootContext-BfdRsuSy.js";import"./getDisabledMountTransitionStyles-D65O5-tA.js";import"./getPseudoElementBounds-DudWCT_m.js";import"./chevron-down-DrB3Djp3.js";import"./index-D9m9B2qL.js";import"./error-Cp81RDFu.js";import"./BaseCbacBanner-YY7msBZC.js";import"./makeExternalStore-D3sOoyLv.js";import"./Tooltip-OA5xF1kb.js";import"./PopoverPopup-dpR8diVX.js";import"./Combobox-WKz-EtO8.js";import"./useOsdkClient-B_QNp0pP.js";import"./tick-D4umhwei.js";import"./DropdownField-_D_cQUcr.js";import"./withOsdkMetrics-qKmdojlP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
