import{j as i}from"./iframe-Dku1rot2.js";import{O as p}from"./object-table-Cr26mFUl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-0KLyRkUL.js";import"./preload-helper-B1jRvLNW.js";import"./Table-mlPYkczm.js";import"./index-CpbATsh6.js";import"./Dialog-CjxY1CgH.js";import"./cross-CYdU8q6K.js";import"./svgIconContainer--MRhEEk0.js";import"./useBaseUiId-BUKWDElb.js";import"./InternalBackdrop-Bv67AAf2.js";import"./composite-BePe6hVW.js";import"./index-rdZNlnOZ.js";import"./index--u9NxfUY.js";import"./index-CQ7Gwlen.js";import"./useEventCallback-DbRXf3-_.js";import"./SkeletonBar-PabXS6Px.js";import"./LoadingCell-5uF9WrXs.js";import"./ColumnConfigDialog-DFBdNJ63.js";import"./DraggableList-m6ykK22n.js";import"./search-UFTU3MKj.js";import"./Input-DJRIt2l4.js";import"./useControlled-DwMnSwB6.js";import"./Button-CGaTAwDT.js";import"./small-cross-QiwT5l_B.js";import"./ActionButton-D1LuQOA7.js";import"./Checkbox-BoLQIXFm.js";import"./useValueChanged-B2781QBM.js";import"./CollapsiblePanel-piFpbce9.js";import"./MultiColumnSortDialog-Cajh4z2b.js";import"./MenuTrigger-CNEa8F6o.js";import"./CompositeItem-BreNqiOh.js";import"./ToolbarRootContext-CXEqftjp.js";import"./getDisabledMountTransitionStyles-CDJ1MLHW.js";import"./getPseudoElementBounds-BpVmGFE2.js";import"./chevron-down-B4TAPheD.js";import"./index-DTheSZ4d.js";import"./error-setnCXRk.js";import"./BaseCbacBanner-BoCpQNO7.js";import"./makeExternalStore-rRh8-oZl.js";import"./Tooltip-Dwc5k9lz.js";import"./PopoverPopup-D-Gbzl8J.js";import"./debounce-CA9_8DL0.js";import"./useOsdkClient-DYuiBPOo.js";import"./tick-CVroU8tN.js";import"./DropdownField-Dhuq6WVc.js";import"./isEqual-chWnWDxq.js";import"./withOsdkMetrics-n7CfGLfD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
