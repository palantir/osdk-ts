import{f as p,j as e}from"./iframe-DwvgFPBy.js";import{O as i}from"./object-table-CXKpt07o.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CtrM-3nz.js";import"./Table-Cm0rz_NM.js";import"./index-ChfnPNU9.js";import"./Dialog-DLD-dzbs.js";import"./cross-C1oe8vnK.js";import"./svgIconContainer-BgKykxWQ.js";import"./useBaseUiId-CHF1IBcr.js";import"./InternalBackdrop-y3P75jrX.js";import"./composite-DuoDUKUH.js";import"./index-DUsIeEWR.js";import"./index-DngtPiIB.js";import"./index-Ci5_X35m.js";import"./useEventCallback-CIsii_JD.js";import"./SkeletonBar-Bn99OlYx.js";import"./LoadingCell-BRbaSXfJ.js";import"./ColumnConfigDialog-Dcl4ko7X.js";import"./DraggableList-DSK4wI_k.js";import"./search--SWXDnoj.js";import"./Input-DlFD1yhx.js";import"./useControlled-De5DdgKM.js";import"./Button-C57imQCz.js";import"./small-cross-DpGXyKJ4.js";import"./ActionButton-C-TLgUTf.js";import"./Checkbox-2PgC4d7Q.js";import"./useValueChanged-Bcki-2R3.js";import"./CollapsiblePanel-D7GWkiYF.js";import"./MultiColumnSortDialog-D1zVQuJa.js";import"./MenuTrigger-C-ZbLY8r.js";import"./CompositeItem-DAydT348.js";import"./ToolbarRootContext-CV_vZDG6.js";import"./getDisabledMountTransitionStyles-DtUQJxPB.js";import"./getPseudoElementBounds-CKc4TuSq.js";import"./chevron-down-OGN5YYQ1.js";import"./index-C2pnKJHd.js";import"./error-BqWzkB-Q.js";import"./BaseCbacBanner-DWENoj45.js";import"./makeExternalStore-DVeA--Ja.js";import"./Tooltip-C7bhQ5Z_.js";import"./PopoverPopup-CsviCyMF.js";import"./debounce-DnXDfGow.js";import"./useOsdkClient-iGOi41gt.js";import"./tick-BXa19xuR.js";import"./DropdownField-BidCZ1Wu.js";import"./isEqual-DFbmaofx.js";import"./withOsdkMetrics-qh2Z3PSD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
