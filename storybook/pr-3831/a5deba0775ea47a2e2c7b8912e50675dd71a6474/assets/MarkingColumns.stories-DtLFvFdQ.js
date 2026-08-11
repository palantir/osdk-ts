import{f as p,j as e}from"./iframe-DYDbEQjg.js";import{O as i}from"./object-table-BCZcuYAt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-SJ9dZZVr.js";import"./Table-jlOvRX6Y.js";import"./index-DIR1geUe.js";import"./Dialog-BlDW67rF.js";import"./cross-D_scKixK.js";import"./svgIconContainer-C1TqWZyS.js";import"./useBaseUiId-BR9O5v-S.js";import"./InternalBackdrop-D_zpUOVQ.js";import"./composite-uzlB0y27.js";import"./index-0N5Un70a.js";import"./index-BG296H4M.js";import"./index-XBluGdqc.js";import"./useEventCallback-ZA-7jmPZ.js";import"./SkeletonBar-DztZ_7hK.js";import"./LoadingCell-C4rYAYsL.js";import"./ColumnConfigDialog--r3n0gLY.js";import"./DraggableList-BmmAomr4.js";import"./search-tc_uXOKh.js";import"./Input-HmPeHjJ0.js";import"./useControlled-CZkLI-xA.js";import"./isEqual-CNt8kgZ5.js";import"./isObject-UV1vgElv.js";import"./Button-CAwJXN2j.js";import"./ActionButton-pWQQMavn.js";import"./Checkbox-VhktoMZM.js";import"./useValueChanged-1kQHKx55.js";import"./CollapsiblePanel-BiF0HPtO.js";import"./MultiColumnSortDialog-W7nPKGnq.js";import"./MenuTrigger-DSWiBjxt.js";import"./CompositeItem-BZwtU7Zd.js";import"./ToolbarRootContext-BmRDBYMy.js";import"./getDisabledMountTransitionStyles-BCvw-dnC.js";import"./getPseudoElementBounds-CLG8begh.js";import"./chevron-down-PWwO_bbr.js";import"./index-1nIkSE_C.js";import"./error-DNHX8GsG.js";import"./BaseCbacBanner-C1t1v-iZ.js";import"./makeExternalStore-CGR7TrJA.js";import"./Tooltip-DZTD2XTO.js";import"./PopoverPopup-D8L2GGi3.js";import"./toNumber-C5Y5isVa.js";import"./useOsdkClient-D9j3w30H.js";import"./tick-CkP52Rdl.js";import"./DropdownField-Q5qj9W2N.js";import"./withOsdkMetrics-Bxa30ZAo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
