import{f as p,j as e}from"./iframe-acnc8jNP.js";import{O as i}from"./object-table-DCXf91CR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C0AHc0KZ.js";import"./Table-BUScjFao.js";import"./index-B2HcsiAS.js";import"./Dialog-HaPlI8uU.js";import"./cross-Bv8-5PKG.js";import"./svgIconContainer-DjMgejtG.js";import"./useBaseUiId-W2eivYCg.js";import"./InternalBackdrop-DEpxkWNz.js";import"./composite-DX6f7iaw.js";import"./index-BRGNHgC5.js";import"./index-BZeQ4uGI.js";import"./index-DIXvuYY6.js";import"./useEventCallback-D6SuZGFS.js";import"./SkeletonBar-DUBCMOxI.js";import"./LoadingCell-zw8kua-H.js";import"./ColumnConfigDialog-LAbRKII0.js";import"./DraggableList-BgUJx3xd.js";import"./search-D7Py9QCX.js";import"./Input-D_7AcYF3.js";import"./useControlled-CL58-5q6.js";import"./isEqual-C5oNx3i8.js";import"./isObject--zvNkZur.js";import"./Button-xirM2J2C.js";import"./ActionButton-DUgA3cC-.js";import"./Checkbox-CWlt2fz8.js";import"./useValueChanged-mNBps3Y1.js";import"./CollapsiblePanel-D_KXlm7t.js";import"./MultiColumnSortDialog-UIRp81gn.js";import"./MenuTrigger-kvlxu44D.js";import"./CompositeItem-uY-l1SPS.js";import"./ToolbarRootContext-D5eO9Pgy.js";import"./getDisabledMountTransitionStyles-DYJIGaAY.js";import"./getPseudoElementBounds-BJR6wqVc.js";import"./chevron-down-C9q_0P71.js";import"./index-B43oBquw.js";import"./error-Cxeuitdp.js";import"./BaseCbacBanner-BkMUSz5_.js";import"./makeExternalStore-C2yWrJUB.js";import"./Tooltip-BLq25BG6.js";import"./PopoverPopup-Dq0wusve.js";import"./toNumber-Bq_nqWh9.js";import"./useOsdkClient-Ddp12YXU.js";import"./tick-W5cBIuY2.js";import"./DropdownField-Bhkpabkk.js";import"./withOsdkMetrics-D-f8kfgF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
