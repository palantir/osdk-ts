import{f as p,j as e}from"./iframe-hU9JLApV.js";import{O as i}from"./object-table-B50JdQkR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-AOIAtsF4.js";import"./Table-4tKIzzPo.js";import"./index-hWpPzCns.js";import"./Dialog-U7hbNLwM.js";import"./cross-B2QeVIfm.js";import"./svgIconContainer-C2qhBo7T.js";import"./useBaseUiId-D4EPdJVo.js";import"./InternalBackdrop-DvZB-fzK.js";import"./composite-CG9ZuuKA.js";import"./index-B1eIq1Hb.js";import"./index-DQGyJzH9.js";import"./index-DbLRwfYB.js";import"./useEventCallback-XLlsNp-i.js";import"./SkeletonBar-WjiSPHnz.js";import"./LoadingCell-tB5pg5rq.js";import"./ColumnConfigDialog-Bqk-ioAY.js";import"./DraggableList-DbBUvzj3.js";import"./search-B_1m1rLM.js";import"./Input-BRXbodNm.js";import"./useControlled-Ee3F40Eh.js";import"./Button-DajEVgZJ.js";import"./small-cross-D-LS-vPt.js";import"./ActionButton-0n8OLKNq.js";import"./Checkbox-BnIM9uz-.js";import"./useValueChanged-ChtPqi2-.js";import"./CollapsiblePanel-Bs_-I03G.js";import"./MultiColumnSortDialog-DWhI25AZ.js";import"./MenuTrigger-DXB12-gq.js";import"./CompositeItem-D6B-PBPX.js";import"./ToolbarRootContext-CBnaAJo0.js";import"./getDisabledMountTransitionStyles-WyR546rw.js";import"./getPseudoElementBounds-DToXqBfP.js";import"./chevron-down--KZfqGJl.js";import"./index-DcEtsm11.js";import"./error-C7_JEIae.js";import"./BaseCbacBanner-DzeFUZ4e.js";import"./makeExternalStore-DI5XEFVo.js";import"./Tooltip-CunLwW9k.js";import"./PopoverPopup-DNRoc5pz.js";import"./debounce-DmZrR2IV.js";import"./useOsdkClient-BPIKz5PZ.js";import"./tick-BovZGh7I.js";import"./DropdownField-DSjeR55H.js";import"./isEqual-DXIwE2uQ.js";import"./withOsdkMetrics-D81YUmhb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
