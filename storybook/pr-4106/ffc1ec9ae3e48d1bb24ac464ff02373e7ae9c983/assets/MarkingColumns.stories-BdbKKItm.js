import{f as p,j as e}from"./iframe-DwbDsShL.js";import{O as i}from"./object-table-BgT5oNfq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DhhmyXUk.js";import"./Table-BTdMExPd.js";import"./index-BELzmUVs.js";import"./Dialog-C9RL-4tq.js";import"./cross-CsyWmC2B.js";import"./svgIconContainer-xLBfLuAm.js";import"./useBaseUiId-CKINu-S2.js";import"./InternalBackdrop-CkMaO7_K.js";import"./composite-Dplovskw.js";import"./index-DYqy7FgF.js";import"./index-DL-SFPZn.js";import"./index-TAMkn_jr.js";import"./useEventCallback-D_o7AQG5.js";import"./SkeletonBar-hzcPKCTf.js";import"./LoadingCell-CKk4OZeM.js";import"./ColumnConfigDialog-eKI2SZFP.js";import"./DraggableList-sYZIUWkC.js";import"./search-D1hGu4NI.js";import"./Input-CMFW6oif.js";import"./useControlled-DY8ufjhO.js";import"./Button-DphpaBib.js";import"./small-cross--zSCPQCk.js";import"./ActionButton-CcahO6-X.js";import"./Checkbox-B3ZXGLZe.js";import"./useValueChanged-BgzkqT_-.js";import"./CollapsiblePanel-BDW-Fe21.js";import"./MultiColumnSortDialog-DHXQa_DH.js";import"./MenuTrigger-CR3U5NVZ.js";import"./CompositeItem-DOXgLazM.js";import"./ToolbarRootContext-BPuHUJNX.js";import"./getDisabledMountTransitionStyles-BugVbO8p.js";import"./getPseudoElementBounds-FBgTSxcr.js";import"./chevron-down-ckW8ziB1.js";import"./index-DZ-Ao651.js";import"./error-BJfNfAJx.js";import"./BaseCbacBanner-DQ4Mqy-u.js";import"./makeExternalStore-y7bd8937.js";import"./Tooltip-zs9usS6P.js";import"./PopoverPopup-BUbu0rVo.js";import"./debounce-DIDHBmIq.js";import"./useOsdkClient-DayV63R7.js";import"./tick-cgtgvDhU.js";import"./DropdownField-k94eZHLI.js";import"./isEqual-D9cIyJJ2.js";import"./withOsdkMetrics-BqWyBjIv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
