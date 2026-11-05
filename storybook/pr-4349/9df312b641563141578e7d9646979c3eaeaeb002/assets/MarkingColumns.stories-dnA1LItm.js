import{f as p,j as e}from"./iframe-BqTu4XiU.js";import{O as i}from"./object-table-CZfwSZu4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CLwPNuFm.js";import"./Table-OBAT8geJ.js";import"./index-n4P62ULA.js";import"./Dialog-DBk-Vi-C.js";import"./cross-Bf-ZTIWt.js";import"./svgIconContainer-ssNd1Mel.js";import"./useBaseUiId-DOa2ktQ_.js";import"./InternalBackdrop-BWQJzTSw.js";import"./composite-Uju8Gyxg.js";import"./index-DPw1J95l.js";import"./index-XmYkAd4i.js";import"./index-C7HdEQi2.js";import"./useEventCallback-CSmK-UP6.js";import"./SkeletonBar-Cm27X7lR.js";import"./LoadingCell-BolsaO9m.js";import"./ColumnConfigDialog-BCdjNuhe.js";import"./DraggableList-Dnf99Feo.js";import"./search-CGymVd3o.js";import"./Input-CyJM7H_A.js";import"./useControlled-BTMI3vML.js";import"./Button-B0Jsn_TB.js";import"./small-cross-CbYqYfDd.js";import"./ActionButton-B-w92oTU.js";import"./Checkbox-D8VV1CyH.js";import"./useValueChanged-MQHCd7Zh.js";import"./CollapsiblePanel-7y2KhLQa.js";import"./MultiColumnSortDialog-DL-19dfG.js";import"./MenuTrigger-Djp-RtLd.js";import"./CompositeItem-2LiZgC-6.js";import"./ToolbarRootContext-I9KV8qho.js";import"./getDisabledMountTransitionStyles-Dm1GabcS.js";import"./getPseudoElementBounds-DFuKTwTc.js";import"./chevron-down-BzSkZyB8.js";import"./index-B8t3MqHb.js";import"./error-gQVPInMQ.js";import"./BaseCbacBanner-BQLkMW-Q.js";import"./makeExternalStore-CD6czKDm.js";import"./Tooltip-Ce85HlPx.js";import"./isObject-ck1XpDGo.js";import"./debounce-CinR7-WT.js";import"./useOsdkClient-CY3-Qcbp.js";import"./tick-vL6Zu8Fr.js";import"./DropdownField-CSfoNHLP.js";import"./isEqual-BCgrOiLo.js";import"./_baseIsEqual-D26Zmm1G.js";import"./withOsdkMetrics-BmTAUVUD.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
