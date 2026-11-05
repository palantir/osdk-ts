import{f as p,j as e}from"./iframe-CvJ7R438.js";import{O as i}from"./object-table-C-dXUROV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DIeUWadq.js";import"./Table-Bpllq0pJ.js";import"./index-Yp0JQF0Q.js";import"./Dialog-DDvLQ08U.js";import"./cross-Bghy2D6j.js";import"./svgIconContainer-Do6jakIy.js";import"./useBaseUiId-DvuukT3m.js";import"./InternalBackdrop-DIMQ-6Vm.js";import"./composite-DfVEv5DW.js";import"./index-BYKE8oqY.js";import"./index-C9e5xM7h.js";import"./index-DjdEDxKf.js";import"./useEventCallback-Ceqj6vPq.js";import"./SkeletonBar-DTVxz4FG.js";import"./LoadingCell-vsektYoj.js";import"./ColumnConfigDialog-DzJfZIO5.js";import"./DraggableList-B5vRq8Cg.js";import"./search-E1Tz1S2U.js";import"./Input-DgEbo1rm.js";import"./useControlled-CupkKwbr.js";import"./Button-E3u3fwJi.js";import"./small-cross-ZhIYpIQC.js";import"./ActionButton-gsNyAvhi.js";import"./Checkbox-DHzqbM_W.js";import"./useValueChanged-DyrikMQP.js";import"./CollapsiblePanel-Cd75DTG9.js";import"./MultiColumnSortDialog-DbWlhP4_.js";import"./MenuTrigger-DGf-np7_.js";import"./CompositeItem-DpqRoFwU.js";import"./ToolbarRootContext-pG56Avmq.js";import"./getDisabledMountTransitionStyles-CsC3z-SK.js";import"./getPseudoElementBounds-Bt_46i7g.js";import"./chevron-down-B1-Mj5AF.js";import"./index-g6hJSz-5.js";import"./error-E1ZphxDs.js";import"./BaseCbacBanner-BDYCcgoT.js";import"./makeExternalStore-Q33cok2O.js";import"./Tooltip-De3XT7Ee.js";import"./isObject-B4JmPlvj.js";import"./debounce-D0MzLxIy.js";import"./useOsdkClient-QthKgn3A.js";import"./tick-BQ8d0QDt.js";import"./DropdownField-DpIokx-i.js";import"./isEqual-CTycJoYm.js";import"./_baseIsEqual-CzgPLVfB.js";import"./withOsdkMetrics-ByVOuDU9.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
