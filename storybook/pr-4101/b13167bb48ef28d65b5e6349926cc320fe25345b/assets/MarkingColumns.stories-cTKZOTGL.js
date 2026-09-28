import{f as p,j as e}from"./iframe-BqJ-ZnBR.js";import{O as i}from"./object-table-CmgAeKsC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-JLrGau54.js";import"./Table-DkGWmtzq.js";import"./index-BK1P1voH.js";import"./Dialog-DI5SN71k.js";import"./cross-BDK7LG_e.js";import"./svgIconContainer-Dc4tWYI9.js";import"./useBaseUiId-BcNmiaah.js";import"./InternalBackdrop-BQv9yU4o.js";import"./composite-iKsnpVuz.js";import"./index-94n_hVW-.js";import"./index-By0VHStz.js";import"./index-BLIg07yZ.js";import"./useEventCallback-HXpemZPp.js";import"./SkeletonBar-BeQPr1Hf.js";import"./LoadingCell-DYGG6ST4.js";import"./ColumnConfigDialog-CeQ_Sw7r.js";import"./DraggableList-B50CmaiN.js";import"./search-BZek_B3M.js";import"./Input-Bgztm7qK.js";import"./useControlled-DrJztn-2.js";import"./Button-DxthHQUU.js";import"./small-cross-CeRG__Xs.js";import"./ActionButton-BRh8fnVZ.js";import"./Checkbox-D2gnaM-s.js";import"./useValueChanged-B9GECoed.js";import"./CollapsiblePanel-rA8Z4Ruz.js";import"./MultiColumnSortDialog-R23BzF34.js";import"./MenuTrigger-BG5uKeX8.js";import"./CompositeItem-COP7jkJm.js";import"./ToolbarRootContext-nuNuNDyh.js";import"./getDisabledMountTransitionStyles-BjNITUuJ.js";import"./getPseudoElementBounds-SdYgej76.js";import"./chevron-down-rJ0TahbK.js";import"./index-Dku47buH.js";import"./error-B0ep7kDm.js";import"./BaseCbacBanner-BGoHf3Yc.js";import"./makeExternalStore-DtB887rj.js";import"./Tooltip-ChG6KFaQ.js";import"./PopoverPopup-DklAn_WH.js";import"./debounce-DUBEN3SV.js";import"./useOsdkClient-CIGN3ZFv.js";import"./tick-CvXUKs1d.js";import"./DropdownField-CLjpg3Un.js";import"./isEqual-CbTBsGdo.js";import"./withOsdkMetrics-CsoY-VD3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
