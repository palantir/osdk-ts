import{f as p,j as e}from"./iframe-DLMfgjtf.js";import{O as i}from"./object-table-Dsni6D6F.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-FISTic5h.js";import"./Table-4ZhIsqXW.js";import"./index-C1uNoD_P.js";import"./Dialog-De8W04Wb.js";import"./cross-DEP3bJaL.js";import"./svgIconContainer-D9kLSjbx.js";import"./useBaseUiId-CGPqK7A_.js";import"./InternalBackdrop-C7q6nAny.js";import"./composite-Bh8RLzcK.js";import"./index-DvE967r1.js";import"./index-DhmZxaNJ.js";import"./index-CFnzh0go.js";import"./useEventCallback-OFhWUTIn.js";import"./SkeletonBar-Bp5lMfT1.js";import"./LoadingCell-7N2-ipff.js";import"./ColumnConfigDialog-LmX_I7cA.js";import"./DraggableList-BP48mDgf.js";import"./search-DB3dPpwY.js";import"./Input-CGlQdmV9.js";import"./useControlled-Ez2RzIi9.js";import"./Button-BcB4SrWe.js";import"./small-cross-7o4IoMCW.js";import"./ActionButton-CcYUwrwa.js";import"./Checkbox-4Z9hiu_A.js";import"./useValueChanged-Bv09lgLM.js";import"./CollapsiblePanel-CvB7QNB1.js";import"./MultiColumnSortDialog-D6yrXySv.js";import"./MenuTrigger-CWBl4LeS.js";import"./CompositeItem-BPE6MZwc.js";import"./ToolbarRootContext-CaevGzPm.js";import"./getDisabledMountTransitionStyles-_aaTD8lp.js";import"./getPseudoElementBounds-DkTsw7BA.js";import"./chevron-down-Cl75LzTR.js";import"./index-CCyxZzXK.js";import"./error-CgJf6mJC.js";import"./BaseCbacBanner-C1NzFhgF.js";import"./makeExternalStore-Cjl19IuZ.js";import"./Tooltip-C08-8DFh.js";import"./PopoverPopup-klUplfQO.js";import"./debounce-BYUquqzk.js";import"./useOsdkClient-D7npx1Qd.js";import"./tick-CGKINZ-e.js";import"./DropdownField-B8372XYt.js";import"./isEqual-CYCRDCH8.js";import"./withOsdkMetrics-C4pScUTY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
