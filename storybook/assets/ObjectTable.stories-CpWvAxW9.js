import{j as i}from"./iframe-HPk8PS_c.js";import{O as p}from"./object-table-DyFkhb8j.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CF70CXUv.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-su4Hi2o2.js";import"./index-ycotQEUY.js";import"./Dialog-DF3gmhsv.js";import"./cross-qvgLowaP.js";import"./svgIconContainer-BMj1NZEz.js";import"./useBaseUiId-DyhY13O7.js";import"./InternalBackdrop-DLnVAThU.js";import"./composite-CDSdRi3O.js";import"./index-Bnjs_noj.js";import"./index-0ACB6LG3.js";import"./index-CVMhrb3v.js";import"./useEventCallback-VhI6mw5e.js";import"./SkeletonBar-Ce3NAC-V.js";import"./LoadingCell-CumeMH-r.js";import"./ColumnConfigDialog-ko1-r91r.js";import"./DraggableList-D2pNdOgJ.js";import"./search-x6xgpOK0.js";import"./Input-Bh9c4kB6.js";import"./useControlled-Km1VPfUr.js";import"./Button-rjBOsBth.js";import"./small-cross-D6KgMXaf.js";import"./ActionButton-Ci9x-kBG.js";import"./Checkbox-Br4gvYc9.js";import"./useValueChanged-D0B2x_ZH.js";import"./CollapsiblePanel-DAjrCgEC.js";import"./MultiColumnSortDialog-BOH4eueD.js";import"./MenuTrigger-wiRu2lqv.js";import"./CompositeItem-GZD7DweO.js";import"./ToolbarRootContext-Bc6ZO6TN.js";import"./getDisabledMountTransitionStyles-Br696C9U.js";import"./getPseudoElementBounds-BLRKQPoP.js";import"./chevron-down-bsQWt5c5.js";import"./index-CJv58edI.js";import"./error-B-DQrxK7.js";import"./BaseCbacBanner-CjDeC_hp.js";import"./makeExternalStore-BZC1NDUy.js";import"./Tooltip-C-1zfwo-.js";import"./PopoverPopup-b-zBBO9f.js";import"./debounce-MLDsEJum.js";import"./useOsdkClient-Df4IDmh8.js";import"./tick-DRH0bCvc.js";import"./DropdownField-CMFJy-W9.js";import"./isEqual-DgpaePJY.js";import"./withOsdkMetrics-DPrVQQ1f.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
