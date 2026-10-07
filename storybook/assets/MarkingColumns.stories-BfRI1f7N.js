import{f as p,j as e}from"./iframe-Chio77VP.js";import{O as i}from"./object-table-CiTAXoaP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dt5FNH5o.js";import"./index-Ca2LpqUZ.js";import"./Dialog-DqQTLStJ.js";import"./cross-DSLJTQ5w.js";import"./svgIconContainer-Csco7ptr.js";import"./useBaseUiId-ClFlSRoQ.js";import"./InternalBackdrop-ndglsXAe.js";import"./composite-DE8-mgXU.js";import"./index-BcgDg9yf.js";import"./index-DnMFWa6M.js";import"./index-CEEu1Ax6.js";import"./useEventCallback-B4Uu45dA.js";import"./SkeletonBar--R3A6M4c.js";import"./LoadingCell-BO2APzgK.js";import"./ColumnConfigDialog-5fVaKAOZ.js";import"./DraggableList-k5C9BzVf.js";import"./search-Bq_ERYnO.js";import"./Input-C-4igv96.js";import"./useControlled-C7GDl2B7.js";import"./Button-6EmhjClO.js";import"./small-cross-LZKNmLNK.js";import"./ActionButton-Bq1xmvFN.js";import"./Checkbox-D5wuzF_a.js";import"./useValueChanged-Oi-HM7VZ.js";import"./CollapsiblePanel-1ox7xPDd.js";import"./MultiColumnSortDialog-CiaGtBlu.js";import"./MenuTrigger-BXYr689C.js";import"./CompositeItem-Qz08TpRA.js";import"./ToolbarRootContext-CZQCk8Ol.js";import"./getDisabledMountTransitionStyles-CnbA4lIo.js";import"./getPseudoElementBounds-qSW1gYDZ.js";import"./chevron-down-D-UVCR2J.js";import"./index-CeDQ-Vdk.js";import"./error-Yn-rJTrJ.js";import"./BaseCbacBanner-CzPn9Ncu.js";import"./makeExternalStore-CTFx1LEB.js";import"./Tooltip-71Wdtc8K.js";import"./PopoverPopup-Ba-YatLV.js";import"./debounce-Ins44pUS.js";import"./useOsdkClient-DFUhHdMt.js";import"./tick-Db0tIP7m.js";import"./DropdownField-BOa15dWM.js";import"./isEqual-CrPAYksM.js";import"./withOsdkMetrics-Cz5B5mCa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
