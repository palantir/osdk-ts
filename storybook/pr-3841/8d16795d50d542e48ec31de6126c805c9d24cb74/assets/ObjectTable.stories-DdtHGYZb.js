import{j as i}from"./iframe-BppbSrhx.js";import{O as p}from"./object-table-BjB8n29H.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BTnHHpbY.js";import"./preload-helper-Bw11sjj1.js";import"./Table-DRXfButT.js";import"./index-CJZanbl2.js";import"./Dialog-BzaTL6st.js";import"./cross-Q-zXxGGB.js";import"./svgIconContainer-DQpEIb1x.js";import"./useBaseUiId-qZ19-Hcf.js";import"./InternalBackdrop-DIgXdfTv.js";import"./composite-C3Q3MArL.js";import"./index-BTrAPlHS.js";import"./index-LD31CDcT.js";import"./index-BjVxDYWx.js";import"./useEventCallback-D3IsyJIX.js";import"./SkeletonBar-Bs6fl9dq.js";import"./LoadingCell-BkOQAo1d.js";import"./ColumnConfigDialog-CW56PtbG.js";import"./DraggableList-C2qiVH7w.js";import"./search-4uPMjt9H.js";import"./Input-TL4PyLM9.js";import"./useControlled-Cyv1OlQu.js";import"./Button-CpCWCMtk.js";import"./small-cross-p5zHgXkA.js";import"./ActionButton-C9eS6C4k.js";import"./Checkbox-LwUtlCY3.js";import"./useValueChanged-Br96PFLq.js";import"./CollapsiblePanel-DKSz5_iN.js";import"./MultiColumnSortDialog-z_UEp66c.js";import"./MenuTrigger-Boc06z0M.js";import"./CompositeItem-Bf84ptir.js";import"./ToolbarRootContext-Us9sChGo.js";import"./getDisabledMountTransitionStyles-UdumhEnt.js";import"./getPseudoElementBounds-CinKU-E5.js";import"./chevron-down-RK-wSJaV.js";import"./index-Bg7F7AhM.js";import"./error-B6rYlYt_.js";import"./BaseCbacBanner-solUHKcX.js";import"./makeExternalStore-Bbh9MWGd.js";import"./Tooltip-Bk7WuH7N.js";import"./PopoverPopup-VNvKO1hU.js";import"./debounce-H-onGT9e.js";import"./useOsdkClient-Bi2QyrOg.js";import"./tick-BYxeszBx.js";import"./DropdownField-mww5JMwj.js";import"./isEqual-I2G5XZfm.js";import"./withOsdkMetrics-CEFcST5F.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
