import{f as p,j as e}from"./iframe-Cb7UimVT.js";import{O as i}from"./object-table-Bl6p5AkH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGUTmafK.js";import"./Table-CPp9NhPo.js";import"./index-BIGxdzOf.js";import"./Dialog-Cg5ukvNW.js";import"./cross-CSr-jiik.js";import"./svgIconContainer-ByYucP5b.js";import"./useBaseUiId-iGVUlg7M.js";import"./InternalBackdrop-DFmtA5di.js";import"./composite-DbE7UY6k.js";import"./index-BOZbfH9s.js";import"./index-DSTszXnE.js";import"./index-DvKhcYIs.js";import"./useEventCallback-B_YCllCJ.js";import"./SkeletonBar-SWTHAMDy.js";import"./LoadingCell-Dl7N8ehE.js";import"./ColumnConfigDialog-DAMmLI1o.js";import"./DraggableList-IRlLZjUg.js";import"./search-CFBfi85w.js";import"./Input-k33bDy71.js";import"./useControlled-rmviEhSc.js";import"./Button-DpmbPgxa.js";import"./small-cross-kV31ju_J.js";import"./ActionButton-C961uo5z.js";import"./Checkbox-BGKCkJG7.js";import"./useValueChanged-CWhjY4_u.js";import"./CollapsiblePanel-leyJJrVG.js";import"./MultiColumnSortDialog-xFTI6C2S.js";import"./MenuTrigger-SRM0JwgO.js";import"./CompositeItem-BWbQHkr6.js";import"./ToolbarRootContext-BZu2CGWG.js";import"./getDisabledMountTransitionStyles-CWTpf6lp.js";import"./getPseudoElementBounds-1Qmdk9bj.js";import"./chevron-down-DGQwsfv-.js";import"./index-DWXDMbEi.js";import"./error-DCdQoOyW.js";import"./BaseCbacBanner-pvyRvv-D.js";import"./makeExternalStore-CitLye_P.js";import"./Tooltip-A0fu90b6.js";import"./PopoverPopup-Bw13Ouax.js";import"./debounce-BawLAvkZ.js";import"./useOsdkClient-C4al__C_.js";import"./tick-4A7mewJX.js";import"./DropdownField-ij81B06R.js";import"./isEqual-CQHqDVQt.js";import"./withOsdkMetrics-BMDPVH0d.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
