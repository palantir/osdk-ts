import{j as i}from"./iframe-Dqi9AKQ4.js";import{O as p}from"./object-table-CNNKh8-j.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CIZOlpVi.js";import"./preload-helper-Bt4Y1gaG.js";import"./Table-CHeMyKlI.js";import"./index-DUzHQ-g1.js";import"./Dialog-CVEvTvZF.js";import"./cross-CViy1YB1.js";import"./svgIconContainer-DBFNWjmD.js";import"./useBaseUiId-D9DZyJv1.js";import"./InternalBackdrop-9H6yZA48.js";import"./composite-BrE87LEg.js";import"./index-BTd5eHZp.js";import"./index-B4xagMAY.js";import"./index-jzpzYf-A.js";import"./useEventCallback-CSNxuTtP.js";import"./SkeletonBar-BPH_PiMF.js";import"./LoadingCell-Dq5OHt88.js";import"./ColumnConfigDialog-WqlkhbFV.js";import"./DraggableList-Cf08_d1z.js";import"./search-DGlyxpi9.js";import"./Input-Bbb9NzYy.js";import"./useControlled-Bofva4ix.js";import"./Button-qQ4ULf31.js";import"./small-cross-INTfkl0O.js";import"./ActionButton-BQpCJoEa.js";import"./Checkbox-wgB5kSQc.js";import"./useValueChanged-Cj0uRmyX.js";import"./CollapsiblePanel-B5Y_UxJj.js";import"./MultiColumnSortDialog-BBVd7IxF.js";import"./MenuTrigger-BSzyIYxi.js";import"./CompositeItem-D9oAX4d7.js";import"./ToolbarRootContext-D53iOUwp.js";import"./getDisabledMountTransitionStyles-CMb5T3sE.js";import"./getPseudoElementBounds-B6ybVaQm.js";import"./chevron-down-B-x5XAQs.js";import"./index-CJftUKPV.js";import"./error-Bfb1Ifz6.js";import"./BaseCbacBanner-DBu6XfxN.js";import"./makeExternalStore-Ckysxwb8.js";import"./Tooltip-B6UHjEmR.js";import"./PopoverPopup-BpgdYdCn.js";import"./debounce-dbUkf27z.js";import"./useOsdkClient-DJCPaoyl.js";import"./tick-C57Pc5oH.js";import"./DropdownField-DVa_ve9-.js";import"./isEqual-C5ITjuih.js";import"./withOsdkMetrics-B-BQZlvM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
