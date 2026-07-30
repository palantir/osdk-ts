import{j as i}from"./iframe-Dt0Ahp7v.js";import{O as p}from"./object-table-C7lON5md.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DUI3W8pS.js";import"./preload-helper-Csxsg529.js";import"./Table-CEI-Num5.js";import"./index-DKNyxDiu.js";import"./Dialog-Dtjx5p-C.js";import"./cross-DRzxKD9P.js";import"./svgIconContainer-CB7_PxJy.js";import"./useBaseUiId-CdwE49_c.js";import"./InternalBackdrop-DXzVZsqm.js";import"./composite-RqLHFCRB.js";import"./index-DgQ3UFA5.js";import"./index-BrDzKhkc.js";import"./index-raFJTOQN.js";import"./useEventCallback-wrrEUMLU.js";import"./SkeletonBar-l9KRBROl.js";import"./LoadingCell-CO5NOT5a.js";import"./ColumnConfigDialog-BGZCh411.js";import"./DraggableList-Bz08LFBa.js";import"./search-CMt_GG0Z.js";import"./Input-BG_Aon1B.js";import"./useControlled-LVr7DFLg.js";import"./isEqual-BxFB4iwO.js";import"./isObject-CDU1KAZx.js";import"./Button-Du4-mwXs.js";import"./ActionButton-Cv8Q47bY.js";import"./Checkbox-Ssgs7t0h.js";import"./useValueChanged-B0uXxmiT.js";import"./CollapsiblePanel-DBgJLNcW.js";import"./MultiColumnSortDialog-CDU5j975.js";import"./MenuTrigger-CmkyV0y8.js";import"./CompositeItem-pKV5GE2B.js";import"./ToolbarRootContext-BdRkmkbo.js";import"./getDisabledMountTransitionStyles-CPh35wbM.js";import"./getPseudoElementBounds-BorjMQgh.js";import"./chevron-down-DNCAQpBE.js";import"./index-wINFjYfg.js";import"./error-DG09RTcC.js";import"./BaseCbacBanner-BbbOdFTy.js";import"./makeExternalStore-BYkIgxdy.js";import"./Tooltip-D9Gho6OQ.js";import"./PopoverPopup-qJvh0xU8.js";import"./toNumber-ju4VPkOz.js";import"./useOsdkClient-BB1GGDEB.js";import"./tick-2io-CBPy.js";import"./DropdownField-wOiC2tMo.js";import"./withOsdkMetrics-8vUC6id2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
