import{f as p,j as e}from"./iframe-B-HGqiQv.js";import{O as i}from"./object-table-DjgF1tRq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-f0nf4odL.js";import"./Table-aLeOrhVV.js";import"./index-bxDwllqb.js";import"./Dialog-BXnFsicd.js";import"./cross-EGyIlo5-.js";import"./svgIconContainer-CcOwnLsJ.js";import"./useBaseUiId-SjVBW8d9.js";import"./InternalBackdrop-DlbEw6t2.js";import"./composite-Bss2rQnJ.js";import"./index-BtG-qeps.js";import"./index-CEiCEyzQ.js";import"./index-BBOlyUVk.js";import"./useEventCallback-BGTc3NYX.js";import"./SkeletonBar-UZMMR510.js";import"./LoadingCell-DJ3n0fIv.js";import"./ColumnConfigDialog-Dp-hGRoe.js";import"./DraggableList-g0qcX8Py.js";import"./search-2b7SykPm.js";import"./Input-DQz318CF.js";import"./useControlled-DE8TYXcZ.js";import"./Button-DbLRaPaP.js";import"./small-cross-C9MVmrAy.js";import"./ActionButton-De-rrFSH.js";import"./Checkbox-BqMQh58C.js";import"./useValueChanged-Dvg_Ei3T.js";import"./CollapsiblePanel-B8wfbqwT.js";import"./MultiColumnSortDialog-BAHospfi.js";import"./MenuTrigger-BXJXi7iA.js";import"./CompositeItem-BdVijetn.js";import"./ToolbarRootContext-BLNyP9iz.js";import"./getDisabledMountTransitionStyles-C0uD4fg7.js";import"./getPseudoElementBounds-D3A058yI.js";import"./chevron-down-CPXc6U4P.js";import"./index-CdwYncCO.js";import"./error-BZh_GVh6.js";import"./BaseCbacBanner-CwA_rPGO.js";import"./makeExternalStore-Bg6-61eg.js";import"./Tooltip-gNmuZhk6.js";import"./PopoverPopup-c23FdBcy.js";import"./debounce-HM7gHRwB.js";import"./useOsdkClient-DhlHbxDz.js";import"./tick-B70oSR7_.js";import"./DropdownField-CupL-Zrh.js";import"./isEqual-BIqyPK0y.js";import"./withOsdkMetrics-jKzwJRkL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
