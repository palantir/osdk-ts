import{f as p,j as e}from"./iframe-B9FGe5wd.js";import{O as i}from"./object-table-D7wbIGVv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BIve45PS.js";import"./Table-DyFAXF09.js";import"./index-B6Sv1VZS.js";import"./Dialog-DUZOcpTK.js";import"./cross-D3t_et5l.js";import"./svgIconContainer-CaF_wsik.js";import"./useBaseUiId-DfSj_XIi.js";import"./InternalBackdrop--zuPxYtX.js";import"./composite-DHxnLj2Y.js";import"./index-BkBeEw9r.js";import"./index-DrrLP325.js";import"./index-Dxjh7rRf.js";import"./useEventCallback-688mizLg.js";import"./SkeletonBar-D8XdUgSi.js";import"./LoadingCell-DBYmKom2.js";import"./ColumnConfigDialog-B1pRd-4k.js";import"./DraggableList-CZJp3ZhS.js";import"./search-oVgFpE2T.js";import"./Input-Dxr70xfD.js";import"./useControlled-c-18TxdJ.js";import"./Button-D3RbxwJA.js";import"./small-cross-DRTTYj7_.js";import"./ActionButton-CL2cla4Q.js";import"./Checkbox-1J4ATAQU.js";import"./useValueChanged-CBKkH70d.js";import"./CollapsiblePanel-mSdRRs77.js";import"./MultiColumnSortDialog-B9WlQiaA.js";import"./MenuTrigger-DLPyf9Xp.js";import"./CompositeItem-D_joThID.js";import"./ToolbarRootContext-ClYwCpcv.js";import"./getDisabledMountTransitionStyles-CRl0TcRY.js";import"./getPseudoElementBounds-DuNPvi2X.js";import"./chevron-down-BJC3N-Xj.js";import"./index-BT_l51Su.js";import"./error-DJQGwxmj.js";import"./BaseCbacBanner-CG6vFuER.js";import"./makeExternalStore-hUZ9hqeg.js";import"./Tooltip-CpDuLI7V.js";import"./PopoverPopup-C_VmHiZ7.js";import"./debounce-m12bCzvP.js";import"./useOsdkClient-usrWCKIw.js";import"./tick-B7eZKbT-.js";import"./DropdownField-COR0BXwM.js";import"./isEqual-D-W0erT-.js";import"./withOsdkMetrics-Bxy0f18Y.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
