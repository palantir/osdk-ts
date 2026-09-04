import{f as p,j as e}from"./iframe-DZC97llC.js";import{O as i}from"./object-table-BvoRX1zu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BKx802u_.js";import"./Table-4KaxNDjT.js";import"./index-B22k2ynk.js";import"./Dialog-CGcdHCLE.js";import"./cross-C2TZ8jDw.js";import"./svgIconContainer-CHUDLQoK.js";import"./useBaseUiId-C8ARUDoV.js";import"./InternalBackdrop-LhRnITuT.js";import"./composite-4CN6pmFS.js";import"./index-BMmTsFSZ.js";import"./index-CvyqG3Nj.js";import"./index-CibQtp_x.js";import"./useEventCallback-Ag7fNwiL.js";import"./SkeletonBar-JfMe0flw.js";import"./LoadingCell-obA1Lgn0.js";import"./ColumnConfigDialog-C0TComqG.js";import"./DraggableList-BupIVpou.js";import"./search-D_uWqWVr.js";import"./Input-CJlK5efb.js";import"./useControlled-CM4OrEQX.js";import"./Button-BKAvQm5U.js";import"./small-cross-FQOqopzh.js";import"./ActionButton-CBA28Gab.js";import"./Checkbox-Cqb3AtxC.js";import"./useValueChanged-BoneQYDH.js";import"./CollapsiblePanel-DNCdIVRX.js";import"./MultiColumnSortDialog--dJViONo.js";import"./MenuTrigger-vVpla90o.js";import"./CompositeItem-7MvBWb4V.js";import"./ToolbarRootContext-D7J-RjRt.js";import"./getDisabledMountTransitionStyles-C1vTwI5a.js";import"./getPseudoElementBounds-D-Dakysl.js";import"./chevron-down-CiXO6Fic.js";import"./index-kEMBdBjV.js";import"./error-CWLyhGEl.js";import"./BaseCbacBanner-D0kGWzY9.js";import"./makeExternalStore-B1reYnYy.js";import"./Tooltip-C_x2xNl8.js";import"./PopoverPopup-DEmuvAFX.js";import"./debounce-iD7mg0vi.js";import"./useOsdkClient-_TEeh3W2.js";import"./tick-DTIKTJ7D.js";import"./DropdownField-C2RCfl6F.js";import"./isEqual-BjCYvD21.js";import"./withOsdkMetrics-CTgXxJzO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
