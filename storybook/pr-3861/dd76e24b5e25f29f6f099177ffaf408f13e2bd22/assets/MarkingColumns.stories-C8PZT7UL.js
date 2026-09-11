import{f as p,j as e}from"./iframe-DXDjAXel.js";import{O as i}from"./object-table-BP82I6MO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-IpZxA0ro.js";import"./Table-C6a4keXk.js";import"./index-CpU5tjqP.js";import"./Dialog-Df0gqIAe.js";import"./cross-DEtWv0qy.js";import"./svgIconContainer-jCzC3C8h.js";import"./useBaseUiId-C45Ma1UV.js";import"./InternalBackdrop-CRUN8gyi.js";import"./composite--V8DJrbe.js";import"./index-DeWq_guV.js";import"./index-BxV2gtcY.js";import"./index-BacqsjHg.js";import"./useEventCallback-X2pfGQGy.js";import"./SkeletonBar-HdKrVA_I.js";import"./LoadingCell-CdRFLWJX.js";import"./ColumnConfigDialog-lhgh-FoD.js";import"./DraggableList-DhIqos5Q.js";import"./search-CiGMtB3E.js";import"./Input-Dpc4Iwso.js";import"./useControlled-KXVdK95E.js";import"./Button-B-4Jw48N.js";import"./small-cross-DbxwjyCU.js";import"./ActionButton-DBwaiG9o.js";import"./Checkbox-COH4j_qR.js";import"./useValueChanged-BmkI91ny.js";import"./CollapsiblePanel-BLnECc8-.js";import"./MultiColumnSortDialog-BqJnqOkd.js";import"./MenuTrigger-CWYE3ioj.js";import"./CompositeItem-CDBKBcu9.js";import"./ToolbarRootContext-YFTPY9mo.js";import"./getDisabledMountTransitionStyles-Ccg_pvfR.js";import"./getPseudoElementBounds-BHQeyyd6.js";import"./chevron-down-KI9ROJP6.js";import"./index-BZKWr6fS.js";import"./error-Ba9KLhOx.js";import"./BaseCbacBanner-tj-1o0aL.js";import"./makeExternalStore-Dyu5lTE9.js";import"./Tooltip-_9vbGbii.js";import"./PopoverPopup-Tb6F7J3K.js";import"./debounce-BtAkR6Pi.js";import"./useOsdkClient-_rpTUpw6.js";import"./tick-BygXNrkI.js";import"./DropdownField-DkSwoN9D.js";import"./isEqual-CpA_oqdP.js";import"./withOsdkMetrics-B_T1pq9p.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
