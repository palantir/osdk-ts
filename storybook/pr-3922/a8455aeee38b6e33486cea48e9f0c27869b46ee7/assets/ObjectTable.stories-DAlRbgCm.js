import{j as i}from"./iframe-CSel4t1W.js";import{O as p}from"./object-table-BpmVsFZU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B0is5FgP.js";import"./preload-helper-DeRLNq8K.js";import"./Table-CKnMo4X1.js";import"./index-VOBk3ad_.js";import"./Dialog-ClnNjxqL.js";import"./cross-DPetmLAe.js";import"./svgIconContainer-i8GFflPC.js";import"./useBaseUiId-D0496slr.js";import"./InternalBackdrop-BYisvq6i.js";import"./composite-Byzj7O17.js";import"./index-DeXJQAWa.js";import"./index--NqLpmCo.js";import"./index-BV5Cdoe7.js";import"./useEventCallback-DqKcK-vR.js";import"./SkeletonBar-BfqGkaOo.js";import"./LoadingCell--tt_u-sG.js";import"./ColumnConfigDialog-ChsJWmLY.js";import"./DraggableList-DZKIG4MP.js";import"./search-BwGGgMMr.js";import"./Input-DGTrvJuV.js";import"./useControlled-7Z_CrWcG.js";import"./Button-B0bJWnZB.js";import"./small-cross-CV_RxsQI.js";import"./ActionButton-DjrfVe6W.js";import"./Checkbox-Df_kkF2C.js";import"./useValueChanged-wwbLd3Ma.js";import"./CollapsiblePanel-BVTCVGUH.js";import"./MultiColumnSortDialog-HNxeuU0j.js";import"./MenuTrigger-CoXfZTuu.js";import"./CompositeItem-DNegNKGA.js";import"./ToolbarRootContext-CEF5Xnn_.js";import"./getDisabledMountTransitionStyles-BsKiYSYB.js";import"./getPseudoElementBounds-DPjB8idw.js";import"./chevron-down-cgZkYG2x.js";import"./index-BoKtPRc2.js";import"./error-zHB_ZVMZ.js";import"./BaseCbacBanner-C9jY6EAK.js";import"./makeExternalStore-DsAD24Tw.js";import"./Tooltip-D7w10onw.js";import"./PopoverPopup-BrgHtowj.js";import"./debounce-BABMYm_Y.js";import"./useOsdkClient-Dj6M6d9F.js";import"./tick-ChdjX_bW.js";import"./DropdownField-CxMOL9ui.js";import"./isEqual-DbA57Rmi.js";import"./withOsdkMetrics-BkUfyHr_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
