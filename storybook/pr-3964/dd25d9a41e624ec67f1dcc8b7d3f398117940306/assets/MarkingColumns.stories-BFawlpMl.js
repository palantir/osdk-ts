import{f as p,j as e}from"./iframe-5sgXXUq2.js";import{O as i}from"./object-table-aOrhl4B7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cbn9zcHA.js";import"./Table-BgEDWebR.js";import"./index-CzwNxfu7.js";import"./Dialog-CaIF2dWF.js";import"./cross-Dl1YYoqq.js";import"./svgIconContainer-6O_QyJta.js";import"./useBaseUiId-DG_QbP_U.js";import"./InternalBackdrop-CjtV5ZAW.js";import"./composite-Ine8e3tf.js";import"./index-C3HPrqRk.js";import"./index-Dnj1V73h.js";import"./index-BBV34otm.js";import"./useEventCallback-BdN49Cxy.js";import"./SkeletonBar-BEL6Gir4.js";import"./LoadingCell-C1_I6sfl.js";import"./ColumnConfigDialog-BcHlPWgE.js";import"./DraggableList-D4fBscVn.js";import"./search-BYA2jSn3.js";import"./Input-CwUkFVhs.js";import"./useControlled-siu4g8xe.js";import"./Button-71PqqjpD.js";import"./small-cross-B4u9H8ya.js";import"./ActionButton-BO7jWeao.js";import"./Checkbox-DGdxwXIf.js";import"./useValueChanged-C7csg4cA.js";import"./CollapsiblePanel-Dcs-Jidu.js";import"./MultiColumnSortDialog-DGOxrWta.js";import"./MenuTrigger-BGZdYvp4.js";import"./CompositeItem-CIAR7LV4.js";import"./ToolbarRootContext-HX5a3LbS.js";import"./getDisabledMountTransitionStyles-CuDkESvM.js";import"./getPseudoElementBounds-DuTJjluI.js";import"./chevron-down-B4APaT5X.js";import"./index-BUovi2pL.js";import"./error-CIAmmsFo.js";import"./BaseCbacBanner-CHao_-T2.js";import"./makeExternalStore-D7x2N1Sq.js";import"./Tooltip-Bz_qehDJ.js";import"./PopoverPopup-BjatbugG.js";import"./debounce-D_ZNVjIE.js";import"./useOsdkClient-CvRRMyub.js";import"./tick-BcyhdjRi.js";import"./DropdownField-DDOypfNs.js";import"./isEqual-BD5xaPW8.js";import"./withOsdkMetrics-Dp93P8HI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
