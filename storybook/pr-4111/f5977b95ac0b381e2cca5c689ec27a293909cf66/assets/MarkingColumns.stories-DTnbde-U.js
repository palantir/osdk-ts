import{f as p,j as e}from"./iframe-CSmstThV.js";import{O as i}from"./object-table-Br5TS_Ko.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CQQlEffD.js";import"./Table-D2RInRqE.js";import"./index-L8cshBl8.js";import"./Dialog-DRQMKMRV.js";import"./cross-D9KoCzL1.js";import"./svgIconContainer-BHO01tKx.js";import"./useBaseUiId-BiI5AoOG.js";import"./InternalBackdrop-Dbs4xP0U.js";import"./composite-D-st0uki.js";import"./index-CZXhyyfI.js";import"./index-DfIv01yj.js";import"./index-6VBvVHdU.js";import"./useEventCallback-FJVX4Oe4.js";import"./SkeletonBar-CD6igyAS.js";import"./LoadingCell-CVep6Ll3.js";import"./ColumnConfigDialog-C0CZWTf4.js";import"./DraggableList-BWKTYHTL.js";import"./search-DOAaZcfu.js";import"./Input-1EXkKDbs.js";import"./useControlled-CNZAIfTk.js";import"./Button-DI_WLWpV.js";import"./small-cross-CBcN5a2q.js";import"./ActionButton-CsW1cROw.js";import"./Checkbox-DfGU3i8U.js";import"./useValueChanged-B7kTE-jt.js";import"./CollapsiblePanel-pP6ofbVg.js";import"./MultiColumnSortDialog-DQSc23iF.js";import"./MenuTrigger-B3kyZj42.js";import"./CompositeItem-BaYmn_Wk.js";import"./ToolbarRootContext-D3qIfWMT.js";import"./getDisabledMountTransitionStyles-BRgSEEls.js";import"./getPseudoElementBounds-fscGHaQm.js";import"./chevron-down-Dn4WYVvB.js";import"./index-CQ6HYfiM.js";import"./error-Cu8ttO5d.js";import"./BaseCbacBanner-DmGWRWmI.js";import"./makeExternalStore-DWrbiT-Y.js";import"./Tooltip-B7jbz24u.js";import"./PopoverPopup-X1QJW8UM.js";import"./debounce-aX7sjs20.js";import"./useOsdkClient-XXkLSmqd.js";import"./tick-BFPZziq8.js";import"./DropdownField-CcJaOmXn.js";import"./isEqual-DqEmxDwB.js";import"./withOsdkMetrics-V02XcVkv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
