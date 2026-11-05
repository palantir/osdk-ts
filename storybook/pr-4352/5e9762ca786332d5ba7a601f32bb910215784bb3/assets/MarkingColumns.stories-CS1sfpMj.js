import{f as p,j as e}from"./iframe-B7iXMeep.js";import{O as i}from"./object-table-B9UZXCXn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BZFSoYNL.js";import"./Table-Pt4boUVr.js";import"./index-B9IPxHLp.js";import"./Dialog-BKfzE-yo.js";import"./cross-DxJs6dla.js";import"./svgIconContainer-6zXBkUlH.js";import"./useBaseUiId-D1eq_nvb.js";import"./InternalBackdrop-dELTuav9.js";import"./composite-vYr7iKxA.js";import"./index-DO_Xy6GM.js";import"./index-BCuE63Ls.js";import"./index-C7X42qv-.js";import"./useEventCallback-lGcIidgf.js";import"./SkeletonBar-DM6oPXtG.js";import"./LoadingCell-BO8IZx3f.js";import"./ColumnConfigDialog-Syoe0F7T.js";import"./DraggableList-dU0OXsyp.js";import"./search-CC1z-TYa.js";import"./Input-CXcN1OqN.js";import"./useControlled-BhUv2c2y.js";import"./Button-Cs7xUkhF.js";import"./small-cross-DuRTpqsB.js";import"./ActionButton-BT5QM3LR.js";import"./Checkbox-BMFNKKb2.js";import"./useValueChanged-Ca_viAtG.js";import"./CollapsiblePanel-meNR4Xwz.js";import"./MultiColumnSortDialog-D862tvOA.js";import"./MenuTrigger-HqcNVrC9.js";import"./CompositeItem-B2vumib4.js";import"./ToolbarRootContext-U7XGc6m3.js";import"./getDisabledMountTransitionStyles-CJVOz_Wf.js";import"./getPseudoElementBounds-3y1P965l.js";import"./chevron-down-S3M-k2gy.js";import"./index-igxynrzH.js";import"./error-BqkMjiz6.js";import"./BaseCbacBanner-DNqGS3n1.js";import"./makeExternalStore-myfZT6Ru.js";import"./Tooltip-SwHBo8I_.js";import"./isObject-C8naLxpN.js";import"./debounce-BhHOqNYV.js";import"./useOsdkClient-B0C9p8qN.js";import"./tick-Ddmq0CLi.js";import"./DropdownField-oRa3_E0o.js";import"./isEqual-BvYKqMbJ.js";import"./_baseIsEqual-D0ACkd8L.js";import"./withOsdkMetrics-Be4NSs13.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
