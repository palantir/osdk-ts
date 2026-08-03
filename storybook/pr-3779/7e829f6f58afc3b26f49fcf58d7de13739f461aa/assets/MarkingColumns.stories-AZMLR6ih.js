import{f as p,j as e}from"./iframe-C4zdqVWj.js";import{O as i}from"./object-table-5y_eVbGC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B7IRCv2i.js";import"./Table-BWPn6ED7.js";import"./index-CDa3Dpks.js";import"./Dialog-MY0z2_xP.js";import"./cross-CcKzwauY.js";import"./svgIconContainer-Dl60orHi.js";import"./useBaseUiId-C3-O81r1.js";import"./InternalBackdrop-DqCdUi6X.js";import"./composite-BOKzBbqE.js";import"./index-C-EVsM9H.js";import"./index-Bm-WBCaz.js";import"./index-CSSkJhd4.js";import"./useEventCallback-DzWmOzmx.js";import"./SkeletonBar-DJaveH5w.js";import"./LoadingCell-zoMfqBjd.js";import"./ColumnConfigDialog-DLxA3N4e.js";import"./DraggableList-DnQXeKHB.js";import"./search-D_jp9buf.js";import"./Input-CS5KY3Rt.js";import"./useControlled-BrGKFAOi.js";import"./isEqual-C0_uJpan.js";import"./isObject-NBpvH-VP.js";import"./Button-DnwMOogo.js";import"./ActionButton-CMS_gGpM.js";import"./Checkbox-DtK7jRa-.js";import"./useValueChanged-C4h3bH8g.js";import"./CollapsiblePanel-DA_mKU-k.js";import"./MultiColumnSortDialog-CLR96K0C.js";import"./MenuTrigger-CKsgtdQN.js";import"./CompositeItem-BBqAN0oe.js";import"./ToolbarRootContext-Cs3bwfMD.js";import"./getDisabledMountTransitionStyles-vcPfD5Po.js";import"./getPseudoElementBounds-BCuazdjb.js";import"./chevron-down-BfWdzJim.js";import"./index-DaQh8MoE.js";import"./error--oEoM1lA.js";import"./BaseCbacBanner-BNR_qvcW.js";import"./makeExternalStore-DB6uj4vP.js";import"./Tooltip-Cg1rzKhs.js";import"./PopoverPopup-BOpSDf1z.js";import"./toNumber-CVAuJ7yr.js";import"./useOsdkClient-DE0gigoB.js";import"./tick-CYjee-q_.js";import"./DropdownField-Bdhoiu2-.js";import"./withOsdkMetrics-1nDs0-t4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
