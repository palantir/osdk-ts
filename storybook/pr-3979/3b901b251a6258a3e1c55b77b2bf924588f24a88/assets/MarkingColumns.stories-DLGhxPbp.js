import{f as p,j as e}from"./iframe-BZrMvNjH.js";import{O as i}from"./object-table-RCunOAME.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-hIhWcbk1.js";import"./Table-D67UCRoD.js";import"./index-DS2flFfG.js";import"./Dialog-ageSGZBC.js";import"./cross-iphUExt8.js";import"./svgIconContainer-CY0qYkeS.js";import"./useBaseUiId-CswL1btF.js";import"./InternalBackdrop-CoHxh-ms.js";import"./composite-Bvd7iHGV.js";import"./index-BlvQlGL4.js";import"./index-CClIcESQ.js";import"./index-JV3nPluQ.js";import"./useEventCallback-CAOOmdIa.js";import"./SkeletonBar-Xz-ijpwF.js";import"./LoadingCell-CWggzeLE.js";import"./ColumnConfigDialog-Bgj_OExF.js";import"./DraggableList-BzciFWwo.js";import"./search-DxeR06nu.js";import"./Input-nfoLLdye.js";import"./useControlled-Bj7UVyPM.js";import"./Button-DnumB7pL.js";import"./small-cross-BHthMG8B.js";import"./ActionButton-CKfsqSSC.js";import"./Checkbox-DZ1sQOZV.js";import"./useValueChanged-BA_Uq0OY.js";import"./CollapsiblePanel-CA4hGbc8.js";import"./MultiColumnSortDialog-C94PGO1v.js";import"./MenuTrigger-DJu2giNb.js";import"./CompositeItem-Dintp2Bw.js";import"./ToolbarRootContext-CSb78eVd.js";import"./getDisabledMountTransitionStyles-DAqLr02q.js";import"./getPseudoElementBounds-BdZebYSH.js";import"./chevron-down-Cbk6ruv5.js";import"./index-B3YZJx-I.js";import"./error-C4YZPalR.js";import"./BaseCbacBanner-BZ3dE9N7.js";import"./makeExternalStore-DqJxB7HS.js";import"./Tooltip-DVr0E3LF.js";import"./PopoverPopup-bwa0KoYC.js";import"./debounce-DNzZdSc8.js";import"./useOsdkClient-Cc19J1k8.js";import"./tick-DlglnSJ9.js";import"./DropdownField-CBvpYEAv.js";import"./isEqual-CtIzUrZm.js";import"./withOsdkMetrics-C9uhYNX4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
