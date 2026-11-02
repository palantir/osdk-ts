import{j as i}from"./iframe-CiI5PS6K.js";import{O as p}from"./object-table-t7PnOjZV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers--q4sG6oF.js";import"./preload-helper-BScoV-ON.js";import"./Table-Bwu2eGJ5.js";import"./index-DTPqzTra.js";import"./Dialog-DnLyeJh7.js";import"./cross-DgjL-w3z.js";import"./svgIconContainer-tdqH8iqE.js";import"./useBaseUiId-DReynxDq.js";import"./InternalBackdrop-Coh6cB6j.js";import"./composite-BrOoGgaN.js";import"./index-CjZ-iEVj.js";import"./index-XzG81WZo.js";import"./index-CPJzMmpG.js";import"./useEventCallback-CyRG3rkJ.js";import"./SkeletonBar-BNIt8FzO.js";import"./LoadingCell-C75a2rZj.js";import"./ColumnConfigDialog-BuLkkFmQ.js";import"./DraggableList-DkKy9uqw.js";import"./search-BRtPHFLM.js";import"./Input-gM0suFmQ.js";import"./useControlled-C0rSVFZc.js";import"./Button-BP56zFTn.js";import"./small-cross-BvlJE0g7.js";import"./ActionButton-DmbyeOrm.js";import"./Checkbox-CURrvPm-.js";import"./useValueChanged-Dfh6smN1.js";import"./CollapsiblePanel-CL4hIKDt.js";import"./MultiColumnSortDialog-CM8G5v3Q.js";import"./MenuTrigger-Cgk5IHXF.js";import"./CompositeItem-D4PTMtSQ.js";import"./ToolbarRootContext-CTDjgR90.js";import"./getDisabledMountTransitionStyles-CRmjgyTc.js";import"./getPseudoElementBounds-CAN5gz0w.js";import"./chevron-down-F9mPI0PG.js";import"./index-DzwnFRrI.js";import"./error-Dp2Yeg1s.js";import"./BaseCbacBanner-CwxrNrzn.js";import"./makeExternalStore-BiFRWY5t.js";import"./Tooltip-RikTdx9n.js";import"./PopoverPopup-CME_dwGk.js";import"./debounce-DI-y3SNs.js";import"./useOsdkClient-DO_qV40A.js";import"./tick-NDqyjiXA.js";import"./DropdownField-D6IgbNva.js";import"./isEqual-Cza9X2E6.js";import"./withOsdkMetrics-BRB4GNZb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
