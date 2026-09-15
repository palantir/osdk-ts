import{f as p,j as e}from"./iframe-a31F6Zea.js";import{O as i}from"./object-table-BINMUfCj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BfFj_4tp.js";import"./Table-MhGt0czb.js";import"./index-BnGZPYV4.js";import"./Dialog-BuBmqvFw.js";import"./cross-Ctxx23y-.js";import"./svgIconContainer-DxZS3Oh3.js";import"./useBaseUiId-CSUeT06E.js";import"./InternalBackdrop-DjwrHJRF.js";import"./composite-B8asvRon.js";import"./index-DFESKWXH.js";import"./index-DSAvdwec.js";import"./index-CTMiLHyK.js";import"./useEventCallback-DbzrgPEa.js";import"./SkeletonBar-4ArO1hst.js";import"./LoadingCell-CeC_Y0KB.js";import"./ColumnConfigDialog-pS-0zZHr.js";import"./DraggableList-BjfnW581.js";import"./search-BWfh2RdL.js";import"./Input-CBWYwmBc.js";import"./useControlled-CN75eaZx.js";import"./Button-a8my9L0w.js";import"./small-cross-DydNjtyB.js";import"./ActionButton-DRwEwaLd.js";import"./Checkbox-CH-4dSS6.js";import"./useValueChanged-BCR7isnN.js";import"./CollapsiblePanel-BhG8Ptxn.js";import"./MultiColumnSortDialog-jD23MlbX.js";import"./MenuTrigger-DvGn-ZBM.js";import"./CompositeItem-mbuOs1fC.js";import"./ToolbarRootContext-wQy2gScd.js";import"./getDisabledMountTransitionStyles-DnjPaBF0.js";import"./getPseudoElementBounds-BXq9UpA2.js";import"./chevron-down-hBWeBGBN.js";import"./index-gZqL-2oV.js";import"./error-C3q1XKPy.js";import"./BaseCbacBanner-BYsPA5Ea.js";import"./makeExternalStore-CySlHC0C.js";import"./Tooltip-Bta8a6KY.js";import"./PopoverPopup--cbpjW0Q.js";import"./debounce-CODw_OdZ.js";import"./useOsdkClient-Ci2TgkT7.js";import"./tick-D6JN-An3.js";import"./DropdownField-C3Jn0eQq.js";import"./isEqual-Cj_SI081.js";import"./withOsdkMetrics-B5cAgh1b.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
