import{f as p,j as e}from"./iframe-Cvg6LRXh.js";import{O as i}from"./object-table-QaVf7Vr8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DeZ1ulM4.js";import"./index-DARPzGxW.js";import"./Dialog-BkmuK2qp.js";import"./cross-CJGOyWpT.js";import"./svgIconContainer-CgKmJVnh.js";import"./useBaseUiId-C7RD8Ihy.js";import"./InternalBackdrop-C_Ls7dy0.js";import"./composite-BzX0_1DB.js";import"./index-BqjDhDmH.js";import"./index-RfSINhas.js";import"./index-zmDVEBE2.js";import"./useEventCallback-B8jqv7KJ.js";import"./SkeletonBar-BrN9ETnB.js";import"./LoadingCell-DU06Yn4R.js";import"./ColumnConfigDialog-Cm5B100v.js";import"./DraggableList-CmOcJr4s.js";import"./search-tQ6-x_y1.js";import"./Input-Cu6l6kGv.js";import"./useControlled-7IKMGCQs.js";import"./isEqual-X_CYiM2k.js";import"./isObject-ChKbNDgr.js";import"./Button-BlXLwZvR.js";import"./ActionButton-BBv6c1QU.js";import"./Checkbox-Dwp_klM-.js";import"./useValueChanged-DjyG4RoP.js";import"./CollapsiblePanel-DpumuRTd.js";import"./MultiColumnSortDialog-CRo7K__Y.js";import"./MenuTrigger-C1kNZGRT.js";import"./CompositeItem-qB-4NmJE.js";import"./ToolbarRootContext-D_XKc6C6.js";import"./getDisabledMountTransitionStyles-DhZ40-XK.js";import"./getPseudoElementBounds-CgIpZt68.js";import"./chevron-down-WYp2EVPB.js";import"./index-OAow_yCT.js";import"./error-6NhAXwuF.js";import"./BaseCbacBanner-B6VkORYM.js";import"./makeExternalStore-BJ7Sss0m.js";import"./Tooltip-DICXQczZ.js";import"./PopoverPopup-bK9Ie2hX.js";import"./toNumber-6Gv3xSSY.js";import"./useOsdkClient-G7sDkZ8n.js";import"./tick-Dq3xwjA8.js";import"./DropdownField-DAxexV5w.js";import"./withOsdkMetrics-2AjlXW01.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
