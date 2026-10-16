import{f as p,j as e}from"./iframe-DW0pXrl1.js";import{O as i}from"./object-table-Dp9lxibM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D1BnlE3x.js";import"./index-DnR9sAsk.js";import"./Dialog-Bs48vNjw.js";import"./cross-f1t5SerR.js";import"./svgIconContainer-ClnaI19G.js";import"./useBaseUiId-C-Q4_wXv.js";import"./InternalBackdrop-BluWwehb.js";import"./composite-xGDnWfXU.js";import"./index-Dqs-eX79.js";import"./index-CXBUMHcq.js";import"./index-CKqF8zbs.js";import"./useEventCallback-DL9-47i7.js";import"./SkeletonBar-BpEqfrSc.js";import"./LoadingCell-Cppq0E1m.js";import"./ColumnConfigDialog-u_l00hF8.js";import"./DraggableList-sUVbYsIz.js";import"./search-3LJjcIJ7.js";import"./Input-Bw5OahtG.js";import"./useControlled-DHwMcBbK.js";import"./Button-LBvMHfI5.js";import"./small-cross-lYSE0QnW.js";import"./ActionButton-CTtqOwIe.js";import"./Checkbox-DXCrM2qY.js";import"./useValueChanged-DrIs_yVV.js";import"./CollapsiblePanel-B1iD119e.js";import"./MultiColumnSortDialog-CsLtwpVu.js";import"./MenuTrigger-CbGb6_wD.js";import"./CompositeItem-DTleMZzr.js";import"./ToolbarRootContext-Bl9OtRZB.js";import"./getDisabledMountTransitionStyles-BtEjnFuL.js";import"./getPseudoElementBounds-Bb3qgbg4.js";import"./chevron-down-DdU7H-NS.js";import"./index-DL2Pb_FC.js";import"./error-Dy3r5qvO.js";import"./BaseCbacBanner-CVDb6F7f.js";import"./makeExternalStore-D-CdOqwo.js";import"./Tooltip-CnMi1Qb4.js";import"./PopoverPopup-DP21wBfL.js";import"./debounce-BxUvnR7-.js";import"./useOsdkClient-d2bN7B2D.js";import"./tick-BYqbPGZh.js";import"./DropdownField-Cdnzgg6h.js";import"./isEqual-Orknfn15.js";import"./withOsdkMetrics-DX22MNhQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
