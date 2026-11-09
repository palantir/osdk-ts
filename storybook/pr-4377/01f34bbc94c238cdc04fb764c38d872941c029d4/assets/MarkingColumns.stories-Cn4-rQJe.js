import{f as p,j as e}from"./iframe-DJkts_RL.js";import{O as i}from"./object-table-El6ZJtdS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DnSYvyfS.js";import"./Table-CkcyUqQ4.js";import"./index-AdNwtOlb.js";import"./Dialog-C5jCL8Mx.js";import"./cross-RIukJOv6.js";import"./svgIconContainer-C5-52KFN.js";import"./useBaseUiId-BOJH0vIf.js";import"./InternalBackdrop-D5KetDnt.js";import"./composite-DDvCjav2.js";import"./index-Ci2eYgLO.js";import"./index-BDcDuz1j.js";import"./index-CQxVkwph.js";import"./useEventCallback-lKoyoV4u.js";import"./SkeletonBar-BvqjdvM1.js";import"./LoadingCell-CjZbM9If.js";import"./ColumnConfigDialog-DAZT9Gdl.js";import"./DraggableList-CD_o0Imw.js";import"./search-_QUQf3i5.js";import"./Input-FCTts1k3.js";import"./useControlled-DasQvtmr.js";import"./Button-sRivSwhn.js";import"./small-cross-CVWWEP0y.js";import"./ActionButton-VwPGUJzv.js";import"./Checkbox-DYlpQOH7.js";import"./useValueChanged-CZGvPtYp.js";import"./CollapsiblePanel-iUKB7uZT.js";import"./MultiColumnSortDialog-Dp7hOvd-.js";import"./MenuTrigger-CjrvOlSn.js";import"./CompositeItem-LGAP8V9B.js";import"./ToolbarRootContext-DzjIN-OH.js";import"./getDisabledMountTransitionStyles-BYybRfax.js";import"./getPseudoElementBounds-CzOa17qB.js";import"./chevron-down-DB2rAp0-.js";import"./index-CUwadNBX.js";import"./error-BqILnzwq.js";import"./BaseCbacBanner-DO50Ydj3.js";import"./makeExternalStore-phk9_3eu.js";import"./Tooltip-C3bMyjLM.js";import"./isObject-pPVUn46w.js";import"./debounce-CsNmpAAZ.js";import"./useOsdkClient-CytKAX8u.js";import"./tick-Bn4wwjz-.js";import"./DropdownField-CG-CwPna.js";import"./isEqual-BRzVBIIh.js";import"./_baseIsEqual-BfrWjv7z.js";import"./withOsdkMetrics-BoDHZnfJ.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
