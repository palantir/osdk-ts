import{f as p,j as e}from"./iframe-Bg0i_UAO.js";import{O as i}from"./object-table-CAxIaCCb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-bomzM5Jo.js";import"./Table-CGrH-X0a.js";import"./index-iuNvYGUj.js";import"./Dialog-TKFKzbdM.js";import"./cross-DYXULJqv.js";import"./svgIconContainer-458A5wVg.js";import"./useBaseUiId-Dy2tLJKh.js";import"./InternalBackdrop-CVk0rAPJ.js";import"./composite-DU2hn-v2.js";import"./index-BNlKleF-.js";import"./index-DmhiGDhn.js";import"./index-Ce8RK2-k.js";import"./useEventCallback-DQN4LN3R.js";import"./SkeletonBar-C9Q9W8wl.js";import"./LoadingCell-CEhAQo9k.js";import"./ColumnConfigDialog-CJ9aQ0gr.js";import"./DraggableList-D5_UR4g5.js";import"./search-FIM5R_Xb.js";import"./Input-DGqcQ9G-.js";import"./useControlled-BYTWKxAR.js";import"./Button-BG7UnPBU.js";import"./small-cross-CCjOzjzK.js";import"./ActionButton-DnfLk4MD.js";import"./Checkbox-eD26ecQs.js";import"./useValueChanged-B-bZoMqO.js";import"./CollapsiblePanel-CQh_sS0z.js";import"./MultiColumnSortDialog-CnlpFVmC.js";import"./MenuTrigger-D1u63OZL.js";import"./CompositeItem-DcA0lzjF.js";import"./ToolbarRootContext-BrU5VQqZ.js";import"./getDisabledMountTransitionStyles-DmbZ1RCY.js";import"./getPseudoElementBounds-HKqm4JQP.js";import"./chevron-down-WqwXZksn.js";import"./index-DdfZaivF.js";import"./error-DVM1iMsf.js";import"./BaseCbacBanner-DVJrTKK6.js";import"./makeExternalStore-DXmjaos-.js";import"./Tooltip-De8rcIwq.js";import"./PopoverPopup-BF-Javiq.js";import"./debounce-BL-pXwMa.js";import"./useOsdkClient-r7ETv_l7.js";import"./tick-CXF_8gMW.js";import"./DropdownField-DD3uTne1.js";import"./isEqual-CUS3cLoh.js";import"./withOsdkMetrics-CcEO5U0p.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
