import{f as p,j as e}from"./iframe-OjM1fGhD.js";import{O as i}from"./object-table-Bs7knEq4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D7fi2uvl.js";import"./Table-DYtdHlhP.js";import"./index-CI4sblvN.js";import"./Dialog-COA8Sz2J.js";import"./cross-D69HQ2f-.js";import"./svgIconContainer-oX_Dupxj.js";import"./useBaseUiId-CUWfCekV.js";import"./InternalBackdrop-CvX7eefS.js";import"./composite-B2Qeod66.js";import"./index-DdpkN4AB.js";import"./index-DYYqOieW.js";import"./index-DZJYZ9CR.js";import"./useEventCallback-DPU1VIdY.js";import"./SkeletonBar-WHULGdS8.js";import"./LoadingCell-BnWSqwyd.js";import"./ColumnConfigDialog-piIcfzz1.js";import"./DraggableList-Dzx2s52t.js";import"./search-BhAcVZf9.js";import"./Input-DeCvr9l5.js";import"./useControlled-DrzgK2A0.js";import"./Button-BtiOWDEe.js";import"./small-cross-tNWYly7S.js";import"./ActionButton-Dab2pn_s.js";import"./Checkbox-DgQ6fnDP.js";import"./useValueChanged-BQlQj-qd.js";import"./CollapsiblePanel-CG8OLXdZ.js";import"./MultiColumnSortDialog-BIl-J-Sl.js";import"./MenuTrigger-C3KKugb7.js";import"./CompositeItem-Ddy0SGDP.js";import"./ToolbarRootContext-zAO6OvY5.js";import"./getDisabledMountTransitionStyles-CmzrHyFb.js";import"./getPseudoElementBounds-CRHH2PCz.js";import"./chevron-down-7rWKu4_j.js";import"./index-Cd3zzhVm.js";import"./error-q3Etsg6o.js";import"./BaseCbacBanner-BbaHTMrp.js";import"./makeExternalStore-C6aI4llN.js";import"./Tooltip-nVrA_o7L.js";import"./PopoverPopup-WCSstPUg.js";import"./debounce-3PyN9UKe.js";import"./useOsdkClient-CG8rDO26.js";import"./tick-CLWn7BNG.js";import"./DropdownField-DQutHIXJ.js";import"./isEqual-XsRMCz9p.js";import"./withOsdkMetrics-DE164d5t.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
