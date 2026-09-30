import{f as p,j as e}from"./iframe-B2ksOBZK.js";import{O as i}from"./object-table-DXi_UZ_4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DwVeKaeD.js";import"./Table-op2dMwT3.js";import"./index-C0qxAnyg.js";import"./Dialog-CrBw7OS3.js";import"./cross-DpwDHxX0.js";import"./svgIconContainer-BoLDP-in.js";import"./useBaseUiId-DBFPNCWo.js";import"./InternalBackdrop-Dzi45WTy.js";import"./composite-B-vnab_Z.js";import"./index-DyyxI-I6.js";import"./index-rll2Ydt2.js";import"./index-TB7zAsKF.js";import"./useEventCallback-CtJLJCiI.js";import"./SkeletonBar-CKJLp3uZ.js";import"./LoadingCell-BLeRCr8T.js";import"./ColumnConfigDialog-xgCk8V1O.js";import"./DraggableList-Br7k7oey.js";import"./search-BcOh8Jgz.js";import"./Input-DCyHQ82M.js";import"./useControlled-BKEjqMno.js";import"./Button-CWbg3cyR.js";import"./small-cross-Di5tDJTq.js";import"./ActionButton-D7Cv_dvM.js";import"./Checkbox-Dg6aqmsT.js";import"./useValueChanged-B3jNUwWr.js";import"./CollapsiblePanel-B4WKaPJO.js";import"./MultiColumnSortDialog-BEJMs8gv.js";import"./MenuTrigger-BLgXVcM0.js";import"./CompositeItem-BrQKGcIu.js";import"./ToolbarRootContext-BqtVZI5F.js";import"./getDisabledMountTransitionStyles-CQawNBlY.js";import"./getPseudoElementBounds-B8e6uiFl.js";import"./chevron-down-D80xuDhn.js";import"./index-D8M1fsCH.js";import"./error-BDJdlY4T.js";import"./BaseCbacBanner-DfBvktQ3.js";import"./makeExternalStore-7lDBXMAq.js";import"./Tooltip-D7V59zE7.js";import"./PopoverPopup-CefU-B1a.js";import"./debounce-DrXd2sNW.js";import"./useOsdkClient-BexeExeh.js";import"./tick-qqyLXFxc.js";import"./DropdownField-DLqjzm9N.js";import"./isEqual-CcFEOkDy.js";import"./withOsdkMetrics-Da6CzeGO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
