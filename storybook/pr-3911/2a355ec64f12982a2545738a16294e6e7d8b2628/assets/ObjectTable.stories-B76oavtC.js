import{j as i}from"./iframe-DmXP0LlD.js";import{O as p}from"./object-table-BjMOKbCg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DLllD4n5.js";import"./preload-helper-Jf9pG1wK.js";import"./Table-Y9GfFRHB.js";import"./index-CZJiQUDL.js";import"./Dialog-CVsym47h.js";import"./cross-BrUjdQ5Z.js";import"./svgIconContainer-B-RvFu1q.js";import"./useBaseUiId-E5ZPLTjy.js";import"./InternalBackdrop-ChZQi1ES.js";import"./composite-DJUOEQiI.js";import"./index-DOc2Q07X.js";import"./index-CLUklD_q.js";import"./index-DJxwbR4M.js";import"./useEventCallback-Bja2Ayv3.js";import"./SkeletonBar-BFpqVqU_.js";import"./LoadingCell-CBmyY9EE.js";import"./ColumnConfigDialog-DEw4qskw.js";import"./DraggableList-Crfi2BHG.js";import"./search-Cd_hr6P9.js";import"./Input-nRL7PDkG.js";import"./useControlled-DVwcpHQh.js";import"./Button-CsgASgcA.js";import"./small-cross-BwaFhREm.js";import"./ActionButton-Dv0Ng1hy.js";import"./Checkbox-CPNQrtye.js";import"./useValueChanged-CmWjf2b_.js";import"./CollapsiblePanel-DyjWRvYh.js";import"./MultiColumnSortDialog-IJrMRGR8.js";import"./MenuTrigger-BU378CbM.js";import"./CompositeItem-BpyDnYwk.js";import"./ToolbarRootContext-CexR2eUf.js";import"./getDisabledMountTransitionStyles-C5aF-19e.js";import"./getPseudoElementBounds-BJekTzuW.js";import"./chevron-down-IhoHRVVT.js";import"./index-kI9ab8J3.js";import"./error-BhRfzKmP.js";import"./BaseCbacBanner-B31x1InM.js";import"./makeExternalStore-SUGo_pfp.js";import"./Tooltip-gfc1TfD5.js";import"./PopoverPopup-8idE2mCI.js";import"./debounce-Dr04tHtc.js";import"./useOsdkClient-u9eb-Osv.js";import"./tick-BsfBlrl4.js";import"./DropdownField-D4q_CFxC.js";import"./isEqual-GVkQHx_o.js";import"./withOsdkMetrics-ChE2bbpo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
