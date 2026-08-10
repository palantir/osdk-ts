import{f as p,j as e}from"./iframe-rflnhUL0.js";import{O as i}from"./object-table-BuC8IlXH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-JrW1tzuD.js";import"./Table-CcDzY1b4.js";import"./index-CKEIJLZz.js";import"./Dialog-CaW29oo5.js";import"./cross-DnlUR3uJ.js";import"./svgIconContainer-CfRMoYYm.js";import"./useBaseUiId-B-D920ll.js";import"./InternalBackdrop-BmgqUUZm.js";import"./composite-DWpGM0Ys.js";import"./index-DskUz2s5.js";import"./index-Cmmo0Jm_.js";import"./index-CYog2F1S.js";import"./useEventCallback-IFua3RYV.js";import"./SkeletonBar-Bx9hAro-.js";import"./LoadingCell-gS42QkYV.js";import"./ColumnConfigDialog-st3e9zUU.js";import"./DraggableList-BB16q4ou.js";import"./search-Dbr7xQD1.js";import"./Input-DxO_QsKj.js";import"./useControlled-pmT8hQxb.js";import"./isEqual-DbN-tv-e.js";import"./isObject-BkxNQewi.js";import"./Button-C3fC6A6m.js";import"./ActionButton-DK7xXRak.js";import"./Checkbox-BROO1bDi.js";import"./useValueChanged-B6Ou-IZI.js";import"./CollapsiblePanel-BUTZsP3m.js";import"./MultiColumnSortDialog-CQP0H1PV.js";import"./MenuTrigger-CnsFIHQ4.js";import"./CompositeItem--VYrNhIm.js";import"./ToolbarRootContext-DEPy0pOQ.js";import"./getDisabledMountTransitionStyles-CZvlUQGU.js";import"./getPseudoElementBounds-C99NhKV6.js";import"./chevron-down-DJU55j1c.js";import"./index-CVhEYDwD.js";import"./error-CQhUr9EW.js";import"./BaseCbacBanner-C3An4QRs.js";import"./makeExternalStore-CT5u938L.js";import"./Tooltip-BsKl9t32.js";import"./PopoverPopup-BByUGNRE.js";import"./toNumber-DmIm5Qmb.js";import"./useOsdkClient-Ufw7pTgL.js";import"./tick-Dsl8J2EY.js";import"./DropdownField-CHHdcXVp.js";import"./withOsdkMetrics-KUKh2Lgy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
