import{f as p,j as e}from"./iframe-nH92Qb6I.js";import{O as i}from"./object-table-Cn307sAw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVpIcuXN.js";import"./Table-CsP27jwx.js";import"./index-wUFT2bRw.js";import"./Dialog-BNhXnAKa.js";import"./cross-HApDVAUs.js";import"./svgIconContainer-CCtPkDCx.js";import"./useBaseUiId-Dbvfrb6U.js";import"./InternalBackdrop-CHH-xVa7.js";import"./composite-B2ptXcYf.js";import"./index-CYsOJOxV.js";import"./index-CcpfuVHT.js";import"./index-CPIitDS-.js";import"./useEventCallback-Pw8NUu2g.js";import"./SkeletonBar-Bynzqc4g.js";import"./LoadingCell-BARv7fv5.js";import"./ColumnConfigDialog-B96lYMgM.js";import"./DraggableList-MQ6bmFCg.js";import"./search-D5Opa-iA.js";import"./Input-DzMyb8hK.js";import"./useControlled-B8icxwdl.js";import"./Button-w7xoCEq9.js";import"./small-cross-BSOPXnkj.js";import"./ActionButton-DoSazfb4.js";import"./Checkbox-DaAcI3Qo.js";import"./useValueChanged-DlL26KZ1.js";import"./CollapsiblePanel-CapZ9VU7.js";import"./MultiColumnSortDialog-BWMO_1Qm.js";import"./MenuTrigger-DO3ORZXC.js";import"./CompositeItem-BF333Zgu.js";import"./ToolbarRootContext-DlwWE9QZ.js";import"./getDisabledMountTransitionStyles-BhkjVSc5.js";import"./getPseudoElementBounds-fd5QWVwB.js";import"./chevron-down-CBmuqb-m.js";import"./index-DgFSfdtE.js";import"./error-BXUm0BgQ.js";import"./BaseCbacBanner-t3zs4vsg.js";import"./makeExternalStore-CLbnsWAa.js";import"./Tooltip-DSvaFKNo.js";import"./PopoverPopup-Cu27jEST.js";import"./debounce-By_2G3GA.js";import"./useOsdkClient-CgXm7UOo.js";import"./tick-oJtSbIPn.js";import"./DropdownField-n4Cp-XVI.js";import"./isEqual-DJbuM-Nd.js";import"./withOsdkMetrics-Cz8MJ3YO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
