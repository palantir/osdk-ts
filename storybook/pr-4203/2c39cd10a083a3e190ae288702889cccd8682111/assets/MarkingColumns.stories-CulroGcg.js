import{f as p,j as e}from"./iframe-KOHCB4Ql.js";import{O as i}from"./object-table-D8tGB2lP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C6JW-Yng.js";import"./Table-DiyuXitT.js";import"./index-BNcO0wRN.js";import"./Dialog-Pdx4pxY-.js";import"./cross-BUaadKZZ.js";import"./svgIconContainer-C4qAid9G.js";import"./useBaseUiId-CnRKbAt1.js";import"./InternalBackdrop-imINBtvi.js";import"./composite-ChHDZB6E.js";import"./index-CBKKW39b.js";import"./index-BQDXS8xb.js";import"./index-DCkGiwqv.js";import"./useEventCallback-Bb5XrgmO.js";import"./SkeletonBar-8CMS4org.js";import"./LoadingCell-BGAS2Ej2.js";import"./ColumnConfigDialog-DzQiv7Ph.js";import"./DraggableList-DatpWWqs.js";import"./search-Dd1zov5c.js";import"./Input-D6-DkH9C.js";import"./useControlled-BY7stmzf.js";import"./Button-uumGSIHU.js";import"./small-cross-CvWdYn_H.js";import"./ActionButton-D9pI43aQ.js";import"./Checkbox-CtLK0QgG.js";import"./useValueChanged-BSGCys20.js";import"./CollapsiblePanel-CHpI8fT2.js";import"./MultiColumnSortDialog-BxQvZ_d1.js";import"./MenuTrigger-CZ2N4HWH.js";import"./CompositeItem-wiNuWtyF.js";import"./ToolbarRootContext-DilrPmxZ.js";import"./getDisabledMountTransitionStyles-AK4QR3JS.js";import"./getPseudoElementBounds-DQfcxaUz.js";import"./chevron-down-InZk2kmp.js";import"./index-w7dGULd9.js";import"./error-C0G7w8jF.js";import"./BaseCbacBanner-CKj134qf.js";import"./makeExternalStore-DeVyI-Ob.js";import"./Tooltip-C7mgMzGT.js";import"./PopoverPopup-ysDfGGix.js";import"./debounce-BkPBmf3P.js";import"./useOsdkClient-CE0gmR96.js";import"./tick-B2vqXtjq.js";import"./DropdownField-Bm-pLwGh.js";import"./isEqual-CKwtOA-0.js";import"./withOsdkMetrics-BvJsymAS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
