import{f as p,j as e}from"./iframe-CvDCAeDH.js";import{O as i}from"./object-table-CWKnsu2q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CySF3uCO.js";import"./Table-x81VeKaQ.js";import"./index-nRFzHzzN.js";import"./Dialog-4_Yq37_s.js";import"./cross-EFfC56XR.js";import"./svgIconContainer-BhfMRbBd.js";import"./useBaseUiId-CERu-Mmn.js";import"./InternalBackdrop-Dnld41P_.js";import"./composite-DRBh063u.js";import"./index-RY0nU7lO.js";import"./index-DUHiZ1To.js";import"./index-C6zuoPb0.js";import"./useEventCallback-Dvnc1qQ_.js";import"./SkeletonBar-BPwyQ3k9.js";import"./LoadingCell-OTRkEekm.js";import"./ColumnConfigDialog-B8mQRaVc.js";import"./DraggableList-BS8jzmor.js";import"./search-dKzEJt7B.js";import"./Input-ALhJpCPl.js";import"./useControlled-C_KfRsXv.js";import"./Button-DisPssKu.js";import"./small-cross-DlN3ZgDX.js";import"./ActionButton-DRoq9FTP.js";import"./Checkbox-C53gscSo.js";import"./useValueChanged-BoHTJvSv.js";import"./CollapsiblePanel-BoKAurlF.js";import"./MultiColumnSortDialog-CDMb6CRp.js";import"./MenuTrigger-rb9WeGbt.js";import"./CompositeItem-DMUlrRz3.js";import"./ToolbarRootContext-DAFODDmt.js";import"./getDisabledMountTransitionStyles-Bsgl2E4D.js";import"./getPseudoElementBounds-qWUecOLW.js";import"./chevron-down-ZDn0-ls9.js";import"./index-YLVpcBQe.js";import"./error-DzLL_NpE.js";import"./BaseCbacBanner-D2iLEvm5.js";import"./makeExternalStore-feC-GRyZ.js";import"./Tooltip-B3z3Udmz.js";import"./PopoverPopup-D23pQWc3.js";import"./debounce-zyyUUcoC.js";import"./useOsdkClient-CeLUd2a8.js";import"./tick-DR6qavIZ.js";import"./DropdownField-C8RlYBV5.js";import"./isEqual-DuPT9max.js";import"./withOsdkMetrics-Ck_CFDG4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
