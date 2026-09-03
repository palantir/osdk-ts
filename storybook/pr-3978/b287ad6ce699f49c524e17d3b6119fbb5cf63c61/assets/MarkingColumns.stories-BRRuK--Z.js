import{f as p,j as e}from"./iframe-Ce1nas-A.js";import{O as i}from"./object-table-CH1gYmyr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DcZRzKsw.js";import"./Table-grwzvFI5.js";import"./index-DxkusUp0.js";import"./Dialog-2I39uksF.js";import"./cross-BfauTbl-.js";import"./svgIconContainer-C2K9KBka.js";import"./useBaseUiId-DjCVaNnh.js";import"./InternalBackdrop-B-W0bTB1.js";import"./composite-DmeYZGjI.js";import"./index-CuuyYF8k.js";import"./index-C9gjttHq.js";import"./index-DVNB7RLR.js";import"./useEventCallback-Cbw47kNr.js";import"./SkeletonBar-CGzZv0LQ.js";import"./LoadingCell-BIgUV0cO.js";import"./ColumnConfigDialog-Bv9qArUC.js";import"./DraggableList-C0E4dnDv.js";import"./search-CeMBlWp8.js";import"./Input-BkD6sM5Z.js";import"./useControlled-HDcnxMGz.js";import"./Button-Dug6UdNF.js";import"./small-cross-CUbbmEa4.js";import"./ActionButton-CJN2LFZu.js";import"./Checkbox-Dmh7aamG.js";import"./useValueChanged-CNmQlOiE.js";import"./CollapsiblePanel-BCEUBNV9.js";import"./MultiColumnSortDialog-9d5vdjh6.js";import"./MenuTrigger-Dtpo5bPS.js";import"./CompositeItem-Ci-C3Qdf.js";import"./ToolbarRootContext-DETOyxOk.js";import"./getDisabledMountTransitionStyles-DliKnPBx.js";import"./getPseudoElementBounds-cUIgxq13.js";import"./chevron-down-BWpGIUiv.js";import"./index-Cz6vrhk3.js";import"./error-C2DVXeGz.js";import"./BaseCbacBanner-CSYqnlL4.js";import"./makeExternalStore-pm8795BR.js";import"./Tooltip-D2u6OBrC.js";import"./PopoverPopup-D21lDN1V.js";import"./debounce-BJwq-W7n.js";import"./useOsdkClient-YT7s1JaQ.js";import"./tick-Bc-8vFey.js";import"./DropdownField-CNUDLDKP.js";import"./isEqual-CjXb8CsY.js";import"./withOsdkMetrics-Oy1nTjGv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
