import{f as p,j as e}from"./iframe-DlsSxhci.js";import{O as i}from"./object-table-CRAh95MC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C-s1U77H.js";import"./Table-Bj0YMStq.js";import"./index-cP9eqqta.js";import"./Dialog-C5U6ZShk.js";import"./cross-C60t9tFZ.js";import"./svgIconContainer-DPjUtDUg.js";import"./useBaseUiId-C02HFIUM.js";import"./InternalBackdrop-DBknUb6w.js";import"./composite-H8SSz-ne.js";import"./index-cF6qZyvr.js";import"./index-DNVt94aI.js";import"./index-DpBvQz_i.js";import"./useEventCallback-B2uIvmto.js";import"./SkeletonBar-B0jE-NJT.js";import"./LoadingCell-C7YLxKY7.js";import"./ColumnConfigDialog-CWIAK8ug.js";import"./DraggableList-Cq1gBryW.js";import"./search-BqsY1PeE.js";import"./Input-Ci6C2hr-.js";import"./useControlled-Z7ZWa5VR.js";import"./isEqual-B8XloMG1.js";import"./isObject-BTVuOy-v.js";import"./Button-CxITngjL.js";import"./ActionButton-BWBcKq3A.js";import"./Checkbox-CQJt_NNw.js";import"./useValueChanged-B3zPCOA0.js";import"./CollapsiblePanel-B5uHCo3M.js";import"./MultiColumnSortDialog-BhSvpKv1.js";import"./MenuTrigger-BwFK0x6i.js";import"./CompositeItem-drMwpLA_.js";import"./ToolbarRootContext-vkAvhQwM.js";import"./getDisabledMountTransitionStyles-DMANXZME.js";import"./getPseudoElementBounds-CMsfWS6D.js";import"./chevron-down-DonJjnvl.js";import"./index-CBkUqlyA.js";import"./error-IK-rXp7z.js";import"./BaseCbacBanner-DhSKbTPU.js";import"./makeExternalStore-CH2NQdic.js";import"./Tooltip-DKzdlOiN.js";import"./PopoverPopup-NPYSC6zj.js";import"./toNumber-Co3sADDP.js";import"./useOsdkClient-Bz2RwTNu.js";import"./tick-2uq__bbs.js";import"./DropdownField-Bsph783u.js";import"./withOsdkMetrics-Bw6076Jo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
