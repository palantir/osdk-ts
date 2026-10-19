import{f as p,j as e}from"./iframe-D46iQmwz.js";import{O as i}from"./object-table-DxFWiXYn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CD5q78pN.js";import"./Table-RgT9q70T.js";import"./index-aAuOiy4H.js";import"./Dialog-ButokuTd.js";import"./cross-DILS2Eyl.js";import"./svgIconContainer-B30Y3J7X.js";import"./useBaseUiId-CzYRzxTP.js";import"./InternalBackdrop-by-ceIbs.js";import"./composite-DKDexQnG.js";import"./index-B9mI2qXL.js";import"./index-B11g5eQq.js";import"./index-U-d4CKYD.js";import"./useEventCallback-V7mrEIFj.js";import"./SkeletonBar-CcQvDZ8T.js";import"./LoadingCell-Bxm1teQi.js";import"./ColumnConfigDialog-F2a0IOsV.js";import"./DraggableList-DgOkYP-g.js";import"./search-CTXiTDhB.js";import"./Input-Y05_-7l4.js";import"./useControlled-B0hedhV2.js";import"./Button-C713JtES.js";import"./small-cross-BSVqwTPi.js";import"./ActionButton-BYzYLETk.js";import"./Checkbox-CYI0w2Al.js";import"./useValueChanged-BMGjZ3vx.js";import"./CollapsiblePanel-Dtiip96Z.js";import"./MultiColumnSortDialog-Du8-c8-x.js";import"./MenuTrigger-DNh9DzA2.js";import"./CompositeItem-K2_1UaBE.js";import"./ToolbarRootContext-D_lRWVni.js";import"./getDisabledMountTransitionStyles-3PNri0U8.js";import"./getPseudoElementBounds-CjKg6Y1I.js";import"./chevron-down-CLNkT6er.js";import"./index-BcX9m2km.js";import"./error-C1HeeVQA.js";import"./BaseCbacBanner-DAJ3aiv3.js";import"./makeExternalStore-BRMHbBWy.js";import"./Tooltip-Co7-V-9X.js";import"./PopoverPopup-l6zrAa5D.js";import"./debounce-CZeVCb1Q.js";import"./useOsdkClient-DUJkV3uU.js";import"./tick-CSNy2-E-.js";import"./DropdownField-CVhHYQdg.js";import"./isEqual-CBpUdabS.js";import"./withOsdkMetrics-BBV3u7Lm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
