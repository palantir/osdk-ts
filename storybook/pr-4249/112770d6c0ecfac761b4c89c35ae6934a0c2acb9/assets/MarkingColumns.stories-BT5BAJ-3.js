import{f as p,j as e}from"./iframe-DIhyjTQM.js";import{O as i}from"./object-table-Do9vu6qj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BITLElC1.js";import"./Table-aMp3ITaO.js";import"./index-C8ppAklG.js";import"./Dialog-x7P9gPjA.js";import"./cross-BVmbGj7v.js";import"./svgIconContainer-BVwGEvqe.js";import"./useBaseUiId-BRDIOgH7.js";import"./InternalBackdrop-BbR3bGoB.js";import"./composite-BkQZGQ9U.js";import"./index-kla4dWAe.js";import"./index-SCNohOo6.js";import"./useEventCallback-DgKocnhe.js";import"./SkeletonBar-C2TvSpMI.js";import"./LoadingCell-D7P3o9XJ.js";import"./ColumnConfigDialog-Q9snLBuv.js";import"./DraggableList-Dob7Rq-X.js";import"./search-D7TMRqS5.js";import"./Input-BCY1gssj.js";import"./useControlled-vI7L-1v7.js";import"./Button-BU0w-MK8.js";import"./small-cross-DVOzGHDB.js";import"./ActionButton-CSRmV5rV.js";import"./Checkbox-eblkHSax.js";import"./useValueChanged-1EPjCJhD.js";import"./CollapsiblePanel-B7QE2-21.js";import"./MultiColumnSortDialog-DTofYe8C.js";import"./MenuTrigger-CyZDawNi.js";import"./CompositeItem-D7Gjn2M2.js";import"./ToolbarRootContext-DDTggrNs.js";import"./getDisabledMountTransitionStyles-DDkkAoal.js";import"./getPseudoElementBounds-CQrPr7lO.js";import"./chevron-down-fg_D-X7z.js";import"./index-GGFmpVOs.js";import"./error-BcXd4Yso.js";import"./BaseCbacBanner-O8eKc9DG.js";import"./makeExternalStore-DUGVOR6Q.js";import"./Tooltip-Ce_ARAEV.js";import"./PopoverPopup-C4G8tLd2.js";import"./debounce-xNmml4RO.js";import"./useOsdkClient-ChFpCrqs.js";import"./tick-xU5_Eoim.js";import"./DropdownField-CNUfmwbR.js";import"./isEqual-BnA4SERm.js";import"./withOsdkMetrics-DKqvGaZy.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
