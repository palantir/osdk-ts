import{f as p,j as e}from"./iframe-CJPoXIdZ.js";import{O as i}from"./object-table-BHkoWQFR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGk6rLQG.js";import"./Table-D-7b-7oi.js";import"./index-CXK_NZ43.js";import"./Dialog-BlWwmQIa.js";import"./cross-Dq-QBGPd.js";import"./svgIconContainer-B3Dfwo1Q.js";import"./useBaseUiId-D6aoT1Vn.js";import"./InternalBackdrop-BEqTQV7z.js";import"./composite-Brnc4VBJ.js";import"./index-Dy201pDm.js";import"./index-PUf2omP-.js";import"./index-BmxZeQc3.js";import"./useEventCallback-BeTsBj0A.js";import"./SkeletonBar-DaBxIru1.js";import"./LoadingCell-BZAzRsui.js";import"./ColumnConfigDialog-CZhYh1U6.js";import"./DraggableList-C7EkDEXn.js";import"./search-N923D2wf.js";import"./Input-CSVKB_cm.js";import"./useControlled-DXtgIEAm.js";import"./Button-CQw5BJQp.js";import"./small-cross-C_XsSYtI.js";import"./ActionButton-BIRmJltO.js";import"./Checkbox-BRCSdLNp.js";import"./useValueChanged-Dg50Qt5M.js";import"./CollapsiblePanel-B5wOJsY7.js";import"./MultiColumnSortDialog-DvA6eEFL.js";import"./MenuTrigger-BrjKygne.js";import"./CompositeItem-U-yEQuGu.js";import"./ToolbarRootContext-BqWwwnkb.js";import"./getDisabledMountTransitionStyles-DWZKj-84.js";import"./getPseudoElementBounds-Cs9DzhU4.js";import"./chevron-down-DWXqDmWL.js";import"./index-DxnFXTkq.js";import"./error-D4yXIjcx.js";import"./BaseCbacBanner-B3ISw_rb.js";import"./makeExternalStore-N7Z3gQ47.js";import"./Tooltip-Qms5IOYu.js";import"./PopoverPopup-B3C33Lia.js";import"./debounce-BMm6nppJ.js";import"./useOsdkClient-D0mJbrjB.js";import"./tick-Hovf-t6n.js";import"./DropdownField-BjRk_o0m.js";import"./isEqual-Moo6eESv.js";import"./withOsdkMetrics-B97C_82M.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
