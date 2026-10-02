import{f as p,j as e}from"./iframe-i61RpjX7.js";import{O as i}from"./object-table-qScOeZBt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BXpoIj2B.js";import"./Table-DPaGzcaT.js";import"./index-DdznE6qG.js";import"./Dialog-n8hWaEri.js";import"./cross-BJRIAlLu.js";import"./svgIconContainer-BKu8iYZ4.js";import"./useBaseUiId-Dw1mKB5r.js";import"./InternalBackdrop-DQMAcjr6.js";import"./composite-q6o4xbG3.js";import"./index-B1Q3wqWk.js";import"./index-CFOl5jJr.js";import"./index-Clsp1HuI.js";import"./useEventCallback-Nm08Lt1H.js";import"./SkeletonBar-Cude-n-r.js";import"./LoadingCell-BdnUyRGB.js";import"./ColumnConfigDialog-CbRaWZqK.js";import"./DraggableList-CvhN3Aeo.js";import"./search-DcyXoMY2.js";import"./Input-BXW8qVNh.js";import"./useControlled-Bd2D0MOS.js";import"./Button-B7Ybnvxm.js";import"./small-cross-CIYzC3ci.js";import"./ActionButton-wKRTt0XG.js";import"./Checkbox-CHjLExp_.js";import"./useValueChanged-Cinp2v4c.js";import"./CollapsiblePanel-SYw_Fpkn.js";import"./MultiColumnSortDialog-CbME9xje.js";import"./MenuTrigger-DimCL05E.js";import"./CompositeItem-CfdrXiQ-.js";import"./ToolbarRootContext-BlDscewO.js";import"./getDisabledMountTransitionStyles-CVMvranO.js";import"./getPseudoElementBounds-CSfNVXL_.js";import"./chevron-down-BtDuC_bB.js";import"./index-DR7wvRAh.js";import"./error-DfGDPEBO.js";import"./BaseCbacBanner-D0JlEcok.js";import"./makeExternalStore-BnbaQL1F.js";import"./Tooltip-Wp77QFzG.js";import"./PopoverPopup-DWX144ju.js";import"./debounce-Du4i-gbv.js";import"./useOsdkClient-ABekNhIh.js";import"./tick-DDsYIRYo.js";import"./DropdownField-B2dzXe09.js";import"./isEqual-C0H2NPAK.js";import"./withOsdkMetrics-Cw5kaJur.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
