import{f as p,j as e}from"./iframe-ChQS4fGd.js";import{O as i}from"./object-table-zqudqCYQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-o8EhEng-.js";import"./Table-q5PrbWBb.js";import"./index-DZsfYQUh.js";import"./Dialog-BW8XeS8J.js";import"./cross-BqJybnVy.js";import"./svgIconContainer-UT5S-Qtm.js";import"./useBaseUiId-Dg-otjCc.js";import"./InternalBackdrop-D1vznKvg.js";import"./composite-f13ydLOS.js";import"./index-9CgMei2H.js";import"./index-nt6OvndA.js";import"./index-DjVNIh5u.js";import"./useEventCallback-D8iwCbQb.js";import"./SkeletonBar-CgCL-n5s.js";import"./LoadingCell-CQlpsd7o.js";import"./ColumnConfigDialog-zp9qo-ui.js";import"./DraggableList-EMR8XNJV.js";import"./search-BFdafJgA.js";import"./Input-BFNpbac3.js";import"./useControlled-BniVA-EE.js";import"./isEqual-3YQY8-Ph.js";import"./isObject-J1OTBo5j.js";import"./Button-CYlIk1Nd.js";import"./ActionButton-ZYvQWeAY.js";import"./Checkbox-Bw8bJgiL.js";import"./useValueChanged-B1jygDYc.js";import"./CollapsiblePanel-7L4laSgA.js";import"./MultiColumnSortDialog-D4AFgP0w.js";import"./MenuTrigger-a0Yj9qq1.js";import"./CompositeItem-Bn7WLSGF.js";import"./ToolbarRootContext-BjBgCtBr.js";import"./getDisabledMountTransitionStyles-DSHiyr0R.js";import"./getPseudoElementBounds-Cd9WAzNR.js";import"./chevron-down-DFnbRAwR.js";import"./index-Bn32b-Uw.js";import"./error-eFbYOEWl.js";import"./BaseCbacBanner-D3DhFOw9.js";import"./makeExternalStore-CrnVNZp8.js";import"./Tooltip-DiI5K9Z3.js";import"./PopoverPopup-Dqc30zxS.js";import"./toNumber-CBsqbx8y.js";import"./useOsdkClient-CUanDJGQ.js";import"./tick-BlO92Q8N.js";import"./DropdownField-d2aICtJf.js";import"./withOsdkMetrics-BCsSlf5g.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
