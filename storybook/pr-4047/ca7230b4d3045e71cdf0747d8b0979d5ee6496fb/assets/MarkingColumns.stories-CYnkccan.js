import{f as p,j as e}from"./iframe-BLH-rzjX.js";import{O as i}from"./object-table-D-6ov8rd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Boseizqx.js";import"./Table-C-l9FtnV.js";import"./index-BshiJ0vb.js";import"./Dialog-BbzT8uGy.js";import"./cross-CjxN7NXy.js";import"./svgIconContainer-ClFD8O3h.js";import"./useBaseUiId-_L7E6isP.js";import"./InternalBackdrop-DJXpTlYo.js";import"./composite-CJF2SW-C.js";import"./index-CjzgRjXg.js";import"./index-1GWYtBv5.js";import"./index-DhrrZED7.js";import"./useEventCallback-CvA-dmQo.js";import"./SkeletonBar-2jCSSfIk.js";import"./LoadingCell-Dgx9nWzQ.js";import"./ColumnConfigDialog-CvYNYs5O.js";import"./DraggableList-CQlronkH.js";import"./search-Dcpgl82t.js";import"./Input-ChiRpiSd.js";import"./useControlled-DoMCNvxt.js";import"./Button-Cb7__wFY.js";import"./small-cross-CxW1zdvK.js";import"./ActionButton-CNmUd466.js";import"./Checkbox-CDybbOiX.js";import"./useValueChanged-BtzRyrp7.js";import"./CollapsiblePanel-D2wDAZ7-.js";import"./MultiColumnSortDialog-DtmEBHii.js";import"./MenuTrigger-C_w6gyFE.js";import"./CompositeItem-tv6DhAGC.js";import"./ToolbarRootContext-N5PisKcU.js";import"./getDisabledMountTransitionStyles-D801SK_0.js";import"./getPseudoElementBounds-DPi59aQg.js";import"./chevron-down-gdTU0sCy.js";import"./index-D07nHwth.js";import"./error-CxjKCqiV.js";import"./BaseCbacBanner-Bk_IZ-ld.js";import"./makeExternalStore-VNm4xFie.js";import"./Tooltip-CNF5wHNx.js";import"./PopoverPopup-C1mq6siy.js";import"./debounce-7gj880Zc.js";import"./useOsdkClient-B89sr5Rr.js";import"./tick-Do25CLpe.js";import"./DropdownField-DKQdUIUg.js";import"./isEqual-BYAPAqkH.js";import"./withOsdkMetrics-CNvw97j4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
