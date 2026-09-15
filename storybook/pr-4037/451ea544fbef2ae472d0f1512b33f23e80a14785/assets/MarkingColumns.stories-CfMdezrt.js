import{f as p,j as e}from"./iframe-BkUB1z-0.js";import{O as i}from"./object-table-B0QkY8pq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BCudyj9Z.js";import"./Table-D7nmPrIe.js";import"./index-BCGsaIlh.js";import"./Dialog-OQ_7fT6e.js";import"./cross-CTUau5h8.js";import"./svgIconContainer-CGIj3k_X.js";import"./useBaseUiId-B8T1UKcT.js";import"./InternalBackdrop-H5sSfb4n.js";import"./composite-DN3Oh5mU.js";import"./index-BQjDuZGx.js";import"./index-D6in26WZ.js";import"./index-CvdNlkb_.js";import"./useEventCallback-Cxr3bwfn.js";import"./SkeletonBar-CDJ42pSX.js";import"./LoadingCell-Bg2VT36p.js";import"./ColumnConfigDialog-CU0uQ1_j.js";import"./DraggableList-DG9sSi1E.js";import"./search-BtcHq1ld.js";import"./Input-C4TK9SWN.js";import"./useControlled-CUAQStBL.js";import"./Button-DSZL0uVg.js";import"./small-cross-BAPz52fQ.js";import"./ActionButton-9cqEoefe.js";import"./Checkbox-QYXnRQej.js";import"./useValueChanged-BT-2a7nr.js";import"./CollapsiblePanel-q_QI9iZH.js";import"./MultiColumnSortDialog-D_Gp9N_w.js";import"./MenuTrigger-DCv1PXh0.js";import"./CompositeItem-Bq1Yg5Uc.js";import"./ToolbarRootContext-But4UFVK.js";import"./getDisabledMountTransitionStyles-DT8C5L09.js";import"./getPseudoElementBounds-BRtlcmQu.js";import"./chevron-down-C-Az15Kw.js";import"./index-Cx3qLWLm.js";import"./error-yvAwMgsa.js";import"./BaseCbacBanner-Cjp0jT5t.js";import"./makeExternalStore-CT_-UtYV.js";import"./Tooltip-B4XqSu-L.js";import"./PopoverPopup-ozcNWDZ5.js";import"./debounce-BLWM42lG.js";import"./useOsdkClient-BbELsNFg.js";import"./tick-C2mVcAcj.js";import"./DropdownField-0exMnQkH.js";import"./isEqual-DS9l3kd2.js";import"./withOsdkMetrics-a2YFnMdP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
