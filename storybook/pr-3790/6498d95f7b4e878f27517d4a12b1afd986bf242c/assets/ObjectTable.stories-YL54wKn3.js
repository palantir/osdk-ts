import{j as i}from"./iframe-CDGAWL5z.js";import{O as p}from"./object-table-DtXQYtP2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DeMDbJw_.js";import"./preload-helper-CI5YRKwA.js";import"./Table-DLf6dOM5.js";import"./index-3MCsyJen.js";import"./Dialog-Gmy4msys.js";import"./cross-BeVSOrEe.js";import"./svgIconContainer-Dcej3m5n.js";import"./useBaseUiId-DY77c4-A.js";import"./InternalBackdrop-BVMsH6hp.js";import"./composite-BFqrbf78.js";import"./index-BUnuXFxA.js";import"./index-CZEvu-cD.js";import"./index-DM6_L-S2.js";import"./useEventCallback-CurJQDBH.js";import"./SkeletonBar-B1robTcF.js";import"./LoadingCell-BnzujRh0.js";import"./ColumnConfigDialog-BzzNFXDq.js";import"./DraggableList-tWeCPBYW.js";import"./search-BrgQI2y6.js";import"./Input-B1WQ9LTD.js";import"./useControlled-xutsfVXO.js";import"./isEqual-Bja32Sem.js";import"./isObject-JyW4d2OA.js";import"./Button-XNbmfuiS.js";import"./ActionButton-C2x0RC9m.js";import"./Checkbox-XoF4FZ1X.js";import"./useValueChanged-CXVUyp3K.js";import"./CollapsiblePanel-D5hccQ-X.js";import"./MultiColumnSortDialog-DUYJZ_uN.js";import"./MenuTrigger-DpLR4WSl.js";import"./CompositeItem-Cl4JUDwX.js";import"./ToolbarRootContext-CTDwZ0pE.js";import"./getDisabledMountTransitionStyles-xoor5amX.js";import"./getPseudoElementBounds-WES_yW35.js";import"./chevron-down-dvsoYA_H.js";import"./index-CLEKU3H0.js";import"./error-q7YHjSp-.js";import"./BaseCbacBanner-Bqi4-Jcc.js";import"./makeExternalStore-ql6Iw7cR.js";import"./Tooltip-DfyX7Dwe.js";import"./PopoverPopup-HHAC8mLC.js";import"./toNumber-B7X19R9_.js";import"./useOsdkClient-Dkt3V3jM.js";import"./tick-Bf0agguz.js";import"./DropdownField-C3mpb7DV.js";import"./withOsdkMetrics-BT43AOFX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
