import{j as i}from"./iframe-BvtrFrDq.js";import{O as p}from"./object-table-WI4x_sPI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BII1_bzs.js";import"./preload-helper-hiWkjTbI.js";import"./Table-ji2Mcr5u.js";import"./index-BJkhm3Ia.js";import"./Dialog-DBAH8-Tq.js";import"./cross-Dm_M5ayo.js";import"./svgIconContainer-CxzpI-nz.js";import"./useBaseUiId-D1zJXq-x.js";import"./InternalBackdrop-Bhnkys6D.js";import"./composite-D9wCA3L7.js";import"./index-B2QxPovI.js";import"./index-BmdzJuTV.js";import"./index-jQnhxv3F.js";import"./useEventCallback-heFPgHFU.js";import"./SkeletonBar-5j0-fDGa.js";import"./LoadingCell-CTU55bjC.js";import"./ColumnConfigDialog-t2KtF3py.js";import"./DraggableList-CLCYhfcj.js";import"./search-y87IcSNA.js";import"./Input-D3h_1eKW.js";import"./useControlled-C5pmq0AY.js";import"./Button-BJy_LHxZ.js";import"./small-cross-B9NMxasu.js";import"./ActionButton-Ye6rlMnt.js";import"./Checkbox-DeGVUvpG.js";import"./useValueChanged-CrlzAUPK.js";import"./CollapsiblePanel-CvNLT_W0.js";import"./MultiColumnSortDialog-BJOCPejF.js";import"./MenuTrigger-B7fnUekI.js";import"./CompositeItem-Rfg3qzju.js";import"./ToolbarRootContext-BrQK-hek.js";import"./getDisabledMountTransitionStyles-Bafsb8MV.js";import"./getPseudoElementBounds-B7QZiwEe.js";import"./chevron-down-BxwFps0j.js";import"./index-B5-tsrVL.js";import"./error-BbBH-DMp.js";import"./BaseCbacBanner-CHzQUt6Z.js";import"./makeExternalStore-CT6g87Zk.js";import"./Tooltip-B-M7Glcs.js";import"./PopoverPopup-B2L2ZFoJ.js";import"./debounce-D48NSO_6.js";import"./useOsdkClient-BU66DrOT.js";import"./tick-D1kmaKOg.js";import"./DropdownField-D-hNk4Y1.js";import"./isEqual-aLexuwQw.js";import"./withOsdkMetrics-Cf9QOWiU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
