import{f as p,j as e}from"./iframe-DT3Pq7Dk.js";import{O as i}from"./object-table-g1XMDFd-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D2GrK1CJ.js";import"./Table-Bh-9mYaq.js";import"./index-AT_VLJBX.js";import"./Dialog-l-bas76Q.js";import"./cross-CW5vZ7KQ.js";import"./svgIconContainer-TdCO8fzr.js";import"./useBaseUiId-Laeorjq3.js";import"./InternalBackdrop--c_GjfBN.js";import"./composite-BLTBB5ty.js";import"./index-DzCFWbuW.js";import"./index-fPrU9AoD.js";import"./index-CN1cNOfe.js";import"./useEventCallback-BxHIphzr.js";import"./SkeletonBar-fo9N7Mio.js";import"./LoadingCell-i4o0PZ76.js";import"./ColumnConfigDialog-DCZ2hIsl.js";import"./DraggableList-CyEH8jAj.js";import"./search-riKbdAfC.js";import"./Input-Bb6sqNmB.js";import"./useControlled-CytQjpOe.js";import"./Button-DyNME9ua.js";import"./small-cross-DVimoYxF.js";import"./ActionButton-CB14cvAW.js";import"./Checkbox-BYlPaTiv.js";import"./useValueChanged-DaOIj_Om.js";import"./CollapsiblePanel-DKE9kt7B.js";import"./MultiColumnSortDialog-V1bLreRv.js";import"./MenuTrigger-DRejejB5.js";import"./CompositeItem-DwUvkpMk.js";import"./ToolbarRootContext-BXZtSj06.js";import"./getDisabledMountTransitionStyles-sPoOQ_E8.js";import"./getPseudoElementBounds-yDZ97H6Z.js";import"./chevron-down-puCe9vK2.js";import"./index-Cm0FOdoZ.js";import"./error-CJNV9pQn.js";import"./BaseCbacBanner-VqYtHkBJ.js";import"./makeExternalStore-Do_G056M.js";import"./Tooltip-DCOTkgJf.js";import"./PopoverPopup-qAtb92MM.js";import"./debounce-CfPojQAv.js";import"./useOsdkClient-CGIMjlzr.js";import"./tick-Dt4R6xeY.js";import"./DropdownField-C5cLUDqt.js";import"./isEqual-DHwQUV_q.js";import"./withOsdkMetrics-Bxhj5aXe.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
