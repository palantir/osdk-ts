import{f as p,j as e}from"./iframe-iH6aGZ-L.js";import{O as i}from"./object-table-a7ZsLNno.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJtpjaOC.js";import"./Table-OPJM8E9j.js";import"./index-B4R4MaYX.js";import"./Dialog-DKmYBsKh.js";import"./cross-CkFkh41g.js";import"./svgIconContainer-BL1fQZ1j.js";import"./useBaseUiId-BSDhHAYa.js";import"./InternalBackdrop-CtbdD6NE.js";import"./composite-DeLDawp0.js";import"./index-DyyqAmyq.js";import"./index-2xFQTGFl.js";import"./index-CLkrj7OE.js";import"./useEventCallback-BK2MNF3p.js";import"./SkeletonBar-DBSXSsw6.js";import"./LoadingCell-DWNG52ui.js";import"./ColumnConfigDialog-DVcO7s43.js";import"./DraggableList-qKzNY3pF.js";import"./search-2at2vqv1.js";import"./Input-D14Qdbql.js";import"./useControlled-Ciw2H6Dm.js";import"./Button-7Khz_S_G.js";import"./small-cross-BwgZyYIG.js";import"./ActionButton-CFvcoen5.js";import"./Checkbox-DPj4VBsw.js";import"./useValueChanged-CAss3vNn.js";import"./CollapsiblePanel-DU6yeCre.js";import"./MultiColumnSortDialog-DisDwWOC.js";import"./MenuTrigger-CZGwNbbc.js";import"./CompositeItem-DWpKdWiQ.js";import"./ToolbarRootContext-BUYtkzjr.js";import"./getDisabledMountTransitionStyles-BgzHU7dJ.js";import"./getPseudoElementBounds-CoVHCcVm.js";import"./chevron-down-Uo9hPIsv.js";import"./index-CoSy4Fag.js";import"./error-UygG0IL8.js";import"./BaseCbacBanner-y2xs3-H5.js";import"./makeExternalStore-DoAAt5DI.js";import"./Tooltip-y6ddxL_Q.js";import"./PopoverPopup-BjYwELlB.js";import"./debounce-DZlmqeaB.js";import"./useOsdkClient-B8seCst5.js";import"./tick-B6XK7voc.js";import"./DropdownField-Dx9t1Lmw.js";import"./isEqual-Q3Pmqr9o.js";import"./withOsdkMetrics-B5j3Cgvy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
