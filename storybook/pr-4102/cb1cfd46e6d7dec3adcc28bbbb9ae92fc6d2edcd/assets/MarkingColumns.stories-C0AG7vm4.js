import{f as p,j as e}from"./iframe-DwrFhh8X.js";import{O as i}from"./object-table-CJzeSeXo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CtRLQ8d2.js";import"./Table-13zpn8as.js";import"./index-2C7ws8qd.js";import"./Dialog-DS-5XWpx.js";import"./cross-CPVTirRP.js";import"./svgIconContainer-Dfv48f4w.js";import"./useBaseUiId-hjF8-Tkz.js";import"./InternalBackdrop-DmelpGzC.js";import"./composite-CQaDz_1E.js";import"./index-BkjyrkST.js";import"./index-8KaHvHT1.js";import"./index-B506KqcM.js";import"./useEventCallback-CbGT4h-v.js";import"./SkeletonBar-CMgVfScc.js";import"./LoadingCell-8g3xYOyz.js";import"./ColumnConfigDialog-q_yUURCK.js";import"./DraggableList-DI3JA3k6.js";import"./search-B4eh0B39.js";import"./Input-CETxnph3.js";import"./useControlled-BWpptLO1.js";import"./Button-DEic01Xh.js";import"./small-cross-rfi-MHsz.js";import"./ActionButton-DK21FKAO.js";import"./Checkbox-6XyOUM_K.js";import"./useValueChanged-OVYV8k4d.js";import"./CollapsiblePanel-noq47swC.js";import"./MultiColumnSortDialog-CmjG40p4.js";import"./MenuTrigger-CYKsI8ZE.js";import"./CompositeItem-Cjr-y7lk.js";import"./ToolbarRootContext-BgJLWr5w.js";import"./getDisabledMountTransitionStyles-DEaamNv3.js";import"./getPseudoElementBounds-Bjx3ag9L.js";import"./chevron-down-BBihCk-h.js";import"./index-DvIHEHIa.js";import"./error-Cw2yDStD.js";import"./BaseCbacBanner-DaIP8iL7.js";import"./makeExternalStore-BDmfTWiu.js";import"./Tooltip-D0M9LXTB.js";import"./PopoverPopup-AoPTNcjX.js";import"./debounce-Do8EHXfQ.js";import"./useOsdkClient-BGkJfb9L.js";import"./tick-FFgtl-J5.js";import"./DropdownField-69nLBGPA.js";import"./isEqual-f_qiuOaO.js";import"./withOsdkMetrics-BhQ--KKZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
