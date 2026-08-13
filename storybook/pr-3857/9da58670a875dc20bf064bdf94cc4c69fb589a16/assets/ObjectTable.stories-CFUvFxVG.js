import{j as i}from"./iframe-BBlRBgNm.js";import{O as p}from"./object-table-DASSQ9GQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B33-apUR.js";import"./preload-helper-nUcndVB1.js";import"./Table-DoCE0_ta.js";import"./index-BZqLTchK.js";import"./Dialog-BN1Ll_Mt.js";import"./cross-wqLIhFuX.js";import"./svgIconContainer-DOveKI2E.js";import"./useBaseUiId-CY9tAtRf.js";import"./InternalBackdrop-B3cUMuwX.js";import"./composite-D1tYMIIj.js";import"./index-CDRFlmxs.js";import"./index-BxiEEyZP.js";import"./index-Dpur4ZgS.js";import"./useEventCallback-DPcgSbs7.js";import"./SkeletonBar-DItZ6pPc.js";import"./LoadingCell-CFJHl2W3.js";import"./ColumnConfigDialog-C6EXlW4L.js";import"./DraggableList-CZvDb2Rs.js";import"./search-BWru_8ZJ.js";import"./Input-iZ0inZPU.js";import"./useControlled-BArMeZNp.js";import"./Button-rAV1gEhG.js";import"./small-cross-DZQdemxI.js";import"./ActionButton-slRltjTn.js";import"./Checkbox-Cd6hrv29.js";import"./useValueChanged-MzDo2j3C.js";import"./CollapsiblePanel-BX6aE7S7.js";import"./MultiColumnSortDialog-DbZOZ_cP.js";import"./MenuTrigger-X5QPubPN.js";import"./CompositeItem-TLen8WtJ.js";import"./ToolbarRootContext-DE0PC0Rd.js";import"./getDisabledMountTransitionStyles-ysFhXVzU.js";import"./getPseudoElementBounds-pR_ilbUx.js";import"./chevron-down-796VQilV.js";import"./index-BeqmCVha.js";import"./error-CSd4pgb3.js";import"./BaseCbacBanner-5pe5EgoM.js";import"./makeExternalStore-CAu16bqE.js";import"./Tooltip-Bf9OdCcy.js";import"./PopoverPopup-CV19ssg7.js";import"./toNumber-CURGE_Tq.js";import"./useOsdkClient-BHUBDa2P.js";import"./tick-BBDpiVWD.js";import"./DropdownField-DLmWQ22W.js";import"./withOsdkMetrics-Cmjq74if.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
