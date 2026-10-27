import{f as p,j as e}from"./iframe-BaflQOGd.js";import{O as i}from"./object-table-rBYFG3dL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-p4HJijQg.js";import"./Table-BZhq6jNP.js";import"./index-Cdh_dFWj.js";import"./Dialog-sEWbFpCS.js";import"./cross-BGrOCP65.js";import"./svgIconContainer-C8p2nfID.js";import"./useBaseUiId-pk7UMSg-.js";import"./InternalBackdrop-BXpufEJp.js";import"./composite-Bz466JDP.js";import"./index-BbhGUNVZ.js";import"./index-8FM1YS3J.js";import"./index-gtiiyw16.js";import"./useEventCallback-CKswwic-.js";import"./SkeletonBar-p10R1lcv.js";import"./LoadingCell-CH2uP32b.js";import"./ColumnConfigDialog-DFdfDYob.js";import"./DraggableList-BBK4Chui.js";import"./search-BBcvVFuT.js";import"./Input-C7CjAQyY.js";import"./useControlled-BHd0pcmo.js";import"./Button-Bdo2X4x8.js";import"./small-cross-CskAyC0y.js";import"./ActionButton-DIqkcEFC.js";import"./Checkbox-Sizrw6ib.js";import"./useValueChanged-BkzyuB8t.js";import"./CollapsiblePanel-BDr9gif1.js";import"./MultiColumnSortDialog-CmnGKHoe.js";import"./MenuTrigger-CEe5FZ0H.js";import"./CompositeItem-nIPenTO0.js";import"./ToolbarRootContext-CwJdNdBU.js";import"./getDisabledMountTransitionStyles-Zf4kfjLM.js";import"./getPseudoElementBounds-CHW9P6Nq.js";import"./chevron-down-Cnmtw8e6.js";import"./index-DxGtCk42.js";import"./error-DIEj2ztu.js";import"./BaseCbacBanner-BGXh1-EF.js";import"./makeExternalStore-C2juSaVb.js";import"./Tooltip-BRluqZVE.js";import"./PopoverPopup-wC024HyS.js";import"./debounce-Bxc3LUXI.js";import"./useOsdkClient-BRi0iGfs.js";import"./tick-DGqr-KEb.js";import"./DropdownField-BKcx8XSW.js";import"./isEqual-CHlDy3oh.js";import"./withOsdkMetrics-CP1M_ZfY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
