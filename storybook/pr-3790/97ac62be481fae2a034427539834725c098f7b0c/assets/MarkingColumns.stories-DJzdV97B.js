import{f as p,j as e}from"./iframe-aLJ4vB0x.js";import{O as i}from"./object-table-kNLX58Gy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5sUmCwj.js";import"./Table-pvJic3D7.js";import"./index-DKvaEXHI.js";import"./Dialog-DqgHKDs7.js";import"./cross-BQrUWsOd.js";import"./svgIconContainer-873Hh3eJ.js";import"./useBaseUiId-BuIqAuhc.js";import"./InternalBackdrop-C8VDRsX0.js";import"./composite-D_Mqvp3m.js";import"./index-BkKRshEc.js";import"./index-CUJ1tB6w.js";import"./index-Ci1S4s1h.js";import"./useEventCallback-CRlpf0-k.js";import"./SkeletonBar-BpZFoT3c.js";import"./LoadingCell--ETL430z.js";import"./ColumnConfigDialog-BAZiSjIN.js";import"./DraggableList-Q8dBjOLy.js";import"./search-D07Efajj.js";import"./Input-DJfYdaTn.js";import"./useControlled-C7kgsGsI.js";import"./isEqual-CHmSc8tc.js";import"./isObject-QF1hCGtq.js";import"./Button-lNsDPS4F.js";import"./ActionButton-BlHGSvPb.js";import"./Checkbox-Dvuuxnei.js";import"./useValueChanged-CBTQynAn.js";import"./CollapsiblePanel-B6brJd3g.js";import"./MultiColumnSortDialog-DAzfgCd9.js";import"./MenuTrigger-DFNrJqmt.js";import"./CompositeItem-C0_6gg2t.js";import"./ToolbarRootContext-B7yBHeEe.js";import"./getDisabledMountTransitionStyles-BP0yyuUf.js";import"./getPseudoElementBounds-B9LyUeou.js";import"./chevron-down-D9U3DaSB.js";import"./index-xX1_mGTA.js";import"./error-BpshgP1A.js";import"./BaseCbacBanner-GQbEg4Hb.js";import"./makeExternalStore-CvU_QCPk.js";import"./Tooltip-CyXVTRKz.js";import"./PopoverPopup-CqmKqcO2.js";import"./toNumber-D-Bxva2b.js";import"./useOsdkClient-C9KBHoe2.js";import"./tick-C4oNvW0d.js";import"./DropdownField-CJ9WQEN_.js";import"./withOsdkMetrics-BqZomkcB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
