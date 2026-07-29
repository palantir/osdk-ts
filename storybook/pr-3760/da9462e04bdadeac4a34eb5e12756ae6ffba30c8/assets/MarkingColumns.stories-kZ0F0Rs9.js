import{f as p,j as e}from"./iframe-pmNjzkSa.js";import{O as i}from"./object-table-OoaCicb2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-_91snrAe.js";import"./Table-DzuLxgjp.js";import"./index-DgbX2nfK.js";import"./Dialog-Dj_XmNIk.js";import"./cross-Dqi4IPXt.js";import"./svgIconContainer-BZe9E0fd.js";import"./useBaseUiId-yuPZM35O.js";import"./InternalBackdrop-jkPUR_Oo.js";import"./composite-CDFQZzUv.js";import"./index-Dk_LArqT.js";import"./index-CQnyyv3M.js";import"./index-CsLpz_wj.js";import"./useEventCallback-C-U0AvIK.js";import"./SkeletonBar-IQnueAmy.js";import"./LoadingCell-CvaNdxne.js";import"./ColumnConfigDialog-BGuSFe2m.js";import"./DraggableList-xMh6LhJ_.js";import"./search-Bxht82Ps.js";import"./Input-EJedlwTO.js";import"./useControlled-CWeh_fXo.js";import"./isEqual-Br5cO1iA.js";import"./isObject-05QMv73L.js";import"./Button-DcauLdOh.js";import"./ActionButton-CDJfJ1hj.js";import"./Checkbox-Dc3wsZor.js";import"./useValueChanged-DLwXBoLF.js";import"./CollapsiblePanel-DQIcivTP.js";import"./MultiColumnSortDialog-BLgWJwC1.js";import"./MenuTrigger-Cz7S7zn4.js";import"./CompositeItem-mJLhl0rA.js";import"./ToolbarRootContext-zyqED4Pq.js";import"./getDisabledMountTransitionStyles-BiGVZN_K.js";import"./getPseudoElementBounds-C18EUD7j.js";import"./chevron-down-BS9Gs3vv.js";import"./index-trp_UBRu.js";import"./error-BfEBsCaT.js";import"./BaseCbacBanner-sQVjtfVl.js";import"./makeExternalStore-ZxXmouAx.js";import"./Tooltip-CphYaAGS.js";import"./PopoverPopup-bE2595rX.js";import"./toNumber-0rnyOSLY.js";import"./useOsdkClient-ClOHwVNK.js";import"./tick-D0gSuB9T.js";import"./DropdownField-TOuNLrGn.js";import"./withOsdkMetrics-Ua95Z_9x.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
