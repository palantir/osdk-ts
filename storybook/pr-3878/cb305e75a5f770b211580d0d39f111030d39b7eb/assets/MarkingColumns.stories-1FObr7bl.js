import{f as p,j as e}from"./iframe-BXJnohbt.js";import{O as i}from"./object-table-D9NNs3hA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-tvnGn4jg.js";import"./Table-B97BNwPW.js";import"./index-DJBlipGi.js";import"./Dialog-DAvTCL__.js";import"./cross-Q-_g4ZFQ.js";import"./svgIconContainer-VhJmqTox.js";import"./useBaseUiId-sZ35m2bM.js";import"./InternalBackdrop-vup632p4.js";import"./composite-DdNHLfsp.js";import"./index-DbER6lkg.js";import"./index-DIxniVKs.js";import"./index-BIEsfLi4.js";import"./useEventCallback-BvLSkLRP.js";import"./SkeletonBar-CDbdkFM2.js";import"./LoadingCell-U45hAs7y.js";import"./ColumnConfigDialog-e9SzTM1d.js";import"./DraggableList-yq3PZM49.js";import"./search-Bwx9I6xK.js";import"./Input-DFgR57Ky.js";import"./useControlled--cyQ52Ku.js";import"./Button-k1fX7wnM.js";import"./small-cross-3Wkanwed.js";import"./ActionButton-91Oje2JU.js";import"./Checkbox-DOv66HYU.js";import"./useValueChanged-CXlUDxOW.js";import"./CollapsiblePanel-C0Dtz8qp.js";import"./MultiColumnSortDialog-BhWeALjl.js";import"./MenuTrigger-Ci0xiN-V.js";import"./CompositeItem-DxHmEQaB.js";import"./ToolbarRootContext-DWK2aFvr.js";import"./getDisabledMountTransitionStyles-DbKz3mGY.js";import"./getPseudoElementBounds-CjzqAflM.js";import"./chevron-down-CyQUuZQm.js";import"./index-DCSxP7tL.js";import"./error-Du-8Vb6N.js";import"./BaseCbacBanner-yQghixcO.js";import"./makeExternalStore-Nh0J-rEN.js";import"./Tooltip-fNhv7nQW.js";import"./PopoverPopup-DzsPnqhc.js";import"./debounce-DTy8dIIZ.js";import"./useOsdkClient-y2bMalZp.js";import"./tick-1_WHGxzZ.js";import"./DropdownField--OTUJ18G.js";import"./isEqual-CsfWQL0f.js";import"./withOsdkMetrics-DBlk2yrx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
