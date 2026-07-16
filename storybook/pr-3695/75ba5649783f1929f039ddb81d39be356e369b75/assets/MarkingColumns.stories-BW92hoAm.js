import{f as p,j as e}from"./iframe-C83e49Oj.js";import{O as i}from"./object-table-BBcS8d1G.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CbqtAsjO.js";import"./Table-Cktr-89p.js";import"./index-DcnaT4jY.js";import"./Dialog-D7kTCK7j.js";import"./cross-Dsco1o_E.js";import"./svgIconContainer-DH4bJu3m.js";import"./useBaseUiId-B47GCAhn.js";import"./InternalBackdrop-CwBu1Ueu.js";import"./composite-BqiJtIFT.js";import"./index-kls1y_WF.js";import"./index-DgHYRznF.js";import"./index-B_PX_PU1.js";import"./useEventCallback-CkISb76k.js";import"./SkeletonBar-C7tjFV1O.js";import"./LoadingCell-B_2u-ZDx.js";import"./ColumnConfigDialog-D3lcyP-A.js";import"./DraggableList-DLe7Ug2u.js";import"./search-CsYpQxdZ.js";import"./Input-CY0ql7Nm.js";import"./useControlled-BNqI90Zu.js";import"./Button-DZMkI9DU.js";import"./small-cross-DdQ37dlB.js";import"./ActionButton-TD-vfP9N.js";import"./Checkbox-Dh16Abbx.js";import"./useValueChanged-BkJV2eV0.js";import"./CollapsiblePanel-Cd4KkODU.js";import"./MultiColumnSortDialog-B7nkRUqS.js";import"./MenuTrigger-Co5cz-5W.js";import"./CompositeItem-DWf1m0lc.js";import"./ToolbarRootContext-BIbuViDJ.js";import"./getDisabledMountTransitionStyles-KlIHo67d.js";import"./getPseudoElementBounds-DjQmAUj8.js";import"./chevron-down-DA_u5D-b.js";import"./index-CGYOVVHz.js";import"./error-BqLzYqLe.js";import"./BaseCbacBanner-BNDJ5g9N.js";import"./makeExternalStore-Dv_sKBJg.js";import"./Tooltip-CD_wZsLG.js";import"./PopoverPopup-CEYiS4Cj.js";import"./toNumber-DGvdHJDW.js";import"./useOsdkClient-lzrw78aF.js";import"./tick-1SCJT6_c.js";import"./DropdownField-MTWQT3Nc.js";import"./withOsdkMetrics-wjyANmnY.js";const tr={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
