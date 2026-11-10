import{f as p,j as e}from"./iframe-B4QLcSZV.js";import{O as i}from"./object-table-TmS98yQc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bo3Ha5vh.js";import"./Table-CUL-p863.js";import"./index-CU2p5LDV.js";import"./Dialog-DWf3MPjd.js";import"./cross-DnvIeiSW.js";import"./svgIconContainer-Dh-Zaef4.js";import"./useBaseUiId-BSZdLkOo.js";import"./InternalBackdrop-uUiSI24W.js";import"./composite-CgB6Of8a.js";import"./index-B8xzy7Yy.js";import"./index-CX5vZraN.js";import"./index-gAGpFD5r.js";import"./useEventCallback-DPBUZYhA.js";import"./SkeletonBar-BC4f_AtB.js";import"./LoadingCell-CExaaW-4.js";import"./ColumnConfigDialog-BYqwTb39.js";import"./DraggableList-aVeantjG.js";import"./search-eHSn6FPQ.js";import"./Input-CSlKlom8.js";import"./useControlled-BC3YGi64.js";import"./Button-Buk5h-ut.js";import"./small-cross-DCQk5yBJ.js";import"./ActionButton-d6fkUWG8.js";import"./Checkbox-b_blCxhg.js";import"./useValueChanged-VkzDJT1T.js";import"./CollapsiblePanel-BG51YQ8C.js";import"./MultiColumnSortDialog-ABdCwbqA.js";import"./MenuTrigger-DMDEMWwK.js";import"./CompositeItem-CpoTinek.js";import"./ToolbarRootContext-CQfevRIV.js";import"./getDisabledMountTransitionStyles-DmmMgL1o.js";import"./getPseudoElementBounds-B-_TxDI7.js";import"./chevron-down-DwcY0-Tx.js";import"./index-In1SvQxE.js";import"./error-DsKpT3Ih.js";import"./BaseCbacBanner-RbdcKH8U.js";import"./makeExternalStore-Dm5zWOFv.js";import"./Tooltip-yCjMXIIG.js";import"./isObject-DJnDAPtu.js";import"./debounce-B9U4OBQQ.js";import"./useOsdkClient-B-uzLvHR.js";import"./tick-f-G-5w7P.js";import"./DropdownField-DIllcogd.js";import"./isEqual-DL7tfxNk.js";import"./_baseIsEqual-y-2kiQl4.js";import"./withOsdkMetrics-BGZuYz8s.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
