import{f as p,j as e}from"./iframe-B3GwK4s3.js";import{O as i}from"./object-table-CqMZrAxw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJ-YN-iG.js";import"./Table-Dm2GdYCJ.js";import"./index-Cz6EBUKe.js";import"./Dialog-D94UPfPg.js";import"./cross-DaQTNtqn.js";import"./svgIconContainer-11sW1-xS.js";import"./useBaseUiId-Boj-QUxa.js";import"./InternalBackdrop-DgczOFjl.js";import"./composite-PxQPegKz.js";import"./index-CliIsbDx.js";import"./index-B1tSWc_A.js";import"./index-DPQpupOU.js";import"./useEventCallback-qiaal7tY.js";import"./SkeletonBar-8YAbkJed.js";import"./LoadingCell-C50fSrmY.js";import"./ColumnConfigDialog-C-C3QQuN.js";import"./DraggableList-C0KREyCG.js";import"./search-k6RbeZC_.js";import"./Input-pJTRV29h.js";import"./useControlled-DDUO_V7t.js";import"./Button-jfTE2vPB.js";import"./small-cross-CvbZSduI.js";import"./ActionButton-4vZKcE6j.js";import"./Checkbox-BqwFp9dy.js";import"./useValueChanged-Cqlij2fS.js";import"./CollapsiblePanel-DqUvv6bf.js";import"./MultiColumnSortDialog-DY6Qe2-5.js";import"./MenuTrigger-BAS276W-.js";import"./CompositeItem-Cht7Ot0q.js";import"./ToolbarRootContext-CbqesPbi.js";import"./getDisabledMountTransitionStyles-Du3xy9HP.js";import"./getPseudoElementBounds-nxeKvjir.js";import"./chevron-down-D1x0iG-D.js";import"./index-BCQ5Sf7j.js";import"./error-CaJ_TOjb.js";import"./BaseCbacBanner-DnGnVSrn.js";import"./makeExternalStore-DvtS8XD8.js";import"./Tooltip-BDVpcUa4.js";import"./PopoverPopup-CyAan2V3.js";import"./debounce-BGH6TLhD.js";import"./useOsdkClient-D4VDr9Gn.js";import"./tick-CKHk03q2.js";import"./DropdownField-Cw6DGzxj.js";import"./isEqual-D9n9eSFb.js";import"./withOsdkMetrics-Dzvz1nJj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
