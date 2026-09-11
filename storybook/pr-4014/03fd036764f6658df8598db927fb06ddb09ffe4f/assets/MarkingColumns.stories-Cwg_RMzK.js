import{f as p,j as e}from"./iframe-DkbM6O-Q.js";import{O as i}from"./object-table-DHmd2aR4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DC9LUrcb.js";import"./Table-KTs77iKt.js";import"./index-5Xb7iy_v.js";import"./Dialog-DnU-CTU3.js";import"./cross-Bgds_EJl.js";import"./svgIconContainer-aUCWMueJ.js";import"./useBaseUiId-CbWoUVda.js";import"./InternalBackdrop-BGmRqVwl.js";import"./composite-CSTh2sUL.js";import"./index-DjV9sMAb.js";import"./index-CS7XaPdo.js";import"./index-cjbVZ1ML.js";import"./useEventCallback-BJqIL9gZ.js";import"./SkeletonBar-CAFl9YhT.js";import"./LoadingCell-Chb-3Smu.js";import"./ColumnConfigDialog-CVUFHh0t.js";import"./DraggableList-bnAn5Ddq.js";import"./search-eJ_oBGNG.js";import"./Input-BHgKvDQ1.js";import"./useControlled-TBJYjn-n.js";import"./Button-DDqxd8Ee.js";import"./small-cross-Co1nXvMN.js";import"./ActionButton-BAEkA_vW.js";import"./Checkbox-l_dFvsqW.js";import"./useValueChanged-BhBtEc7p.js";import"./CollapsiblePanel-b-Y0NgWl.js";import"./MultiColumnSortDialog-B2szPAwL.js";import"./MenuTrigger-Dm2Kzt8A.js";import"./CompositeItem-CIMhmz-B.js";import"./ToolbarRootContext-B5sg7AjV.js";import"./getDisabledMountTransitionStyles-DAwwnn7h.js";import"./getPseudoElementBounds-qBUrNeQK.js";import"./chevron-down-DwM4wuWt.js";import"./index-Cp7hW4d_.js";import"./error-Dg6O-1zt.js";import"./BaseCbacBanner-D1AaGfyq.js";import"./makeExternalStore-B4N8C8OH.js";import"./Tooltip-BKA5GfZS.js";import"./PopoverPopup-CvoeuWpF.js";import"./debounce-D8PxudOE.js";import"./useOsdkClient-DwOlk4Zy.js";import"./tick-DWiyCXA2.js";import"./DropdownField-BWar8h-x.js";import"./isEqual-BzZXzLza.js";import"./withOsdkMetrics-BmIxPjSX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
