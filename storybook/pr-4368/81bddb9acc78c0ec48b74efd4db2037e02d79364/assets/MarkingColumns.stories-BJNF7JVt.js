import{f as p,j as e}from"./iframe-Bq9JkkcV.js";import{O as i}from"./object-table-D6qgwCv6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cqv5s2jj.js";import"./Table-DIqREGrv.js";import"./index-LFRJGjst.js";import"./Dialog-C2WNCz-n.js";import"./cross-Bk3fKCS7.js";import"./svgIconContainer-Cf0ZuXQT.js";import"./useBaseUiId-CRKQdUfR.js";import"./InternalBackdrop-BQMKI1KR.js";import"./composite-B8AhlmVu.js";import"./index-BLJWGSk2.js";import"./index-CiXmcJM_.js";import"./index-BNaE_Tt-.js";import"./useEventCallback-D9Esi33T.js";import"./SkeletonBar-DXhct9uD.js";import"./LoadingCell-Dc9leBYT.js";import"./ColumnConfigDialog-6z222bHh.js";import"./DraggableList-BOvLWd2b.js";import"./search-BNWG7jMi.js";import"./Input-CVFiTt6w.js";import"./useControlled-BOwVH0ok.js";import"./Button-CXvtykDV.js";import"./small-cross-BnGu73G1.js";import"./ActionButton-DsKQLZsS.js";import"./Checkbox-DzCahne8.js";import"./useValueChanged-smqOtCks.js";import"./CollapsiblePanel-BzrJ9qI-.js";import"./MultiColumnSortDialog-DdUBFoKl.js";import"./MenuTrigger-BSmrj6RT.js";import"./CompositeItem-CNijsmc1.js";import"./ToolbarRootContext-Cg88OliQ.js";import"./getDisabledMountTransitionStyles-BX0EtKPr.js";import"./getPseudoElementBounds-CerPCRKU.js";import"./chevron-down-BLdYc2zE.js";import"./index-CPslm5If.js";import"./error-Bc6kFz4J.js";import"./BaseCbacBanner-Dtq1flvT.js";import"./makeExternalStore-BoBeGpud.js";import"./Tooltip-Dq_sB7xx.js";import"./isObject-CmhVC78r.js";import"./debounce-CzyUj9dS.js";import"./useOsdkClient-44rjUua8.js";import"./tick-BFpzlNMH.js";import"./DropdownField-DAKJZGR4.js";import"./isEqual-Zzl_MNMm.js";import"./_baseIsEqual-3k_rL-8A.js";import"./withOsdkMetrics-BtcppCcW.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
