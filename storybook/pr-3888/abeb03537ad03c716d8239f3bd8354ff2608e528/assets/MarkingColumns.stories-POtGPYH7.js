import{f as p,j as e}from"./iframe-DurHOd68.js";import{O as i}from"./object-table-DoKEMA1l.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C4a5shVs.js";import"./Table-DXiJOZ7j.js";import"./index-BigoyWey.js";import"./Dialog-D2KD2KyO.js";import"./cross-CZn1rHNq.js";import"./svgIconContainer-DQNR0e5i.js";import"./useBaseUiId-D0K6ks6X.js";import"./InternalBackdrop-ezEx13Gn.js";import"./composite-pf8Nf7Cg.js";import"./index-BEccjITX.js";import"./index-DMktHvtp.js";import"./index-Ca4doFnI.js";import"./useEventCallback-DvA1SjKb.js";import"./SkeletonBar-Dx8sFDAW.js";import"./LoadingCell-CMpQkQma.js";import"./ColumnConfigDialog-CqWCNg7g.js";import"./DraggableList-CSXzBm0-.js";import"./search-BHV29iQ4.js";import"./Input-CgTzbB35.js";import"./useControlled-558BXAYv.js";import"./Button-C6XRWyAz.js";import"./small-cross-BDITjl9A.js";import"./ActionButton-WLtC926g.js";import"./Checkbox-Cyo2am8o.js";import"./useValueChanged-qPfuKLPX.js";import"./CollapsiblePanel-Cj8pbKNI.js";import"./MultiColumnSortDialog-DFk_eKwM.js";import"./MenuTrigger-DHs8rp-9.js";import"./CompositeItem-BTa5eFJ1.js";import"./ToolbarRootContext-CchGHx-p.js";import"./getDisabledMountTransitionStyles-D-nGQaI5.js";import"./getPseudoElementBounds-BfLbUIYU.js";import"./chevron-down-BWeyWOzk.js";import"./index-0NVWzQhh.js";import"./error-BsWyzq_c.js";import"./BaseCbacBanner-DApI-VbG.js";import"./makeExternalStore-DkbSeVDT.js";import"./Tooltip-BBRKTiIN.js";import"./PopoverPopup-CaGdQLGD.js";import"./debounce-wCH5J5Ks.js";import"./useOsdkClient-BQC30IhZ.js";import"./tick-fHqvmp39.js";import"./DropdownField-lF9AEX_Y.js";import"./isEqual-QsWiyk6Q.js";import"./withOsdkMetrics-ClFS2p81.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
