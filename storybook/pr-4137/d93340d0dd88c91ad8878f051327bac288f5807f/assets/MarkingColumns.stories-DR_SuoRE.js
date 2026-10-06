import{f as p,j as e}from"./iframe-el7bjSAH.js";import{O as i}from"./object-table-CiBVhktO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLIuAVkn.js";import"./Table-D1tnOVr7.js";import"./index-DqdFzNH7.js";import"./Dialog-D3Ep4Clz.js";import"./cross-DKrIoJp0.js";import"./svgIconContainer-DsqZkZNx.js";import"./useBaseUiId-BMJSE7oP.js";import"./InternalBackdrop-BMvERWIA.js";import"./composite-CNO4lqFc.js";import"./index-C95mnJoM.js";import"./index-0oAMicpD.js";import"./index-BVkx0JYL.js";import"./useEventCallback-ENJpX7A2.js";import"./SkeletonBar-Cm8w6Wrq.js";import"./LoadingCell-m0XW9yVV.js";import"./ColumnConfigDialog-DOZjlzUx.js";import"./DraggableList-IhqU2Qp8.js";import"./search-BcW8-7NR.js";import"./Input-CL8_Xm7J.js";import"./useControlled-B75sCM7T.js";import"./Button-CzJbluPV.js";import"./small-cross-DlbYuuLD.js";import"./ActionButton-CHJoFoX3.js";import"./Checkbox-DIklOqmF.js";import"./useValueChanged-DS-0ugoh.js";import"./CollapsiblePanel-BVK3lBnv.js";import"./MultiColumnSortDialog-Cs-ZlCP3.js";import"./MenuTrigger-BcJHHzDt.js";import"./CompositeItem-2Q_-fuaz.js";import"./ToolbarRootContext-B3AP-FE_.js";import"./getDisabledMountTransitionStyles-D3JoAvA2.js";import"./getPseudoElementBounds-Dey8uGuB.js";import"./chevron-down-C0Gm8Kcu.js";import"./index-BxJn0x3b.js";import"./error-D7fY3cPV.js";import"./BaseCbacBanner-DptezKCq.js";import"./makeExternalStore-F3_wqthP.js";import"./Tooltip-LLGUzx8a.js";import"./PopoverPopup-DwVOyFYi.js";import"./debounce-jh4ZJlD3.js";import"./useOsdkClient-d2eky65A.js";import"./tick-0qxmk6XW.js";import"./DropdownField-CmRqBaKg.js";import"./isEqual-DChMwUp_.js";import"./withOsdkMetrics-BlbIxaEE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
