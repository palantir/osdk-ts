import{f as p,j as e}from"./iframe-B5CnmteN.js";import{O as i}from"./object-table-gaX4hUZd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BvIIyaRb.js";import"./Table-CYEWxzsm.js";import"./index-8frbvTc0.js";import"./Dialog-CYPtfWTy.js";import"./cross-pkR4RJ0Q.js";import"./svgIconContainer-Q-T6gYyn.js";import"./useBaseUiId-CpmUOtyx.js";import"./InternalBackdrop-6TwkoN7E.js";import"./composite-DzRtfXwG.js";import"./index-DJMwC2E0.js";import"./index-COZUZoux.js";import"./index-CiKFFLFD.js";import"./useEventCallback-H_-RfLRz.js";import"./SkeletonBar-CKpapgR8.js";import"./LoadingCell-DAczU-a4.js";import"./ColumnConfigDialog-Cn1lmaiq.js";import"./DraggableList-DpqDB0uQ.js";import"./search-BS3g1UNT.js";import"./Input-BFwAdaEg.js";import"./useControlled-BIkM9vG3.js";import"./Button-k7Ft62HK.js";import"./small-cross-CxROeBHB.js";import"./ActionButton-DGDbhDGz.js";import"./Checkbox-ClKS3ff4.js";import"./useValueChanged-DAkLpCOr.js";import"./CollapsiblePanel-Cb_s5Izf.js";import"./MultiColumnSortDialog-CikWbuVd.js";import"./MenuTrigger-Bm-IvUc5.js";import"./CompositeItem-GDYb2RvJ.js";import"./ToolbarRootContext-BCLdmU7d.js";import"./getDisabledMountTransitionStyles-BgPPzZOr.js";import"./getPseudoElementBounds-C6KAFL2T.js";import"./chevron-down-Yu587uLP.js";import"./index-NUZYU-eZ.js";import"./error-DnL9Bib9.js";import"./BaseCbacBanner-CBd6F0qQ.js";import"./makeExternalStore-DQ9Dnm6S.js";import"./Tooltip-CT-rD5V_.js";import"./PopoverPopup-BFzT61y-.js";import"./debounce-B-2K-o_A.js";import"./useOsdkClient-qcHJ86eJ.js";import"./tick-DQyZDVkc.js";import"./DropdownField-BGVoK-k4.js";import"./isEqual-DJdARuJ_.js";import"./withOsdkMetrics-Dx9osySV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
