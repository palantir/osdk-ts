import{f as p,j as e}from"./iframe-YNEpMth_.js";import{O as i}from"./object-table-Dfh1zhN2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJ1mpgSP.js";import"./Table-C2w9T7KR.js";import"./index-B2puki5T.js";import"./Dialog-HVq8Ar7Z.js";import"./cross-C6C4JYc8.js";import"./svgIconContainer-BhHr47Fp.js";import"./useBaseUiId-CHPLJ4sE.js";import"./InternalBackdrop-DA38PjxL.js";import"./composite-vOR0gMDm.js";import"./index-rgrCnizS.js";import"./index-CyFPGQhr.js";import"./index-ClAp5_lm.js";import"./useEventCallback-Cm02Rmqs.js";import"./SkeletonBar-DU-mDkYe.js";import"./LoadingCell-BGoFyUfm.js";import"./ColumnConfigDialog-BdSpUGyZ.js";import"./DraggableList-B9fVzBuz.js";import"./search-uuqEPS6n.js";import"./Input-pwxvUMdX.js";import"./useControlled-BW2zwjNJ.js";import"./Button-Cg8b97WO.js";import"./small-cross-DhU5yWFp.js";import"./ActionButton-B303YVFF.js";import"./Checkbox-bKP18AWh.js";import"./useValueChanged-CAGtW709.js";import"./CollapsiblePanel-CX929Hyr.js";import"./MultiColumnSortDialog-CmtAYB3X.js";import"./MenuTrigger-DITetX7l.js";import"./CompositeItem-C4SXKvmu.js";import"./ToolbarRootContext-D9Oiyr8g.js";import"./getDisabledMountTransitionStyles-CqnrcrqL.js";import"./getPseudoElementBounds-CqBdaJPM.js";import"./chevron-down-UgMmigdo.js";import"./index-DuH1OBFw.js";import"./error-VfGLFz6H.js";import"./BaseCbacBanner-DHMXvY-i.js";import"./makeExternalStore-VqCxcddq.js";import"./Tooltip-D3ZEzSU3.js";import"./PopoverPopup-_aMPVtOd.js";import"./debounce-lENr_Rz7.js";import"./useOsdkClient-CddY0wY9.js";import"./tick-CtCofIiZ.js";import"./DropdownField-CxRjqDt2.js";import"./isEqual-DuDCR3RJ.js";import"./withOsdkMetrics-CvLC4P61.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
