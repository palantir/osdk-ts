import{f as p,j as e}from"./iframe-CMBFeC_L.js";import{O as i}from"./object-table-BUY3brHZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CS36ADie.js";import"./Table-CGDvEYnD.js";import"./index-D4Y_w0hd.js";import"./Dialog-COkRt85q.js";import"./cross-yG9BF8uH.js";import"./svgIconContainer-DJxkQhhX.js";import"./useBaseUiId-WiYHgttz.js";import"./InternalBackdrop-BSspU4KM.js";import"./composite-W5TWwyjD.js";import"./index-CZe2rHSJ.js";import"./index-CEtYmfNL.js";import"./index-CsQ1yXKY.js";import"./useEventCallback-mcaXVd9k.js";import"./SkeletonBar-8R5SFS8K.js";import"./LoadingCell-BsQRNZqG.js";import"./ColumnConfigDialog-CC3smv9j.js";import"./DraggableList-BZN9CPnY.js";import"./search-CdxSaiZT.js";import"./Input-BxRwyONo.js";import"./useControlled-BjH4SKxs.js";import"./Button-fIVGb80W.js";import"./small-cross-DOBW2WIw.js";import"./ActionButton-C4KQbB77.js";import"./Checkbox-XJwBKcJ6.js";import"./useValueChanged-DYwNaaDF.js";import"./CollapsiblePanel-BDxpXloE.js";import"./MultiColumnSortDialog-BY_WXlLR.js";import"./MenuTrigger-C1xsKVzb.js";import"./CompositeItem-DRB9ulRp.js";import"./ToolbarRootContext-CR2_3FrA.js";import"./getDisabledMountTransitionStyles-C061pxT3.js";import"./getPseudoElementBounds-xuSSDKLP.js";import"./chevron-down-B4P3-pPo.js";import"./index-BS3ExYik.js";import"./error-7AoAvQSe.js";import"./BaseCbacBanner-IssKwBT6.js";import"./makeExternalStore-BHl7EDPd.js";import"./Tooltip-Dq-jKqWq.js";import"./PopoverPopup-F1SSAjsx.js";import"./debounce-C8KBFwLC.js";import"./useOsdkClient-CxHjcBum.js";import"./tick-o8QJ8OhB.js";import"./DropdownField-DeC5UXjq.js";import"./isEqual-DoqdJuwX.js";import"./withOsdkMetrics-Bwu4txGZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
