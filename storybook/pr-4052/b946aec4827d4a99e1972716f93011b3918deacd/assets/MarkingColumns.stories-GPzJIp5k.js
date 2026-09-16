import{f as p,j as e}from"./iframe-DGHdiPVF.js";import{O as i}from"./object-table-B2GoNv8W.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dwawx57G.js";import"./Table-OpGxcVjY.js";import"./index-CfDWuSgz.js";import"./Dialog-D_DzuMTT.js";import"./cross-B2_lH3br.js";import"./svgIconContainer-Cn2xvZW5.js";import"./useBaseUiId-DSFsxKY7.js";import"./InternalBackdrop-Ca1YtWjW.js";import"./composite-D0rWnQN7.js";import"./index-D6q9eE8T.js";import"./index-CvnU9MrA.js";import"./index-CD180WQx.js";import"./useEventCallback-CB_1zqCu.js";import"./SkeletonBar-C3HyLBXM.js";import"./LoadingCell-Dot3nYwb.js";import"./ColumnConfigDialog-CPsL-yv9.js";import"./DraggableList-CC4bozEW.js";import"./search-B7igo8wt.js";import"./Input-CON8UdB3.js";import"./useControlled-BEh8mP6Z.js";import"./Button-BowS6vUa.js";import"./small-cross-DQbMxM7N.js";import"./ActionButton-BMxdUIOw.js";import"./Checkbox-CqUOqq9Q.js";import"./useValueChanged-C5WGo09l.js";import"./CollapsiblePanel-CamAlsBH.js";import"./MultiColumnSortDialog-BQgUBeFy.js";import"./MenuTrigger-BNU8Gdvw.js";import"./CompositeItem-Bbw7hYJK.js";import"./ToolbarRootContext-SNm3mtrK.js";import"./getDisabledMountTransitionStyles-Cg-wyC-n.js";import"./getPseudoElementBounds-C4GLDEW1.js";import"./chevron-down-DP9lMKr_.js";import"./index-DrXgwkrt.js";import"./error-BdbrlX1x.js";import"./BaseCbacBanner-D9RvOaHG.js";import"./makeExternalStore-CWOokT-C.js";import"./Tooltip-D3MjycZw.js";import"./PopoverPopup-C2CAOZi1.js";import"./debounce-BS1ne0cG.js";import"./useOsdkClient-jX8T137v.js";import"./tick-BziusfMA.js";import"./DropdownField-CvEOum2T.js";import"./isEqual-DLlN249z.js";import"./withOsdkMetrics-DkGiRBlo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
