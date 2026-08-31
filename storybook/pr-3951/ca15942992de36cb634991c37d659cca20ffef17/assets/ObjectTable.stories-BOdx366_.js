import{j as i}from"./iframe-CZmLz8ZP.js";import{O as p}from"./object-table-tURiphu4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BgD-MlMq.js";import"./preload-helper-DvTMhaTO.js";import"./Table-D5vCd__W.js";import"./index-CAhEgdCZ.js";import"./Dialog-DTRTvxsf.js";import"./cross-BwuwEvtS.js";import"./svgIconContainer-Dqq8-oQ4.js";import"./useBaseUiId-BCYLkR1F.js";import"./InternalBackdrop-CvNifAli.js";import"./composite-BqzE7WbV.js";import"./index-8Ow4xnki.js";import"./index-BTcDhi6R.js";import"./index-CR3UHMh2.js";import"./useEventCallback-hUMvgE-6.js";import"./SkeletonBar-BqJ3WV_V.js";import"./LoadingCell-Bt-HBQJH.js";import"./ColumnConfigDialog-DFQqa886.js";import"./DraggableList-qwBLBySq.js";import"./search-DI3kZ9bs.js";import"./Input-IY6ZJX7E.js";import"./useControlled-BH9r8IuZ.js";import"./Button-D3buvkEb.js";import"./small-cross-D4_v44P4.js";import"./ActionButton-85kQsPr_.js";import"./Checkbox-UF-o2fFY.js";import"./useValueChanged-Cdhwq_au.js";import"./CollapsiblePanel-UuQCKDA5.js";import"./MultiColumnSortDialog-CZkfkUYs.js";import"./MenuTrigger-CUPM2MO5.js";import"./CompositeItem-C7RhivEH.js";import"./ToolbarRootContext-C9PFHMIF.js";import"./getDisabledMountTransitionStyles-CxXxx8m-.js";import"./getPseudoElementBounds-CGaPX9Rs.js";import"./chevron-down-D49DBeyU.js";import"./index-0tShKdJa.js";import"./error-SF1rOjxj.js";import"./BaseCbacBanner-CHu5VYNo.js";import"./makeExternalStore-C3ECuZEf.js";import"./Tooltip-o2rFlVA_.js";import"./PopoverPopup-Bl4kSVcT.js";import"./debounce-CCB4c__K.js";import"./useOsdkClient-TwNF5t3v.js";import"./tick-DrhRfY11.js";import"./DropdownField-i3QfSn95.js";import"./isEqual-DhsO4tE3.js";import"./withOsdkMetrics-rK3p9Fti.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
