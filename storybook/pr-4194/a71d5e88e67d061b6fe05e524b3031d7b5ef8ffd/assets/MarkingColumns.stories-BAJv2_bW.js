import{f as p,j as e}from"./iframe-BGwIwWEh.js";import{O as i}from"./object-table-BbALfnP_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DaJMqj_l.js";import"./Table-DV7qKTD_.js";import"./index-IqKqgeW3.js";import"./Dialog-60LtrDUL.js";import"./cross-CCJ4Erjw.js";import"./svgIconContainer-o0yAa7DN.js";import"./useBaseUiId-Bx0PVkvu.js";import"./InternalBackdrop-BceHrAMg.js";import"./composite-B2YG03DA.js";import"./index-CbmIHl_7.js";import"./index-Bo6Tdt1f.js";import"./index-DVuyxqwK.js";import"./useEventCallback-Bp5P_gp0.js";import"./SkeletonBar-Cicsnuhb.js";import"./LoadingCell-C7ev7AcJ.js";import"./ColumnConfigDialog-DYQQN3rc.js";import"./DraggableList-DZJjmD7T.js";import"./search-BpQNC6sv.js";import"./Input-D41ZdIt3.js";import"./useControlled-DZytncd1.js";import"./Button-BhV9_fzg.js";import"./small-cross-DWE0gQPB.js";import"./ActionButton-BX1OZitO.js";import"./Checkbox-CS9_YEgp.js";import"./useValueChanged-DzKjeiR-.js";import"./CollapsiblePanel-CuJlxl5T.js";import"./MultiColumnSortDialog-wpz2VgHC.js";import"./MenuTrigger-D1DOTVk2.js";import"./CompositeItem-D-aFyv1W.js";import"./ToolbarRootContext-BU6MqSEl.js";import"./getDisabledMountTransitionStyles-fuWoY_wo.js";import"./getPseudoElementBounds-DNrhWm0z.js";import"./chevron-down-Bm6Tj7Z6.js";import"./index-CTSacj2z.js";import"./error-D5T_pCuL.js";import"./BaseCbacBanner-Z8GzQNLS.js";import"./makeExternalStore-BRaFC0yj.js";import"./Tooltip-D5vtKM_y.js";import"./PopoverPopup-DYOwTnyz.js";import"./debounce-BJo4Ztyn.js";import"./useOsdkClient-B5DU8aU4.js";import"./tick-DNfwJYjk.js";import"./DropdownField-QuxoTji1.js";import"./isEqual-CJsdcYTp.js";import"./withOsdkMetrics-_pxO3ZE7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
