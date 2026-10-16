import{f as p,j as e}from"./iframe-Dz-3bopY.js";import{O as i}from"./object-table-D8yR489M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DyKBZj2x.js";import"./Table-CahUibj9.js";import"./index-DXk5AkRu.js";import"./Dialog-FsvgbUkz.js";import"./cross-BV1ilYHG.js";import"./svgIconContainer-VUnqKTqj.js";import"./useBaseUiId-DdDMVRT4.js";import"./InternalBackdrop-CMlwDkvu.js";import"./composite-CeOULy3_.js";import"./index-Cd6ys6N0.js";import"./index-CESOHnLX.js";import"./index-uA0pARUc.js";import"./useEventCallback-D89So7L3.js";import"./SkeletonBar-3PFmjfxg.js";import"./LoadingCell-BEG0NZPw.js";import"./ColumnConfigDialog-WoGX3hDh.js";import"./DraggableList-9Fc1iUbs.js";import"./search-C0Oo-5ck.js";import"./Input-BShSfu0I.js";import"./useControlled-BicNl6JT.js";import"./Button-CYhmyUyk.js";import"./small-cross-DvfWpNC5.js";import"./ActionButton-BK1pZ0GM.js";import"./Checkbox-CBxFYnqJ.js";import"./useValueChanged-3FeBMYAh.js";import"./CollapsiblePanel-xME6KYQT.js";import"./MultiColumnSortDialog-Bne2UKW9.js";import"./MenuTrigger-rIcJUvoe.js";import"./CompositeItem-DkOqAvvV.js";import"./ToolbarRootContext-Bdn-bZ42.js";import"./getDisabledMountTransitionStyles-DMtKFpJM.js";import"./getPseudoElementBounds-D-oSHvkB.js";import"./chevron-down-CtwdWDe5.js";import"./index-DDGzWdyM.js";import"./error-DDZrlFGO.js";import"./BaseCbacBanner-DD0s4oL-.js";import"./makeExternalStore-BqALFL7i.js";import"./Tooltip-Bx-YTezY.js";import"./PopoverPopup-B8lHwqHR.js";import"./debounce-D45X2sYK.js";import"./useOsdkClient-m_Y5l7qU.js";import"./tick-hX-gVzsC.js";import"./DropdownField-DM80qxvU.js";import"./isEqual-DiU5KFAT.js";import"./withOsdkMetrics-CGeg0cBL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
