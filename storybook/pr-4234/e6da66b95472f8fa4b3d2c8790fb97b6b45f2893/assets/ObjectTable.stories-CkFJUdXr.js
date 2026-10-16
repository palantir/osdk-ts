import{j as i}from"./iframe-BoRHmw1P.js";import{O as p}from"./object-table-DRTkPZ2B.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-mzh7zcnN.js";import"./preload-helper-BwC4djfE.js";import"./Table-CV6WvzaU.js";import"./index-CKE1HitJ.js";import"./Dialog-S7w-4bYU.js";import"./cross-CXHDS3ru.js";import"./svgIconContainer-BiIenURc.js";import"./useBaseUiId-CclY9vCT.js";import"./InternalBackdrop-C0dWxoMX.js";import"./composite-NGGk8Cjx.js";import"./index-DtzOCkwB.js";import"./index-CrIjACAu.js";import"./index-DJcZ5Upx.js";import"./useEventCallback-s1Vmoh60.js";import"./SkeletonBar-BF5QQ5Lz.js";import"./LoadingCell-DSLWPUZ7.js";import"./ColumnConfigDialog-CPmcrKEX.js";import"./DraggableList-DlA04W8l.js";import"./search-DY5E4Hwb.js";import"./Input-C1OYcJfy.js";import"./useControlled-DCVjIVG_.js";import"./Button-D_pTSnh0.js";import"./small-cross-tSFsGM1S.js";import"./ActionButton-Uz6_D_U2.js";import"./Checkbox-CPnCeEYm.js";import"./useValueChanged-DZj1boR2.js";import"./CollapsiblePanel-CuhbJXth.js";import"./MultiColumnSortDialog-ztN2Cs7y.js";import"./MenuTrigger-Cb1Y06t2.js";import"./CompositeItem-BuKhldON.js";import"./ToolbarRootContext-CcVDjx55.js";import"./getDisabledMountTransitionStyles-CL6SxWwa.js";import"./getPseudoElementBounds-BowpVekl.js";import"./chevron-down-DOBMuKk4.js";import"./index-DupFExnL.js";import"./error-sO_QuGwO.js";import"./BaseCbacBanner-BrqYtPd-.js";import"./makeExternalStore-DDuoJFnu.js";import"./Tooltip-0AEySry7.js";import"./PopoverPopup-DYqs8h8g.js";import"./debounce-fg_UNTnM.js";import"./useOsdkClient-CMKxLvF9.js";import"./tick-DIjubJnt.js";import"./DropdownField-D0TX0D9X.js";import"./isEqual-CHt0Jf51.js";import"./withOsdkMetrics-D9OdN7A-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
