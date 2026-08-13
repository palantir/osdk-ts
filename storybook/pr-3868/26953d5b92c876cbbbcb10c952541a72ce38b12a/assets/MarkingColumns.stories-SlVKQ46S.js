import{f as p,j as e}from"./iframe-bNAYk0hy.js";import{O as i}from"./object-table-CSZxQBve.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CQ5U1hQl.js";import"./Table-DVRs9qlP.js";import"./index-eix3MTjz.js";import"./Dialog-DLZpRsoq.js";import"./cross-DSIbsL7t.js";import"./svgIconContainer-DJx5jlT5.js";import"./useBaseUiId-CikYSBzo.js";import"./InternalBackdrop-CAXB0gyq.js";import"./composite-C7-i_V8V.js";import"./index-IAiWYuzu.js";import"./index-BwgJiaXn.js";import"./index-BpDyLH-S.js";import"./useEventCallback-BldKbH1U.js";import"./SkeletonBar-CCifESnd.js";import"./LoadingCell-vMwLQa_p.js";import"./ColumnConfigDialog-DKStTV1K.js";import"./DraggableList-kmfbOYxS.js";import"./search-CvDdJ2-k.js";import"./Input-D9AajCS5.js";import"./useControlled-hDIfys90.js";import"./isEqual-CtDhx2lU.js";import"./isObject-By5jPSwj.js";import"./Button-VKmMP51o.js";import"./ActionButton-BHUPjqLL.js";import"./Checkbox-Dh435iFc.js";import"./useValueChanged-CvnHJGQT.js";import"./CollapsiblePanel-C6CSWqsF.js";import"./MultiColumnSortDialog-Jrkquew0.js";import"./MenuTrigger-DRrPLYuS.js";import"./CompositeItem-Bpfmjo39.js";import"./ToolbarRootContext-D9woatH8.js";import"./getDisabledMountTransitionStyles-CUjNZds2.js";import"./getPseudoElementBounds-DSHcjyVN.js";import"./chevron-down-CxlO7014.js";import"./index-Djn4JDgp.js";import"./error-B2PTJyqI.js";import"./BaseCbacBanner-C8OdJ0hg.js";import"./makeExternalStore-BlpmVTTs.js";import"./Tooltip-D7LvMzap.js";import"./PopoverPopup-DcP9tdE3.js";import"./toNumber-DMOXJ5Go.js";import"./useOsdkClient-gxN5dHTy.js";import"./tick-DRCq7k-D.js";import"./DropdownField-CEqU3eXX.js";import"./withOsdkMetrics-DtPiNcid.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
