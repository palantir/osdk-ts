import{f as p,j as e}from"./iframe-CdeK_m9p.js";import{O as i}from"./object-table-CO21Nd7v.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CPtNC1d5.js";import"./Table-TFAltYAt.js";import"./index-BJipoRsc.js";import"./Dialog-Bed1aeGc.js";import"./cross-C26_YocD.js";import"./svgIconContainer-CQbYofg8.js";import"./useBaseUiId-DRNKw_F3.js";import"./InternalBackdrop-B6VrmpoO.js";import"./composite-D5YfbABk.js";import"./index-M0FyPOAa.js";import"./index-CbDhTWgq.js";import"./index-mKAX0js8.js";import"./useEventCallback-D46NXHZt.js";import"./SkeletonBar-B7fuBsTD.js";import"./LoadingCell-a7W7Xhsj.js";import"./ColumnConfigDialog-BU4frLfT.js";import"./DraggableList-DtYmVY9w.js";import"./search-D6pt1BQi.js";import"./Input-CVZtNSkB.js";import"./useControlled-BI9YxZuO.js";import"./isEqual-CHNHNl0q.js";import"./isObject-BNHLn_VH.js";import"./Button-Dkc54Zqj.js";import"./ActionButton-BUpQyA49.js";import"./Checkbox-D6FPbdkN.js";import"./useValueChanged-ZX48o4Mf.js";import"./CollapsiblePanel-D39ad5qU.js";import"./MultiColumnSortDialog-BH7v_BZ0.js";import"./MenuTrigger-BEaFH0LT.js";import"./CompositeItem-Chf3us8U.js";import"./ToolbarRootContext-C_UW42FB.js";import"./getDisabledMountTransitionStyles-BxtOJ8JV.js";import"./getPseudoElementBounds-Dq8TSov7.js";import"./chevron-down-EJgT6ntn.js";import"./index-BK58JfM-.js";import"./error-BgIRU5ry.js";import"./BaseCbacBanner-BL09Wli0.js";import"./makeExternalStore-DBXV5lJR.js";import"./Tooltip-BIGqLXJM.js";import"./PopoverPopup-eN9YLd5E.js";import"./toNumber-Dbby3DGG.js";import"./useOsdkClient-hn7wSZLX.js";import"./tick-CNvbn8hI.js";import"./DropdownField-DNoehd0P.js";import"./withOsdkMetrics-KRCUE5r3.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
