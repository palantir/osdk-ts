import{f as p,j as e}from"./iframe-DfZokpto.js";import{O as i}from"./object-table-V3VexWSg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2M6ZLWS.js";import"./Table-DmQjN-IN.js";import"./index-CZdez1wS.js";import"./Dialog-D3dNymo7.js";import"./cross-C5IIgdv9.js";import"./svgIconContainer-B-LBMc7s.js";import"./useBaseUiId-Di0vZy3F.js";import"./InternalBackdrop-CeVQN_3q.js";import"./composite-Cy57pfRY.js";import"./index-DNtNwFHE.js";import"./index-Cs-W3rSL.js";import"./index-CFMZHXjP.js";import"./useEventCallback-Cc4FHkGM.js";import"./SkeletonBar-CwI3mQn6.js";import"./LoadingCell-CID5TB3V.js";import"./ColumnConfigDialog-CNF9ZgL5.js";import"./DraggableList-7JC9InAe.js";import"./search-Dujdc83W.js";import"./Input-CpR273dJ.js";import"./useControlled-CXS_gvTL.js";import"./isEqual-B2TvGpie.js";import"./isObject-dIp0Njzc.js";import"./Button-Dg1lZxDi.js";import"./ActionButton-DmuWB4qK.js";import"./Checkbox-DS_XI3ar.js";import"./useValueChanged-DLnBX1Wo.js";import"./CollapsiblePanel-QtoGm9u9.js";import"./MultiColumnSortDialog-BoFK9eOC.js";import"./MenuTrigger-CPECWPxD.js";import"./CompositeItem-Ct4hC_ue.js";import"./ToolbarRootContext-wfEc9w32.js";import"./getDisabledMountTransitionStyles-CtM3qL7n.js";import"./getPseudoElementBounds-DzgbIZhk.js";import"./chevron-down-vYjuLkiO.js";import"./index-NjWXFk_F.js";import"./error-B8p3BRu-.js";import"./BaseCbacBanner-Dh3tbNJV.js";import"./makeExternalStore-CgQtrX57.js";import"./Tooltip-DBBX28U8.js";import"./PopoverPopup-VOz80U1m.js";import"./toNumber-HwY4CUAV.js";import"./useOsdkClient-B_HOphkI.js";import"./tick-CGfSVmXp.js";import"./DropdownField-BV1FHdU6.js";import"./withOsdkMetrics-BtNgh2_s.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
