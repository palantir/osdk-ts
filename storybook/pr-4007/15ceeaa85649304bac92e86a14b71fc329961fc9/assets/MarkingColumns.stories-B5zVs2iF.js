import{f as p,j as e}from"./iframe-DL6bhntV.js";import{O as i}from"./object-table-CKdJoKQA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bzx1Zh_S.js";import"./Table-RqC9D474.js";import"./index-B8ftOcx-.js";import"./Dialog-9nwm2v7g.js";import"./cross-DyIDhlr1.js";import"./svgIconContainer-DSWQOkNx.js";import"./useBaseUiId-llhhqJOe.js";import"./InternalBackdrop-Bkvjmy8r.js";import"./composite-BF5DU4SU.js";import"./index-Bs7nlaiS.js";import"./index-DJ4ha6JU.js";import"./index-D_yYkCV1.js";import"./useEventCallback-CBeRn_5S.js";import"./SkeletonBar-DVq5tV_s.js";import"./LoadingCell-Ct-8OoY3.js";import"./ColumnConfigDialog-D4KL29wS.js";import"./DraggableList-OOuzfX9H.js";import"./search-DfezW5-F.js";import"./Input-BPBmB1lT.js";import"./useControlled-DiqKmz4m.js";import"./Button-B0CnBgjK.js";import"./small-cross-BUQz1fKF.js";import"./ActionButton-BzrCCI4n.js";import"./Checkbox-lnE4-5VB.js";import"./useValueChanged-CDlkl3OD.js";import"./CollapsiblePanel-DoYVi0Of.js";import"./MultiColumnSortDialog-Ddp0c38Q.js";import"./MenuTrigger-wuUZ3pYU.js";import"./CompositeItem-Bp1V_qz6.js";import"./ToolbarRootContext-CvpBNR1-.js";import"./getDisabledMountTransitionStyles-CUMX81wn.js";import"./getPseudoElementBounds-vxtOSGfI.js";import"./chevron-down-B213Fcrt.js";import"./index-DteBpDZt.js";import"./error-BD8Fuc9b.js";import"./BaseCbacBanner-DBz0MOp-.js";import"./makeExternalStore-OJ90FHcV.js";import"./Tooltip-CpYMs0DP.js";import"./PopoverPopup-CS8wg6vA.js";import"./debounce-B_yVPQMd.js";import"./useOsdkClient-7LhcF-kZ.js";import"./tick-BHAOkmD3.js";import"./DropdownField-DNbepfr2.js";import"./isEqual-pvfu54a5.js";import"./withOsdkMetrics-D6wPv70n.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
