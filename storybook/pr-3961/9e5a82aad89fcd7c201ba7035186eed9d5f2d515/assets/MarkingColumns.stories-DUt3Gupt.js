import{f as p,j as e}from"./iframe-BfbeS0O1.js";import{O as i}from"./object-table-DMoZrkMs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BioSAIdn.js";import"./Table-4rJLhQOU.js";import"./index-DQRN7I9U.js";import"./Dialog-C_ulBudk.js";import"./cross-BrOuNhEK.js";import"./svgIconContainer-BWTo31o2.js";import"./useBaseUiId-CbE1yfdx.js";import"./InternalBackdrop-BErPu4sg.js";import"./composite-DdfbaPUy.js";import"./index-CXELN0N0.js";import"./index-Cj2nVCmE.js";import"./index-Dt5mzju3.js";import"./useEventCallback-CG5RiOcA.js";import"./SkeletonBar-DFnnrDMP.js";import"./LoadingCell-DxtP6Jr4.js";import"./ColumnConfigDialog-Omz9kY1N.js";import"./DraggableList-CnCXkZN1.js";import"./search-DrG1G0EY.js";import"./Input-Db7Q4YLm.js";import"./useControlled-C81GKmVH.js";import"./Button-UB2OACG0.js";import"./small-cross-C-vkxJdm.js";import"./ActionButton-I0vxcYpF.js";import"./Checkbox-EkG_t7q5.js";import"./useValueChanged-cA2be_Wp.js";import"./CollapsiblePanel-C_wVD-VC.js";import"./MultiColumnSortDialog-IBffDIpE.js";import"./MenuTrigger-BaL9sdl0.js";import"./CompositeItem-B4opeUeS.js";import"./ToolbarRootContext-DbCqNaiP.js";import"./getDisabledMountTransitionStyles-B6fdwBct.js";import"./getPseudoElementBounds-lVmoOwlf.js";import"./chevron-down-CR0bt--Q.js";import"./index-BgHNYcJW.js";import"./error-unCo8sRO.js";import"./BaseCbacBanner-CbOaezlM.js";import"./makeExternalStore-DN287DfU.js";import"./Tooltip-C2QbMAIO.js";import"./PopoverPopup-CGYU6k7m.js";import"./debounce-Dv7ZBlf-.js";import"./useOsdkClient-B8cCXMXJ.js";import"./tick-bWfj6Xg6.js";import"./DropdownField-BGKSMB7L.js";import"./isEqual-Cv25-UiM.js";import"./withOsdkMetrics-D7z9HYOb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
