import{f as p,j as e}from"./iframe-pN3HhfHp.js";import{O as i}from"./object-table-BVMjORfS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-vaGveZOW.js";import"./Table-ukr5Vk0m.js";import"./index-DbLToRXl.js";import"./Dialog-BBKnzPwE.js";import"./cross--IVjn_-r.js";import"./svgIconContainer-BGAfUvl9.js";import"./useBaseUiId-Dk4L8uHt.js";import"./InternalBackdrop-Cq2Dn4lD.js";import"./composite-BAN-Mgn7.js";import"./index-Dk2VIyAU.js";import"./index-eDB9grVg.js";import"./index-DVAvO8QP.js";import"./useEventCallback-DRFMIxRN.js";import"./SkeletonBar-SVBlmV5n.js";import"./LoadingCell-8_2H7otS.js";import"./ColumnConfigDialog-B9vYKhII.js";import"./DraggableList-CjF70sG8.js";import"./search-DOtDYiw4.js";import"./Input-Dc026DBB.js";import"./useControlled-DsCbQ_G9.js";import"./Button-DxLN_Dfx.js";import"./small-cross-Dd991YFK.js";import"./ActionButton-QyR_0N_a.js";import"./Checkbox-BKYLSd86.js";import"./useValueChanged-CM5JXx-C.js";import"./CollapsiblePanel-C9anB2wf.js";import"./MultiColumnSortDialog-AIr20JE9.js";import"./MenuTrigger-DnA75f90.js";import"./CompositeItem-aJ_0QEux.js";import"./ToolbarRootContext-TcRvxzQ1.js";import"./getDisabledMountTransitionStyles-DJwc8JYd.js";import"./getPseudoElementBounds-DMqt3LfC.js";import"./chevron-down-CNN1sYpV.js";import"./index-ngzZObxc.js";import"./error-BB5T5PdG.js";import"./BaseCbacBanner-BHq6MjLo.js";import"./makeExternalStore-CIgwPDSw.js";import"./Tooltip-BIxc20c1.js";import"./PopoverPopup-egxkXViS.js";import"./debounce-CTYJHprQ.js";import"./useOsdkClient-Cwh2dI_Z.js";import"./tick-CZ1on5TM.js";import"./DropdownField-Msn_oTDJ.js";import"./isEqual-tW0a4BpI.js";import"./withOsdkMetrics-W_WGwbDq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
