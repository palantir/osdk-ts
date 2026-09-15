import{f as p,j as e}from"./iframe-CpvsyndC.js";import{O as i}from"./object-table-wDn8u1NQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-v1ULc-zT.js";import"./Table-D8DVt9rQ.js";import"./index-OXZTet4E.js";import"./Dialog-B4LKyPNu.js";import"./cross-Bcfh6JZM.js";import"./svgIconContainer-Msyl1KBc.js";import"./useBaseUiId-CYqXXgOS.js";import"./InternalBackdrop-CRstaiGF.js";import"./composite-Bs9G8wyi.js";import"./index-BYz18T7P.js";import"./index-BQoSmoXa.js";import"./index-C9kvG9bI.js";import"./useEventCallback-TcvyV0P6.js";import"./SkeletonBar-CBAJCw1t.js";import"./LoadingCell-NGN7xI4A.js";import"./ColumnConfigDialog-DSpgaopW.js";import"./DraggableList-BYHWAua5.js";import"./search-CKGbca0G.js";import"./Input-D6DNjjz9.js";import"./useControlled-D-CxRUi2.js";import"./Button-CCew8i_i.js";import"./small-cross-D3J472u7.js";import"./ActionButton-BfYiSCcv.js";import"./Checkbox-k22hzlYz.js";import"./useValueChanged-CfxM7xWl.js";import"./CollapsiblePanel-CI8PgSve.js";import"./MultiColumnSortDialog-D6yyxhCn.js";import"./MenuTrigger-Dy0Pp6pd.js";import"./CompositeItem-DpS-WC5l.js";import"./ToolbarRootContext-Bn57AYug.js";import"./getDisabledMountTransitionStyles-CD-yuuJB.js";import"./getPseudoElementBounds-OuRRLSTT.js";import"./chevron-down-AhYvmllp.js";import"./index-4rhUuJvO.js";import"./error-o4jN_MzE.js";import"./BaseCbacBanner-Decf3pyE.js";import"./makeExternalStore-BjYOVJLR.js";import"./Tooltip-BS2jpkpK.js";import"./PopoverPopup-BfQ70eOn.js";import"./debounce-CzKUTwhW.js";import"./useOsdkClient-C7Ga7ftv.js";import"./tick-B3tE0rZT.js";import"./DropdownField--U9fCIxx.js";import"./isEqual-qnNML_NE.js";import"./withOsdkMetrics-BrjOXXvf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
