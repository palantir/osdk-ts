import{f as p,j as e}from"./iframe-bK06rSfy.js";import{O as i}from"./object-table-CfNHyCaW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-K-1boSMk.js";import"./Table-DooZ8vNL.js";import"./index-Bk-vtYHe.js";import"./Dialog-DfTgPYnF.js";import"./cross-DGM8nzKR.js";import"./svgIconContainer-C_mLXjp3.js";import"./useBaseUiId-CPLmGW2i.js";import"./InternalBackdrop-C1jV5x8E.js";import"./composite-0P-Pw-2Q.js";import"./index-BduD8wzE.js";import"./index-0oJri5g1.js";import"./index-XSfDDb8C.js";import"./useEventCallback-D4hmh2FX.js";import"./SkeletonBar-B5kg8PuZ.js";import"./LoadingCell-Bm7K6xoF.js";import"./ColumnConfigDialog-3T0mv6B3.js";import"./DraggableList-CM1Q0u6r.js";import"./search-C40Ggweq.js";import"./Input-6uol7Ijj.js";import"./useControlled-CZQizdlE.js";import"./Button-C5Cur8G2.js";import"./small-cross-UJeA-7-z.js";import"./ActionButton-DoZ9G5gm.js";import"./Checkbox-kYTxpgtk.js";import"./useValueChanged-B0rG8P_6.js";import"./CollapsiblePanel-hjau0PKS.js";import"./MultiColumnSortDialog-DTPUQzx2.js";import"./MenuTrigger-BfTDRkjm.js";import"./CompositeItem-ty0K8CzQ.js";import"./ToolbarRootContext-DZ3HHK_z.js";import"./getDisabledMountTransitionStyles-dqQKCBgX.js";import"./getPseudoElementBounds-DWTwPUeQ.js";import"./chevron-down-DULzUbtR.js";import"./index-DjjhcTLl.js";import"./error-Cj1EJ7Ed.js";import"./BaseCbacBanner-D4F9ZWBY.js";import"./makeExternalStore-By3lhuiJ.js";import"./Tooltip-CsKnunI-.js";import"./PopoverPopup-CS_hwUVd.js";import"./debounce-CysAWd9o.js";import"./useOsdkClient-BulRHlgi.js";import"./tick-sjLAC5bb.js";import"./DropdownField-DLu2iZiv.js";import"./isEqual-CsFjEq6w.js";import"./withOsdkMetrics-CEyQ3Kvz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
