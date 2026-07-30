import{j as i}from"./iframe-Bt4Xobet.js";import{O as p}from"./object-table-ESLraP9c.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D_NfY1mS.js";import"./preload-helper-CIGldWkI.js";import"./Table-Dh8WrLMe.js";import"./index-C9QCKnRv.js";import"./Dialog-Bt16bQO_.js";import"./cross-EISoXgiZ.js";import"./svgIconContainer-BK5VnXrw.js";import"./useBaseUiId-OZ0hUE_a.js";import"./InternalBackdrop-hUtnwJGp.js";import"./composite-DDgJpTsN.js";import"./index-CZKjIZkZ.js";import"./index-CjzROSaJ.js";import"./index-BWtyZcA_.js";import"./useEventCallback-1iEm_Jcu.js";import"./SkeletonBar-Ofc__1IX.js";import"./LoadingCell-BvDgL-19.js";import"./ColumnConfigDialog-CbkPAmBR.js";import"./DraggableList-Dwm_DYuN.js";import"./search-BUQOh4mX.js";import"./Input-D-1nEW3a.js";import"./useControlled-DyGKRwST.js";import"./isEqual-EcUHdlDF.js";import"./isObject-DbxEad6g.js";import"./Button-CTrNzNt_.js";import"./ActionButton-Dkt25fua.js";import"./Checkbox-DsIqf523.js";import"./useValueChanged-CG97XxYr.js";import"./CollapsiblePanel-BrwiE-29.js";import"./MultiColumnSortDialog-DuzVdzTj.js";import"./MenuTrigger-Cyb-YEi4.js";import"./CompositeItem-DgpKcPgo.js";import"./ToolbarRootContext-DIt4thAF.js";import"./getDisabledMountTransitionStyles-B721IT_k.js";import"./getPseudoElementBounds-C1106lzn.js";import"./chevron-down-IwUW_Yhg.js";import"./index-DSNbiTi3.js";import"./error-CzuGt2Gr.js";import"./BaseCbacBanner-D2egufd4.js";import"./makeExternalStore-84IoszYF.js";import"./Tooltip-CvcctPhn.js";import"./PopoverPopup-CwvnG5I6.js";import"./toNumber-B2D77nhi.js";import"./useOsdkClient-CGPWcPnj.js";import"./tick-16BAGEht.js";import"./DropdownField-SRU5zi3R.js";import"./withOsdkMetrics-BjgVacGN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
