import{j as i}from"./iframe-BH1__lyA.js";import{O as p}from"./object-table-C_YYv9IJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BlJLd0fs.js";import"./preload-helper-CcoKPVmD.js";import"./Table-DdPOGwfn.js";import"./index-COEeIEse.js";import"./Dialog-B-tTj_Nw.js";import"./cross-BG9CU_85.js";import"./svgIconContainer-wKAlV-si.js";import"./useBaseUiId-CocyTtNa.js";import"./InternalBackdrop-Bf6tif4j.js";import"./composite-C3W7I4o1.js";import"./index-Bb8BpDdy.js";import"./index-C3iKmC6u.js";import"./index-BiGG8ZBE.js";import"./useEventCallback-CPUVFOtx.js";import"./SkeletonBar-BGI6vnAm.js";import"./LoadingCell-BBxmDmnN.js";import"./ColumnConfigDialog-B4fUNH1J.js";import"./DraggableList-l-YPQ9p_.js";import"./search-XcMkpgCF.js";import"./Input-hpLjYkh3.js";import"./useControlled-DOGwcjPy.js";import"./Button-DfUwNhvG.js";import"./small-cross-CAPHq35Q.js";import"./ActionButton-C1MKeMQV.js";import"./Checkbox-BWUQFoeG.js";import"./useValueChanged-41xr8V2-.js";import"./CollapsiblePanel-Dn2DChxX.js";import"./MultiColumnSortDialog-D-Q0C7Y-.js";import"./MenuTrigger-PQ3cFOHk.js";import"./CompositeItem-D0FQTfbI.js";import"./ToolbarRootContext-CtjitZ_O.js";import"./getDisabledMountTransitionStyles-DVj5IYmX.js";import"./getPseudoElementBounds-hmm0rsQk.js";import"./chevron-down-PjTLl0ZH.js";import"./index-CGXKdUZr.js";import"./error-Dg7pD9uX.js";import"./BaseCbacBanner-DJUtLNca.js";import"./makeExternalStore-CyAT35zT.js";import"./Tooltip-6cEOUv8s.js";import"./isObject-neNgVvou.js";import"./debounce-CxGZY-Kb.js";import"./useOsdkClient-BG_667E1.js";import"./tick-PqPtFkmd.js";import"./DropdownField-C55flNy_.js";import"./isEqual-DAwlJfTA.js";import"./_baseIsEqual-fFGR7Jxx.js";import"./withOsdkMetrics-B_AmLLOG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
