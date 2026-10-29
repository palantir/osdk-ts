import{f as p,j as e}from"./iframe-CVTk1lj6.js";import{O as i}from"./object-table-DeY0TTvR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ch_NUblH.js";import"./Table-DjIqmaqB.js";import"./index-Ca2wp4d3.js";import"./Dialog-D6kqFDaT.js";import"./cross-Dl6Djxwv.js";import"./svgIconContainer-BlxLcGWd.js";import"./useBaseUiId-ChhYdebi.js";import"./InternalBackdrop-Bx1r6uX2.js";import"./composite-CaJc-JUa.js";import"./index-D-pc5yxy.js";import"./index-B2mOMAcR.js";import"./index-DqbUxBef.js";import"./useEventCallback-2fHMqE-X.js";import"./SkeletonBar-9hrTtidV.js";import"./LoadingCell-DbYz7K5S.js";import"./ColumnConfigDialog-DMAdkIvV.js";import"./DraggableList-DxwabyCC.js";import"./search-Cr_k9lr1.js";import"./Input-DUWZnL0B.js";import"./useControlled-7LT5KU92.js";import"./Button-B65aTlIJ.js";import"./small-cross-q8kmKQY9.js";import"./ActionButton-D9pZWND8.js";import"./Checkbox-CJIwABxG.js";import"./useValueChanged-D4uMe9lc.js";import"./CollapsiblePanel-DLLCHJa6.js";import"./MultiColumnSortDialog-CK_2OU68.js";import"./MenuTrigger-C6jc1bQz.js";import"./CompositeItem-CwoHKheb.js";import"./ToolbarRootContext-Bdz2jmkC.js";import"./getDisabledMountTransitionStyles-CrlG27jh.js";import"./getPseudoElementBounds-CexEIoIE.js";import"./chevron-down-DNy2-Jwx.js";import"./index-B9pgwjc0.js";import"./error-DD1GLIG6.js";import"./BaseCbacBanner-CvmD8xvD.js";import"./makeExternalStore-BoZqRL7K.js";import"./Tooltip-B6hZPcYj.js";import"./PopoverPopup-KhpH8XWr.js";import"./debounce-DgMBLlid.js";import"./useOsdkClient-BHkZYH7e.js";import"./tick-tvKtyq-H.js";import"./DropdownField-WGqgGQOQ.js";import"./isEqual-BXFDGQEx.js";import"./withOsdkMetrics-COaPxDqK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
