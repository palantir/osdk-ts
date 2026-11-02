import{f as p,j as e}from"./iframe-CHKcZgb7.js";import{O as i}from"./object-table-CyRHoSq9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ebqo0JEM.js";import"./Table-DpgWkMa-.js";import"./index-BACJcPnF.js";import"./Dialog-CScZ8Bvj.js";import"./cross-Dk2dXrK7.js";import"./svgIconContainer-DY2QJrYz.js";import"./useBaseUiId-Cxc3vcrN.js";import"./InternalBackdrop-CusfxTNT.js";import"./composite-B6ohSiOB.js";import"./index-B0dGrXCM.js";import"./index-DHY3CWWm.js";import"./index-B7FvQMnW.js";import"./useEventCallback-5QUQz0lM.js";import"./SkeletonBar-BfLhsQBW.js";import"./LoadingCell-BztFPbfy.js";import"./ColumnConfigDialog-BKudSkg0.js";import"./DraggableList-C9WXx5Ua.js";import"./search-B4aplnsV.js";import"./Input-ByMels_v.js";import"./useControlled-aYGdNSsu.js";import"./Button-CiSWKai0.js";import"./small-cross-CG4ID_KO.js";import"./ActionButton-DTs1yjbe.js";import"./Checkbox-DowlVZ3I.js";import"./useValueChanged-CeGdvOdh.js";import"./CollapsiblePanel-CoovcH6q.js";import"./MultiColumnSortDialog-Bs9s_Iyt.js";import"./MenuTrigger-dpgwmopl.js";import"./CompositeItem-Brzkx-fO.js";import"./ToolbarRootContext-C-44hQT7.js";import"./getDisabledMountTransitionStyles-Dg77_XEZ.js";import"./getPseudoElementBounds-CDFDrqWX.js";import"./chevron-down-rruGkt0O.js";import"./index-BMxA9FcH.js";import"./error-3jD31VOr.js";import"./BaseCbacBanner-CrOdu8cS.js";import"./makeExternalStore-BWTgA4er.js";import"./Tooltip-D7qyJWee.js";import"./PopoverPopup-DZPcNR2_.js";import"./debounce-BI5dqIT5.js";import"./useOsdkClient-DiOlSmjl.js";import"./tick-Cbk0zspt.js";import"./DropdownField-JI6iE4-V.js";import"./isEqual-DmU6FREb.js";import"./withOsdkMetrics-CfcXJ1po.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
