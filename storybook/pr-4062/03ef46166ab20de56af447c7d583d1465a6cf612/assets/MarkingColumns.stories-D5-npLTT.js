import{f as p,j as e}from"./iframe-DTTjhdqf.js";import{O as i}from"./object-table-uXbSHh1x.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLuwwicB.js";import"./Table-C6La8mwf.js";import"./index-C_u0ZD76.js";import"./Dialog-BH3cxv0J.js";import"./cross-Biqxkz0W.js";import"./svgIconContainer-BQTxrAHk.js";import"./useBaseUiId-DAXCLwKK.js";import"./InternalBackdrop-DfoV1fwg.js";import"./composite-DmV5qlv-.js";import"./index-BF1qraTR.js";import"./index-BZqSoOPp.js";import"./index-V7CuNiQt.js";import"./useEventCallback-D0JHLFLo.js";import"./SkeletonBar-CkQh5tX-.js";import"./LoadingCell-DRnc6ZbW.js";import"./ColumnConfigDialog-CrVc4g8l.js";import"./DraggableList-BqAME9U3.js";import"./search-DqqzOunc.js";import"./Input-DIq0Mf7R.js";import"./useControlled-DnFxapfF.js";import"./Button-CVsxv-I0.js";import"./small-cross-q1eH4ZRy.js";import"./ActionButton-Be-L3Hsv.js";import"./Checkbox-DmPGieXK.js";import"./useValueChanged-hEMYJH-e.js";import"./CollapsiblePanel-BLwcFyFu.js";import"./MultiColumnSortDialog-BH_7yvK9.js";import"./MenuTrigger-B2GTQxPn.js";import"./CompositeItem-NevsqKCs.js";import"./ToolbarRootContext-Dcs6ty2M.js";import"./getDisabledMountTransitionStyles-2dTRJBXv.js";import"./getPseudoElementBounds-Ddv_miud.js";import"./chevron-down-DMQn8YNS.js";import"./index-cabLRwho.js";import"./error-9LOJa28H.js";import"./BaseCbacBanner-BYlW8R_8.js";import"./makeExternalStore-FJoYAOnh.js";import"./Tooltip-CYAeZ-OK.js";import"./PopoverPopup-B67nRi_h.js";import"./debounce-DybENE3y.js";import"./useOsdkClient-gEWansJz.js";import"./tick-CjabrPw4.js";import"./DropdownField-7-WH0W2E.js";import"./isEqual-DZ8BxMaa.js";import"./withOsdkMetrics-BVdsAVYy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
