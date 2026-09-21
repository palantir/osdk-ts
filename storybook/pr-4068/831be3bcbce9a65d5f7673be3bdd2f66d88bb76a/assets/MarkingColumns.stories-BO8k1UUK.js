import{f as p,j as e}from"./iframe-ClmmZ3bm.js";import{O as i}from"./object-table-DsatPqbe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BZo60ewl.js";import"./Table-D1bwUrEg.js";import"./index-DIDi76XU.js";import"./Dialog-CIfkEYR7.js";import"./cross-BZIbyAfw.js";import"./svgIconContainer-CXmUB5_k.js";import"./useBaseUiId-WUEu06gE.js";import"./InternalBackdrop-3GGPa-k1.js";import"./composite-DFQP3WzO.js";import"./index-BVYmTNrb.js";import"./index-Bq9s53kA.js";import"./index-Z45XLqZB.js";import"./useEventCallback-BNKXZA_K.js";import"./SkeletonBar-zmrRzeWk.js";import"./LoadingCell-moQ8ecqY.js";import"./ColumnConfigDialog-CjawNvRx.js";import"./DraggableList-au3wpCID.js";import"./search-BSdPNEqM.js";import"./Input-prqFStI6.js";import"./useControlled-DgsYzmvX.js";import"./Button-BC65lBcv.js";import"./small-cross-Hnp_Cop5.js";import"./ActionButton-CmUSS7TV.js";import"./Checkbox-Bo232Iw9.js";import"./useValueChanged-BYcMVQkQ.js";import"./CollapsiblePanel-DLONQ99q.js";import"./MultiColumnSortDialog-Dvdstylu.js";import"./MenuTrigger-CQM2fZ-t.js";import"./CompositeItem-By3QnrLx.js";import"./ToolbarRootContext-BOxraJ6v.js";import"./getDisabledMountTransitionStyles-NPU84L0j.js";import"./getPseudoElementBounds-BgBAgWR8.js";import"./chevron-down-cWg0tuLd.js";import"./index-BYMK15VD.js";import"./error-joC9U9D6.js";import"./BaseCbacBanner-DvElSbKs.js";import"./makeExternalStore-BNsO-POR.js";import"./Tooltip-L4sylTo8.js";import"./PopoverPopup-DNr0L3gG.js";import"./debounce-XQlAyE-7.js";import"./useOsdkClient-CKzk92mD.js";import"./tick-CId6S-tg.js";import"./DropdownField-CnAzqUOi.js";import"./isEqual-DQPARruA.js";import"./withOsdkMetrics-3RKVNbyO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
