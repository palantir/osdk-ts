import{f as p,j as e}from"./iframe-NiFGfRsz.js";import{O as i}from"./object-table-Co0kMHVr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DCFXQM4X.js";import"./Table-D9-6YVBO.js";import"./index-Dp7XOyO-.js";import"./Dialog-DajmNvWm.js";import"./cross-CFFQ0sQ5.js";import"./svgIconContainer-B-51rSqm.js";import"./useBaseUiId-BZ0T_Y09.js";import"./InternalBackdrop-DAi-KTzQ.js";import"./composite-DizwB12a.js";import"./index-vXDAK5tU.js";import"./index-BN_cMd1l.js";import"./index-cWSUoc8b.js";import"./useEventCallback-tF3gctSP.js";import"./SkeletonBar-BlLnyVx8.js";import"./LoadingCell-B6hvHZ1V.js";import"./ColumnConfigDialog-BfgxV-wF.js";import"./DraggableList-CPfbGln-.js";import"./search-X81DnpVg.js";import"./Input-gKc9tvRQ.js";import"./useControlled-BmoBTadd.js";import"./Button-D8xL5lB5.js";import"./small-cross-CeI0m1pY.js";import"./ActionButton-CfUr3RjE.js";import"./Checkbox-BOLEvp6U.js";import"./useValueChanged-B2_iof2Z.js";import"./CollapsiblePanel-BYCYtPW9.js";import"./MultiColumnSortDialog-NC5qXB_v.js";import"./MenuTrigger-q94kD1PH.js";import"./CompositeItem-bzaX9daE.js";import"./ToolbarRootContext-CC3NWZjB.js";import"./getDisabledMountTransitionStyles-BUiwQ7FC.js";import"./getPseudoElementBounds-CBkbD7R-.js";import"./chevron-down-h41veWCf.js";import"./index-kWkA5eh9.js";import"./error-CZNtpaf8.js";import"./BaseCbacBanner-BISX0EDQ.js";import"./makeExternalStore-jd4qdjld.js";import"./Tooltip-DHIqFccA.js";import"./PopoverPopup-B4aC61JR.js";import"./toNumber-CVExGNiV.js";import"./useOsdkClient-BQHNmPmn.js";import"./tick-BD0BHmQw.js";import"./DropdownField-Cz9pU8vl.js";import"./withOsdkMetrics-DdyqXqjN.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
