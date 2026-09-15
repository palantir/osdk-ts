import{f as p,j as e}from"./iframe-BhKMX8Fx.js";import{O as i}from"./object-table-BbGAztGy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CZy_0jgg.js";import"./Table-rC_PCiVc.js";import"./index-DyXRR_oe.js";import"./Dialog-LwmqZ--E.js";import"./cross-Cg-ZPVlB.js";import"./svgIconContainer-Dqg69n5p.js";import"./useBaseUiId-B9dth6ze.js";import"./InternalBackdrop-BS1tlxHN.js";import"./composite-CveWDbYe.js";import"./index-BvAdv-zV.js";import"./index-C8--fwDy.js";import"./index-DE7CeQ9V.js";import"./useEventCallback-C9nVCC2I.js";import"./SkeletonBar-Kk12plMz.js";import"./LoadingCell-BNwqEIy0.js";import"./ColumnConfigDialog-XiyJeGoz.js";import"./DraggableList-BnUTNsfm.js";import"./search-BJB8jL9m.js";import"./Input-qedQc-sF.js";import"./useControlled-D7ZrYDZP.js";import"./Button-XEWUMbMz.js";import"./small-cross-CG13Z6HZ.js";import"./ActionButton-B1IiXgFb.js";import"./Checkbox-CXzE7Fij.js";import"./useValueChanged-Eluq5fvP.js";import"./CollapsiblePanel-BZGbmPQ9.js";import"./MultiColumnSortDialog-C3wMDocw.js";import"./MenuTrigger-5qdkchvr.js";import"./CompositeItem-CaT0iTXd.js";import"./ToolbarRootContext-CjkyXnS-.js";import"./getDisabledMountTransitionStyles-JqiqpVqP.js";import"./getPseudoElementBounds-ChNg3QuF.js";import"./chevron-down-B_4JujMO.js";import"./index-C-yRIYxo.js";import"./error-BDttauQc.js";import"./BaseCbacBanner-BO0Gh_zS.js";import"./makeExternalStore-ChUKIeN-.js";import"./Tooltip-DxrxksXr.js";import"./PopoverPopup-DGMdDGjG.js";import"./debounce-CzfTDtAQ.js";import"./useOsdkClient-ZpvYWodJ.js";import"./tick-C_DOXN-b.js";import"./DropdownField-BeMP89sC.js";import"./isEqual-DJe3rn5X.js";import"./withOsdkMetrics-Bm1ct0GQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
