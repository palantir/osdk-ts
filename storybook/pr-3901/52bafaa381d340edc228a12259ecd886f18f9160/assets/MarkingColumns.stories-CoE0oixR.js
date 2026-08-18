import{f as p,j as e}from"./iframe-CxgKmfts.js";import{O as i}from"./object-table-Csj-Cg66.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1ZVO4RI.js";import"./Table-CeOVRBPw.js";import"./index-CWB08-R4.js";import"./Dialog-CbA86Ogi.js";import"./cross-Cgtr1c1V.js";import"./svgIconContainer-I9PvnlO_.js";import"./useBaseUiId-D_ExVr6r.js";import"./InternalBackdrop-KjPkGRsq.js";import"./composite-CxoyATG1.js";import"./index-DV2VvHyn.js";import"./index-BDjSCwox.js";import"./index-C8YewBG3.js";import"./useEventCallback-cWdavpVJ.js";import"./SkeletonBar-7NqNTH8P.js";import"./LoadingCell-C9Vu4J8E.js";import"./ColumnConfigDialog-Bi94eNQD.js";import"./DraggableList-Bluwkle1.js";import"./search-Dxx8Wlti.js";import"./Input-BORueW5n.js";import"./useControlled-_CoSROd4.js";import"./Button-DtbGY7fi.js";import"./small-cross-CgkI7U0n.js";import"./ActionButton-BFTDCvgc.js";import"./Checkbox-CmVXv-8i.js";import"./useValueChanged-BvZnG3_E.js";import"./CollapsiblePanel-CVIBkRBX.js";import"./MultiColumnSortDialog-BvLjjGee.js";import"./MenuTrigger-BPgNYlzf.js";import"./CompositeItem-CMYBs2xS.js";import"./ToolbarRootContext-BpJLr83A.js";import"./getDisabledMountTransitionStyles-REb6g5g0.js";import"./getPseudoElementBounds-BPR2lIeY.js";import"./chevron-down-BxImBJhJ.js";import"./index-pKyJ291Y.js";import"./error-BlkeWzi2.js";import"./BaseCbacBanner-CjiGFirJ.js";import"./makeExternalStore-Dg2idi7m.js";import"./Tooltip-DM9JyoYs.js";import"./PopoverPopup-Ct-EccSB.js";import"./debounce-ldRXCGpP.js";import"./useOsdkClient-_veAyDMq.js";import"./tick-CYpHjQHt.js";import"./DropdownField-Dg83r_8y.js";import"./isEqual-rrKOSo6E.js";import"./withOsdkMetrics-PSzjLOa4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
