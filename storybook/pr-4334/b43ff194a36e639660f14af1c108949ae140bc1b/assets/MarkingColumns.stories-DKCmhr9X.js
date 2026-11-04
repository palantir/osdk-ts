import{f as p,j as e}from"./iframe-hYuZ0Daw.js";import{O as i}from"./object-table-Bofbk_iR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-57_0CTpI.js";import"./Table-cFRBmRJ2.js";import"./index-C5Pc6OCn.js";import"./Dialog-BYdhvTEy.js";import"./cross-h0YrhL7d.js";import"./svgIconContainer-D3B1FGG8.js";import"./useBaseUiId-C66Z_YyS.js";import"./InternalBackdrop-jDrrqOsA.js";import"./composite-fETYQEVT.js";import"./index-DCXcCpux.js";import"./index-BzM9XWI0.js";import"./index-fk41aGRq.js";import"./useEventCallback-Bd-msYrl.js";import"./SkeletonBar-jiOUAN0d.js";import"./LoadingCell-CFpl7Izp.js";import"./ColumnConfigDialog-CFE8zval.js";import"./DraggableList-Biqz3FxX.js";import"./search-De2ktKMh.js";import"./Input-BtSxbTtJ.js";import"./useControlled-DfUelnOD.js";import"./Button-BT_Xkrjb.js";import"./small-cross-CuLqv6Wz.js";import"./ActionButton-BrTsNB-1.js";import"./Checkbox-CkDIq4mU.js";import"./useValueChanged-tK-0Emor.js";import"./CollapsiblePanel-CttdpkNm.js";import"./MultiColumnSortDialog-CStIP5Wq.js";import"./MenuTrigger-DbTPPL2i.js";import"./CompositeItem-DDypA9GI.js";import"./ToolbarRootContext-BfU0Mx90.js";import"./getDisabledMountTransitionStyles-nL3e7Gnd.js";import"./getPseudoElementBounds-ChxMx6wv.js";import"./chevron-down-BZn2JFfs.js";import"./index-DmRE2MXK.js";import"./error-C958vJ-j.js";import"./BaseCbacBanner-CN8ED5hd.js";import"./makeExternalStore-CDcr6d7h.js";import"./Tooltip-Db1h8c5N.js";import"./PopoverPopup-BN84gK9-.js";import"./debounce-Qi9LJiOf.js";import"./useOsdkClient-D4ryqRY6.js";import"./tick-C4J5qXpt.js";import"./DropdownField-CotoRe-f.js";import"./isEqual-C6sOs1uU.js";import"./withOsdkMetrics-Bun4Nw5t.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
