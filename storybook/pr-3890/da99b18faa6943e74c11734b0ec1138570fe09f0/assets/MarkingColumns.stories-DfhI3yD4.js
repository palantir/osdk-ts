import{f as p,j as e}from"./iframe-Dg0RA47C.js";import{O as i}from"./object-table-Ch_8JgH_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2cTZMmE.js";import"./Table-BtRGV6ru.js";import"./index-CP0v3oc4.js";import"./Dialog-Bg9UgGZY.js";import"./cross-CAoQgAes.js";import"./svgIconContainer-MFwXKo8a.js";import"./useBaseUiId-cAnpWjx3.js";import"./InternalBackdrop-CNYdc8fE.js";import"./composite-BCKGU-V6.js";import"./index-BWQjYTbn.js";import"./index-Bs4XxOPg.js";import"./index-BPZvYme6.js";import"./useEventCallback-CdoEXUNW.js";import"./SkeletonBar-DCV28cXp.js";import"./LoadingCell-CIfY_GiG.js";import"./ColumnConfigDialog-Nrle8fdX.js";import"./DraggableList-CLg9nbKr.js";import"./search-D2EDy9ee.js";import"./Input-CFaw-jkU.js";import"./useControlled-BIwik4nh.js";import"./Button-C34VLXt7.js";import"./small-cross-DIALysvM.js";import"./ActionButton-DZ0__bGy.js";import"./Checkbox-DL79bvRy.js";import"./useValueChanged-DuBO4zjF.js";import"./CollapsiblePanel-LAaM01Kd.js";import"./MultiColumnSortDialog-BnOVVE1O.js";import"./MenuTrigger-Di-taYBD.js";import"./CompositeItem-BNj1W7kt.js";import"./ToolbarRootContext-vZD2WDzJ.js";import"./getDisabledMountTransitionStyles-DHm_dR8N.js";import"./getPseudoElementBounds-tHI-ecWk.js";import"./chevron-down-Cbs30_CT.js";import"./index-hS7TW2Ac.js";import"./error-BL9dqZOx.js";import"./BaseCbacBanner-D7QVun9Q.js";import"./makeExternalStore-D8EkG36v.js";import"./Tooltip-CAu-WbGU.js";import"./PopoverPopup-BH-V_4IA.js";import"./debounce-DSxzzjdA.js";import"./useOsdkClient-CcJxi233.js";import"./tick-B0YgN-Jb.js";import"./DropdownField-DWLgtaf3.js";import"./isEqual-DMtrq5mO.js";import"./withOsdkMetrics-D5C1Gkqy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
