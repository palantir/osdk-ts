import{f as p,j as e}from"./iframe-CJh9y-rw.js";import{O as i}from"./object-table-C23G4pLp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BcaQAKqY.js";import"./Table-CLGDkZje.js";import"./index-DFSJOe3q.js";import"./Dialog-Dgwv1NOA.js";import"./cross-DbuClkod.js";import"./svgIconContainer-CDTU2Wn-.js";import"./useBaseUiId-BYib4Tg8.js";import"./InternalBackdrop-DhhhxuZ3.js";import"./composite-BIIW-Cns.js";import"./index-Cp3I7hTp.js";import"./index-D1MO8Pmk.js";import"./index-Bso8sUqq.js";import"./useEventCallback-CC1N7e5d.js";import"./SkeletonBar-j_0Rer0W.js";import"./LoadingCell-Bjb34e01.js";import"./ColumnConfigDialog-DBl2L_qI.js";import"./DraggableList-C4NVG9XE.js";import"./search-D36sC-mM.js";import"./Input-DTBlDEIM.js";import"./useControlled-BX6Qm41u.js";import"./isEqual-c-acSA0M.js";import"./isObject-gMTEHd81.js";import"./Button-pOq1Ru5w.js";import"./ActionButton-K7C8HVS-.js";import"./Checkbox-D5jyR-R4.js";import"./useValueChanged-BWFANPDO.js";import"./CollapsiblePanel-Bh_icGpD.js";import"./MultiColumnSortDialog-B8R7Rg5r.js";import"./MenuTrigger-DYOrVY91.js";import"./CompositeItem-BXWwEeJm.js";import"./ToolbarRootContext-ChBzOUyP.js";import"./getDisabledMountTransitionStyles-UyyK_uov.js";import"./getPseudoElementBounds-DFjN2b6-.js";import"./chevron-down-B-HPR9dr.js";import"./index-BwKul7N-.js";import"./error-D198KRh6.js";import"./BaseCbacBanner-CvwZBzYq.js";import"./makeExternalStore-z8da-F2a.js";import"./Tooltip-B0iIpAf2.js";import"./PopoverPopup-XvPYoG9w.js";import"./toNumber-CZ_5AHTr.js";import"./useOsdkClient-D1vTeJ3D.js";import"./tick-CjIWosgF.js";import"./DropdownField-Q2A9MwZ5.js";import"./withOsdkMetrics-Bja_Ajpu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
