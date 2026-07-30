import{f as p,j as e}from"./iframe-O-bmwq56.js";import{O as i}from"./object-table-HATvRvuR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-6pTVH5-1.js";import"./Table-BzaeSuLP.js";import"./index-C4WTlxbW.js";import"./Dialog-CzNl5D9v.js";import"./cross-CizIoSTz.js";import"./svgIconContainer-Ck6gQcV_.js";import"./useBaseUiId-CZlalpMb.js";import"./InternalBackdrop-D0hVs4S-.js";import"./composite-D_QdLVWO.js";import"./index-CC-chcDG.js";import"./index-BkAaa8ff.js";import"./index-MNStPi2c.js";import"./useEventCallback-DxLgqtGb.js";import"./SkeletonBar-DQPPXuHm.js";import"./LoadingCell-C2n5oLoD.js";import"./ColumnConfigDialog-CZjSikeV.js";import"./DraggableList-B9_L-7e9.js";import"./search-BcZ9FECg.js";import"./Input-By_d8TXu.js";import"./useControlled-CV44Tu2L.js";import"./isEqual-NGXBM-Wx.js";import"./isObject-DyvrnZzL.js";import"./Button-Dk1ohzyh.js";import"./ActionButton-PRi3OqHl.js";import"./Checkbox-D0V80GeS.js";import"./useValueChanged-B_0tW1wq.js";import"./CollapsiblePanel-CO39vAcp.js";import"./MultiColumnSortDialog-Cz1gVPRY.js";import"./MenuTrigger-lzRAnFH9.js";import"./CompositeItem-CMtOHnnd.js";import"./ToolbarRootContext-idxGzI-q.js";import"./getDisabledMountTransitionStyles-DSkNGmBo.js";import"./getPseudoElementBounds-DyX4xqAM.js";import"./chevron-down-C3iVKDWO.js";import"./index-DR49W70f.js";import"./error-B8Kd5ARc.js";import"./BaseCbacBanner-Fj1NUAfB.js";import"./makeExternalStore-CkoSDh27.js";import"./Tooltip-hz6cj3mC.js";import"./PopoverPopup-DrKw__9E.js";import"./toNumber-H__G6wZN.js";import"./useOsdkClient-B0y7KEBr.js";import"./tick-B6A71fOe.js";import"./DropdownField-BHxmjfLF.js";import"./withOsdkMetrics-C9XRYbxI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
