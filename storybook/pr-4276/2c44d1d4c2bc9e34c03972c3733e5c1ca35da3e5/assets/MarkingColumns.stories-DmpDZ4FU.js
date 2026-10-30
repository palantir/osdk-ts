import{f as p,j as e}from"./iframe-D1LXFBxc.js";import{O as i}from"./object-table-Dc6kWb2K.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BMGLbfqy.js";import"./Table-D0crwwGg.js";import"./index-1OI0nGkQ.js";import"./Dialog-5n5dGO1_.js";import"./cross-fpuOrCid.js";import"./svgIconContainer-bswbKgoA.js";import"./useBaseUiId-ps7HY4-v.js";import"./InternalBackdrop-DEpP5i29.js";import"./composite-DuREibPe.js";import"./index-BkZOFAl2.js";import"./index-DHKG1l8R.js";import"./index-CvkHqUxC.js";import"./useEventCallback-BzJZUjXz.js";import"./SkeletonBar-BEUy3yco.js";import"./LoadingCell-BuWFA09M.js";import"./ColumnConfigDialog-DkTHJgbS.js";import"./DraggableList-BFZHGTf-.js";import"./search-DbOA3UnO.js";import"./Input-Dcr7sH0u.js";import"./useControlled-BkSZr9vP.js";import"./Button-DQBtx8tI.js";import"./small-cross-dlZFFK_z.js";import"./ActionButton-Bn6Tlxi1.js";import"./Checkbox-BHZPfKNt.js";import"./useValueChanged-B2y-z1AW.js";import"./CollapsiblePanel-C5zeXEPd.js";import"./MultiColumnSortDialog-BWl5XeOe.js";import"./MenuTrigger-DNQaot3C.js";import"./CompositeItem-TBc75DhR.js";import"./ToolbarRootContext-BWtsBung.js";import"./getDisabledMountTransitionStyles-CUYWOYI-.js";import"./getPseudoElementBounds-D052xtfe.js";import"./chevron-down-BcP7YmhL.js";import"./index-BilF2CpV.js";import"./error-CxJnkhM-.js";import"./BaseCbacBanner-Dw8cKDh4.js";import"./makeExternalStore-BkL46d6x.js";import"./Tooltip-CXZWn5vA.js";import"./isObject-3yusRZvo.js";import"./debounce-CrOoXB7G.js";import"./useOsdkClient-CH0NV-pV.js";import"./tick-Dln8NHKp.js";import"./DropdownField-PSQxNdU1.js";import"./isEqual-DdJdcAmR.js";import"./_baseIsEqual-BvBA96bH.js";import"./withOsdkMetrics-BQyS4Ebn.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
