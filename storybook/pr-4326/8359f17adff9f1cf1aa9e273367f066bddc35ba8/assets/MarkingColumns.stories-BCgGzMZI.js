import{f as p,j as e}from"./iframe-B6Lta6LP.js";import{O as i}from"./object-table-HO2pwWul.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CYbl2xdJ.js";import"./Table-Ct_buXIn.js";import"./index-tKxTuoVH.js";import"./Dialog-ByWbVagS.js";import"./cross-CAJFEHXr.js";import"./svgIconContainer-DPd9W8TR.js";import"./useBaseUiId-LeTLb_RS.js";import"./InternalBackdrop-CD_hYGA0.js";import"./composite-CXu030fZ.js";import"./index-DW8Y-83r.js";import"./index-C1Xd9eEP.js";import"./index-SAyxKn2n.js";import"./useEventCallback-CFBWhOz1.js";import"./SkeletonBar-CBfyp1TB.js";import"./LoadingCell-CtPX3UjT.js";import"./ColumnConfigDialog-CP4zGZfj.js";import"./DraggableList-Cigjyxxm.js";import"./search-CJ2Z9OiI.js";import"./Input-CNTN6kGr.js";import"./useControlled-Db4l5j0n.js";import"./Button-CDP0EtTw.js";import"./small-cross-CYXu3PwF.js";import"./ActionButton-CjKN-LnI.js";import"./Checkbox-Ch2RRzT2.js";import"./useValueChanged-Beo3vz_X.js";import"./CollapsiblePanel-C3KmqiQ1.js";import"./MultiColumnSortDialog-FC3kYSVd.js";import"./MenuTrigger-CEQn7r1g.js";import"./CompositeItem-aYCSoUde.js";import"./ToolbarRootContext-BwcsMBBX.js";import"./getDisabledMountTransitionStyles-dUaBn5kl.js";import"./getPseudoElementBounds-Cie9YPdh.js";import"./chevron-down-DP_Haie7.js";import"./index-BIznb_cm.js";import"./error-B_rV--z6.js";import"./BaseCbacBanner-BQ6d8Rvc.js";import"./makeExternalStore-BxbrneS1.js";import"./Tooltip-C9QEBkZZ.js";import"./PopoverPopup-Crm0F1MF.js";import"./debounce-DcTWGXcx.js";import"./useOsdkClient-LIxqnJR5.js";import"./tick-CR4FCYn3.js";import"./DropdownField-IaATl85X.js";import"./isEqual-DX8PeEAn.js";import"./withOsdkMetrics-D256mKJK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
