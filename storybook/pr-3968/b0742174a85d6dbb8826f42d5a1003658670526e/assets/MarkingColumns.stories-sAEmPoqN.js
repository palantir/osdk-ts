import{f as p,j as e}from"./iframe-CTewSG_j.js";import{O as i}from"./object-table-Bk-ld9Ev.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C25ouRIs.js";import"./Table-kZrN-YU-.js";import"./index-BUWAeCIL.js";import"./Dialog-Dx2dqM-X.js";import"./cross-Dyevi5zm.js";import"./svgIconContainer-3JRMjvgA.js";import"./useBaseUiId-0-lRFcas.js";import"./InternalBackdrop-BViQPF1v.js";import"./composite-DC6Og9Tc.js";import"./index-BY0WDCEk.js";import"./index-Cz8uhmbU.js";import"./index-Bzdvr9St.js";import"./useEventCallback-Cv2Bx2Cg.js";import"./SkeletonBar-CMv4XQzP.js";import"./LoadingCell-CvogEU6t.js";import"./ColumnConfigDialog-CVkdhNeK.js";import"./DraggableList-D7xKaDwV.js";import"./search-CKuhorfg.js";import"./Input-Dy8oaUwS.js";import"./useControlled-C5WpgBSN.js";import"./Button-X3VWCY6_.js";import"./small-cross-Pk1qW6Px.js";import"./ActionButton-CpWXz7eG.js";import"./Checkbox-CY-cO03f.js";import"./useValueChanged-BSeCBV9n.js";import"./CollapsiblePanel-8yX91TFu.js";import"./MultiColumnSortDialog-BoTfusds.js";import"./MenuTrigger-DEv0baap.js";import"./CompositeItem-DkrjMxub.js";import"./ToolbarRootContext-CQyb8mSw.js";import"./getDisabledMountTransitionStyles-6DUqLUoF.js";import"./getPseudoElementBounds-CQV9Z7M2.js";import"./chevron-down-sFLW1j78.js";import"./index-DTMs9aOM.js";import"./error-BYYqLL3q.js";import"./BaseCbacBanner-CsSKeUFV.js";import"./makeExternalStore-C3Kcqa4P.js";import"./Tooltip-DSHwSf4n.js";import"./PopoverPopup-BLDgKRkB.js";import"./debounce-BgRFB7Ru.js";import"./useOsdkClient-BDqAgVp9.js";import"./tick-BfD28YZl.js";import"./DropdownField-BeW8_px6.js";import"./isEqual-DB4cWGR5.js";import"./withOsdkMetrics-DdgMiKO_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
