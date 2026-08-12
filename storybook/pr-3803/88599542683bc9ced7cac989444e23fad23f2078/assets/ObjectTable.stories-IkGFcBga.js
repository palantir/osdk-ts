import{j as i}from"./iframe-DNE97pGZ.js";import{O as p}from"./object-table-Ch4_sTh9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Y520gR_B.js";import"./preload-helper-BahKFp3m.js";import"./Table-BD9ncpKN.js";import"./index-Bp-5OsF-.js";import"./Dialog-Cm_ILZ3B.js";import"./cross-Dx5ZxZuM.js";import"./svgIconContainer-CRfNt06m.js";import"./useBaseUiId-Cp65BJC6.js";import"./InternalBackdrop-BxL756Oz.js";import"./composite-CzLwjv4f.js";import"./index-Dp0A1Fy8.js";import"./index-D5b6Elzx.js";import"./index-BAUv7mXt.js";import"./useEventCallback-BaQLMphi.js";import"./SkeletonBar-Co-Wxcoj.js";import"./LoadingCell-BBXYQi2G.js";import"./ColumnConfigDialog-BJA0l5H2.js";import"./DraggableList-CwyZFsMX.js";import"./search-BNuo8zTf.js";import"./Input-BzjIqYHe.js";import"./useControlled-B0ujXEQq.js";import"./isEqual-D4o4vl7l.js";import"./isObject-DMCyQLYZ.js";import"./Button-DHAmSgJm.js";import"./ActionButton-C282nnu4.js";import"./Checkbox-DhzT-hSX.js";import"./useValueChanged-CY7hmMGH.js";import"./CollapsiblePanel-BcSoQpGZ.js";import"./MultiColumnSortDialog-Cy2FrPls.js";import"./MenuTrigger-CW7TDS3C.js";import"./CompositeItem-Bs6wEv0j.js";import"./ToolbarRootContext-DBqoJQeM.js";import"./getDisabledMountTransitionStyles-DrWPn2zD.js";import"./getPseudoElementBounds-BeRBlX2G.js";import"./chevron-down-DzX2K_Xp.js";import"./index-BrQsf66R.js";import"./error-Cc9LB0hd.js";import"./BaseCbacBanner-aK3rWsBf.js";import"./makeExternalStore-BUUHdmfH.js";import"./Tooltip-1mDazhLH.js";import"./PopoverPopup-XyeYTvL6.js";import"./toNumber-CL_SRDQ3.js";import"./useOsdkClient-BrXtYIpC.js";import"./tick-DKvNgte2.js";import"./DropdownField-BkAFc6vL.js";import"./withOsdkMetrics-B6lPkcGy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
