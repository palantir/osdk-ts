import{f as p,j as e}from"./iframe--rzYILY1.js";import{O as i}from"./object-table-DhSxpquq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BeoTkHdu.js";import"./Table-DzFFLjM0.js";import"./index-C7zR2UNJ.js";import"./Dialog-BVahHRiG.js";import"./cross-CbDoZw20.js";import"./svgIconContainer-rHUXuI_K.js";import"./useBaseUiId-CJzyL5xl.js";import"./InternalBackdrop-DDU6QN5T.js";import"./composite-wxEI6Gek.js";import"./index-IixAyX6d.js";import"./index-DyzOhDxu.js";import"./index-B3Acx7FQ.js";import"./useEventCallback-DAUsfFl7.js";import"./SkeletonBar-C39RVMey.js";import"./LoadingCell-DnjC92Iq.js";import"./ColumnConfigDialog-BEEILKec.js";import"./DraggableList-DGg6uage.js";import"./search-BOHaXQRv.js";import"./Input-W1UxkG5_.js";import"./useControlled-CUByo0YB.js";import"./Button-Ca6sgk7W.js";import"./small-cross-5IbrPY9A.js";import"./ActionButton-DTFvEc2Q.js";import"./Checkbox-DzZyj33f.js";import"./useValueChanged-wsSi2Sqr.js";import"./CollapsiblePanel-MeX8aOQH.js";import"./MultiColumnSortDialog-DThzHeGE.js";import"./MenuTrigger-DQgayqZX.js";import"./CompositeItem-CuUYeQr-.js";import"./ToolbarRootContext-DCiiiRyC.js";import"./getDisabledMountTransitionStyles-DeoJOC7z.js";import"./getPseudoElementBounds-C__B5H3K.js";import"./chevron-down-DC1AxXPK.js";import"./index-CcfXgpac.js";import"./error-DmzjCkkr.js";import"./BaseCbacBanner-DRymUDrU.js";import"./makeExternalStore-BhwDVCaS.js";import"./Tooltip-DF3tMF-r.js";import"./PopoverPopup-BEYDlEoP.js";import"./debounce-DDNrjhdG.js";import"./useOsdkClient-BXI2BlNL.js";import"./tick-BIPZUYbM.js";import"./DropdownField-CRtOla0p.js";import"./isEqual-DSsAKU2O.js";import"./withOsdkMetrics-BbSTbtS6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
