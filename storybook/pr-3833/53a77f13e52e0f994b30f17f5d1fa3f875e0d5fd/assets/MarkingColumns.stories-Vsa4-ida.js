import{f as p,j as e}from"./iframe-CASB9tDT.js";import{O as i}from"./object-table-BFB1azMa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BT4qy2DG.js";import"./Table-BlTt_xRt.js";import"./index-CaZjzwHl.js";import"./Dialog-Cwvfctts.js";import"./cross-BP6wgmXe.js";import"./svgIconContainer-D1NrwXBl.js";import"./useBaseUiId-CuUj_9P0.js";import"./InternalBackdrop-3KbW5bhi.js";import"./composite-CqdSrGVi.js";import"./index-DZkiBKN3.js";import"./index-SAn_G_wi.js";import"./index-quqksDWM.js";import"./useEventCallback-CbF17oj4.js";import"./SkeletonBar-BHscMRO0.js";import"./LoadingCell-B9WC_5s1.js";import"./ColumnConfigDialog-x-yNNTQb.js";import"./DraggableList-mPjKq5O9.js";import"./search-CfQ11krI.js";import"./Input-BW7gIe1E.js";import"./useControlled-DLW506J-.js";import"./isEqual-BtBzEQrf.js";import"./isObject-BlIY9m2I.js";import"./Button-BltQyjod.js";import"./ActionButton-DEKNXljN.js";import"./Checkbox-4jGkecAY.js";import"./useValueChanged-CaRDSGst.js";import"./CollapsiblePanel-Dl72Nyb5.js";import"./MultiColumnSortDialog-Buzy_vuM.js";import"./MenuTrigger-Q3VAWSQF.js";import"./CompositeItem-DTyFfYKq.js";import"./ToolbarRootContext-CqYiE2F9.js";import"./getDisabledMountTransitionStyles-CHPi5laV.js";import"./getPseudoElementBounds-DHd3hF1S.js";import"./chevron-down-B1bduZ3e.js";import"./index-6uAsZ-h5.js";import"./error-BrX8f-50.js";import"./BaseCbacBanner-Beigk8Y9.js";import"./makeExternalStore-BTh_nx7a.js";import"./Tooltip-CBVmdqZb.js";import"./PopoverPopup-DjMVUncd.js";import"./toNumber-s3UxQR4Z.js";import"./useOsdkClient-tq_rUodS.js";import"./tick-BZot9d_H.js";import"./DropdownField-DcpakKzL.js";import"./withOsdkMetrics-C77tE57v.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
