import{f as p,j as e}from"./iframe-0PZo-oAP.js";import{O as i}from"./object-table-CjBnvh1q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rwVKc8sx.js";import"./Table-CfkgyImK.js";import"./index-DoYgLsnC.js";import"./Dialog-LiWBoivO.js";import"./cross-BuXenLOv.js";import"./svgIconContainer-eNzDG0SR.js";import"./useBaseUiId-BqeEgC4C.js";import"./InternalBackdrop-DFB9Xeuo.js";import"./composite-D1jNYFUF.js";import"./index-hhz9HxKB.js";import"./index-BYQWYbBn.js";import"./index-DCj9CkiU.js";import"./useEventCallback-shw7xQN9.js";import"./SkeletonBar-DuOT8e6M.js";import"./LoadingCell-B1_rqoxB.js";import"./ColumnConfigDialog-B1oCIH7a.js";import"./DraggableList-BrCHtYed.js";import"./search-BUeuR5YZ.js";import"./Input-DoxpwNaD.js";import"./useControlled-CZvu974P.js";import"./isEqual-BJRe0BuQ.js";import"./isObject-C-hFhIDE.js";import"./Button--90QuVpV.js";import"./ActionButton-CIymeU2Y.js";import"./Checkbox-COMXr9e0.js";import"./useValueChanged-Dp8iYgzB.js";import"./CollapsiblePanel-BOdCnJ4y.js";import"./MultiColumnSortDialog-UCZbNwoe.js";import"./MenuTrigger-BNVLGc67.js";import"./CompositeItem-TFaLn5I1.js";import"./ToolbarRootContext-HlHBpyAJ.js";import"./getDisabledMountTransitionStyles-BxVBCN-Q.js";import"./getPseudoElementBounds-BuTp-qUj.js";import"./chevron-down-BNE_hdr-.js";import"./index-DJ9gJd6E.js";import"./error-C-sMJ0No.js";import"./BaseCbacBanner-E3M8YVwu.js";import"./makeExternalStore-AeGc76gb.js";import"./Tooltip-DXVx06F6.js";import"./PopoverPopup-Bjx8Fbg1.js";import"./toNumber-DWQ_8aGg.js";import"./useOsdkClient-DKKsVUul.js";import"./tick-DbEfA57I.js";import"./DropdownField-Bn6MIQJs.js";import"./withOsdkMetrics-HhY0bTfQ.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
