import{f as p,j as e}from"./iframe-DwYLkjIm.js";import{O as i}from"./object-table-BRMo9PT7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ATh-df95.js";import"./Table-y0ybaHJA.js";import"./index-BjvNbQ5u.js";import"./Dialog-DKHilDA3.js";import"./cross-8A5W1-mq.js";import"./svgIconContainer-BO0D2b3B.js";import"./useBaseUiId-BLNd3-C8.js";import"./InternalBackdrop-CBy2FAi9.js";import"./composite-DkREeV9G.js";import"./index-DaP8hSau.js";import"./index-Cp5k1JkI.js";import"./index-p-dFHzM9.js";import"./useEventCallback-4trSpKTf.js";import"./SkeletonBar-aHlWFS-g.js";import"./LoadingCell-Dag5XFeY.js";import"./ColumnConfigDialog-DGLQZzbo.js";import"./DraggableList-B2wOd5-0.js";import"./search-DbuZ2eC4.js";import"./Input-COaOuFmv.js";import"./useControlled-B5ZJB9TM.js";import"./Button-De4eCp5V.js";import"./small-cross-BiHBSsw2.js";import"./ActionButton-Caxnbj33.js";import"./Checkbox-CYd1lgcd.js";import"./useValueChanged-ylpPqAwL.js";import"./CollapsiblePanel-D-S6GrQY.js";import"./MultiColumnSortDialog-CsPkz6N4.js";import"./MenuTrigger-BQNp3kuJ.js";import"./CompositeItem-CqCnARzh.js";import"./ToolbarRootContext-y1EgqHY_.js";import"./getDisabledMountTransitionStyles-1qMTk6J5.js";import"./getPseudoElementBounds-CDBWfCMY.js";import"./chevron-down-gw5VoLqI.js";import"./index-C80pQDpv.js";import"./error-CtWk7aa4.js";import"./BaseCbacBanner-DtYOs5vo.js";import"./makeExternalStore-BtQFwu78.js";import"./Tooltip-BhjeiN-x.js";import"./PopoverPopup-C4uWpPvG.js";import"./debounce-DNHX5f7v.js";import"./useOsdkClient-CvE3Z_Kn.js";import"./tick-CLGgnUMt.js";import"./DropdownField-SIQhHfOo.js";import"./isEqual-CfZs5aOK.js";import"./withOsdkMetrics-BwdGT6RG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
