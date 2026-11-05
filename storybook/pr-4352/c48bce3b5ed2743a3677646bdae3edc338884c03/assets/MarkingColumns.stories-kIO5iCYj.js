import{f as p,j as e}from"./iframe-ClYhC0-S.js";import{O as i}from"./object-table-Dqu58rUu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CNkkVcag.js";import"./Table-C4Oz59hI.js";import"./index-Bmj0xk3d.js";import"./Dialog-B3za_J3t.js";import"./cross-C_2oyR03.js";import"./svgIconContainer-9bIBfj8h.js";import"./useBaseUiId-Dd8fT170.js";import"./InternalBackdrop-BvLY_ojf.js";import"./composite-BwqNvQ0F.js";import"./index-D8PsRgog.js";import"./index-CI-u4eDt.js";import"./index-BMLvSUmF.js";import"./useEventCallback-DNonn3MU.js";import"./SkeletonBar-BZOsAT84.js";import"./LoadingCell-sf3vBVse.js";import"./ColumnConfigDialog-CW2Pt_n3.js";import"./DraggableList-C1XdGFJ9.js";import"./search-BBIKhGWf.js";import"./Input-D8CWVoNO.js";import"./useControlled-4Gm1FEJo.js";import"./Button-Dg23Hvs4.js";import"./small-cross-aEaqetZ9.js";import"./ActionButton-DNeWdOgS.js";import"./Checkbox-BEAZN8rt.js";import"./useValueChanged-6OE2Wa-N.js";import"./CollapsiblePanel-CGTT3k_x.js";import"./MultiColumnSortDialog-BCKeJgV_.js";import"./MenuTrigger-DajGnyRI.js";import"./CompositeItem-CPrfZrML.js";import"./ToolbarRootContext-DAdrKT5D.js";import"./getDisabledMountTransitionStyles-DrhK1CmR.js";import"./getPseudoElementBounds-CqY0Dp1D.js";import"./chevron-down-DJbVh1LY.js";import"./index-cVgcsKtQ.js";import"./error-BD_aaRfa.js";import"./BaseCbacBanner-DiaW3k_F.js";import"./makeExternalStore-BHHGj5YL.js";import"./Tooltip-Cq73361T.js";import"./isObject-BxkrbndP.js";import"./debounce-Ck8WOOl2.js";import"./useOsdkClient-C5IVuxHo.js";import"./tick-BT7qCCyz.js";import"./DropdownField-DcyfDtmr.js";import"./isEqual-_vvRFbmo.js";import"./_baseIsEqual-BnmLXaSx.js";import"./withOsdkMetrics-BvbgqpCV.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
