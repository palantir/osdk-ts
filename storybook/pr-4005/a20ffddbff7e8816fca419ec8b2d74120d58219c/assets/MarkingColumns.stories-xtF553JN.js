import{f as p,j as e}from"./iframe-_9fkTt32.js";import{O as i}from"./object-table-Ds0LSr_A.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C1KDN5-b.js";import"./Table-BfH3AYXS.js";import"./index-cWweuLXs.js";import"./Dialog-DDti5sW6.js";import"./cross-CLyRJbq3.js";import"./svgIconContainer-Bj9lR9eQ.js";import"./useBaseUiId-B9cqL2iw.js";import"./InternalBackdrop-ChDAtvSF.js";import"./composite-Cv5hA45I.js";import"./index-Bmp8eXG6.js";import"./index-B3Qi-0mZ.js";import"./index-CVU17NaB.js";import"./useEventCallback-DviACpK2.js";import"./SkeletonBar-NFYkElve.js";import"./LoadingCell-C3KVxeej.js";import"./ColumnConfigDialog-BLvSWbg7.js";import"./DraggableList-my9KWtYo.js";import"./search-2EBlNsrp.js";import"./Input-BJm5qzbn.js";import"./useControlled-MrPxBQF8.js";import"./Button-BQ2hDtz9.js";import"./small-cross-BsjnHbCi.js";import"./ActionButton-UeHjpWA6.js";import"./Checkbox-CQp1icRm.js";import"./useValueChanged-DtU61oMW.js";import"./CollapsiblePanel-CX7PBUWu.js";import"./MultiColumnSortDialog-Db5boUS7.js";import"./MenuTrigger-BtF80pzz.js";import"./CompositeItem-_4ruefbl.js";import"./ToolbarRootContext-BGC6f2SR.js";import"./getDisabledMountTransitionStyles-DZsAnPct.js";import"./getPseudoElementBounds-Bjiyc-Ax.js";import"./chevron-down-YT2yainA.js";import"./index-DOjV8DU-.js";import"./error-BJKVIKgH.js";import"./BaseCbacBanner-EYfAEeto.js";import"./makeExternalStore-vS9m26hr.js";import"./Tooltip-BO96ovIJ.js";import"./PopoverPopup-DDdOTGgE.js";import"./debounce-BM4LBZIr.js";import"./useOsdkClient-_fcxm1-q.js";import"./tick-B_jFaN4q.js";import"./DropdownField-D3_R9BRa.js";import"./isEqual-Db12H7kj.js";import"./withOsdkMetrics-lqXp9PIO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
