import{f as p,j as e}from"./iframe-BFWJZaOo.js";import{O as i}from"./object-table-BrOjHsw0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BB-wZWHQ.js";import"./Table-CHxO4yLR.js";import"./index-XqSw18dv.js";import"./Dialog-B3g8_s7J.js";import"./cross-Bdxg6WL4.js";import"./svgIconContainer-D508kkfI.js";import"./useBaseUiId-D0TRwsGc.js";import"./InternalBackdrop-BAFY0J2d.js";import"./composite-BuqSO83P.js";import"./index-13lJ30rX.js";import"./index-CxTEg5iL.js";import"./index-BcEf8-4C.js";import"./useEventCallback-BPxPY2CN.js";import"./SkeletonBar-a1qesNFL.js";import"./LoadingCell-CY9OtzsA.js";import"./ColumnConfigDialog-B1HvDR0n.js";import"./DraggableList-6t1KEroR.js";import"./search-CoXqkvjq.js";import"./Input-CT8p6Er9.js";import"./useControlled-B54yZwri.js";import"./Button-BucLG5Fq.js";import"./small-cross-7Nm747z7.js";import"./ActionButton-BceFUcJP.js";import"./Checkbox-Bwid83ut.js";import"./useValueChanged-CUBMtNnf.js";import"./CollapsiblePanel-CgWuuhBS.js";import"./MultiColumnSortDialog-B_C0FqaD.js";import"./MenuTrigger-B2Wk1N1n.js";import"./CompositeItem-BYv_HkoB.js";import"./ToolbarRootContext-t3ZlqxTu.js";import"./getDisabledMountTransitionStyles-sSKvelZe.js";import"./getPseudoElementBounds-5meTCtdo.js";import"./chevron-down-jCzULGyN.js";import"./index-DhrvNfiG.js";import"./error-ov0Da29u.js";import"./BaseCbacBanner-Cw-h5evd.js";import"./makeExternalStore-BBLYkrLM.js";import"./Tooltip-sgBLHLbz.js";import"./PopoverPopup-anP8KZpL.js";import"./debounce-BVuWn6Kv.js";import"./useOsdkClient-BFoXoZmC.js";import"./tick-BwPdqsm5.js";import"./DropdownField-DUTW3bKH.js";import"./isEqual-C01EUI8T.js";import"./withOsdkMetrics-Dvr0Y_2G.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
