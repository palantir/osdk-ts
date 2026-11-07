import{j as i}from"./iframe-DHBngpjq.js";import{O as p}from"./object-table-B-4Z36fW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CJVY0eTz.js";import"./preload-helper-CDXIiz1j.js";import"./Table-CAt6E8NK.js";import"./index-By-FRoq9.js";import"./Dialog-DTy86Hr1.js";import"./cross-DvvrZ3YV.js";import"./svgIconContainer-BAywG5PI.js";import"./useBaseUiId-CzQMC21v.js";import"./InternalBackdrop-B-hQyGJ7.js";import"./composite-uu2-UFVd.js";import"./index-CTfQVRtO.js";import"./index-DVFITc1l.js";import"./index-DyyHxHFI.js";import"./useEventCallback-CEjVJsJU.js";import"./SkeletonBar-Bx3kLW2f.js";import"./LoadingCell-F_Yvkiqb.js";import"./ColumnConfigDialog-BbX1YfOb.js";import"./DraggableList-CmuSJnA2.js";import"./search-CiPmNh0i.js";import"./Input-Br87LXH7.js";import"./useControlled-BLsTwB3H.js";import"./Button-HCu8xw6G.js";import"./small-cross-D3Sp72qo.js";import"./ActionButton-DvzRdD4b.js";import"./Checkbox-CtcVdKF4.js";import"./useValueChanged-DcmPguL4.js";import"./CollapsiblePanel-BFOnfV46.js";import"./MultiColumnSortDialog-DscDt943.js";import"./MenuTrigger-DFB9LyKR.js";import"./CompositeItem-CbJoHss2.js";import"./ToolbarRootContext-B_eHvjGz.js";import"./getDisabledMountTransitionStyles-BaYxFf8Q.js";import"./getPseudoElementBounds-Cbeakq3j.js";import"./chevron-down-D5Z6pf30.js";import"./index-BTrtZCFe.js";import"./error-CH1gecQ4.js";import"./BaseCbacBanner-Dx1BBmkJ.js";import"./makeExternalStore-CSHIV8LM.js";import"./Tooltip-Cb5l8A2K.js";import"./isObject-BGFfVhib.js";import"./debounce-1_s8xuqw.js";import"./useOsdkClient-BEYvK_M3.js";import"./tick-pBtnCrq_.js";import"./DropdownField-DyD41Pi-.js";import"./isEqual-COgumFBZ.js";import"./_baseIsEqual-t-rM1bL4.js";import"./withOsdkMetrics-DVTP8TQr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
