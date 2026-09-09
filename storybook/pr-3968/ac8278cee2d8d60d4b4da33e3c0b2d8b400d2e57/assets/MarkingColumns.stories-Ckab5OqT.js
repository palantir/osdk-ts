import{f as p,j as e}from"./iframe-Ca8QPFs7.js";import{O as i}from"./object-table-BQnp-YUD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-COsmiGlU.js";import"./Table-f3uvHWsc.js";import"./index-TIjGnA-V.js";import"./Dialog-DwYyKS36.js";import"./cross-fEUgPw6t.js";import"./svgIconContainer-CTykICQ9.js";import"./useBaseUiId-EAvVFtG3.js";import"./InternalBackdrop-mNTf9SFF.js";import"./composite-TrXp-_T_.js";import"./index-B7VCz-93.js";import"./index-4Pm78iQf.js";import"./index-Ce6raiTT.js";import"./useEventCallback-DalbXHIL.js";import"./SkeletonBar-J8cR98yu.js";import"./LoadingCell-DaV3CQeG.js";import"./ColumnConfigDialog-CJ1DmrCD.js";import"./DraggableList-Co4aT-G4.js";import"./search-mtN4hQ3z.js";import"./Input-bPmf1b1D.js";import"./useControlled-D9cxw3en.js";import"./Button-CDLpEtAu.js";import"./small-cross-pwzIRu8R.js";import"./ActionButton-S14ncGS1.js";import"./Checkbox-BAN4WIan.js";import"./useValueChanged-8Z2upUib.js";import"./CollapsiblePanel-DuCqlcCL.js";import"./MultiColumnSortDialog-CnEQjc1h.js";import"./MenuTrigger-DRwe12ZK.js";import"./CompositeItem-Blj-310R.js";import"./ToolbarRootContext-vcNNCMZy.js";import"./getDisabledMountTransitionStyles-BOi8NXil.js";import"./getPseudoElementBounds-C_xfi5-U.js";import"./chevron-down-CLaQgAU8.js";import"./index-Bc2S_tLj.js";import"./error-iIOc5tuM.js";import"./BaseCbacBanner-CoMmKMEW.js";import"./makeExternalStore-DFNzrn-Z.js";import"./Tooltip-DQadFgFZ.js";import"./PopoverPopup-D2QR_oJe.js";import"./debounce-CPv0owLQ.js";import"./useOsdkClient-D4peXsmr.js";import"./tick-DO6aTuUx.js";import"./DropdownField-BUiYJ1tm.js";import"./isEqual-CqV2anur.js";import"./withOsdkMetrics-DWYY-gQH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
