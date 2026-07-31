import{f as p,j as e}from"./iframe-BAGpRzfr.js";import{O as i}from"./object-table-CqU5kZAu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Corf789j.js";import"./Table-CVoZnPC3.js";import"./index-Ga7CUyAH.js";import"./Dialog-v_BWNC40.js";import"./cross-CB_xYTlG.js";import"./svgIconContainer-sR-3_vAH.js";import"./useBaseUiId-D8Vsok84.js";import"./InternalBackdrop-CsXznWYg.js";import"./composite-sMcVC9eI.js";import"./index-DxphW_No.js";import"./index-BStldZKH.js";import"./index-B8zqjF6f.js";import"./useEventCallback-CN3xEPfj.js";import"./SkeletonBar-ry2J50tn.js";import"./LoadingCell-B_Ni_uW1.js";import"./ColumnConfigDialog-B_FC0Vsr.js";import"./DraggableList-Co8wUlcQ.js";import"./search-Cim2wrYi.js";import"./Input-CkPyvI53.js";import"./useControlled-DQLWPkxR.js";import"./isEqual-lxxQSSAF.js";import"./isObject-Aecr_3gI.js";import"./Button-B1tJprBL.js";import"./ActionButton-B67UkNc-.js";import"./Checkbox-B-ORbkA4.js";import"./useValueChanged-CRXfWOv_.js";import"./CollapsiblePanel-T8rH8p23.js";import"./MultiColumnSortDialog-BlYuvWVv.js";import"./MenuTrigger-CR4GKjR5.js";import"./CompositeItem-R8h4HgYz.js";import"./ToolbarRootContext-BadKTZpQ.js";import"./getDisabledMountTransitionStyles-DzNx5AQ3.js";import"./getPseudoElementBounds-CA6Nf5Lc.js";import"./chevron-down-CPue3q8s.js";import"./index-BlZ0oTgw.js";import"./error-Cx7q6m8o.js";import"./BaseCbacBanner-DqWX9lKa.js";import"./makeExternalStore-DHV-TvQm.js";import"./Tooltip-spHLb7Fa.js";import"./PopoverPopup-eQZY-6cr.js";import"./toNumber-EdrbkC3p.js";import"./useOsdkClient-DBaDAOAn.js";import"./tick-CNjS5V3e.js";import"./DropdownField-59XRT8Mk.js";import"./withOsdkMetrics-DboyezXq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
