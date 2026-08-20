import{f as p,j as e}from"./iframe-lVIo6mCc.js";import{O as i}from"./object-table-DXxQNff2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BPCknu7S.js";import"./Table-nSjaGULp.js";import"./index-sQKHJ0R4.js";import"./Dialog-BFgYJDCN.js";import"./cross-DDW7y3Rx.js";import"./svgIconContainer-KAJria2X.js";import"./useBaseUiId-Bb_Owoni.js";import"./InternalBackdrop-hjJtUdco.js";import"./composite-Dyu8jPHN.js";import"./index-BPLBY7PN.js";import"./index-KnI2DQbj.js";import"./index-Dxls_Rr8.js";import"./useEventCallback-B3tJ4PYp.js";import"./SkeletonBar-DSmQVQye.js";import"./LoadingCell-CQ4ITvhW.js";import"./ColumnConfigDialog-CHgO6Ibs.js";import"./DraggableList-jP9CGfbS.js";import"./search-5GVEDD9j.js";import"./Input-BC_GUukM.js";import"./useControlled-D2ATBKpk.js";import"./Button-HHhZVC20.js";import"./small-cross-DJ1ySZs1.js";import"./ActionButton-ClryqIds.js";import"./Checkbox-By8aDHHp.js";import"./useValueChanged-CA7KhCt6.js";import"./CollapsiblePanel-C8RDA-GN.js";import"./MultiColumnSortDialog-LsoG3i1d.js";import"./MenuTrigger-BPqfQFrm.js";import"./CompositeItem-KgTOqVUP.js";import"./ToolbarRootContext-BEDTSOO-.js";import"./getDisabledMountTransitionStyles-BeNJaj2_.js";import"./getPseudoElementBounds-ChYvstEB.js";import"./chevron-down-DQF1xsk8.js";import"./index-amUPlgmX.js";import"./error-CvWvuZvg.js";import"./BaseCbacBanner-8ONf2RQq.js";import"./makeExternalStore-D7Usbb1F.js";import"./Tooltip-9AFmCZ_D.js";import"./PopoverPopup-3MhqAYn3.js";import"./debounce-COYGEiqP.js";import"./useOsdkClient-di6Xqfxh.js";import"./tick-DzyNfBq0.js";import"./DropdownField-Bz3GxUH-.js";import"./isEqual-D4ajbd5M.js";import"./withOsdkMetrics-DSn6dU66.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
