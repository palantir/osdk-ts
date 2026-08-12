import{f as p,j as e}from"./iframe-PSEd73NB.js";import{O as i}from"./object-table-BauwUNcJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-1GV8hhoq.js";import"./Table-C0YuZXer.js";import"./index-NVpWWHhl.js";import"./Dialog-MZDogb2P.js";import"./cross-DUR72zJ7.js";import"./svgIconContainer-Cer1IrhT.js";import"./useBaseUiId-xie1JhLt.js";import"./InternalBackdrop-DG1XJnpw.js";import"./composite-DRmXisBv.js";import"./index-kUkNYXaQ.js";import"./index-wWSeiS7y.js";import"./index-DAn4NbPR.js";import"./useEventCallback-qZfLyktJ.js";import"./SkeletonBar-tG3H8eNG.js";import"./LoadingCell-CbeknuxE.js";import"./ColumnConfigDialog-FEyhs1Vz.js";import"./DraggableList-CfOztAY-.js";import"./search-B8xwdlL_.js";import"./Input-D8coZK1U.js";import"./useControlled-ClhVTb83.js";import"./isEqual-DF7oHHXu.js";import"./isObject-BD6MDXyd.js";import"./Button-BKvLONJz.js";import"./ActionButton-g4qvEX3R.js";import"./Checkbox-elD6WF1n.js";import"./useValueChanged-COybV5eL.js";import"./CollapsiblePanel-Btl2-0tw.js";import"./MultiColumnSortDialog-BCgaRTB0.js";import"./MenuTrigger-BRuhVcfw.js";import"./CompositeItem-BPO1Jify.js";import"./ToolbarRootContext-ny_fraWs.js";import"./getDisabledMountTransitionStyles-CqZEJFeQ.js";import"./getPseudoElementBounds-lNCMxxUh.js";import"./chevron-down-xnJkXJWa.js";import"./index-CTJJ11lg.js";import"./error-BrPsupgI.js";import"./BaseCbacBanner-6AJ0eUDo.js";import"./makeExternalStore-CvL344Sn.js";import"./Tooltip-CXouVh1f.js";import"./PopoverPopup-DTmbJh-5.js";import"./toNumber-vOfoPhGw.js";import"./useOsdkClient-BNYDjVK7.js";import"./tick-Bc_HPwZN.js";import"./DropdownField-Ci8hbPdx.js";import"./withOsdkMetrics-VXn3cz-B.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
