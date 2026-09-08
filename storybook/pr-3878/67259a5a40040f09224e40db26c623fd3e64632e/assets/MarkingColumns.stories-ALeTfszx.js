import{f as p,j as e}from"./iframe-BpAf1-YV.js";import{O as i}from"./object-table-CjeP2Wwp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C7Ebqy80.js";import"./Table-BHcYIm7n.js";import"./index-DyADrv6I.js";import"./Dialog-Bgx40clP.js";import"./cross-DslNwA_6.js";import"./svgIconContainer-CFecCBjJ.js";import"./useBaseUiId-C9xAI1lW.js";import"./InternalBackdrop-DIkARFig.js";import"./composite-mAbXNXR7.js";import"./index-Cxw2yzFX.js";import"./index-DS78ICiY.js";import"./index-BFZzGMb_.js";import"./useEventCallback-BqMN4vsA.js";import"./SkeletonBar-C6BT11pg.js";import"./LoadingCell-Cz2ziAVE.js";import"./ColumnConfigDialog-CFa85xx3.js";import"./DraggableList-CYPEekzj.js";import"./search-DkdRXT-s.js";import"./Input-DIA1NCyo.js";import"./useControlled-Bq45AK2p.js";import"./Button-VTVCzMYN.js";import"./small-cross-CqAu1Ci1.js";import"./ActionButton-DoMyUIMJ.js";import"./Checkbox-DxQijG1K.js";import"./useValueChanged-D_9lOFp6.js";import"./CollapsiblePanel-CeD70irk.js";import"./MultiColumnSortDialog-CmYp3Npl.js";import"./MenuTrigger-D_8_evnU.js";import"./CompositeItem-DZ-wY7w2.js";import"./ToolbarRootContext-DFWsSTVD.js";import"./getDisabledMountTransitionStyles-DcnlFvvt.js";import"./getPseudoElementBounds-0BuLbpLW.js";import"./chevron-down-Bp5YSXdo.js";import"./index-CiUfMed7.js";import"./error-DZIXNDEl.js";import"./BaseCbacBanner-Ct2xvxEE.js";import"./makeExternalStore-B3qv40Vp.js";import"./Tooltip-BQ1GnDHa.js";import"./PopoverPopup-NJFXZyoo.js";import"./debounce-21KeODoP.js";import"./useOsdkClient-fGXuQFgJ.js";import"./tick-CPLVuGzH.js";import"./DropdownField-dB9KcLRA.js";import"./isEqual-CoUIWyeV.js";import"./withOsdkMetrics-6mq6wlfJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
