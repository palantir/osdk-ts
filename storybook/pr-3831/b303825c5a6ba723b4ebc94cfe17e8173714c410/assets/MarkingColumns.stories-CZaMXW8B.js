import{f as p,j as e}from"./iframe-B3k6St_T.js";import{O as i}from"./object-table-Bu29mECu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bz3dVFdp.js";import"./Table-CDEsrxx0.js";import"./index-BvHXh5hH.js";import"./Dialog-BiHio090.js";import"./cross-DkN_e3qa.js";import"./svgIconContainer-CiJvVYR1.js";import"./useBaseUiId-CN4YGlgk.js";import"./InternalBackdrop-gL33YKiY.js";import"./composite-C_maXQ4a.js";import"./index-BOMAFt6Z.js";import"./index-DvV5NBUk.js";import"./index-CKFcz2T_.js";import"./useEventCallback-Yxia1zkB.js";import"./SkeletonBar-j7PuH9FN.js";import"./LoadingCell-RKZROzvJ.js";import"./ColumnConfigDialog-ddmYKID-.js";import"./DraggableList-8nnHB_Zu.js";import"./search-D1gWWYJX.js";import"./Input-CGzs6Mm3.js";import"./useControlled-DKV39VDG.js";import"./isEqual-w8i72UAZ.js";import"./isObject-Bl_L4n1V.js";import"./Button-CvyOEKt-.js";import"./ActionButton-1wJ96VeD.js";import"./Checkbox-BftSaVwY.js";import"./useValueChanged-DtsWOZvK.js";import"./CollapsiblePanel-DwSMhEAw.js";import"./MultiColumnSortDialog-IyVD_CMO.js";import"./MenuTrigger-Oyo3PTXg.js";import"./CompositeItem-C1S6KcsA.js";import"./ToolbarRootContext-C9TgeQ7l.js";import"./getDisabledMountTransitionStyles-DCt7ntxf.js";import"./getPseudoElementBounds-8Fl7H_Sb.js";import"./chevron-down-C7A59tL6.js";import"./index-D6Y2Irns.js";import"./error-D0JClcHo.js";import"./BaseCbacBanner-B6-usOnF.js";import"./makeExternalStore-CH1rZ3vr.js";import"./Tooltip-8qMs2j0L.js";import"./PopoverPopup-DnNn1J9U.js";import"./toNumber-wPhy8-WE.js";import"./useOsdkClient-Bmmq2OWY.js";import"./tick-qtTLf652.js";import"./DropdownField-CRNhBggS.js";import"./withOsdkMetrics-Da-HTJgY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
