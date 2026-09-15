import{f as p,j as e}from"./iframe-DA9dclNV.js";import{O as i}from"./object-table-LtoG5sfp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bx64lG7g.js";import"./Table-BCWTUx35.js";import"./index-kn43Hsx3.js";import"./Dialog-A-l1sJaY.js";import"./cross-Db3CMctj.js";import"./svgIconContainer-CdmY4bEV.js";import"./useBaseUiId-_qFsZVnk.js";import"./InternalBackdrop-DvR7fsn8.js";import"./composite-CayJIHWq.js";import"./index-ByvNBIsG.js";import"./index-DkDw_XlI.js";import"./index-CzHCOOLi.js";import"./useEventCallback-DI6z4bpK.js";import"./SkeletonBar-BkicTxkg.js";import"./LoadingCell-CFE_0ygU.js";import"./ColumnConfigDialog-BNsWj8YS.js";import"./DraggableList-DOjDpghY.js";import"./search-CsCC8gU7.js";import"./Input-xbm-V7-x.js";import"./useControlled-DOm30eCY.js";import"./Button-6VSTuqQC.js";import"./small-cross-1vdYgDXh.js";import"./ActionButton-aOr6P1Sc.js";import"./Checkbox-1wmPd_MM.js";import"./useValueChanged-ByrE0fn3.js";import"./CollapsiblePanel-CQ1HbAul.js";import"./MultiColumnSortDialog-Co2LVOgM.js";import"./MenuTrigger-DHh-Y8_X.js";import"./CompositeItem-21cMzz5_.js";import"./ToolbarRootContext-tV_1SIt_.js";import"./getDisabledMountTransitionStyles-BijzmGMm.js";import"./getPseudoElementBounds-CnYd-v8a.js";import"./chevron-down-DC0K_Daw.js";import"./index-Bz8vlsKZ.js";import"./error-DHS0vKCT.js";import"./BaseCbacBanner-DgYcjeca.js";import"./makeExternalStore-BYx66Bfu.js";import"./Tooltip-Kcrn1yWM.js";import"./PopoverPopup-BbeJMqJB.js";import"./debounce-WmNVgQD9.js";import"./useOsdkClient-pjJiOzt2.js";import"./tick-DZkClMaT.js";import"./DropdownField-97vatCOJ.js";import"./isEqual-R0aPEYDK.js";import"./withOsdkMetrics-BeJRVpQP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
