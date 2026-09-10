import{f as p,j as e}from"./iframe-62_AXEOv.js";import{O as i}from"./object-table-m1Z0AFxh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CFT5weAC.js";import"./Table-D4WJM57i.js";import"./index-BBxmoCpH.js";import"./Dialog-BpsCe6yZ.js";import"./cross-DUPyqLs7.js";import"./svgIconContainer-B2ejb94d.js";import"./useBaseUiId-DxeaWUqe.js";import"./InternalBackdrop-B_mBuTj-.js";import"./composite-D1RGgOF8.js";import"./index-DqKHmJ5-.js";import"./index-IeLwL8MY.js";import"./index-BSNtLGGk.js";import"./useEventCallback-DoO6cpQA.js";import"./SkeletonBar-DIRl3Uz5.js";import"./LoadingCell-L8-tGZYz.js";import"./ColumnConfigDialog-GUtfDEUT.js";import"./DraggableList-UB4FYgy0.js";import"./search-BDESzP6B.js";import"./Input-B1gv6X7f.js";import"./useControlled-BvDlAnVr.js";import"./Button-CHJGiQMj.js";import"./small-cross-Ddj8Sovb.js";import"./ActionButton-DrWj2qAO.js";import"./Checkbox-BTD7rdCY.js";import"./useValueChanged-Dbwftc6q.js";import"./CollapsiblePanel-ByMOZaM4.js";import"./MultiColumnSortDialog-ZPxhpF5i.js";import"./MenuTrigger-CL1wfT6u.js";import"./CompositeItem-BaakSNrp.js";import"./ToolbarRootContext-Cx34GHdJ.js";import"./getDisabledMountTransitionStyles-D7AIJw0A.js";import"./getPseudoElementBounds-BgmToZV8.js";import"./chevron-down-CLeFx5id.js";import"./index-DoWx18q-.js";import"./error-BRCVBLBe.js";import"./BaseCbacBanner-C38X9_W3.js";import"./makeExternalStore-ChHrabzP.js";import"./Tooltip-C03G-SPW.js";import"./PopoverPopup-chxNfS0K.js";import"./debounce-R6klB3y2.js";import"./useOsdkClient-Dn0oXpKF.js";import"./tick-lJjx81-G.js";import"./DropdownField-BNfXsoFz.js";import"./isEqual-CuzkOSau.js";import"./withOsdkMetrics-DHRPDUGo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
