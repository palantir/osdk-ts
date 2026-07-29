import{f as p,j as e}from"./iframe-Dqy8JjJj.js";import{O as i}from"./object-table-CaJfh-Qq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DeX6Y_0J.js";import"./Table-C7UVNOf8.js";import"./index-DbFWgCao.js";import"./Dialog-Bi2fbF72.js";import"./cross-D8pajbsG.js";import"./svgIconContainer-8GT6k8lo.js";import"./useBaseUiId-D7f72QTK.js";import"./InternalBackdrop-BvB3kYwS.js";import"./composite-LAPrz1o4.js";import"./index-Cnbuox7q.js";import"./index-C7xgb18W.js";import"./index-CSfsTwM1.js";import"./useEventCallback-AIyjUBuj.js";import"./SkeletonBar-RYI-lGdg.js";import"./LoadingCell-C99T64TC.js";import"./ColumnConfigDialog-18bqhf4t.js";import"./DraggableList-BltL_xZX.js";import"./search-6kgQ8Qok.js";import"./Input-BQAJ5Oey.js";import"./useControlled-RE_-t8KI.js";import"./isEqual-D9q06Aj3.js";import"./isObject-BlPjBZkO.js";import"./Button-BWXSx_LI.js";import"./ActionButton-CC4A3QRH.js";import"./Checkbox-BDTHiVo3.js";import"./useValueChanged-CjfW8p-V.js";import"./CollapsiblePanel-yy0-Nar2.js";import"./MultiColumnSortDialog-wo9g47cC.js";import"./MenuTrigger-D5tYArqn.js";import"./CompositeItem-B4poao_w.js";import"./ToolbarRootContext-DGtiuhh2.js";import"./getDisabledMountTransitionStyles-DcnA9LCH.js";import"./getPseudoElementBounds-DfafWptz.js";import"./chevron-down-DqBsM86l.js";import"./index-Cy83EJpp.js";import"./error-BuVC1iPd.js";import"./BaseCbacBanner-CpmxgztS.js";import"./makeExternalStore-De8hh01J.js";import"./Tooltip-CkPbslSr.js";import"./PopoverPopup-SQtzm6EV.js";import"./toNumber-BF5JM__Y.js";import"./useOsdkClient-AZY6kY-P.js";import"./tick-5octXHfY.js";import"./DropdownField-CO4zaPU2.js";import"./withOsdkMetrics-Dc6gOjLQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
