import{f as p,j as e}from"./iframe-CRRi8SgO.js";import{O as i}from"./object-table-DdWWXjnt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BwQis52u.js";import"./Table-gWpIhT1N.js";import"./index-2tg5-UQV.js";import"./Dialog-CIutlh9B.js";import"./cross-C1gwy4VO.js";import"./svgIconContainer-DTz_qMc2.js";import"./useBaseUiId-iEjqlsrm.js";import"./InternalBackdrop-D30RxIiy.js";import"./composite-AZXA_87F.js";import"./index-uVzecxAq.js";import"./index-BcwD145P.js";import"./index-DxRnE0pO.js";import"./useEventCallback-BIZVp9Yo.js";import"./SkeletonBar-CgBZhydk.js";import"./LoadingCell-h47xUmM7.js";import"./ColumnConfigDialog-DuWWlKqr.js";import"./DraggableList-CLZzdOnX.js";import"./search-BNshWxL3.js";import"./Input-DG2OkDHs.js";import"./useControlled-CowgUxzg.js";import"./Button-nDYaCN2P.js";import"./small-cross-5jUutM_4.js";import"./ActionButton-D6GTAbLZ.js";import"./Checkbox-CvFrAsxy.js";import"./useValueChanged-CjTliyXW.js";import"./CollapsiblePanel-BLx3NSxa.js";import"./MultiColumnSortDialog-BNasdP-v.js";import"./MenuTrigger-O7MVt_aS.js";import"./CompositeItem-Bioh8Trj.js";import"./ToolbarRootContext-D3Qkj0-s.js";import"./getDisabledMountTransitionStyles-CQJ8ore_.js";import"./getPseudoElementBounds-CWEIz1jB.js";import"./chevron-down-D4f-osYR.js";import"./index-B8kfer_a.js";import"./error-DJ0QJQKA.js";import"./BaseCbacBanner-Bu8cxWyQ.js";import"./makeExternalStore-7XhwS57f.js";import"./Tooltip-TYF1TzI8.js";import"./PopoverPopup-JUUuLGr6.js";import"./debounce-CUx7FQzR.js";import"./useOsdkClient-E5LrSb6S.js";import"./tick-DKaiCuS5.js";import"./DropdownField-K2ZSDodB.js";import"./isEqual-r311FMGD.js";import"./withOsdkMetrics-gAZiEnbR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
