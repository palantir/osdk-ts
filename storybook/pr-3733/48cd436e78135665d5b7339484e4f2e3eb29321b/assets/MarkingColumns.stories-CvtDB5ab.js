import{f as p,j as e}from"./iframe-D9lxuTZ1.js";import{O as i}from"./object-table-BcK9RPB-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Do7-tsr0.js";import"./Table-DD-tXUPx.js";import"./index-B7SuRf-V.js";import"./Dialog-VwCR0bPK.js";import"./cross-Dp8JFrXV.js";import"./svgIconContainer-B5cX7c4P.js";import"./useBaseUiId-C5fWipJz.js";import"./InternalBackdrop-zHLZ2Pg6.js";import"./composite-N1lpXgfE.js";import"./index-CMtfSI0z.js";import"./index-JW_r_biz.js";import"./index-B6rg5sLK.js";import"./useEventCallback-BXglCah1.js";import"./SkeletonBar-CX_rfoc0.js";import"./LoadingCell-BiFVTmAU.js";import"./ColumnConfigDialog-B6jCT6GQ.js";import"./DraggableList-COhsxiYh.js";import"./search-P4qKgx4r.js";import"./Input-JFvS6kPu.js";import"./useControlled-K8Wk1UIc.js";import"./isEqual-BDIfFjZC.js";import"./isObject-CYhijOxl.js";import"./Button-DfHA5hQa.js";import"./ActionButton-Bcj4bgB4.js";import"./Checkbox-DWY-RldS.js";import"./useValueChanged-DdwNqbLb.js";import"./CollapsiblePanel-DTcBmlQY.js";import"./MultiColumnSortDialog-287Y8HJj.js";import"./MenuTrigger-CfFIFz0j.js";import"./CompositeItem-DaRifkLs.js";import"./ToolbarRootContext-Btl_Kd9E.js";import"./getDisabledMountTransitionStyles-rVL7Pgrv.js";import"./getPseudoElementBounds-BliHZfBe.js";import"./chevron-down-BiZI_wPn.js";import"./index-DDrHGFl3.js";import"./error-C8UL0roA.js";import"./BaseCbacBanner-BU5Krxn-.js";import"./makeExternalStore-a81xtmQN.js";import"./Tooltip-CfbzUV6a.js";import"./PopoverPopup-CA3gyqQX.js";import"./toNumber-C8aPmDeg.js";import"./useOsdkClient-uX6j0ioZ.js";import"./tick-DVzgU-_7.js";import"./DropdownField-BPxbUD6Y.js";import"./withOsdkMetrics-CFrjKiMG.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
