import{j as i}from"./iframe-BAjgPtEd.js";import{O as p}from"./object-table-BGE3lmLd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B9_aA8Tu.js";import"./preload-helper-CvSpShLn.js";import"./Table-uO2bG5NP.js";import"./index-DkQET497.js";import"./Dialog-CzVvxDJ1.js";import"./cross-Zmf20Klh.js";import"./svgIconContainer-RrdsKFgG.js";import"./useBaseUiId-QgJXrsod.js";import"./InternalBackdrop-DVevY0e1.js";import"./composite-17xRguTl.js";import"./index-2jadBPxc.js";import"./index-DNkRyEMq.js";import"./index-CpXxZpck.js";import"./useEventCallback-TLq2luMM.js";import"./SkeletonBar-Cjk3uSES.js";import"./LoadingCell-D1aWb7Nd.js";import"./ColumnConfigDialog-Bjak5h1P.js";import"./DraggableList-DVFdr1ln.js";import"./search-moMGOLYA.js";import"./Input-BkIr6Cv-.js";import"./useControlled-DSQPO38y.js";import"./Button-7st_Ze6e.js";import"./small-cross-jzbeAole.js";import"./ActionButton-lEBAIWe4.js";import"./Checkbox-DwmUbSNt.js";import"./useValueChanged-iTC_WZuQ.js";import"./CollapsiblePanel-CrYZSgVe.js";import"./MultiColumnSortDialog-BujVVTIE.js";import"./MenuTrigger-Di0nR9__.js";import"./CompositeItem-9sostI2N.js";import"./ToolbarRootContext-DYBHmzGt.js";import"./getDisabledMountTransitionStyles-BxkbLjPv.js";import"./getPseudoElementBounds-knK5p6iP.js";import"./chevron-down-C_c1RpTk.js";import"./index-BC-EQLUC.js";import"./error-BPyKBfp3.js";import"./BaseCbacBanner-5kzGYKN7.js";import"./makeExternalStore-ucFYf-xR.js";import"./Tooltip-D6v0Q2e4.js";import"./isObject-BIkKAW4r.js";import"./debounce-DYx6ReB0.js";import"./useOsdkClient-BCGm5mz_.js";import"./tick-BykmFIBb.js";import"./DropdownField-Dd_PGUOx.js";import"./isEqual-DvSExQkd.js";import"./_baseIsEqual-CBo-f9pi.js";import"./withOsdkMetrics-CitYO8jf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
