import{f as p,j as e}from"./iframe-Dv4QQ6Y4.js";import{O as i}from"./object-table-C1SCK71K.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BZeo2aa_.js";import"./Table-DCAi-cqE.js";import"./index-Bo5vUrye.js";import"./Dialog-CI9eTel7.js";import"./cross-CTXbroJK.js";import"./svgIconContainer-De6SA4Dr.js";import"./useBaseUiId-DPM9QPEL.js";import"./InternalBackdrop-DRaUyJ8v.js";import"./composite-D2e8WeVr.js";import"./index-D7zPEcZE.js";import"./index-wUCDkndP.js";import"./index-B4wl8HiA.js";import"./useEventCallback-DE28hwwS.js";import"./SkeletonBar-DbWunkuZ.js";import"./LoadingCell-Cyjm6LXt.js";import"./ColumnConfigDialog-BoudTuK3.js";import"./DraggableList-DKQpzmfW.js";import"./search-CWgR1vVP.js";import"./Input-DTNwj_yO.js";import"./useControlled-BcGMXD3D.js";import"./Button-B_X3_bQA.js";import"./small-cross-BOwPxFN0.js";import"./ActionButton-C1ptiifp.js";import"./Checkbox-BhB2wpJV.js";import"./useValueChanged-1zfYKsDL.js";import"./CollapsiblePanel-DNTWrgGT.js";import"./MultiColumnSortDialog-2kScV4zV.js";import"./MenuTrigger-CbxBQ7TZ.js";import"./CompositeItem-b4hZwQ2E.js";import"./ToolbarRootContext-Blue4JH4.js";import"./getDisabledMountTransitionStyles-n1IP7gt4.js";import"./getPseudoElementBounds-DmVA_fGG.js";import"./chevron-down-XPf4kqix.js";import"./index-X99WJuZn.js";import"./error-CMA_8Zv0.js";import"./BaseCbacBanner-DyBJvF4a.js";import"./makeExternalStore-Bg3zd0w-.js";import"./Tooltip-DSVMTHzP.js";import"./PopoverPopup-4H23XaH2.js";import"./debounce-DMjYGfU6.js";import"./useOsdkClient-BE_-nJBB.js";import"./tick-Dh2x96zi.js";import"./DropdownField-kkZO0YX5.js";import"./isEqual-DrxdPr0P.js";import"./withOsdkMetrics-CfzcCH1M.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
