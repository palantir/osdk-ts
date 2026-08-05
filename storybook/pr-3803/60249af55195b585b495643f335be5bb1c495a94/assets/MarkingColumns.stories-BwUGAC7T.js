import{f as p,j as e}from"./iframe-Cc07Bjnw.js";import{O as i}from"./object-table-bO_L6pgX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BZQmHc-4.js";import"./Table-D8Z1d91J.js";import"./index-DZvQ_Jrq.js";import"./Dialog-Ch4noVue.js";import"./cross-DA_hofl4.js";import"./svgIconContainer-CbLY47mb.js";import"./useBaseUiId-BR18Ojap.js";import"./InternalBackdrop-CkBJ-Htn.js";import"./composite-COFnfRRQ.js";import"./index-DApNf0Yd.js";import"./index-CfAZ234r.js";import"./index-EeisRTmQ.js";import"./useEventCallback-DU7S4oup.js";import"./SkeletonBar-B0XmnfEv.js";import"./LoadingCell-B03AHMLX.js";import"./ColumnConfigDialog-BNDjiFEz.js";import"./DraggableList-BeET4Qyh.js";import"./search-Qxa58yqX.js";import"./Input-Csl4g1fd.js";import"./useControlled-CVe0Wn-E.js";import"./isEqual-C0Q9kVIS.js";import"./isObject-Cz0XDPCN.js";import"./Button-DZ_IvYpL.js";import"./ActionButton-Dfx4NvI-.js";import"./Checkbox-NQv01Fdb.js";import"./useValueChanged-DN12ZBEx.js";import"./CollapsiblePanel-C5iMKM2r.js";import"./MultiColumnSortDialog-BeEbD0Qx.js";import"./MenuTrigger-B8nvmUF3.js";import"./CompositeItem-BxvAq6Sc.js";import"./ToolbarRootContext-BDV8ojGj.js";import"./getDisabledMountTransitionStyles-D66xx4r3.js";import"./getPseudoElementBounds-tq-1zKzz.js";import"./chevron-down-DB7BwQt8.js";import"./index-DC5x3408.js";import"./error-B-dp0ddC.js";import"./BaseCbacBanner-BDt8_o4X.js";import"./makeExternalStore-BOX2v8-h.js";import"./Tooltip-D4GSJRxv.js";import"./PopoverPopup-CcqtMrxa.js";import"./toNumber-CDE7M8WD.js";import"./useOsdkClient-Ba173g9u.js";import"./tick-C0GbdlQD.js";import"./DropdownField-BMbh_wYZ.js";import"./withOsdkMetrics-CiZgMogi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
