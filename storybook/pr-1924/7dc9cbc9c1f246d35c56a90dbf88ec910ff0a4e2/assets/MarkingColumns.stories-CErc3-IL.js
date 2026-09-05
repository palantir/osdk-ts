import{f as p,j as e}from"./iframe-BWsptOx9.js";import{O as i}from"./object-table-DihJbz49.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-hck2-2iY.js";import"./Table-B34l7PQv.js";import"./index-7iRS3JG9.js";import"./Dialog-DeDB1e_1.js";import"./cross-BoUzuZNF.js";import"./svgIconContainer-BOVctZiQ.js";import"./useBaseUiId-ITgInSIU.js";import"./InternalBackdrop-DDaeYjKA.js";import"./composite-BV3Gpi4q.js";import"./index-YOpRnDEd.js";import"./index-DlVXSgR3.js";import"./index-i61hjDRu.js";import"./useEventCallback-DutHdois.js";import"./SkeletonBar-2lSm92jN.js";import"./LoadingCell-D31__DIB.js";import"./ColumnConfigDialog-BvGTc6_G.js";import"./DraggableList-FujtZZxW.js";import"./search-CPZq-I8Z.js";import"./Input-DMLFbQ55.js";import"./useControlled-6nTFaGE5.js";import"./Button-VsXDl_eG.js";import"./small-cross-DNTeAJ8Z.js";import"./ActionButton-B6MwYfE-.js";import"./Checkbox-DWZvPWr3.js";import"./useValueChanged-CpdELUFS.js";import"./CollapsiblePanel-Bpn4fRSH.js";import"./MultiColumnSortDialog-zNWTGmuN.js";import"./MenuTrigger-Bcr0TAMN.js";import"./CompositeItem-BCNmsXPB.js";import"./ToolbarRootContext-DeurAZ5u.js";import"./getDisabledMountTransitionStyles-CA1DSUbY.js";import"./getPseudoElementBounds-BeC7UFLp.js";import"./chevron-down-B0CcOxY_.js";import"./index-BoyJNymp.js";import"./error-D4aggEwD.js";import"./BaseCbacBanner-DNLHXNw_.js";import"./makeExternalStore-De-Jb6J5.js";import"./Tooltip-BuhkBBtD.js";import"./PopoverPopup-CVs19qPy.js";import"./debounce-DyiaKSQ5.js";import"./useOsdkClient-CEV94sBT.js";import"./tick-DbxYiBa-.js";import"./DropdownField-B7NOWBJ6.js";import"./isEqual-btCNlz3t.js";import"./withOsdkMetrics-B8dcDHgp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
