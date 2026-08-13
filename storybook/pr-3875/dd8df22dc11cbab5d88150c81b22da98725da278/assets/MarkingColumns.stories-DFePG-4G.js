import{f as p,j as e}from"./iframe-EEz1IOka.js";import{O as i}from"./object-table-CO-dI1YL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CGhdtBtK.js";import"./Table-Nb1wMyLG.js";import"./index-wrVUERdf.js";import"./Dialog-CdMREMdv.js";import"./cross-CuMKbR8C.js";import"./svgIconContainer-lS5adnyJ.js";import"./useBaseUiId-CcQzYqcN.js";import"./InternalBackdrop-CiT9C5YL.js";import"./composite-hdmoU3rn.js";import"./index-BPya6wgz.js";import"./index-QBb9cK5I.js";import"./index-d7XO9Jvc.js";import"./useEventCallback-OJPdi0UX.js";import"./SkeletonBar-CWSkqZVB.js";import"./LoadingCell-Do3U3EH_.js";import"./ColumnConfigDialog-CTxL14WK.js";import"./DraggableList-BIGxBb_L.js";import"./search-BsnNci57.js";import"./Input-BvlDQZSp.js";import"./useControlled-g6qmFj-Q.js";import"./Button-BPpqCEih.js";import"./small-cross-DBDElo7h.js";import"./ActionButton-Dyjj8Yw9.js";import"./Checkbox-Co5NuAj9.js";import"./useValueChanged-tJQ3ZVA6.js";import"./CollapsiblePanel-CXyIEon4.js";import"./MultiColumnSortDialog-rOcF0jIF.js";import"./MenuTrigger-D3KaQYoW.js";import"./CompositeItem-C527w4Jh.js";import"./ToolbarRootContext-b0NW8oaj.js";import"./getDisabledMountTransitionStyles-CtThYJal.js";import"./getPseudoElementBounds-CR7mFHCF.js";import"./chevron-down-C5I-Kczg.js";import"./index-Ex8GKG8s.js";import"./error-CU68iUeI.js";import"./BaseCbacBanner-Cf-Kmruf.js";import"./makeExternalStore-DZf_gtwe.js";import"./Tooltip-Bj3rH3YW.js";import"./PopoverPopup-Yd-OBux3.js";import"./debounce-BeoBCM9a.js";import"./useOsdkClient-ixOA3R4P.js";import"./tick-BwOA0alU.js";import"./DropdownField-BwsQHkj4.js";import"./isEqual-sRagOQoU.js";import"./withOsdkMetrics-DuSdcNfN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
