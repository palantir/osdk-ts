import{f as p,j as e}from"./iframe-B151MY39.js";import{O as i}from"./object-table-D-UIbvSk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DjBvu03A.js";import"./Table-D-DcHuFZ.js";import"./index-D4Ktja5K.js";import"./Dialog-D2WugUSb.js";import"./cross-DQu9BvYN.js";import"./svgIconContainer-BLEuJ5z1.js";import"./useBaseUiId-B-w6rIot.js";import"./InternalBackdrop-ClpqOn9m.js";import"./composite-DsqMStnD.js";import"./index-_YRtSbhr.js";import"./index-K9vP9MSb.js";import"./index-CbZBg5h_.js";import"./useEventCallback-D9a4k8dW.js";import"./SkeletonBar-B37BkS3P.js";import"./LoadingCell--7LMLSTL.js";import"./ColumnConfigDialog-CO7m2sfy.js";import"./DraggableList-BA9k7mIf.js";import"./search-Cy5Pb8DF.js";import"./Input-BdL2sxgE.js";import"./useControlled-hVx5IBvW.js";import"./Button-D77_sTH4.js";import"./small-cross-CYn2ZJWp.js";import"./ActionButton-zvOE960M.js";import"./Checkbox-aWwK5z9s.js";import"./useValueChanged-INCVVQ2-.js";import"./CollapsiblePanel-aefLeZnL.js";import"./MultiColumnSortDialog-BoLHGqKn.js";import"./MenuTrigger-kFRhnlDq.js";import"./CompositeItem-DsqHLl_J.js";import"./ToolbarRootContext-CRksDvpW.js";import"./getDisabledMountTransitionStyles-Cs8S1gEh.js";import"./getPseudoElementBounds-D90KllDw.js";import"./chevron-down-C7ZT7QCO.js";import"./index-BUZnamy4.js";import"./error-BXj6iPTB.js";import"./BaseCbacBanner-CKm3WU7I.js";import"./makeExternalStore-DSGfAMdD.js";import"./Tooltip-Dx4JilCx.js";import"./PopoverPopup-G017xcEQ.js";import"./debounce-BOhPi2_d.js";import"./useOsdkClient-O0WN_-TA.js";import"./tick-CyZYyki1.js";import"./DropdownField-CwwIu_a4.js";import"./isEqual-BErWEpbD.js";import"./withOsdkMetrics-Bw9JRCxa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
