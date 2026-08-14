import{j as i}from"./iframe-C3XbZWen.js";import{O as p}from"./object-table-6roN3fnf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D3y5dT9V.js";import"./preload-helper-Bd8vTro1.js";import"./Table-D7RKx9UH.js";import"./index-Cbx6a8hz.js";import"./Dialog-CmTFGtwU.js";import"./cross-CPx39Rqk.js";import"./svgIconContainer-MmaHaGlI.js";import"./useBaseUiId-DhsKY9ve.js";import"./InternalBackdrop-QCSxKShv.js";import"./composite-DWbLdHMu.js";import"./index-DIlMfn_R.js";import"./index-BjtPHMiR.js";import"./index-B1lp1N2Z.js";import"./useEventCallback-CpM6E-JP.js";import"./SkeletonBar-mZUFcLb-.js";import"./LoadingCell-oXQ47sGg.js";import"./ColumnConfigDialog-BjA5WfGE.js";import"./DraggableList-DxLeHlTQ.js";import"./search-BWwFBwJa.js";import"./Input-C6CMN-6w.js";import"./useControlled-RhoVVMbd.js";import"./Button-D5gsrDav.js";import"./small-cross-BsVnexPM.js";import"./ActionButton-BsycIRPd.js";import"./Checkbox-C4-C-7mU.js";import"./useValueChanged-Dt05zWq3.js";import"./CollapsiblePanel-CH5HVZ_W.js";import"./MultiColumnSortDialog-BHkGXMnA.js";import"./MenuTrigger-CS6NiigY.js";import"./CompositeItem-CDPEnVwM.js";import"./ToolbarRootContext-CLeDTtLu.js";import"./getDisabledMountTransitionStyles-QJ6Sy96Q.js";import"./getPseudoElementBounds-DtIXpuuI.js";import"./chevron-down-DqIBtDWK.js";import"./index-LyhSYXkQ.js";import"./error-BB9ysK2b.js";import"./BaseCbacBanner-sgH90S1X.js";import"./makeExternalStore-DZjltypg.js";import"./Tooltip-DAvT5ZSN.js";import"./PopoverPopup-USAcLK7W.js";import"./debounce-CIDwCQJK.js";import"./useOsdkClient-C2mkXTFj.js";import"./tick-Dimo0cUA.js";import"./DropdownField-vrHc5lZl.js";import"./isEqual-GbIpCj4g.js";import"./withOsdkMetrics-B9g6zipx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
