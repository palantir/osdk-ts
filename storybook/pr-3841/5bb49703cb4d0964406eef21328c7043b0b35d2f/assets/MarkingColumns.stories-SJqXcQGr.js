import{f as p,j as e}from"./iframe-RU8IGrNT.js";import{O as i}from"./object-table-CWGy5XV-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CC2SHOu0.js";import"./Table-DjvSUn86.js";import"./index-D0VksrnV.js";import"./Dialog-AsoczJSc.js";import"./cross-4-OM6Ghb.js";import"./svgIconContainer-CAf1V-Tr.js";import"./useBaseUiId-B7sFi6pv.js";import"./InternalBackdrop-BmKA3i1c.js";import"./composite-qIXSIzDA.js";import"./index-DDfKVfwf.js";import"./index-WBmL8T14.js";import"./index-BH9gOnci.js";import"./useEventCallback-DsQ6v7L7.js";import"./SkeletonBar-CjsJgAUH.js";import"./LoadingCell-CMdpQSwS.js";import"./ColumnConfigDialog-DgcQuFea.js";import"./DraggableList-7wIyKIwu.js";import"./search-C35W7rra.js";import"./Input-9-d8I3Qs.js";import"./useControlled-D60JD0mh.js";import"./Button-i-hZGgk2.js";import"./small-cross-DDP_QlWn.js";import"./ActionButton-B_UOz8mm.js";import"./Checkbox-C_eCVf5v.js";import"./useValueChanged-Dq_Pzrul.js";import"./CollapsiblePanel-gYEJ-yuU.js";import"./MultiColumnSortDialog-DnwMkIlB.js";import"./MenuTrigger-BwiNo1Qi.js";import"./CompositeItem-CC8f_DCj.js";import"./ToolbarRootContext-sPvQNWqX.js";import"./getDisabledMountTransitionStyles-KBK5f9_s.js";import"./getPseudoElementBounds-CS_FDytm.js";import"./chevron-down-D65XdSbD.js";import"./index-BALz8rwl.js";import"./error-DtrLgX5c.js";import"./BaseCbacBanner-BKrTPTyn.js";import"./makeExternalStore-m1NamX6V.js";import"./Tooltip-6itGbzak.js";import"./PopoverPopup-BUwRG3BX.js";import"./debounce-C6QpBJAl.js";import"./useOsdkClient-DTEwEYtW.js";import"./tick-D1RPONbV.js";import"./DropdownField-47olZyAw.js";import"./isEqual-hW0e3UsZ.js";import"./withOsdkMetrics-D0KBj7Xc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
